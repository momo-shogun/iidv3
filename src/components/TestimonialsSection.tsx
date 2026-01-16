import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    business: "Fresh Foods Pvt. Ltd.",
    location: "Uttar Pradesh",
    quote: "IID's project report helped me secure bank funding for my food processing unit. Their guidance was invaluable.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    business: "Sharma Industries",
    location: "Rajasthan",
    quote: "The EDP program completely transformed my understanding of business. Now running a successful manufacturing unit.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Amit Patel",
    business: "Patel Agro Products",
    location: "Gujarat",
    quote: "From project report to supplier connections, IID provided end-to-end support for my agro processing business.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    business: "Devi Dairy Farm",
    location: "Bihar",
    quote: "Started my dairy business with IID's workshop training. Now supplying milk products to 5 districts.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        {/* Section Header - Unstop Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Success <span className="text-primary">Stories</span>
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-full bg-muted hover:bg-primary/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-full bg-muted hover:bg-primary/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
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
            className="flex gap-6 pb-4"
            style={{ minWidth: "max-content" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-[360px] md:w-[400px] flex-shrink-0"
              >
                <div className="bg-card rounded-2xl p-7 border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-1 w-8 h-8 text-primary/20" />
                    <p className="text-foreground text-lg leading-relaxed pl-6">
                      {testimonial.quote}
                    </p>
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-4 ring-primary/10"
                    />
                    <div>
                      <h4 className="font-bold text-foreground text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.business}
                      </p>
                      <p className="text-xs text-primary">
                        {testimonial.location}
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
