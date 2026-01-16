import { motion } from "framer-motion";
import { Users, FileCheck, Calendar, MapPin, Award } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "33+",
    label: "Years of Experience",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Entrepreneurs Supported",
  },
  {
    icon: FileCheck,
    value: "5K+",
    label: "Projects Delivered",
  },
  {
    icon: Calendar,
    value: "3K+",
    label: "Workshops Conducted",
  },
  {
    icon: MapPin,
    value: "28+",
    label: "States Covered",
  },
];

export function StatsSection() {
  return (
    <section className="py-8 lg:py-12 bg-gradient-to-r from-primary via-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
            IID at a Glance
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto">
            Three decades of empowering entrepreneurs and building businesses across India
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm mb-3 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <p className="text-xs md:text-sm text-white/80 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
