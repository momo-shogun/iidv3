import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GraduationCap, Clock, Users, Star, Play, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Entrepreneurship Development Program",
    category: "Business",
    duration: "12 Weeks",
    students: "5,000+",
    rating: 4.8,
    price: "₹15,000",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
  },
  {
    title: "Project Report Writing Masterclass",
    category: "Skills",
    duration: "6 Weeks",
    students: "3,200+",
    rating: 4.9,
    price: "₹8,000",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
  },
  {
    title: "GST & Taxation for Entrepreneurs",
    category: "Finance",
    duration: "4 Weeks",
    students: "4,500+",
    rating: 4.7,
    price: "₹6,000",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
  },
  {
    title: "MSME Startup Bootcamp",
    category: "Business",
    duration: "8 Weeks",
    students: "2,800+",
    rating: 4.8,
    price: "₹12,000",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
  },
  {
    title: "Digital Marketing for Small Business",
    category: "Marketing",
    duration: "6 Weeks",
    students: "6,100+",
    rating: 4.6,
    price: "₹10,000",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
  {
    title: "Financial Planning & Analysis",
    category: "Finance",
    duration: "8 Weeks",
    students: "1,900+",
    rating: 4.9,
    price: "₹14,000",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
  },
];

const categories = ["All", "Business", "Finance", "Marketing", "Skills"];

export default function Courses() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Learn from Industry Experts
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Skill Up with IID Courses
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Industry-relevant courses designed by experts to help you master entrepreneurship, business, and technical skills.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
                    cat === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Courses Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary hover:shadow-xl transition-all group"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {course.category}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-4 bg-white rounded-full">
                      <Play className="w-6 h-6 text-primary fill-primary" />
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-foreground">{course.rating}</span>
                    </div>
                    <span className="text-xl font-bold text-primary">{course.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-muted-foreground mb-8">
            Request a custom training program for your team or organization.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
            Request Custom Training
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
