import { motion } from "framer-motion";
import { Store, TrendingUp, Users, CheckCircle, ArrowRight, Sparkles, BarChart3, Award, Target, Zap, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export function FranchiseSection() {
  const stats = [
    { icon: Users, number: "500+", label: "Franchise Partners", color: "from-orange-500 to-red-500" },
    { icon: Target, number: "50+", label: "Industries Covered", color: "from-purple-500 to-pink-500" },
    { icon: Award, number: "95%", label: "Success Rate", color: "from-green-500 to-teal-500" },
  ];

  const benefits = [
    { icon: Zap, text: "Lower Risk & Faster ROI" },
    { icon: Award, text: "Established Brand Power" },
    { icon: Heart, text: "Ongoing Support System" },
    { icon: TrendingUp, text: "Proven Success Model" },
  ];

  const opportunities = [
    {
      icon: Store,
      title: "Franchise Consulting",
      description: "Expert guidance on franchise selection, legal agreements, and complete business setup assistance.",
      features: ["Brand Selection", "Legal Support", "Setup Guidance", "Investment Planning"],
      link: "/franchise",
      gradient: "from-orange-500 via-orange-600 to-red-600",
      badge: "Popular",
    },
    {
      icon: TrendingUp,
      title: "Franchise Opportunities",
      description: "Access verified franchise opportunities across food, retail, education, and service industries.",
      features: ["Verified Brands", "ROI Analysis", "Market Research", "Location Support"],
      link: "/franchise/opportunities",
      gradient: "from-purple-500 via-purple-600 to-pink-600",
      badge: "New",
    },
  ];

  return (
    <section className="relative py-8 lg:py-10 bg-gradient-to-br from-orange-50 via-rose-50/50 to-red-50/30 overflow-hidden">
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-300/40 to-red-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-300/40 to-pink-300/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-orange-200/20 to-red-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Section Header */}
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-full mb-6 border border-orange-200/50"
          >
            <Store className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-bold text-orange-600">Premium Franchise Opportunities</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
            Build Your Empire with a{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Proven Franchise
            </span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Join thousands of successful entrepreneurs who turned dreams into thriving businesses
          </p>
        </motion.div>

        {/* Stats Cards - Enhanced */}
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
              className={`relative bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group`}
            >
              {/* Decorative Background */}
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

        {/* Benefits Section - New */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-orange-100/50"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <benefit.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs font-semibold text-foreground">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Opportunity Cards - Enhanced */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.15 }}
            >
              <Link
                to={opportunity.link}
                className="block bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-3 group relative border-2 border-transparent hover:border-orange-200"
              >
                {/* Badge */}
                {opportunity.badge && (
                  <div className="absolute top-6 right-6 z-10">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-orange-600 text-xs font-bold rounded-full shadow-lg">
                      {opportunity.badge}
                    </span>
                  </div>
                )}

                {/* Enhanced Gradient Header */}
                <div className={`h-40 bg-gradient-to-br ${opportunity.gradient} p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0">
                    <div className="absolute top-6 right-6 w-24 h-24 border-2 border-white/30 rounded-full animate-pulse" />
                    <div className="absolute bottom-4 left-6 w-16 h-16 border border-white/20 rounded-full" />
                    <div className="absolute top-1/2 right-1/4 text-white/10">
                      <Sparkles className="w-32 h-32" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all">
                      <opportunity.icon className="w-8 h-8 text-gray-800" />
                    </div>
                    <h3 className="font-bold text-2xl text-white mb-1">
                      {opportunity.title}
                    </h3>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                    {opportunity.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {opportunity.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl text-xs font-semibold text-orange-700 border border-orange-100"
                      >
                        <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced CTA */}
                  <div className="flex items-center justify-between pt-4 border-t-2 border-dashed border-orange-100">
                    <span className="text-orange-600 font-bold text-lg">Explore Now</span>
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Premium Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 rounded-2xl p-6 lg:p-8 text-center text-white shadow-xl overflow-hidden"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Sparkles className="w-40 h-40 text-white/10" />
            </div>
          </div>

          <div className="relative">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
            >
              <Store className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Own Your Franchise?
            </h3>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get personalized franchise recommendations tailored to your investment budget, 
              business interests, and preferred location
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/franchise"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-orange-600 rounded-xl font-bold hover:bg-orange-50 transition-all hover:scale-105 shadow-2xl group"
              >
                <BarChart3 className="w-6 h-6" />
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/franchise/opportunities"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                <span>Browse Franchises</span>
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Free Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>No Hidden Fees</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

