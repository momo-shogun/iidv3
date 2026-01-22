import { motion } from "framer-motion";
import { Handshake, Award, Users, TrendingUp, CheckCircle, ArrowRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { SupportingOrganizations } from "./ui/supporting-organizations";

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
    <section className="relative py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-cyan-50/50 to-teal-50/30 overflow-hidden">
      <div className="container max-w-7xl relative z-10">
        {/* Section Header - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 border-b border-slate-200/60 pb-6"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 mb-2">
              Partners & Associates
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-2xl">
              Backed by India's leading government bodies and financial institutions
            </p>
          </div>
          <Link
            to="/partners"
            className="group flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            <span>View all partners</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Stats Cards */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
              className={`relative bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm text-white/90 font-semibold">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Main Partners */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg font-semibold text-center text-slate-700 mb-8"
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
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-slate-200">
                  {/* Header */}
                  <div className={`h-32 bg-gradient-to-br ${partner.gradient} p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/30 rounded-full" />
                      <Building2 className="absolute bottom-2 left-2 w-16 h-16 text-white/20" />
                    </div>
                    <div className="relative">
                      <div className="flex items-center justify-between mb-3">
                        <Handshake className="w-6 h-6 text-white" />
                        <span className="text-xs font-semibold text-white/90 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                          {partner.category}
                        </span>
                      </div>
                      <h4 className="text-2xl font-bold text-white">{partner.shortName}</h4>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h5 className="font-bold text-slate-900 mb-2 text-base leading-tight">
                      {partner.name}
                    </h5>
                    <p className="text-sm text-slate-600 mb-4">{partner.description}</p>
                    <div className="flex items-center gap-2 text-xs text-green-600 font-semibold">
                      <CheckCircle className="w-4 h-4" />
                      <span>Verified Partner</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Supporting Partners */}
        <SupportingOrganizations 
          organizations={supportingPartners}
          title="Supporting Organizations"
          delay={0.5}
        />

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-green-200 shadow-sm">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-slate-700">
              All partnerships verified and backed by Government of India
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
