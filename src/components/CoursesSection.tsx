import { motion } from "framer-motion";
import { Clock, Star, ChevronLeft, ChevronRight, Users, PlayCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { useRef } from "react";

const courses = [
  {
    title: "Food Processing Technology",
    mode: "Online",
    duration: "8 Weeks",
    students: "2.5K+",
    rating: 4.8,
    modules: 9,
    description: "In this course, you will learn advanced food processing techniques, safety standards, and quality control measures.",
    gradient: "from-pink-500 via-pink-600 to-rose-600",
    tag: "Bestseller",
  },
  {
    title: "MSME Management & Compliance",
    mode: "Hybrid",
    duration: "6 Weeks",
    students: "1.8K+",
    rating: 4.9,
    modules: 7,
    description: "Gain a deep understanding of MSME regulations, compliance requirements, and business management strategies.",
    gradient: "from-red-500 via-red-600 to-orange-700",
  },
  {
    title: "Export-Import Business",
    mode: "Online",
    duration: "10 Weeks",
    students: "3.2K+",
    rating: 4.7,
    modules: 12,
    description: "Master the fundamentals of international trade, documentation, logistics, and export-import procedures.",
    gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    tag: "New",
  },
  {
    title: "Manufacturing Setup Guide",
    mode: "Offline",
    duration: "4 Weeks",
    students: "1.2K+",
    rating: 4.8,
    modules: 6,
    description: "Learn complete manufacturing setup process, machinery selection, and operational excellence strategies.",
    gradient: "from-green-600 via-emerald-700 to-teal-800",
  },
  {
    title: "Dairy Processing Business",
    mode: "Online",
    duration: "6 Weeks",
    students: "980+",
    rating: 4.6,
    modules: 8,
    description: "Comprehensive guide to dairy processing, quality control, distribution, and building a successful dairy business.",
    gradient: "from-blue-600 via-indigo-600 to-purple-700",
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
    <section className="py-10 lg:py-14 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="border-l-4 border-primary pl-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              AI-Powered Courses
            </h2>
            <p className="text-muted-foreground mt-2">
              Unfold your potential through AI-designed, expert-validated courses.
            </p>
          </div>
          <div className="flex items-center gap-3 justify-end">
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
                className="w-[300px] md:w-[340px] flex-shrink-0 group cursor-pointer"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  {/* Gradient Header with "with AI" badge */}
                  <div className={`relative h-36 bg-gradient-to-br ${course.gradient} overflow-hidden`}>
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full" />
                      <div className="absolute bottom-2 left-4 text-white/20">
                        <Sparkles className="w-8 h-8" />
                      </div>
                    </div>
                    
                    {/* Course Title & Badge */}
                    <div className="absolute top-4 left-4 right-4">
                      <h3 className="font-bold text-xl text-white mb-2 line-clamp-2">
                        {course.title}
                      </h3>
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                        <Sparkles className="w-3 h-3 text-white" />
                        <span className="text-xs font-semibold text-white italic">with AI</span>
                      </div>
                    </div>

                    {/* Tag Badge */}
                    {course.tag && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-semibold bg-white/90 text-gray-800 rounded-lg shadow-sm">
                          {course.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 bg-white">
                    {/* Modules */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <PlayCircle className="w-4 h-4" />
                      <span>{course.modules} Modules</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                      {course.description}
                    </p>
                    
                    {/* View Course Button */}
                    <button className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-muted-foreground bg-white border border-border rounded-xl hover:border-primary hover:text-primary hover:bg-primary/5 transition-all group/btn">
                      <span>View Course</span>
                      <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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
