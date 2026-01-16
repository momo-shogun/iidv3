import { motion } from "framer-motion";
import { Briefcase, Factory, Users, ArrowRight, CheckCircle, Sparkles, Target } from "lucide-react";
import { Link } from "react-router-dom";

export function ServiceSection() {
  const services = [
    {
      icon: Briefcase,
      title: "Business Solutions",
      description: "Complete support for company formation, registrations, and legal compliance to get your business running smoothly.",
      features: [
        "Company Registration",
        "GST & Tax Filing",
        "Legal Compliance",
        "Trademark & IP",
      ],
      link: "/services/business-solutions",
      gradient: "from-blue-500 via-blue-600 to-cyan-700",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Factory,
      title: "Industrial Services",
      description: "End-to-end industrial project setup including feasibility study, machinery selection, and operational support.",
      features: [
        "Project Feasibility",
        "Machinery Selection",
        "Plant Setup",
        "Operations Support",
      ],
      link: "/services/industrial-services",
      gradient: "from-purple-500 via-purple-600 to-pink-700",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Strategic business consulting covering market research, financial planning, and growth strategies for success.",
      features: [
        "Business Strategy",
        "Market Research",
        "Financial Planning",
        "Growth Consulting",
      ],
      link: "/services/consulting",
      gradient: "from-green-500 via-green-600 to-teal-700",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section className="py-10 lg:py-14 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-200 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full mb-4">
            <Target className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-semibold text-blue-500">Professional Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive <span className="text-blue-500">Business Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Expert services to help you start, manage, and scale your business successfully
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link
                to={service.link}
                className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 h-full"
              >
                {/* Gradient Header */}
                <div className={`h-40 bg-gradient-to-br ${service.gradient} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-6 right-6 w-24 h-24 border-2 border-white/30 rounded-full" />
                    <div className="absolute bottom-4 left-4">
                      <Sparkles className="w-8 h-8 text-white/30" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7 text-gray-800" />
                    </div>
                    <h3 className="font-bold text-xl text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all pt-4 border-t border-border">
                    <span>Explore Service</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-white rounded-xl px-6 py-4 shadow-md border border-border">
            <p className="text-sm text-muted-foreground">
              🎯 All services backed by{" "}
              <span className="font-semibold text-foreground">expert consultation</span> and{" "}
              <span className="font-semibold text-foreground">ongoing support</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

