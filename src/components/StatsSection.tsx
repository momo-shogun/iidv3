import { motion } from "framer-motion";
import { Users, FileCheck, Calendar, MapPin, Award } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "33+",
    label: "Years of Experience",
    suffix: "",
  },
  {
    icon: Users,
    value: "50",
    label: "Entrepreneurs Supported",
    suffix: "K+",
  },
  {
    icon: FileCheck,
    value: "5",
    label: "Projects Delivered",
    suffix: "K+",
  },
  {
    icon: Calendar,
    value: "3",
    label: "Workshops Conducted",
    suffix: "K+",
  },
  {
    icon: MapPin,
    value: "28",
    label: "States Covered",
    suffix: "+",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 lg:py-24 hero-gradient">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            IID at a Glance
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Three decades of empowering entrepreneurs and building businesses across India
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-foreground/10 mb-4">
                <stat.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
                <span className="text-2xl md:text-3xl">{stat.suffix}</span>
              </div>
              <p className="text-sm text-primary-foreground/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
