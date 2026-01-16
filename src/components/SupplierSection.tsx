import { motion } from "framer-motion";
import { Package, Cog, Box, Truck, ArrowRight, Users, MapPin, Sparkles, CheckCircle, Star, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { icon: Users, number: "1,200+", label: "Verified Suppliers", color: "from-blue-500 to-cyan-600" },
  { icon: MapPin, number: "All States", label: "Pan-India Coverage", color: "from-green-500 to-teal-600" },
  { icon: Shield, number: "100%", label: "Verified & Trusted", color: "from-purple-500 to-pink-600" },
];

const suppliers = [
  {
    icon: Package,
    title: "Raw Material Suppliers",
    description: "Premium quality raw materials from verified manufacturers across all industries",
    count: "500+",
    gradient: "from-blue-500 via-blue-600 to-cyan-700",
    benefits: ["Quality Assured", "Best Pricing", "Fast Delivery"],
  },
  {
    icon: Cog,
    title: "Machinery Providers",
    description: "Complete range of industrial machinery and equipment from trusted manufacturers",
    count: "300+",
    gradient: "from-purple-500 via-purple-600 to-indigo-700",
    benefits: ["Warranty Included", "Installation Support", "Maintenance"],
  },
  {
    icon: Box,
    title: "Packaging Vendors",
    description: "Customized packaging solutions for all types of products and industries",
    count: "200+",
    gradient: "from-green-500 via-green-600 to-teal-700",
    benefits: ["Custom Design", "Bulk Orders", "Eco-Friendly"],
  },
  {
    icon: Truck,
    title: "Logistics Partners",
    description: "Reliable nationwide logistics and transportation services at competitive rates",
    count: "150+",
    gradient: "from-orange-500 via-orange-600 to-red-700",
    benefits: ["Pan-India", "GPS Tracking", "Insurance"],
  },
];

export function SupplierSection() {
  return (
    <section className="relative py-8 lg:py-10 bg-gradient-to-br from-blue-50 via-cyan-50/50 to-teal-50/30 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/40 to-cyan-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-300/40 to-green-300/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-full mb-6 border border-blue-200/50"
          >
            <Package className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-bold text-blue-600">Supplier Network</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
            Connect with{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Verified Suppliers
            </span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Access India's largest network of verified suppliers, manufacturers, and service providers
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
              className={`relative bg-gradient-to-br ${stat.color} rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-xs text-white/90 font-semibold">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Supplier Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {suppliers.map((supplier, index) => (
            <motion.div
              key={supplier.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-3 h-full">
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-br ${supplier.gradient} p-5 relative overflow-hidden`}>
                  <div className="absolute inset-0">
                    <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/30 rounded-full animate-pulse" />
                    <div className="absolute bottom-2 left-2 text-white/10">
                      <Sparkles className="w-16 h-16" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all">
                      <supplier.icon className="w-7 h-7 text-gray-800" />
                    </div>
                    <h3 className="font-bold text-lg text-white">{supplier.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </div>
                    <span className="text-2xl font-bold text-primary">{supplier.count}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {supplier.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2">
                    {supplier.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2 text-xs text-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="relative bg-gradient-to-br from-blue-500 via-cyan-600 to-teal-600 rounded-2xl p-6 lg:p-8 text-center text-white shadow-xl overflow-hidden"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Connect with Suppliers?
            </h3>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get instant access to verified suppliers, competitive pricing, and seamless business connections
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/supplier-connect"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all hover:scale-105 shadow-2xl group"
              >
                <Package className="w-6 h-6" />
                <span>Find Suppliers Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all">
                <span>Learn More</span>
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Best Prices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Quick Response</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
