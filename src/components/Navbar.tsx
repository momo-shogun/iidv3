import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, Briefcase, FileText, Building2, Banknote, PiggyBank, Landmark, Wrench, Factory, MessageSquare, GraduationCap, Award, BookOpen, Users, Presentation, Building } from "lucide-react";
import { Link } from "react-router-dom";
import iidLogo from "@/assets/iid-logo.webp";
import MegaMenu, { MegaMenuItem } from "./ui/mega-menu";

const NAV_ITEMS: MegaMenuItem[] = [
  {
    id: 1,
    label: "Business Solution",
    highlight: true,
    subMenus: [
      {
        title: "Resources",
        items: [
          {
            label: "Business Documentories",
            description: "Watch success stories & insights",
            icon: Briefcase,
            link: "/business-documentories",
          },
          {
            label: "Expert Talks",
            description: "Learn from industry experts",
            icon: MessageSquare,
            link: "/expert-talks",
          },
          {
            label: "Project Reports",
            description: "Detailed business project reports",
            icon: FileText,
            link: "/project-reports",
          },
        ],
      },
      {
        title: "Connect",
        items: [
          {
            label: "Govt Schemes",
            description: "Explore government benefits",
            icon: Landmark,
            link: "/govt-schemes",
          },
          {
            label: "Expert/Supplier Connect",
            description: "Connect with verified partners",
            icon: Users,
            link: "/supplier-connect",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Franchise",
    subMenus: [
      {
        title: "Franchise Services",
        items: [
          {
            label: "Franchise Consulting",
            description: "Expert franchise guidance",
            icon: Building2,
            link: "/franchise",
          },
          {
            label: "Franchise Opportunities",
            description: "Explore franchise options",
            icon: Building,
            link: "/franchise/opportunities",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Funding",
    subMenus: [
      {
        title: "Funding Options",
        items: [
          {
            label: "Bank Loans",
            description: "Business loan assistance",
            icon: Banknote,
            link: "/funding/bank-loans",
          },
          {
            label: "Venture Capital",
            description: "Connect with investors",
            icon: PiggyBank,
            link: "/funding/venture-capital",
          },
          {
            label: "Government Grants",
            description: "Access govt funding schemes",
            icon: Landmark,
            link: "/funding/govt-grants",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Service",
    subMenus: [
      {
        title: "Our Services",
        items: [
          {
            label: "Business Solutions",
            description: "Complete business support",
            icon: Wrench,
            link: "/services/business-solutions",
          },
          {
            label: "Industrial Services",
            description: "Manufacturing & industry support",
            icon: Factory,
            link: "/services/industrial-services",
          },
          {
            label: "Consulting",
            description: "Expert business consulting",
            icon: MessageSquare,
            link: "/services/consulting",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: "Courses",
    subMenus: [
      {
        title: "Learning Programs",
        items: [
          {
            label: "Online Courses",
            description: "Learn at your own pace",
            icon: GraduationCap,
            link: "/courses",
          },
          {
            label: "Certifications",
            description: "Get certified & recognized",
            icon: Award,
            link: "/courses/certifications",
          },
          {
            label: "Skill Development",
            description: "Enhance your skills",
            icon: BookOpen,
            link: "/courses/skill-development",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    label: "Mentorship",
    subMenus: [
      {
        title: "Training Programs",
        items: [
          {
            label: "EDP Programs",
            description: "Entrepreneurship development",
            icon: Users,
            link: "/edp-programs",
          },
          {
            label: "Workshops",
            description: "Hands-on learning sessions",
            icon: Presentation,
            link: "/workshops",
          },
          {
            label: "Corporate Training",
            description: "Custom corporate programs",
            icon: Building2,
            link: "/workshops/corporate",
          },
        ],
      },
    ],
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a1628] border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 relative z-10">
            <img src={iidLogo} alt="IID Logo" className="h-10 lg:h-12 w-auto brightness-0 invert" />
          </Link>

          {/* Desktop Menu - MegaMenu */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <MegaMenu items={NAV_ITEMS} />
          </div>

          {/* Right Section - Login Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/login"
              className="group relative flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full overflow-hidden transition-all duration-300"
            >
              {/* Button background with gradient border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00B287] to-[#004198] p-[1.5px]">
                <div className="h-full w-full rounded-full bg-[#0a1628] group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <User className="relative z-10 w-4 h-4 text-white" />
              <span className="relative z-10 text-white">Login/Register</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
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
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-white/10 bg-[#0a1628]"
          >
            <div className="container py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <button
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                      item.highlight 
                        ? "bg-[#00B287]/10 text-[#00B287]" 
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                    onClick={() => setExpandedMobile(expandedMobile === item.label ? null : item.label)}
                  >
                    <span className="font-medium">{item.label}</span>
                    {item.subMenus && (
                      <motion.div
                        animate={{ rotate: expandedMobile === item.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-4 h-4" />
                      </motion.div>
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {expandedMobile === item.label && item.subMenus && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 space-y-1">
                          {item.subMenus.flatMap((sub) => 
                            sub.items.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.link}
                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <subItem.icon className="w-4 h-4 text-[#00B287]" />
                                {subItem.label}
                              </Link>
                            ))
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/login"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-center font-semibold bg-gradient-to-r from-[#00B287] to-[#004198] text-white rounded-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="w-4 h-4" />
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
