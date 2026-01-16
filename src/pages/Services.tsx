import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Building2, CheckCircle, ArrowRight, Phone, Users, Shield, Award } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const serviceData: Record<string, { title: string; description: string; features: string[]; benefits: string[] }> = {
  "business-solutions": {
    title: "Business Solutions",
    description: "Comprehensive business setup and registration services to help you start your entrepreneurial journey.",
    features: [
      "Company Registration (Pvt Ltd, LLP, OPC)",
      "GST Registration & Compliance",
      "MSME/Udyam Registration",
      "Import-Export Code (IEC)",
      "Trade License",
      "Shop & Establishment License",
    ],
    benefits: [
      "Expert guidance from industry professionals",
      "Quick turnaround time",
      "100% compliance guarantee",
      "Dedicated support team",
    ],
  },
  "industrial-services": {
    title: "Industrial Services",
    description: "End-to-end industrial consulting services for manufacturing and production units.",
    features: [
      "Factory Layout Planning",
      "Machinery Selection & Sourcing",
      "Production Process Design",
      "Quality Control Systems",
      "Pollution Control Compliance",
      "Safety Standards Implementation",
    ],
    benefits: [
      "Experienced industrial consultants",
      "Cost-effective solutions",
      "Compliance with all regulations",
      "Ongoing technical support",
    ],
  },
  consulting: {
    title: "Business Consulting",
    description: "Strategic consulting services to help your business grow and succeed.",
    features: [
      "Business Strategy Development",
      "Market Research & Analysis",
      "Financial Planning & Projections",
      "Operations Optimization",
      "HR & Talent Management",
      "Digital Transformation",
    ],
    benefits: [
      "Proven methodologies",
      "Industry expertise",
      "Customized solutions",
      "Measurable results",
    ],
  },
};

const stats = [
  { value: "50,000+", label: "Businesses Helped" },
  { value: "25+", label: "Years Experience" },
  { value: "100+", label: "Expert Consultants" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function Services() {
  const { type } = useParams();
  const service = serviceData[type || "business-solutions"] || serviceData["business-solutions"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <nav className="text-white/60 text-sm mb-4">
                <Link to="/" className="hover:text-white">Home</Link>
                <span className="mx-2">→</span>
                <span className="text-white">Services</span>
              </nav>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                100% Compliant Solutions
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {service.title}
              </h1>
              
              <p className="text-lg text-white/70 mb-8">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
                  Get Started
                </button>
                <button className="px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Talk to Expert
                </button>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Get Free Consultation</h3>
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
                <textarea
                  placeholder="Tell us about your requirements"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary resize-none"
                />
                <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
                  Submit Enquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-12 bg-primary/5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* All Features */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{feature}</h3>
                <p className="text-muted-foreground text-sm">
                  Professional assistance with complete documentation and compliance support.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Why Choose IID?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center border border-border"
              >
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <p className="font-medium text-foreground">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
