import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import iidLogo from "@/assets/iid-logo.webp";
import { TextHoverEffect } from "./ui/text-hover-effect";

const footerLinks = {
  services: [
    { label: "Business Solutions", link: "/services/business-solutions" },
    { label: "Project Reports", link: "/project-reports" },
    { label: "Franchise Consulting", link: "/franchise" },
    { label: "Industrial Services", link: "/services/industrial" },
  ],
  programs: [
    { label: "Courses", link: "/courses" },
    { label: "Workshops", link: "/workshops" },
    { label: "EDP Programs", link: "/edp-programs" },
    { label: "Supplier Connect", link: "/supplier-connect" },
  ],
  company: [
    { label: "About IID", link: "/about" },
    { label: "Our Team", link: "/team" },
    { label: "Careers", link: "/careers" },
    { label: "Contact Us", link: "/contact" },
  ],
  resources: [
    { label: "Blog", link: "/blog" },
    { label: "Success Stories", link: "/success-stories" },
    { label: "FAQs", link: "/faqs" },
    { label: "Support", link: "/support" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/iidorg", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/iidorg", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/iid", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@iid", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/iidorg", label: "Instagram" },
];

export function Footer() {
  return (
    <>
      <footer className="relative bg-[#0a1628] border-t border-white/10">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0f1729] to-[#0a1628] pointer-events-none" />
        
        <div className="container relative pt-12 md:pt-16 lg:pt-20 pb-0 px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16">
            {/* Brand Column - Wider */}
            <div className="sm:col-span-2 lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link to="/" className="inline-block mb-4 md:mb-6">
                  <img src={iidLogo} alt="IID Logo" className="h-10 md:h-12 w-auto brightness-0 invert" />
                </Link>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 md:mb-8 max-w-md">
                  Building entrepreneurship across India since 1993. Empowering entrepreneurs with knowledge, resources, and connections to transform ideas into successful businesses.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <motion.a
                    href="tel:+911123632810"
                    className="flex items-center gap-2 md:gap-3 text-slate-300 hover:text-white transition-colors group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="p-1.5 md:p-2 rounded-lg bg-white/10 group-hover:bg-[#004198] group-hover:text-white transition-colors">
                      <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium">+91-11-23632810</span>
                  </motion.a>
                  <motion.a
                    href="mailto:info@iid.org.in"
                    className="flex items-center gap-2 md:gap-3 text-slate-300 hover:text-white transition-colors group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="p-1.5 md:p-2 rounded-lg bg-white/10 group-hover:bg-[#004198] group-hover:text-white transition-colors">
                      <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium break-all">info@iid.org.in</span>
                  </motion.a>
                  <div className="flex items-start gap-2 md:gap-3 text-slate-300">
                    <div className="p-1.5 md:p-2 rounded-lg bg-white/10 flex-shrink-0">
                      <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium">New Delhi, India</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-2 md:gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 md:p-2.5 rounded-lg border border-white/10 bg-white/5 hover:border-[#004198] hover:bg-[#004198] hover:text-white transition-all group min-w-[44px] min-h-[44px] flex items-center justify-center"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4 md:mb-6 text-xs sm:text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.link}
                      className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group min-h-[44px]"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold text-white mb-4 md:mb-6 text-xs sm:text-sm uppercase tracking-wider">Programs</h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.programs.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.link}
                      className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group min-h-[44px]"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-semibold text-white mb-4 md:mb-6 text-xs sm:text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.link}
                      className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group min-h-[44px]"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="font-semibold text-white mb-4 md:mb-6 mt-6 md:mt-8 text-xs sm:text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.link}
                      className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group min-h-[44px]"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar - Editorial Style */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 md:mt-16 pt-6 md:pt-8 border-t border-white/10 pb-6 md:pb-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
              <p className="text-[10px] sm:text-xs text-slate-500 text-center md:text-left">
                © {new Date().getFullYear()} Institute for Industrial Development. All rights reserved.
              </p>
              <div className="flex items-center gap-4 md:gap-6 text-[10px] sm:text-xs text-slate-500">
                <Link to="/privacy" className="hover:text-white transition-colors min-h-[44px] flex items-center">
                  Privacy Policy
                </Link>
                <span className="text-slate-600">|</span>
                <Link to="/terms" className="hover:text-white transition-colors min-h-[44px] flex items-center">
                  Terms of Service
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Text Hover Effect Section - Overlapping */}
      {/* <section className="relative bg-black overflow-hidden -mt-32 lg:-mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-black" />
        <div className="container relative pt-32 lg:pt-40 pb-12 lg:pb-16">
          <div className="h-[200px] lg:h-[300px] flex items-center justify-center">
            <TextHoverEffect 
              text="IID" 
              duration={0.3}
              className="w-full h-full"
            />
          </div>
        </div>
      </section> */}
    </>
  );
}
