import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Truck, Package, Settings, Box, CheckCircle, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { icon: Package, title: "Raw Materials", count: "2,500+ Suppliers", color: "bg-blue-500" },
  { icon: Settings, title: "Machinery & Equipment", count: "1,800+ Suppliers", color: "bg-orange-500" },
  { icon: Box, title: "Packaging Solutions", count: "1,200+ Suppliers", color: "bg-green-500" },
  { icon: Truck, title: "Logistics Partners", count: "800+ Partners", color: "bg-purple-500" },
];

const suppliers = [
  { name: "ABC Polymers Pvt Ltd", category: "Raw Materials", location: "Gujarat", rating: 4.8, verified: true },
  { name: "Industrial Machines Co.", category: "Machinery", location: "Maharashtra", rating: 4.6, verified: true },
  { name: "PackRight Solutions", category: "Packaging", location: "Delhi NCR", rating: 4.7, verified: true },
  { name: "FastTrack Logistics", category: "Logistics", location: "Pan India", rating: 4.5, verified: true },
  { name: "Steel India Corporation", category: "Raw Materials", location: "Jharkhand", rating: 4.9, verified: true },
  { name: "TechMach Industries", category: "Machinery", location: "Tamil Nadu", rating: 4.4, verified: false },
];

export default function SupplierConnect() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              <Truck className="w-4 h-4" />
              Verified Supplier Network
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Connect with Trusted Suppliers
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Find verified suppliers for raw materials, machinery, packaging, and logistics. Quality assured, competitive pricing.
            </p>
            
            {/* Search */}
            <div className="max-w-xl mx-auto">
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for suppliers, materials, machinery..."
                  className="w-full pl-12 pr-32 py-4 text-foreground focus:outline-none"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className={`${cat.color} p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  <cat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-1">{cat.title}</h3>
                <p className="text-sm text-muted-foreground">{cat.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Suppliers */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Featured Suppliers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suppliers.map((supplier, index) => (
              <motion.div
                key={supplier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{supplier.name}</h3>
                    <p className="text-sm text-muted-foreground">{supplier.category}</p>
                  </div>
                  {supplier.verified && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium rounded-full">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span>{supplier.location}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    ⭐ {supplier.rating}
                  </span>
                </div>
                
                <button className="w-full py-2 border border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2">
                  View Profile <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Are You a Supplier?
          </h2>
          <p className="text-muted-foreground mb-8">
            Register your business and connect with thousands of entrepreneurs looking for reliable partners.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
            Register as Supplier
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
