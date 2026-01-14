import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    title: "Business Solutions",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Project Reports",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&h=200&fit=crop",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Franchise",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=200&fit=crop",
    color: "from-violet-500 to-violet-600",
    badge: "Popular",
  },
  {
    title: "Courses",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop",
    color: "from-orange-500 to-orange-600",
    badge: "New",
  },
  {
    title: "Workshops",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop",
    color: "from-pink-500 to-pink-600",
  },
  {
    title: "EDP Programs",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    title: "Supplier Connect",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&h=200&fit=crop",
    color: "from-amber-500 to-amber-600",
  },
  {
    title: "Industrial Services",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
    color: "from-indigo-500 to-indigo-600",
  },
];

export function ServicesSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Explore IID Services
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-3 md:mt-0 text-primary font-medium hover:underline"
          >
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Horizontal Scroll Cards */}
        <div className="overflow-x-auto hide-scrollbar -mx-4 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-4 pb-4"
            style={{ minWidth: "max-content" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="w-[160px] md:w-[180px] flex-shrink-0 group cursor-pointer"
              >
                <div className="relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  {/* Badge */}
                  {service.badge && (
                    <span className="absolute top-2 right-2 z-10 px-2 py-0.5 text-xs font-semibold bg-primary text-primary-foreground rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {service.badge}
                    </span>
                  )}
                  
                  {/* Image Container */}
                  <div className="relative h-28 md:h-32 overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  </div>

                  {/* Title */}
                  <div className="p-3 text-center">
                    <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
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
