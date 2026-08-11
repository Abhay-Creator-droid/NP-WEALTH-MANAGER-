# NP Wealth Managers — Production Deployment Guide

This document explains how to prepare and deploy the CMS/backend for production using **Supabase (PostgreSQL + Storage)**, **Railway (API/backend)**, **Vercel (frontend)**, and **Cloudflare (DNS/CDN)**.

Do **not** deploy until all steps below are verified locally.

---

## 1. Local development

### Prerequisites

- Node.js 20+
- PostgreSQL (local Docker) **or** Supabase project for development

### Setup

```bash
npm install
cp .env.example .env
```

### Local PostgreSQL (Docker example)

```bash
docker run --name np-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=np_wealth -p 5432:5432 -d postgres:16
```

`.env` for local Postgres:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/np_wealth"
DIRECT_URL="postgresql://postgres:postgres@localhost:5432/np_wealth"
JWT_SECRET="local-dev-secret-change-me"
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="change-me"
FRONTEND_URL="http://localhost:3000"
STORAGE_PROVIDER="local"
NODE_ENV="development"
```

### Apply migrations locally

```bash
npx prisma validate
npx prisma migrate dev
npx prisma generate
npm run dev
```

### Initialize admin + default content (development only)

```bash
curl -X POST http://localhost:3000/api/admin/seed
```

In **production**, seeding requires:

```bash
curl -X POST https://your-api-domain/api/admin/seed \
  -H "Authorization: Bearer YOUR_SEED_INIT_SECRET"
```

---

## 2. Supabase setup

### 2.1 Create project

1. Create a new Supabase project.
2. Note the **Project URL** and **service role key** (Settings → API).
3. Never expose `SUPABASE_SERVICE_ROLE_KEY` to the browser or `NEXT_PUBLIC_*` variables.

### 2.2 Database connection strings

From Supabase → Settings → Database:

| Variable | Source |
|----------|--------|
| `DATABASE_URL` | Connection pooling URI (Transaction mode, port 6543) — for Railway/runtime |
| `DIRECT_URL` | Direct connection URI (port 5432) — for Prisma migrations |

Example:

```env
DATABASE_URL="postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:5432/postgres"
```

### 2.3 Run migrations (production database)

**Do not use `prisma db push` on production.**

From your machine or CI with `DIRECT_URL` set:

```bash
npx prisma migrate deploy
npx prisma generate
```

The initial migration is: `prisma/migrations/20250811120000_init_postgres/`

### 2.4 Supabase Storage buckets

Create two buckets in Supabase Storage:

#### `website-media` (public CMS assets)

- **Public bucket**: Yes
- **Purpose**: logos, hero images, blog covers, team photos, property images
- **Allowed MIME types**: `image/jpeg`, `image/png`, `image/webp`, `image/gif`, `image/svg+xml`

Upload/delete is handled server-side via `SUPABASE_SERVICE_ROLE_KEY` — not exposed to browsers.

#### `customer-documents` (private)

- **Public bucket**: No
- **Purpose**: sensitive customer documents (if ever uploaded)
- **Access**: signed URLs only, generated server-side

Upload category `customer-documents` routes to this bucket automatically.

---

## 3. Storage behavior

| Environment | Provider | Configuration |
|-------------|----------|---------------|
| Local dev | `local` | Files saved to `public/uploads/` |
| Production | `supabase` | Auto when `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` are set |

Override explicitly:

```env
STORAGE_PROVIDER=local
# or
STORAGE_PROVIDER=supabase
```

Media records store `storageProvider` and `storagePath` for reliable delete operations.

---

## 4. Railway (API / backend)

### Required environment variables

```env
NODE_ENV=production
DATABASE_URL=
DIRECT_URL=
JWT_SECRET=
ADMIN_EMAIL=
ADMIN_PASSWORD=
SEED_INIT_SECRET=
FRONTEND_URL=
NEXT_PUBLIC_API_URL=
STORAGE_PROVIDER=supabase
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

### Deploy steps

1. Connect GitHub repo to Railway.
2. Set all environment variables above.
3. Build command: `npm run build`
4. Start command: `npm start`
5. Run migrations once:

   ```bash
   npx prisma migrate deploy
   ```

6. Initialize admin (one time):

   ```bash
   curl -X POST https://api.npwealthmanagers.com/api/admin/seed \
     -H "Authorization: Bearer $SEED_INIT_SECRET"
   ```

---

## 5. Vercel (frontend)

If the full Next.js app is deployed on Vercel, set the same server secrets plus:

```env
FRONTEND_URL=https://www.npwealthmanagers.com
NEXT_PUBLIC_API_URL=https://www.npwealthmanagers.com
```

If API is on Railway and frontend on Vercel:

```env
NEXT_PUBLIC_API_URL=https://api.npwealthmanagers.com
FRONTEND_URL=https://www.npwealthmanagers.com
```

CORS is configured via `FRONTEND_URL` in middleware — no domain is hardcoded.

---

## 6. Cloudflare / domain setup

1. Point `www.npwealthmanagers.com` → Vercel (frontend).
2. Point `api.npwealthmanagers.com` → Railway (backend), if split.
3. Enable SSL/TLS (Full Strict).
4. Do not cache `/api/*` or `/admin/*`.

---

## 7. Security checklist

- [ ] `JWT_SECRET`, `ADMIN_PASSWORD`, `DATABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `SEED_INIT_SECRET` are never in `NEXT_PUBLIC_*`
- [ ] `POST /api/admin/seed` returns 403 in production without `Authorization: Bearer SEED_INIT_SECRET`
- [ ] Admin routes require authentication
- [ ] Customer documents use private bucket + signed URLs only
- [ ] `.env` is in `.gitignore`

---

## 8. Production testing

```bash
curl https://api.npwealthmanagers.com/api/content/settings
curl -X POST https://api.npwealthmanagers.com/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"..."}'
```

Verify: admin login, media upload to Supabase, lead submission, content CRUD.

---

## 9. Useful commands

```bash
npx prisma validate
npx prisma migrate dev
npx prisma migrate deploy
npx prisma generate
npm run build
npm run lint
```

---

## 10. Migration notes

- SQLite `dev.db` is not used in production. Re-seed or migrate data manually if needed.
- PostgreSQL media search uses case-insensitive `contains` queries.
- All models use standard PostgreSQL-compatible Prisma types.
