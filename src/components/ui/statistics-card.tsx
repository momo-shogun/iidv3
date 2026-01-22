"use client";

import { motion, useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const css = `
.candy-bg {
    background-color: hsl(0 0% 96%, 2%);
    background-image: linear-gradient(
      135deg,
      hsl(0 0% 96%) 25%,
      transparent 25.5%,
      transparent 50%,
      hsl(0 0% 96%) 50.5%,
      hsl(0 0% 96%) 75%,
      transparent 75.5%,
      transparent
    );
    background-size: 10px 10px;
  }`;

interface BarChartProps {
  value: number;
  label: string;
  className?: string;
  showToolTip?: boolean;
  delay?: number;
}

const NumberFlow = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  useMotionValueEvent(springValue, "change", (latest) => {
    setDisplayValue(Math.round(latest));
  });

  return <span>{displayValue}{suffix}</span>;
};

const BarChart = ({
  value,
  label,
  className = "",
  showToolTip = false,
  delay = 0,
}: BarChartProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="group relative h-full w-full max-w-full"
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <style>{css}</style>
      <motion.div 
        className="candy-bg relative h-full w-full overflow-hidden rounded-[30px] md:rounded-[35px] border border-transparent"
        whileHover={{ 
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          borderColor: "rgba(0, 143, 105, 0.2)",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100, height: 0 }}
          animate={{ opacity: 1, y: 0, height: `${value}%` }}
          transition={{ duration: 0.8, type: "spring", damping: 20, delay }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
          }}
          className={cn(
            "absolute bottom-0 mt-auto w-full rounded-[25px] md:rounded-[30px] p-2 md:p-2.5 text-white cursor-pointer",
            className || "bg-gradient-to-br from-[#004198] to-[#008F69]",
          )}
        >
          <motion.div 
            className="relative flex h-10 md:h-11 w-full items-center justify-center gap-1 rounded-full bg-white/20 backdrop-blur-sm tracking-tighter text-xs md:text-sm font-bold"
            whileHover={{ 
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              scale: 1.05,
            }}
            transition={{ duration: 0.2 }}
          >
            <NumberFlow value={value} suffix="%" />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100, height: 0 }}
        animate={{ opacity: 1, y: 0, height: `${value}%` }}
        transition={{ duration: 0.8, type: "spring", damping: 15, delay }}
        className="absolute bottom-0 w-full"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ 
            opacity: (showToolTip || isHovered) ? 1 : 0, 
            scale: (showToolTip || isHovered) ? 1 : 0.8,
            y: (showToolTip || isHovered) ? 0 : 10
          }}
          whileHover={{ 
            scale: 1.05, 
            y: -2,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cn(
            "absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg px-2 py-1 text-white text-[10px] whitespace-nowrap shadow-lg pointer-events-none",
            className || "bg-slate-800",
          )}
        >
            <div
              className={cn(
                "absolute -bottom-1.5 left-1/2 size-2.5 -translate-x-1/2 rounded-full border-2 border-white transition-all duration-300 ease-in-out",
                className || "bg-slate-800",
              )}
            />
            <svg
              className={cn(
                "absolute -bottom-0.5 left-1/2 -translate-x-1/2",
                className?.includes("purple") ? "text-purple-500" :
                className?.includes("008F69") || className?.includes("teal") ? "text-[#008F69]" :
                className?.includes("orange") ? "text-orange-500" :
                className?.includes("blue") ? "text-blue-500" :
                "text-slate-800",
              )}
              width="8"
              height="8"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.83855 8.41381C4.43827 9.45255 5.93756 9.45255 6.53728 8.41381L9.65582 3.01233C10.2555 1.97359 9.50589 0.675159 8.30646 0.675159H2.06937C0.869935 0.675159 0.120287 1.97359 0.720006 3.01233L3.83855 8.41381Z"
                fill="currentColor"
              />
            </svg>
            {label}
          </motion.div>
      </motion.div>
      <motion.p 
        className="mx-auto mt-2 w-fit tracking-tight text-slate-700 text-[10px] md:text-xs font-medium text-center max-w-[70px] leading-tight"
        whileHover={{ 
          color: "rgb(0, 65, 152)",
          scale: 1.05,
          fontWeight: 600,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

export { BarChart };
