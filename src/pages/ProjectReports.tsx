import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, Download, CheckCircle, ArrowRight, Star, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Manufacturing", count: "500+" },
  { name: "Food Processing", count: "350+" },
  { name: "Agriculture", count: "200+" },
  { name: "MSME", count: "400+" },
  { name: "Chemical", count: "150+" },
  { name: "Textile", count: "180+" },
];

const features = [
  "Detailed Market Analysis",
  "Financial Projections",
  "Technical Specifications",
  "Regulatory Compliance",
  "Investment Requirements",
  "ROI Calculations",
];

const popularReports = [
  { title: "Dairy Processing Unit", category: "Food Processing", price: "₹15,000" },
  { title: "Rice Mill Project", category: "Agriculture", price: "₹12,000" },
  { title: "Plastic Manufacturing", category: "Manufacturing", price: "₹18,000" },
  { title: "Mineral Water Plant", category: "Food Processing", price: "₹14,000" },
  { title: "Solar Panel Manufacturing", category: "Manufacturing", price: "₹20,000" },
  { title: "Organic Fertilizer", category: "Agriculture", price: "₹10,000" },
];

export default function ProjectReports() {
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4" />
                Trusted by 50,000+ Entrepreneurs
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Professional Project Reports for Your Business
              </h1>
              
              <ul className="space-y-3 mb-8">
                {features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
                  Browse Reports
                </button>
                <button className="px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Talk to Expert
                </button>
              </div>
            </motion.div>
            
            {/* Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Get Custom Project Report</h3>
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
                <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary">
                  <option>Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.name}>{cat.name}</option>
                  ))}
                </select>
                <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
                  Get Quote Now
                </button>
              </form>
              <p className="text-sm text-muted-foreground text-center mt-4">
                ₹999 onwards for consultation
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Select Your Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/project-reports/${category.name.toLowerCase().replace(' ', '-')}`}
                  className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all group"
                >
                  <FileText className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground text-center">{category.name}</h3>
                  <span className="text-sm text-muted-foreground">{category.count} Reports</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Reports */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Popular Project Reports
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularReports.map((report, index) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{report.category}</span>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {report.title}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold text-primary">{report.price}</span>
                  <button className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                    View Details <ArrowRight className="w-4 h-4" />
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
