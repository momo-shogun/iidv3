import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronLeft, ChevronRight, Clock, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { DottedSurface } from "./ui/dotted-surface";

const workshops = [
  {
    title: "Food Processing Business Startup",
    location: "Delhi NCR",
    date: "15 Feb 2026",
    mode: "Offline",
    duration: "2 Days",
    description: "Complete guide to starting food processing business with expert mentorship and practical sessions.",
    icon: Calendar,
  },
  {
    title: "MSME Registration & Compliance",
    location: "Mumbai",
    date: "22 Feb 2026",
    mode: "Hybrid",
    duration: "1 Day",
    description: "Learn step-by-step MSME registration process, compliance requirements, and government schemes.",
    icon: Calendar,
  },
  {
    title: "Dairy Plant Project Setup",
    location: "Jaipur",
    date: "01 Mar 2026",
    mode: "Offline",
    duration: "3 Days",
    description: "Comprehensive workshop on dairy plant setup, equipment selection, and operational management.",
    icon: Calendar,
  },
  {
    title: "Export Business Fundamentals",
    location: "Online",
    date: "08 Mar 2026",
    mode: "Online",
    duration: "2 Days",
    description: "Master export-import procedures, documentation, international trade laws and logistics.",
    icon: Calendar,
  },
  {
    title: "Manufacturing Unit Setup",
    location: "Ahmedabad",
    date: "15 Mar 2026",
    mode: "Offline",
    duration: "2 Days",
    description: "Learn manufacturing unit setup from scratch including machinery, licensing, and operations.",
    icon: Calendar,
  },
];

export function WorkshopsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
      {/* Dotted Surface Background Effect */}
      {/* <DottedSurface /> */}
      
      {/* Minimal gradient overlay - very transparent to show dots */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/50 pointer-events-none z-[1]" />
      
      <div className="container max-w-7xl relative z-10">
        {/* Section Header - Editorial Style (inspired by HeroSection & ServicesSection) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 border-b border-slate-200 pb-6"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#008F69] mb-2">
              Learning Programs
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Workshops & Training
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-2xl">
              Hands-on learning experiences with industry experts and practical insights for entrepreneurs and MSMEs.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-lg border border-slate-200 hover:border-[#004198] hover:bg-slate-50 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-slate-600" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-lg border border-slate-200 hover:border-[#004198] hover:bg-slate-50 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </button>
          </div>
        </motion.div>

        {/* Workshops Horizontal Scroll - Enhanced Design */}
        <div
          ref={scrollRef}
          className="overflow-x-auto hide-scrollbar -mx-4 px-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-6 pb-4"
            style={{ minWidth: "max-content" }}
          >
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="w-[340px] md:w-[380px] flex-shrink-0"
              >
                <Link
                  to="/workshops"
                  className="group block h-full bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl overflow-hidden hover:border-[#004198] hover:shadow-[0_8px_30px_rgba(0,65,152,0.15)] hover:bg-white transition-all duration-300"
                >
                  {/* Card with subtle pattern background (inspired by ServicesSection) */}
                  <div className="relative p-6">
                    {/* Subtle background pattern overlay */}
                    <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,65,152,0.1)_50%,transparent_100%)]" />
                    </div>

                    {/* Icon & Title */}
                    <div className="relative z-10 mb-4">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 group-hover:bg-[#008F69]/10 transition-colors">
                          <workshop.icon className="w-5 h-5 text-slate-600 group-hover:text-[#008F69] transition-colors" />
                        </div>
                        <div className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md">
                          {workshop.mode}
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg text-slate-900 leading-tight line-clamp-2 group-hover:text-[#004198] transition-colors mb-3">
                        {workshop.title}
                      </h3>
                    </div>

                    {/* Minimal Metadata (inspired by ServicesSection) */}
                    <div className="relative z-10 flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{workshop.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{workshop.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="relative z-10 mb-5">
                      <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {workshop.description}
                      </p>
                    </div>
                    
                    {/* CTA (inspired by HeroSection hover effects) */}
                    <div className="relative z-10 flex items-center gap-2 text-sm font-medium text-[#004198] group-hover:text-[#008F69] transition-colors">
                      <span>Register Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* View All Link (inspired by ServicesSection) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <Link
            to="/workshops"
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#004198] transition-colors"
          >
            View all workshops
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
