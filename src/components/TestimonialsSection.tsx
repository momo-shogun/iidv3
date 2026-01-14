import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    business: "Fresh Foods Pvt. Ltd.",
    location: "Uttar Pradesh",
    quote: "IID's project report helped me secure bank funding for my food processing unit. Their guidance was invaluable.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    business: "Sharma Industries",
    location: "Rajasthan",
    quote: "The EDP program completely transformed my understanding of business. Now running a successful manufacturing unit.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Amit Patel",
    business: "Patel Agro Products",
    location: "Gujarat",
    quote: "From project report to supplier connections, IID provided end-to-end support for my agro processing business.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 surface-gradient">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entrepreneurs We've Empowered
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from real entrepreneurs who built their dreams with IID
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border/50 shadow-card"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.business}, {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
