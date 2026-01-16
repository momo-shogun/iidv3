import { motion } from "framer-motion";
import { Building2, Users, Award, Target, CheckCircle, Sparkles } from "lucide-react";

export function WhoWeAreSection() {
  const stats = [
    { number: "25+", label: "Years of Experience" },
    { number: "10k+", label: "Entrepreneurs Trained" },
    { number: "2", label: "Incubation Centres" },
    { number: "100%", label: "Government Backed" },
  ];

  const features = [
    {
      icon: Building2,
      title: "Government of India Incubator",
      description: "Operating under PPP model with MSME Ministry & UP Government's Department of Start-ups",
    },
    {
      icon: Users,
      title: "First-Generation Entrepreneur Support",
      description: "End-to-end guidance from ideation to establishing viable business enterprises",
    },
    {
      icon: Award,
      title: "Skill Development Programs",
      description: "Empowering unemployed youth to become industry-ready through comprehensive training",
    },
    {
      icon: Target,
      title: "Complete Incubation Journey",
      description: "Workshops, seminars, expert connects, and continuous learning through multiple platforms",
    },
  ];

  const highlights = [
    "Established in 1999 as a unit of Samadhan Samiti",
    "Operating under PPP with MSME since 2017",
    "Master incubation centre at Gandhi Darshan, Rajghat, New Delhi",
    "Regional centre at Gokhale Marg, Lucknow with NSIC",
    "Entrepreneur India TV & mobile apps for continuous learning",
  ];

  return (
    <section className="relative py-8 lg:py-12 bg-gradient-to-r from-primary via-primary to-secondary overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 backdrop-blur-sm rounded-full mb-3">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-xs font-semibold text-white">About IID</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
            WHO WE ARE
          </h2>
          <p className="text-sm md:text-base text-white/90 leading-relaxed">
            Institute for Industrial Development (IID) is a{" "}
            <span className="text-primary font-bold bg-white/10 px-1 py-0.5 rounded">Government of India incubator</span>{" "}
            operating under PPP model, affiliated with{" "}
            <span className="font-bold text-white">Ministry of MSME</span> and{" "}
            <span className="font-bold text-white">Dept. of Start-ups, UP Govt</span>.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-xs text-white/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-transparent hover:border-primary"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center mb-3 shadow-md">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-1.5 text-sm">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border-2 border-primary/20"
        >
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 leading-tight">
                Our Legacy & <span className="text-primary">Nationwide Reach</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                IID provides comprehensive support through live workshops, seminars, industrial 
                documentaries, expert/supplier connect episodes on web portals, and content on 
                <span className="font-semibold text-foreground"> "Entrepreneur India TV"</span> and 
                <span className="font-semibold text-foreground"> "Entrepreneur India Live"</span> mobile apps.
              </p>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg border border-primary/30">
                <p className="text-xs font-semibold text-primary">Trusted by MSME, NSIC & Government Bodies</p>
              </div>
            </div>
            <div className="space-y-2.5">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 bg-gradient-to-r from-primary/5 to-transparent p-3 rounded-lg hover:from-primary/10 transition-colors"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-foreground text-sm font-medium leading-relaxed">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

