"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

export const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ----------------------------------------------------
// 1. FadeIn Container
// ----------------------------------------------------
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = "up",
  distance = 30,
  duration = 0.8,
  className = "",
}) => {
  const getInitialTransform = () => {
    switch (direction) {
      case "up": return { y: distance, x: 0 };
      case "down": return { y: -distance, x: 0 };
      case "left": return { x: distance, y: 0 };
      case "right": return { x: -distance, y: 0 };
      default: return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialTransform() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: EASING,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ----------------------------------------------------
// 2. StaggerContainer & StaggerItem
// ----------------------------------------------------
interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  className = "",
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: EASING,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

// ----------------------------------------------------
// 3. Cinematic ClipReveal
// ----------------------------------------------------
interface ClipRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "left" | "right" | "top" | "bottom";
}

export const ClipReveal: React.FC<ClipRevealProps> = ({
  children,
  delay = 0,
  duration = 0.9,
  className = "",
  direction = "left",
}) => {
  const getClipInitial = () => {
    switch (direction) {
      case "left": return "inset(0 100% 0 0)";
      case "right": return "inset(0 0 0 100%)";
      case "top": return "inset(100% 0 0 0)";
      case "bottom": return "inset(0 0 100% 0)";
      default: return "inset(0 100% 0 0)";
    }
  };

  return (
    <motion.div
      initial={{ clipPath: getClipInitial(), opacity: 0 }}
      whileInView={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: EASING }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ----------------------------------------------------
// 4. CountUp Number Component (Runs once on view)
// ----------------------------------------------------
interface CountUpProps {
  value: string;
  className?: string;
}

export const CountUpNumber: React.FC<CountUpProps> = ({ value, className = "" }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState<string>("0");

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/^([^0-9]*)([0-9,]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || "";
    const rawNum = parseInt(match[2].replace(/,/g, ""), 10);
    const suffix = match[3] || "";

    let start = 0;
    const duration = 1600; // ms
    const steps = 40;
    const stepTime = duration / steps;
    const increment = rawNum / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= rawNum) {
        start = rawNum;
        clearInterval(timer);
      }
      const formattedNum = Math.floor(start).toLocaleString("en-IN");
      setDisplayValue(`${prefix}${formattedNum}${suffix}`);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};
