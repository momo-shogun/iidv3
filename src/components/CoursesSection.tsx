import { motion } from "framer-motion";
import { Clock, Users, ArrowRight, Star } from "lucide-react";

const courses = [
  {
    title: "Food Processing Technology",
    mode: "Online",
    duration: "8 Weeks",
    students: "2.5K+",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=220&fit=crop",
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
  },
  {
    title: "Manufacturing Setup Guide",
    mode: "Offline",
    duration: "4 Weeks",
    students: "1.2K+",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=220&fit=crop",
  },
];

export function CoursesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-10"
        >
          <div>
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Learn & Grow
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Courses & Certifications
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Industry-relevant courses designed by experts to help you succeed
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-4 md:mt-0 text-primary font-medium hover:underline"
          >
            View All Courses <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                    {course.mode}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium text-foreground">{course.rating}</span>
                    <span className="text-sm text-muted-foreground">({course.students} enrolled)</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                  </div>
                  <button className="w-full py-2.5 text-sm font-medium text-primary-foreground bg-primary rounded-xl hover:opacity-90 transition-opacity">
                    View Course
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
