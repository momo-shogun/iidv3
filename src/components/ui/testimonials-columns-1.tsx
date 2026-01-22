"use client";
import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 max-w-[280px] sm:max-w-xs w-full hover:shadow-xl hover:border-slate-300 transition-all" key={`${index}-${i}`}>
                  <div className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-5">{text}</div>
                  <div className="flex items-center gap-2 md:gap-3 mt-4 md:mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex flex-col min-w-0">
                      <div className="font-semibold tracking-tight leading-5 text-slate-900 text-xs sm:text-sm truncate">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight text-[10px] sm:text-xs text-slate-600 truncate">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
