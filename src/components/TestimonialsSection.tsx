import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useRef } from "react";

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
  {
    name: "Sunita Devi",
    business: "Devi Dairy Farm",
    location: "Bihar",
    quote: "Started my dairy business with IID's workshop training. Now supplying milk products to 5 districts.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 lg:py-16 surface-gradient">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-6 bg-primary rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Success Stories
              </h2>
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              Real stories from entrepreneurs we've empowered
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-border bg-background hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-border bg-background hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2 ml-4 text-primary font-medium hover:underline"
            >
              View All <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="overflow-x-auto hide-scrollbar -mx-4 px-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-5 pb-4"
            style={{ minWidth: "max-content" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-[340px] md:w-[360px] flex-shrink-0"
              >
                <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-card h-full">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
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
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
