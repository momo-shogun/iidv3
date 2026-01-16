import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    title: "Founder, Fresh Foods Pvt. Ltd.",
    quote: "IID's project report helped me secure bank funding for my food processing unit. Their guidance was invaluable throughout the entire process.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    title: "CEO, Sharma Industries",
    quote: "The EDP program completely transformed my understanding of business. Now running a successful manufacturing unit with confidence.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Amit Patel",
    title: "Managing Director, Patel Agro Products",
    quote: "From project report to supplier connections, IID provided end-to-end support for my agro processing business. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Sunita Devi",
    title: "Owner, Devi Dairy Farm",
    quote: "Started my dairy business with IID's workshop training. Now supplying milk products to 5 districts and growing every day.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Vikram Singh",
    title: "Entrepreneur, Singh Exports",
    quote: "IID's export-import guidance helped me expand my business internationally. The team is extremely helpful and cares about feedback.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Meera Reddy",
    title: "Founder, Reddy Textiles",
    quote: "All my business documentation and compliance needs are now handled seamlessly with IID's support. Big fan of their comprehensive approach!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
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
    <section className="py-10 lg:py-14 bg-gradient-to-r from-primary via-primary to-secondary relative overflow-hidden">
      {/* Background Pattern - subtle */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Success Stories
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors border border-white/20"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors border border-white/20"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-white" />
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
                className="w-[340px] md:w-[380px] flex-shrink-0"
              >
                <div className="bg-[#e8ebe8] rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-gray-400" />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-800 text-base leading-relaxed mb-8 flex-grow">
                    {testimonial.quote}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.title}
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
