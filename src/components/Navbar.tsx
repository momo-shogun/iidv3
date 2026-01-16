import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";
import iidLogo from "@/assets/iid-logo.webp";

const menuItems = [
  {
    label: "Business Solution",
    highlight: true,
    items: [
      { name: "Business Documentories", link: "/business-documentories" },
      { name: "Expert Talks", link: "/expert-talks" },
      { name: "Project Reports", link: "/project-reports" },
      { name: "Govt Schemes", link: "/govt-schemes" },
      { name: "Expert/Supplier Connect", link: "/supplier-connect" },
    ],
  },
  {
    label: "Franchise",
    items: [
      { name: "Franchise Consulting", link: "/franchise" },
      { name: "Franchise Opportunities", link: "/franchise/opportunities" },
    ],
  },
  {
    label: "Funding",
    items: [
      { name: "Bank Loans", link: "/funding/bank-loans" },
      { name: "Venture Capital", link: "/funding/venture-capital" },
      { name: "Government Grants", link: "/funding/govt-grants" },
    ],
  },
  {
    label: "Service",
    items: [
      { name: "Business Solutions", link: "/services/business-solutions" },
      { name: "Industrial Services", link: "/services/industrial-services" },
      { name: "Consulting", link: "/services/consulting" },
    ],
  },
  {
    label: "Courses",
    items: [
      { name: "Online Courses", link: "/courses" },
      { name: "Certifications", link: "/courses/certifications" },
      { name: "Skill Development", link: "/courses/skill-development" },
    ],
  },
  {
    label: "Mentorship",
    items: [
      { name: "EDP Programs", link: "/edp-programs" },
      { name: "Workshops", link: "/workshops" },
      { name: "Corporate Training", link: "/workshops/corporate" },
    ],
  },
];

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-secondary text-secondary-foreground">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={iidLogo} alt="IID Logo" className="h-10 lg:h-12 w-auto brightness-0 invert" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${item.highlight
                    ? "bg-primary text-primary-foreground rounded-lg mx-1"
                    : "text-secondary-foreground/90 hover:text-white"
                    }`}
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === item.label ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-card rounded-xl shadow-xl border border-border p-2 min-w-[220px]">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.link}
                            className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/login"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-white text-secondary rounded-lg hover:bg-white/90 transition-colors"
            >
              <User className="w-4 h-4" />
              Login/Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 bg-secondary"
          >
            <div className="container py-4 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.items[0].link}
                  className="block px-4 py-3 text-secondary-foreground/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/login"
                  className="block w-full px-4 py-3 text-center font-semibold bg-white text-secondary rounded-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login/Register
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
