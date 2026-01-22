"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
  as?: keyof JSX.IntrinsicElements;
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement>;
  customVariants?: any;
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

export function TimelineContent({
  as = "div",
  animationNum,
  timelineRef,
  customVariants,
  children,
  className,
  ...props
}: TimelineContentProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [50, 0, 0, -50]
  );

  const Component = motion[as as keyof typeof motion] as any;

  if (customVariants) {
    return (
      <Component
        ref={ref}
        custom={animationNum}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={customVariants}
        className={cn(className)}
        {...props}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      ref={ref}
      style={{
        opacity,
        y,
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  );
}
