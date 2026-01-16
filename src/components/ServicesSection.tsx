import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Building2, 
  Landmark, 
  Wallet, 
  GraduationCap, 
  Store, 
  Users,
  Truck
} from "lucide-react";

const services = [
  {
    title: "Project Reports",
    icon: FileText,
    color: "bg-blue-500",
    link: "/project-reports",
  },
  {
    title: "Business Setup",
    icon: Building2,
    color: "bg-orange-500",
    link: "/services/business-solutions",
  },
  {
    title: "Govt Schemes",
    icon: Landmark,
    color: "bg-green-500",
    link: "/govt-schemes",
  },
  {
    title: "Funding",
    icon: Wallet,
    color: "bg-amber-500",
    link: "/funding",
  },
  {
    title: "Courses",
    icon: GraduationCap,
    color: "bg-pink-500",
    link: "/courses",
  },
  {
    title: "Franchise",
    icon: Store,
    color: "bg-cyan-500",
    link: "/franchise",
  },
  {
    title: "Mentorship",
    icon: Users,
    color: "bg-rose-500",
    link: "/edp-programs",
  },
  {
    title: "Supplier Connect",
    icon: Truck,
    color: "bg-violet-500",
    link: "/supplier-connect",
  },
];

export function ServicesSection() {
  return (
    <section className="py-10 lg:py-14 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Explore <span className="text-primary">IID Services</span>
          </h2>
        </motion.div>

        {/* Services Grid - Vakilsearch Style with colorful icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={service.link}
                  className="group flex flex-col items-center p-5 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  {/* Icon with colored background */}
                  <div className={`${service.color} p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-medium text-sm text-foreground text-center leading-tight">
                    {service.title}
                  </h3>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
