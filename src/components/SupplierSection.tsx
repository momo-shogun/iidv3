import { motion } from "framer-motion";
import { Package, Cog, Box, Truck, ArrowRight, CheckCircle2 } from "lucide-react";

const suppliers = [
  {
    icon: Package,
    title: "Raw Material Suppliers",
    description: "Quality raw materials for manufacturing",
    count: "500+",
  },
  {
    icon: Cog,
    title: "Machinery Providers",
    description: "Industrial machinery and equipment",
    count: "300+",
  },
  {
    icon: Box,
    title: "Packaging Vendors",
    description: "Complete packaging solutions",
    count: "200+",
  },
  {
    icon: Truck,
    title: "Logistics Partners",
    description: "Reliable logistics and transport",
    count: "150+",
  },
];

const features = [
  "Verified Suppliers",
  "Quality Assured",
  "Pan-India Network",
  "Direct Connect",
];

export function SupplierSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Supplier Network
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Connect with Verified Suppliers
            </h2>
            <p className="text-muted-foreground mb-6">
              Access our extensive network of verified suppliers for raw materials,
              machinery, packaging, and logistics. Build reliable supply chains for
              your business.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity">
              Explore Suppliers <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {suppliers.map((supplier, index) => (
              <motion.div
                key={supplier.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-card"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <supplier.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {supplier.count}
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {supplier.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {supplier.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
