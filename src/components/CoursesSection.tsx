import { motion } from "framer-motion";
import { Clock, ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const courses = [
  {
    title: "Food Processing Technology",
    mode: "Online",
    duration: "8 Weeks",
    students: "2.5K+",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=220&fit=crop",
    tag: "Bestseller",
  },
  {
    title: "MSME Management & Compliance",
    mode: "Hybrid",
    duration: "6 Weeks",
    students: "1.8K+",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=220&fit=crop",
  },
  {
    title: "Export-Import Business",
    mode: "Online",
    duration: "10 Weeks",
    students: "3.2K+",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=220&fit=crop",
    tag: "New",
  },
  {
    title: "Manufacturing Setup Guide",
    mode: "Offline",
    duration: "4 Weeks",
    students: "1.2K+",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=220&fit=crop",
  },
  {
    title: "Dairy Processing Business",
    mode: "Online",
    duration: "6 Weeks",
    students: "980+",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=220&fit=crop",
  },
];

export function CoursesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 lg:py-16">
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
                Courses & Certifications
              </h2>
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              Industry-relevant courses designed by experts
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
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
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-[280px] md:w-[300px] flex-shrink-0 group cursor-pointer"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full">
                      {course.mode}
                    </span>
                    {course.tag && (
                      <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                        {course.tag}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium text-foreground">{course.rating}</span>
                      <span className="text-xs text-muted-foreground">({course.students})</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {course.duration}
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
