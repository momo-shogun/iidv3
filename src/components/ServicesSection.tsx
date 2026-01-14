import { motion } from "framer-motion";
import {
  Briefcase,
  FileText,
  Building2,
  Factory,
  GraduationCap,
  Users,
  Lightbulb,
  Truck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Solutions",
    description: "Complete business setup and consulting services for entrepreneurs",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: FileText,
    title: "Project Reports",
    description: "Customized bankable project reports for MSME and industrial ventures",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Building2,
    title: "Franchise Consulting",
    description: "Expert guidance on franchise opportunities and business models",
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: Factory,
    title: "Industrial Services",
    description: "End-to-end industrial setup, compliance, and operational support",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: GraduationCap,
    title: "Courses & Certifications",
    description: "Industry-relevant courses to enhance your business skills",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Users,
    title: "Workshops & Training",
    description: "Hands-on workshops by industry experts across India",
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    icon: Lightbulb,
    title: "EDP Programs",
    description: "Entrepreneurship development programs for aspiring business owners",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Truck,
    title: "Supplier Connect",
    description: "Connect with verified suppliers for raw materials and machinery",
    color: "bg-indigo-500/10 text-indigo-600",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore IID Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for entrepreneurs at every stage of their business journey
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="service-card group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
