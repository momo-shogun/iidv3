import { motion } from "framer-motion";
import { Clock, Star, ChevronLeft, ChevronRight, Users } from "lucide-react";
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
            Courses & <span className="text-primary">Certifications</span>
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
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-[280px] md:w-[320px] flex-shrink-0 group cursor-pointer"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 right-4 flex justify-between">
                      <span className="px-3 py-1.5 text-xs font-medium bg-white/95 backdrop-blur-sm rounded-full shadow-sm">
                        {course.mode}
                      </span>
                      {course.tag && (
                        <span className="px-3 py-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                          {course.tag}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    
                    {/* Rating & Students */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-semibold text-foreground">{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        {course.students} enrolled
                      </div>
                    </div>
                    
                    {/* Duration */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 pb-4 border-b border-border/50">
                      <Clock className="w-4 h-4 text-primary" />
                      {course.duration}
                    </div>
                    
                    <button className="w-full py-3 text-sm font-semibold text-primary bg-primary/10 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all">
                      Enroll Now
                    </button>
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
