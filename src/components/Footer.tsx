import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import iidLogo from "@/assets/iid-logo.webp";

const footerLinks = {
  services: [
    "Business Solutions",
    "Project Reports",
    "Franchise Consulting",
    "Industrial Services",
  ],
  programs: [
    "Courses",
    "Workshops",
    "EDP Programs",
    "Supplier Connect",
  ],
  company: [
    "About IID",
    "Our Team",
    "Careers",
    "Contact Us",
  ],
  resources: [
    "Blog",
    "Success Stories",
    "FAQs",
    "Support",
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Instagram, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <img src={iidLogo} alt="IID Logo" className="h-12 mb-6 brightness-0 invert" />
            <p className="text-secondary-foreground/70 mb-6 max-w-xs">
              Building entrepreneurship across India since 1993. Empowering entrepreneurs with knowledge, resources, and connections.
            </p>
            <div className="space-y-3 text-sm text-secondary-foreground/70">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+91-11-23632810</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>info@iid.org.in</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-secondary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              {footerLinks.programs.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-secondary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-secondary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-secondary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © 2026 Institute for Industrial Development. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-2 rounded-lg bg-secondary-foreground/10 hover:bg-secondary-foreground/20 transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
