import { motion } from "framer-motion";

const services = [
  {
    title: "Business Solutions",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
  },
  {
    title: "Project Reports",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&h=200&fit=crop",
  },
  {
    title: "Franchise",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=200&fit=crop",
  },
  {
    title: "Courses",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop",
  },
  {
    title: "Workshops",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop",
  },
  {
    title: "EDP Programs",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop",
  },
  {
    title: "Supplier Connect",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&h=200&fit=crop",
  },
  {
    title: "Industrial Services",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-primary/5 to-background">
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

        {/* Services Grid - Unstop Style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-5 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex-shrink-0 w-[140px] lg:w-auto group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-sky-50 to-blue-100 dark:from-primary/10 dark:to-primary/5 rounded-2xl p-4 h-full flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-sky-100 dark:border-primary/20">
                {/* Title on Top */}
                <h3 className="font-semibold text-sm text-foreground mb-3 leading-tight min-h-[40px] flex items-center">
                  {service.title}
                </h3>
                
                {/* Image Below */}
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/50 dark:bg-white/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
