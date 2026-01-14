import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import iidLogo from "@/assets/iid-logo.webp";

const menuItems = [
  {
    label: "Services",
    items: ["Business Solutions", "Industrial Services", "Consulting"],
  },
  {
    label: "Project Reports",
    items: ["Manufacturing", "Food Processing", "Agriculture", "MSME"],
  },
  {
    label: "Franchise",
    items: ["Franchise Consulting", "Franchise Opportunities"],
  },
  {
    label: "Courses",
    items: ["Online Courses", "Certifications", "Skill Development"],
  },
  {
    label: "Workshops",
    items: ["Upcoming Workshops", "Past Workshops", "Corporate Training"],
  },
  {
    label: "EDP Programs",
    items: ["Entrepreneurship Development", "Startup Programs", "MSME Training"],
  },
  {
    label: "Supplier Connect",
    items: ["Raw Materials", "Machinery", "Packaging", "Logistics"],
  },
];

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src={iidLogo} alt="IID Logo" className="h-10 lg:h-12 w-auto" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="nav-link flex items-center gap-1 px-3 py-2 text-sm font-medium">
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-card rounded-xl shadow-xl border border-border p-2 min-w-[200px]">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <Search className="w-5 h-5 text-foreground/70" />
            </button>
            <a
              href="#"
              className="px-5 py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-xl hover:opacity-90 transition-opacity"
            >
              Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
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
            className="lg:hidden border-t border-border bg-background"
          >
            <div className="container py-4 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <a
                  href="#"
                  className="block w-full px-4 py-3 text-center font-semibold text-primary-foreground bg-primary rounded-xl"
                >
                  Login
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
