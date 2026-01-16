import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, CheckCircle, Award, BookOpen, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Basic Entrepreneurship Development",
    duration: "2 Weeks",
    mode: "Online/Offline",
    certificate: "MSME Certified",
    price: "₹5,000",
    features: ["Business Idea Generation", "Market Research Basics", "Business Plan Writing", "Financial Literacy"],
  },
  {
    title: "Advanced EDP for Startups",
    duration: "4 Weeks",
    mode: "Hybrid",
    certificate: "IID Certified",
    price: "₹12,000",
    features: ["Startup Ecosystem", "Funding & Investment", "Legal Compliance", "Marketing Strategy", "Pitch Deck Creation"],
  },
  {
    title: "Women Entrepreneurship Program",
    duration: "3 Weeks",
    mode: "Online/Offline",
    certificate: "Govt. Recognized",
    price: "₹4,000",
    features: ["Women-led Business Ideas", "Government Schemes", "Financial Independence", "Networking Opportunities"],
  },
  {
    title: "Rural Entrepreneurship Development",
    duration: "2 Weeks",
    mode: "Offline",
    certificate: "NABARD Certified",
    price: "₹3,500",
    features: ["Agri-business Ideas", "Local Market Strategies", "Self-Help Groups", "Microfinance Access"],
  },
];

const benefits = [
  { icon: Target, title: "Goal-Oriented", desc: "Practical skills for real-world success" },
  { icon: Award, title: "Certified Programs", desc: "Government recognized certificates" },
  { icon: Users, title: "Expert Mentors", desc: "Learn from successful entrepreneurs" },
  { icon: Lightbulb, title: "Innovation Focus", desc: "Creative problem-solving approach" },
];

export default function EDPPrograms() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Entrepreneurship Development
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                EDP Programs to Kickstart Your Business Journey
              </h1>
              
              <p className="text-lg text-white/70 mb-8">
                Comprehensive entrepreneurship development programs designed to transform aspiring entrepreneurs into successful business owners.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{benefit.title}</h4>
                      <p className="text-sm text-white/60">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
                View All Programs
              </button>
            </motion.div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">25K+</div>
                <div className="text-white/70">Entrepreneurs Trained</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-white/70">Programs Conducted</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">85%</div>
                <div className="text-white/70">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">28</div>
                <div className="text-white/70">States Covered</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Programs */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Our EDP Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{program.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{program.duration}</span>
                      <span>•</span>
                      <span>{program.mode}</span>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {program.certificate}
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-2xl font-bold text-primary">{program.price}</span>
                  <button className="px-5 py-2 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity">
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
