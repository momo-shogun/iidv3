import { motion } from "framer-motion";
import { Package, Cog, Box, Truck, ArrowRight, ArrowRightIcon, PlusIcon, Users, MapPin, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, number: "1,200+", label: "Verified Suppliers", color: "from-blue-500 to-cyan-600" },
  { icon: MapPin, number: "All States", label: "Pan-India Coverage", color: "from-green-500 to-teal-600" },
  { icon: Package, number: "100%", label: "Verified & Trusted", color: "from-purple-500 to-pink-600" },
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
    <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-cyan-50/50 to-teal-50/30 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-br from-blue-300/40 to-cyan-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-tr from-teal-300/40 to-green-300/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-7xl relative z-10 px-4 sm:px-6">
        {/* Section Header - Editorial Style (inspired by WorkshopsSection) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12 border-b border-slate-200/60 pb-4 md:pb-6"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 mb-2">
              Supplier Network
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900">
              Connect with Verified Suppliers
            </h2>
            <p className="mt-2 md:mt-3 text-xs sm:text-sm text-slate-600 max-w-2xl">
              Access India's largest network of verified suppliers, manufacturers, and service providers
            </p>
          </div>
          <Link
            to="/supplier-connect"
            className="group flex items-center gap-2 text-xs md:text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors min-h-[44px]"
          >
            View all suppliers
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Stats Cards - Colorful Design (keeping colors) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-2 md:gap-4 max-w-3xl mb-8 md:mb-12 mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, type: "spring", duration: 0.4 }}
              className={`relative bg-gradient-to-br ${stat.color} rounded-lg md:rounded-xl p-3 md:p-5 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform shadow-md">
                  <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-0.5 md:mb-1">{stat.number}</div>
                <div className="text-[10px] md:text-xs text-white/90 font-semibold leading-tight">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Supplier Cards - Enhanced Design (inspired by WorkshopsSection) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          {suppliers.map((supplier, index) => (
            <motion.div
              key={supplier.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Link
                to="/supplier-connect"
                className="group block h-full bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] transition-all duration-300"
              >
                {/* Gradient Header (keeping colors) */}
                <div className={`relative h-24 md:h-32 bg-gradient-to-br ${supplier.gradient} p-4 md:p-5 overflow-hidden`}>
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-3 md:top-4 right-3 md:right-4 w-16 md:w-20 h-16 md:h-20 border-2 border-white/30 rounded-full" />
                    <div className="absolute bottom-2 left-2 w-10 md:w-12 h-10 md:h-12 border border-white/20 rounded-full" />
                  </div>
                  <div className="relative">
                    <div className="flex items-start justify-between gap-2 md:gap-3 mb-2 md:mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white/95 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                        <supplier.icon className="w-5 h-5 md:w-6 md:h-6 text-slate-800" />
                      </div>
                      <div className="px-2 md:px-2.5 py-0.5 md:py-1 bg-white/20 backdrop-blur-sm rounded-md border border-white/30">
                        <span className="text-[10px] md:text-xs font-semibold text-white">{supplier.count}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-base md:text-lg text-white leading-tight">
                      {supplier.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-5">
                  <p className="text-xs md:text-sm text-slate-600 mb-3 md:mb-4 leading-relaxed line-clamp-3">
                    {supplier.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-1.5 md:space-y-2">
                    {supplier.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs text-slate-700">
                        <CheckCircle className="w-3 h-3 md:w-3.5 md:h-3.5 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-3 md:mt-4 flex items-center gap-2 text-xs md:text-sm font-medium text-blue-600 group-hover:text-cyan-600 transition-colors min-h-[44px]">
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-4 md:gap-y-6 border-y border-slate-200 bg-[radial-gradient(35%_80%_at_25%_0%,rgba(59,130,246,0.08),transparent)] px-4 md:px-6 py-6 md:py-8"
        >
          {/* Corner Plus Icons */}
          <PlusIcon
            className="absolute top-[-12.5px] left-[-11.5px] z-10 w-4 h-4 md:size-6 text-slate-400"
            strokeWidth={1}
          />
          <PlusIcon
            className="absolute top-[-12.5px] right-[-11.5px] z-10 w-4 h-4 md:size-6 text-slate-400"
            strokeWidth={1}
          />
          <PlusIcon
            className="absolute bottom-[-12.5px] left-[-11.5px] z-10 w-4 h-4 md:size-6 text-slate-400"
            strokeWidth={1}
          />
          <PlusIcon
            className="absolute right-[-11.5px] bottom-[-12.5px] z-10 w-4 h-4 md:size-6 text-slate-400"
            strokeWidth={1}
          />

          {/* Side Borders */}
          <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l border-slate-200 hidden md:block" />
          <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r border-slate-200 hidden md:block" />

          {/* Center Dashed Line */}
          <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed border-slate-200 hidden md:block" />

          <div className="space-y-1">
            <h2 className="text-center font-bold text-xl md:text-2xl lg:text-3xl text-slate-900">
              Ready to Connect with Verified Suppliers?
            </h2>
            <p className="text-center text-slate-600 text-xs sm:text-sm md:text-base px-2">
              Get instant access to verified suppliers, competitive pricing, and seamless business connections
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Button variant="outline" asChild className="border-slate-300 hover:border-blue-500 hover:text-blue-600 min-h-[44px] text-sm">
              <Link to="/supplier-connect">
                Learn More
              </Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white min-h-[44px] text-sm">
              <Link to="/supplier-connect" className="flex items-center justify-center gap-1">
                Find Suppliers Now
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
