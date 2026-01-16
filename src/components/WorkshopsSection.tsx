import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const workshops = [
  {
    title: "Food Processing Business Startup",
    location: "Delhi NCR",
    date: "15 Feb 2026",
    mode: "Offline",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
    tag: "Featured",
  },
  {
    title: "MSME Registration & Compliance",
    location: "Mumbai",
    date: "22 Feb 2026",
    mode: "Hybrid",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
  },
  {
    title: "Dairy Plant Project Setup",
    location: "Jaipur",
    date: "01 Mar 2026",
    mode: "Offline",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=250&fit=crop",
  },
  {
    title: "Export Business Fundamentals",
    location: "Online",
    date: "08 Mar 2026",
    mode: "Online",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&h=250&fit=crop",
    tag: "Free",
  },
  {
    title: "Manufacturing Unit Setup",
    location: "Ahmedabad",
    date: "15 Mar 2026",
    mode: "Offline",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
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
    <section className="py-16 lg:py-20">
      <div className="container">
        {/* Section Header - Unstop Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Workshops & <span className="text-primary">Training</span>
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-full bg-muted hover:bg-primary/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-full bg-muted hover:bg-primary/10 transition-colors"
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
                <div className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 right-4 flex justify-between">
                      <span className="px-3 py-1.5 text-xs font-medium bg-white/95 backdrop-blur-sm rounded-full shadow-sm">
                        {workshop.mode}
                      </span>
                      {workshop.tag && (
                        <span className="px-3 py-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                          {workshop.tag}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {workshop.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-5">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-primary" />
                        {workshop.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-primary" />
                        {workshop.date}
                      </div>
                    </div>
                    <button className="w-full py-3 text-sm font-semibold text-primary bg-primary/10 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all">
                      View Details
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
