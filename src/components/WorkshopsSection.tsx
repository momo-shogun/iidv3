import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Clock } from "lucide-react";

const workshops = [
  {
    title: "Food Processing Business Startup",
    location: "Delhi NCR",
    date: "15 Feb 2026",
    mode: "Offline",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
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
  return (
    <section className="py-16 lg:py-24 surface-gradient">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-10"
        >
          <div>
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Upcoming Events
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Workshops & Training
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Join our hands-on workshops conducted by industry experts across India
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-4 md:mt-0 text-primary font-medium hover:underline"
          >
            View All Workshops <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Workshops Carousel */}
        <div className="overflow-x-auto hide-scrollbar -mx-4 px-4">
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
                className="w-[320px] flex-shrink-0 group cursor-pointer"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute top-3 right-3 px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full">
                      {workshop.mode}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {workshop.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {workshop.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {workshop.date}
                      </div>
                    </div>
                    <button className="w-full py-2.5 text-sm font-medium text-primary border-2 border-primary/20 rounded-xl hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
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
