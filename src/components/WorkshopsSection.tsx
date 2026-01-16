import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronLeft, ChevronRight, Users, ArrowUpRight, Sparkles } from "lucide-react";
import { useRef } from "react";

const workshops = [
  {
    title: "Food Processing Business Startup",
    location: "Delhi NCR",
    date: "15 Feb 2026",
    mode: "Offline",
    duration: "2 Days",
    description: "Complete guide to starting food processing business with expert mentorship and practical sessions.",
    gradient: "from-orange-500 via-orange-600 to-red-600",
    tag: "Featured",
  },
  {
    title: "MSME Registration & Compliance",
    location: "Mumbai",
    date: "22 Feb 2026",
    mode: "Hybrid",
    duration: "1 Day",
    description: "Learn step-by-step MSME registration process, compliance requirements, and government schemes.",
    gradient: "from-blue-500 via-blue-600 to-indigo-700",
  },
  {
    title: "Dairy Plant Project Setup",
    location: "Jaipur",
    date: "01 Mar 2026",
    mode: "Offline",
    duration: "3 Days",
    description: "Comprehensive workshop on dairy plant setup, equipment selection, and operational management.",
    gradient: "from-teal-500 via-cyan-600 to-blue-700",
  },
  {
    title: "Export Business Fundamentals",
    location: "Online",
    date: "08 Mar 2026",
    mode: "Online",
    duration: "2 Days",
    description: "Master export-import procedures, documentation, international trade laws and logistics.",
    gradient: "from-purple-500 via-purple-600 to-pink-600",
    tag: "Free",
  },
  {
    title: "Manufacturing Unit Setup",
    location: "Ahmedabad",
    date: "15 Mar 2026",
    mode: "Offline",
    duration: "2 Days",
    description: "Learn manufacturing unit setup from scratch including machinery, licensing, and operations.",
    gradient: "from-green-600 via-emerald-600 to-teal-700",
  },
];

export function WorkshopsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10 lg:py-14 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="border-l-4 border-primary pl-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Workshops & Training
            </h2>
            <p className="text-muted-foreground mt-2">
              Hands-on learning experiences with industry experts and practical insights.
            </p>
          </div>
          <div className="flex items-center gap-3 justify-end">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-full bg-muted hover:bg-primary/10 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-full bg-muted hover:bg-primary/10 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Workshops Carousel */}
        <div
          ref={scrollRef}
          className="overflow-x-auto hide-scrollbar -mx-4 px-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6 pb-4"
            style={{ minWidth: "max-content" }}
          >
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-[300px] md:w-[340px] flex-shrink-0 group cursor-pointer"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  {/* Gradient Header */}
                  <div className={`relative h-36 bg-gradient-to-br ${workshop.gradient} overflow-hidden`}>
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full" />
                      <div className="absolute bottom-2 left-4 text-white/20">
                        <Sparkles className="w-8 h-8" />
                      </div>
                    </div>
                    
                    {/* Workshop Title & Badge */}
                    <div className="absolute top-4 left-4 right-4">
                      <h3 className="font-bold text-xl text-white mb-2 line-clamp-2">
                        {workshop.title}
                      </h3>
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                        <Users className="w-3 h-3 text-white" />
                        <span className="text-xs font-semibold text-white">{workshop.mode}</span>
                      </div>
                    </div>

                    {/* Tag Badge */}
                    {workshop.tag && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-semibold bg-white/90 text-gray-800 rounded-lg shadow-sm">
                          {workshop.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 bg-white">
                    {/* Info */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{workshop.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{workshop.date}</span>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-md mb-3">
                      {workshop.duration}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                      {workshop.description}
                    </p>
                    
                    {/* Register Button */}
                    <button className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-muted-foreground bg-white border border-border rounded-xl hover:border-primary hover:text-primary hover:bg-primary/5 transition-all group/btn">
                      <span>Register Now</span>
                      <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

