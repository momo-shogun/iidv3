import { motion } from "framer-motion";
import { Package, Cog, Box, Truck, ArrowRight } from "lucide-react";

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
  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        {/* Section Header - Unstop Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Supplier <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with verified suppliers across India for your business needs
          </p>
        </motion.div>

        {/* Grid Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {suppliers.map((supplier, index) => (
            <motion.div
              key={supplier.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-sky-50 to-blue-100 dark:from-primary/10 dark:to-primary/5 rounded-2xl p-6 h-full border border-sky-100 dark:border-primary/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-background shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <supplier.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {supplier.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {supplier.description}
                </p>
                
                {/* Count Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-xl font-bold text-primary">{supplier.count}</span>
                  <span className="text-sm text-muted-foreground">Suppliers</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-lg">
            Connect with Verified Suppliers
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
