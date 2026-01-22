import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, ArrowRight, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { CanvasRevealEffect } from "./DotMatrix";
import { StarButton } from "./ui/star-button";

const quickActions = [
  { label: "Business Solution", link: "/services/business-solutions" },
  { label: "Project Report", link: "/project-reports" },
  { label: "Franchise", link: "/franchise" },
  { label: "Govt Schemes", link: "/govt-schemes" },
  { label: "Expert/Supplier Connect", link: "/supplier-connect" },
];

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Dots background using CanvasRevealEffect (Awwwards-style) */}
      <div className="pointer-events-none absolute inset-0">
        <CanvasRevealEffect
          animationSpeed={5}
          containerClassName="bg-black"
          colors={[
            [255, 255, 255],
            [255, 255, 255],
          ]}
          dotSize={2}
          showGradient={true}
          reverse={false}
        />
        {/* Soft brand-tinted radial washes on top of dots */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(18,30,139,0.72),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(0,65,152,0.75),_transparent_60%)]" />
        <div className="absolute -bottom-16 right-[-10%] h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(0,143,105,0.45),_transparent_70%)] blur-3xl" />
      </div>

      <div className="container relative flex min-h-[60vh] md:min-h-[70vh] flex-col items-center justify-center py-8 md:py-10 lg:py-16 px-4 sm:px-6">
        {/* Top meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 md:mb-6 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-[10px] sm:text-xs md:text-sm text-white/70"
        >
          <span className="rounded-full border border-white/15 px-2 md:px-3 py-1 uppercase tracking-[0.16em] text-[0.6rem] sm:text-[0.68rem] md:text-[0.7rem]">
            INDIAN INSTITUTE OF ENTREPRENEURSHIP DEVELOPMENT
          </span>
          <span className="hidden h-4 w-px bg-white/20 md:block" />
          <span className="flex items-center gap-1.5 md:gap-2 text-[10px] sm:text-xs">
            <Users className="h-3 w-3 md:h-4 md:w-4 text-[#008F69] flex-shrink-0" />
            <span className="text-center">Supporting entrepreneurs, MSMEs & institutions across India</span>
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mx-auto mb-4 md:mb-6 max-w-4xl text-center px-2"
        >
          <h1 className="mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Build Your Business with Passion.
            <br />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className=" "
            >
{" "}
              <span className="text-outline-light">Run It Smarter with IID.</span>
            </motion.div>
          </h1>
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-white/75 px-2">
            Simplifying Business Setup, Compliance & Growth, the{" "}
            <span className="inline-flex items-center gap-1 rounded bg-white/10 px-1.5 md:px-2 py-0.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#00B287]">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              AI-DRIVEN
            </span>{" "}
            way — with quiet, institutional expertise behind every decision.
          </p>
        </motion.div>

        {/* Centered Search Experience */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-4 md:mb-5 w-full max-w-2xl px-2"
        >
          <div className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-white/98 shadow-[0_18px_60px_rgba(0,0,0,0.35)] ring-1 ring-black/5 transition-all duration-300 hover:shadow-[0_24px_70px_rgba(0,143,105,0.25)] hover:ring-[#00B287]/40 focus-within:shadow-[0_24px_70px_rgba(0,143,105,0.3)] focus-within:ring-2 focus-within:ring-[#00B287]">
            {/* Animated border glow effect */}
            <div className="pointer-events-none absolute inset-0 rounded-xl md:rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 bg-gradient-to-r from-[#00B287]/10 via-transparent to-[#004198]/10" />
            <div className="pointer-events-none absolute inset-y-0 left-3 md:left-4 flex items-center transition-colors duration-300 group-focus-within:text-[#00B287]">
              <Search className="h-4 w-4 md:h-5 md:w-5 text-slate-500 transition-all duration-300 group-hover:text-[#00B287] group-hover:scale-110 group-focus-within:text-[#00B287] group-focus-within:scale-110" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Try Search..."
              className="w-full bg-transparent py-3 md:py-4 pl-10 md:pl-12 pr-24 md:pr-32 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 placeholder:transition-colors placeholder:duration-300 focus:outline-none focus:placeholder:text-slate-300 md:text-base"
            />
            <StarButton 
              lightColor="#00B287"
              backgroundColor="#004198"
              className="absolute right-1.5 md:right-2 top-1/2 -translate-y-1/2 rounded-lg md:rounded-xl bg-[#004198] hover:bg-[#00357B] text-xs md:text-sm h-8 md:h-10 px-3 md:px-4"
            >
              <span className="hidden sm:inline">Search</span>
              <span className="sm:hidden">Go</span>
            </StarButton>
          </div>
          <p className="mt-2 md:mt-3 text-center text-[10px] sm:text-xs md:text-sm text-white/70 px-2">
            Ask for project reports, franchise support, government schemes, training programs or expert connect — all from one place.
          </p>
        </motion.div>

        {/* Quick prompts around search */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mb-4 md:mb-8 flex flex-wrap justify-center gap-2 md:gap-3 text-[10px] sm:text-xs md:text-sm px-2"
        >
          {["Find a suitable project report", "Explore EDP & workshops", "Understand government schemes", "Talk to an IID expert"].map(
            (label) => (
              <button
                key={label}
                type="button"
                className="rounded-full border border-white/18 bg-white/5 px-2.5 md:px-4 py-1 md:py-1.5 text-white/80 transition-colors hover:border-white/35 hover:bg-white/10 text-center"
              >
                {label}
              </button>
            )
          )}
        </motion.div>

        {/* Quick Actions (institutional shortcuts) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mb-6 md:mb-10 flex flex-wrap justify-center gap-2 md:gap-3 text-[10px] sm:text-xs md:text-sm px-2"
        >
          {quickActions.map((action) => (
            <Link
              key={action.label}
              to={action.link}
              className="rounded-full border border-white/16 bg-white/6 px-3 md:px-4 py-1.5 md:py-2 text-white/90 backdrop-blur-sm transition-colors hover:border-white/35 hover:bg-white/14 text-center min-h-[44px] flex items-center justify-center"
            >
              {action.label}
            </Link>
          ))}
        </motion.div>

        {/* Editorial feature row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.34 }}
          className="grid w-full max-w-4xl gap-4 md:gap-6 md:grid-cols-[1.4fr,1.1fr] px-2"
        >
          <div className="flex flex-col gap-3 md:gap-4 border-t border-white/14 pt-3 md:pt-4 lg:pt-5">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              WHAT IID HELPS YOU DO
            </p>
            <div className="space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base text-white/80">
              <p>
                Move from idea to institution with structured{" "}
                <span className="font-semibold text-white">project reports, compliance support,</span> and{" "}
                <span className="font-semibold text-white">growth advisory</span> built for Indian entrepreneurs and MSMEs.
              </p>
              <p>
                IID works at the intersection of{" "}
                <span className="font-semibold text-white">training, policy, finance and on-ground execution</span> so that
                you don&apos;t have to navigate it alone.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 md:gap-4 rounded-xl md:rounded-2xl border border-white/14 bg-white/4 p-3 md:p-4 lg:p-5">
            <div className="flex items-start gap-2 md:gap-3">
              <div className="rounded-lg bg-[#008F69]/18 p-2 md:p-2.5 flex-shrink-0">
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-[#00B287]" />
              </div>
              <div>
                <h3 className="mb-1 text-xs sm:text-sm md:text-base font-semibold">Need to speak to someone instead of searching?</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/75">
                  Our team and chapter network can guide you on the right program, report or funding route for your stage.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm text-white/80">
              <div className="flex items-center gap-1.5 md:gap-2">
                <Phone className="h-3 w-3 md:h-4 md:w-4 text-[#00B287] flex-shrink-0" />
                <span>Talk to IID (Office Hours)</span>
              </div>
              <Link
                to="/contact"
                className="text-[10px] sm:text-xs md:text-sm font-medium text-[#9FD7FF] underline-offset-4 hover:underline"
              >
                Request a call-back →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Institutional affiliations */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="mt-6 md:mt-10 w-full max-w-5xl border-t border-white/10 pt-4 md:pt-6 px-2"
        >
          <p className="mb-3 md:mb-4 text-center text-[10px] sm:text-xs md:text-sm text-white/45">
            Working alongside national and regional institutions in the entrepreneurship ecosystem
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-10 gap-y-2 md:gap-y-3 text-[0.65rem] sm:text-[0.72rem] md:text-sm font-semibold tracking-wide text-white/70">
            {["MSME", "Startup India", "SIDBI", "NABARD", "NSIC"].map((name) => (
              <span key={name} className="uppercase tracking-[0.18em] text-white/60">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
