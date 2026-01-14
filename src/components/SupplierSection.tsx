import { motion } from "framer-motion";
import { Package, Cog, Box, Truck, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const suppliers = [
  {
    icon: Package,
    title: "Raw Material Suppliers",
    description: "Quality raw materials for manufacturing",
    count: "500+",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop",
  },
  {
    icon: Cog,
    title: "Machinery Providers",
    description: "Industrial machinery and equipment",
    count: "300+",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop",
  },
  {
    icon: Box,
    title: "Packaging Vendors",
    description: "Complete packaging solutions",
    count: "200+",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop",
  },
  {
    icon: Truck,
    title: "Logistics Partners",
    description: "Reliable logistics and transport",
    count: "150+",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=200&fit=crop",
  },
];

export function SupplierSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 lg:py-16">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-6 bg-primary rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Supplier Connect
              </h2>
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              Connect with verified suppliers across India
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2 ml-4 text-primary font-medium hover:underline"
            >
              Explore All <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Horizontal Cards */}
        <div
          ref={scrollRef}
          className="overflow-x-auto hide-scrollbar -mx-4 px-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-5 pb-4"
            style={{ minWidth: "max-content" }}
          >
            {suppliers.map((supplier, index) => (
              <motion.div
                key={supplier.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-[280px] md:w-[300px] flex-shrink-0 group cursor-pointer"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={supplier.image}
                      alt={supplier.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {supplier.count}
                      </span>
                      <span className="text-sm text-primary-foreground/80 ml-1">
                        Suppliers
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <supplier.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {supplier.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {supplier.description}
                    </p>
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
