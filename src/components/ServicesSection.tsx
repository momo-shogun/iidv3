import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Building2, 
  Landmark, 
  Wallet, 
  GraduationCap, 
  Store, 
  Users,
  Truck,
  ArrowRight
} from "lucide-react";
import { FeatureCard } from "./ui/grid-feature-cards";

const services = [
  {
    title: "Project Reports",
    description: "Detailed business & industry reports",
    icon: FileText,
    link: "/project-reports",
    color: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Business Setup",
    description: "End-to-end company formation",
    icon: Building2,
    link: "/services/business-solutions",
    color: "from-[#004198] to-[#121E8B]",
    iconBg: "bg-[#004198]/10",
    iconColor: "text-[#004198]",
  },
  {
    title: "Govt Schemes",
    description: "Access government benefits",
    icon: Landmark,
    link: "/govt-schemes",
    color: "from-[#008F69] to-[#00B287]",
    iconBg: "bg-[#008F69]/10",
    iconColor: "text-[#008F69]",
  },
  {
    title: "Funding",
    description: "Loans, grants & investments",
    icon: Wallet,
    link: "/funding",
    color: "from-purple-500 to-purple-600",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Courses",
    description: "Skill development programs",
    icon: GraduationCap,
    link: "/courses",
    color: "from-orange-500 to-orange-600",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Franchise",
    description: "Franchise opportunities",
    icon: Store,
    link: "/franchise",
    color: "from-cyan-500 to-cyan-600",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    title: "Mentorship",
    description: "Expert guidance & EDP",
    icon: Users,
    link: "/edp-programs",
    color: "from-green-500 to-green-600",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Supplier Connect",
    description: "Verified vendor network",
    icon: Truck,
    link: "/supplier-connect",
    color: "from-indigo-500 to-indigo-600",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-200/20 to-green-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl relative z-10">
        {/* Section Header - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 border-b border-slate-200 pb-6"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#008F69] mb-2">
              What We Offer
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Our Services
            </h2>
          </div>
          <Link 
            to="/services" 
            className="group flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#004198] transition-colors"
          >
            View all services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Services Grid - Enhanced with Colors */}
        <AnimatedContainer
          delay={0.2}
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-dashed border border-dashed border-slate-200/60"
        >
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group transition-all hover:bg-gradient-to-br hover:from-white hover:to-slate-50/50 relative"
            >
              <div className="relative overflow-hidden p-6 h-full">
                {/* Colorful Accent on Hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                {/* Icon with Colorful Background */}
                <div className={`inline-flex items-center justify-center w-12 h-12 ${service.iconBg} rounded-xl mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                  <service.icon className={`${service.iconColor} size-6`} strokeWidth={1.5} aria-hidden />
                </div>
                
                <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-2 group-hover:text-[#004198] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 relative z-20 text-xs font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Subtle gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
              </div>
            </Link>
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
