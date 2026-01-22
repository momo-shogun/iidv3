import { motion } from "framer-motion";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";

const testimonials = [
  {
    text: "IID's project report helped me secure bank funding for my food processing unit. Their guidance was invaluable throughout the entire process.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    name: "Rajesh Kumar",
    role: "Founder, Fresh Foods Pvt. Ltd.",
  },
  {
    text: "The EDP program completely transformed my understanding of business. Now running a successful manufacturing unit with confidence.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    name: "Priya Sharma",
    role: "CEO, Sharma Industries",
  },
  {
    text: "From project report to supplier connections, IID provided end-to-end support for my agro processing business. Highly recommended!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    name: "Amit Patel",
    role: "Managing Director, Patel Agro Products",
  },
  {
    text: "Started my dairy business with IID's workshop training. Now supplying milk products to 5 districts and growing every day.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    name: "Sunita Devi",
    role: "Owner, Devi Dairy Farm",
  },
  {
    text: "IID's export-import guidance helped me expand my business internationally. The team is extremely helpful and cares about feedback.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    name: "Vikram Singh",
    role: "Entrepreneur, Singh Exports",
  },
  {
    text: "All my business documentation and compliance needs are now handled seamlessly with IID's support. Big fan of their comprehensive approach!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    name: "Meera Reddy",
    role: "Founder, Reddy Textiles",
  },
  {
    text: "IID's mentorship program gave me the confidence to start my own business. Their expert guidance made all the difference in my entrepreneurial journey.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    name: "Rahul Mehta",
    role: "Founder, Mehta Enterprises",
  },
  {
    text: "The government schemes guidance from IID helped me access funding I didn't know existed. Truly grateful for their support.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    name: "Kavita Nair",
    role: "Director, Nair Textiles",
  },
  {
    text: "IID's franchise consulting helped me make the right decision. Now running a successful franchise with their ongoing support.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
    name: "Arjun Desai",
    role: "Franchise Owner",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 overflow-hidden">
      {/* Background Effects (inspired by SupplierSection) */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-300/30 to-green-300/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-7xl relative z-10">
        {/* Section Header - Editorial Style (inspired by WorkshopsSection) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="border border-slate-300 py-1 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-600">
              Testimonials
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 text-center">
            What Our Entrepreneurs Say
          </h2>
          <p className="text-center mt-4 text-slate-600 text-sm md:text-base max-w-2xl">
            See what our customers have to say about their journey with IID.
          </p>
        </motion.div>

        {/* Animated Testimonials Columns */}
        <div className="flex justify-center gap-4 md:gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
