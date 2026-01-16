import { motion } from "framer-motion";
import { Handshake, Award, Users, TrendingUp, CheckCircle, Sparkles, Star } from "lucide-react";

const stats = [
  { icon: Handshake, number: "50+", label: "Government Partners", color: "from-blue-500 to-cyan-600" },
  { icon: Award, number: "25+", label: "Years Partnership", color: "from-purple-500 to-pink-600" },
  { icon: TrendingUp, number: "100K+", label: "Lives Impacted", color: "from-green-500 to-teal-600" },
];

const mainPartners = [
  { 
    name: "Ministry of MSME",
    shortName: "MSME",
    description: "Government of India",
    category: "Government Partner",
    gradient: "from-blue-500 to-blue-600"
  },
  { 
    name: "National Small Industries Corporation",
    shortName: "NSIC",
    description: "Government Enterprise",
    category: "Supporting Partner",
    gradient: "from-green-500 to-green-600"
  },
  { 
    name: "Small Industries Dev. Bank",
    shortName: "SIDBI",
    description: "Financial Institution",
    category: "Financial Partner",
    gradient: "from-purple-500 to-purple-600"
  },
];

const supportingPartners = [
  "NABARD", "Startup India", "KVIC", "NPC", "DIC", "NIESBUD"
];

export function PartnersSection() {
  return (
    <section className="relative py-8 lg:py-10 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-200/40 to-teal-200/40 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full mb-6 border border-blue-200/50"
          >
            <Handshake className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-bold text-blue-600">Trusted by Industry Veterans</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Associates & Partners
            </span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Backed by India's leading government bodies and financial institutions
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
              className={`relative bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group`}
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

        {/* Main Partners */}
        <div className="mb-8">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-center text-foreground mb-6"
          >
            Strategic Partners
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {mainPartners.map((partner, index) => (
              <motion.div
                key={partner.shortName}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-blue-200">
                  {/* Header */}
                  <div className={`h-28 bg-gradient-to-br ${partner.gradient} p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full" />
                      <Sparkles className="absolute bottom-2 left-2 w-12 h-12 text-white/20" />
                    </div>
                    <div className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <Star className="w-6 h-6 text-white fill-white" />
                        <span className="text-xs font-bold text-white/90 bg-white/20 px-2 py-1 rounded-full">
                          {partner.category}
                        </span>
                      </div>
                      <h4 className="text-2xl font-bold text-white">{partner.shortName}</h4>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h5 className="font-bold text-foreground mb-2 text-sm leading-tight">
                      {partner.name}
                    </h5>
                    <p className="text-xs text-muted-foreground mb-4">{partner.description}</p>
                    <div className="flex items-center gap-2 text-xs text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-semibold">Verified Partner</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Supporting Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
        >
          <h3 className="text-lg font-bold text-center text-foreground mb-6">
            Supporting Organizations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {supportingPartners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="group"
              >
                <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all hover:-translate-y-1">
                  <span className="font-bold text-lg text-foreground/80 group-hover:text-blue-600 transition-colors">
                    {partner}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm font-semibold text-foreground">
              All partnerships verified and backed by Government of India
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
