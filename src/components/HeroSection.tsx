import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, ArrowRight, Star, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const quickActions = [
  { label: "Company Registration", link: "/services/business-solutions" },
  { label: "Project Reports", link: "/project-reports" },
  { label: "Tax & Compliance", link: "/services/consulting" },
  { label: "Franchise", link: "/franchise" },
];

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-white/30 rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full" />
      </div>

      <div className="container relative py-12 lg:py-20">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-white/50" />
              <div className="w-8 h-8 rounded-full bg-accent/30 border-2 border-white/50" />
              <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-white/50" />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium">4.8/5</span>
              <span className="text-white/60 text-sm">(10k+ Reviews)</span>
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Build Your Business with Passion.
            <br />
            <span className="text-primary">Run It Smarter with IID.</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Simplifying Business Setup, Compliance & Growth, the{" "}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/20 rounded text-primary font-medium">
              <Sparkles className="w-4 h-4" />
              AI-Driven
            </span>{" "}
            Way. Trusted by thousands.
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-6"
        >
          <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Search className="w-5 h-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Try Search..."
              className="w-full pl-12 pr-32 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
              Search
            </button>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {quickActions.map((action) => (
            <Link
              key={action.label}
              to={action.link}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white/90 rounded-full text-sm font-medium transition-colors border border-white/20"
            >
              {action.label}
            </Link>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          <Link to="/services/business-solutions" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1 group-hover:text-primary transition-colors">Start Your Business →</h3>
                <p className="text-white/60 text-sm">Expert guidance for company registration, GST, and more.</p>
              </div>
            </div>
          </Link>
          
          <Link to="/services/consulting" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-accent/20 rounded-lg">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1 group-hover:text-accent transition-colors">Manage Your Business →</h3>
                <p className="text-white/60 text-sm">Stay compliant with tax filings, audits, and legal services.</p>
              </div>
            </div>
          </Link>
          
          <Link to="/franchise" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <ArrowRight className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1 group-hover:text-orange-400 transition-colors">Protect Your Business →</h3>
                <p className="text-white/60 text-sm">Trademark registration, IP protection, and legal documentation.</p>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Trust Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-center text-white/40 text-sm mb-6">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["MSME", "Startup India", "SIDBI", "NABARD", "NSIC"].map((name) => (
              <div key={name} className="text-white/80 font-semibold text-lg">{name}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
