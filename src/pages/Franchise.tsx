import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Store, CheckCircle, ArrowRight, Phone, TrendingUp, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const franchiseModels = [
  {
    title: "IID Knowledge Partner",
    investment: "₹2-5 Lakhs",
    roi: "35-45%",
    area: "500 sq.ft",
    features: ["Training & Support", "Marketing Materials", "Brand License", "Ongoing Mentorship"],
  },
  {
    title: "IID Regional Center",
    investment: "₹5-10 Lakhs",
    roi: "40-55%",
    area: "1000 sq.ft",
    features: ["Exclusive Territory", "Full Product Range", "Lead Generation", "Dedicated Manager"],
  },
  {
    title: "IID State Partner",
    investment: "₹10-25 Lakhs",
    roi: "50-70%",
    area: "2000 sq.ft",
    features: ["State Exclusivity", "Sub-franchise Rights", "Corporate Tie-ups", "Premium Support"],
  },
];

const benefits = [
  { icon: TrendingUp, title: "High ROI", desc: "Earn 35-70% returns on investment" },
  { icon: Shield, title: "Low Risk", desc: "Proven business model with support" },
  { icon: Users, title: "Expert Support", desc: "Training and ongoing mentorship" },
  { icon: Store, title: "Brand Value", desc: "25+ years of trusted reputation" },
];

export default function Franchise() {
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
                <Store className="w-4 h-4" />
                Franchise Opportunity
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Partner with IID & Build Your Business Empire
              </h1>
              
              <p className="text-lg text-white/70 mb-8">
                Join India's leading entrepreneurship development network. Low investment, high returns, and complete support.
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
              
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
                  Apply for Franchise
                </button>
                <button className="px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call: 1800-XXX-XXXX
                </button>
              </div>
            </motion.div>
            
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Franchise Enquiry</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary"
                />
                <input
                  type="text"
                  placeholder="City / State"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary"
                />
                <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary">
                  <option>Investment Range</option>
                  <option>₹2-5 Lakhs</option>
                  <option>₹5-10 Lakhs</option>
                  <option>₹10-25 Lakhs</option>
                </select>
                <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
                  Submit Application
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Franchise Models */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Choose Your Franchise Model
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {franchiseModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-card rounded-2xl p-6 border-2 transition-all ${
                  index === 1 ? "border-primary shadow-xl scale-105" : "border-border hover:border-primary"
                }`}
              >
                {index === 1 && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground mb-4">{model.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Investment</span>
                    <span className="font-bold text-foreground">{model.investment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expected ROI</span>
                    <span className="font-bold text-primary">{model.roi}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Area Required</span>
                    <span className="font-bold text-foreground">{model.area}</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4 mb-6">
                  <p className="font-medium text-foreground mb-3">What you'll get:</p>
                  <ul className="space-y-2">
                    {model.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
