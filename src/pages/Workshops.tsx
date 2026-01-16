import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const workshops = [
  {
    title: "MSME Business Startup Workshop",
    date: "25-26 Jan 2026",
    location: "New Delhi",
    mode: "Offline",
    seats: 50,
    price: "₹2,999",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
  },
  {
    title: "Project Report Writing Bootcamp",
    date: "1-2 Feb 2026",
    location: "Online",
    mode: "Online",
    seats: 100,
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop",
  },
  {
    title: "Government Schemes for Entrepreneurs",
    date: "8-9 Feb 2026",
    location: "Mumbai",
    mode: "Offline",
    seats: 75,
    price: "₹3,499",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
  },
  {
    title: "Franchise Business Model Workshop",
    date: "15 Feb 2026",
    location: "Bangalore",
    mode: "Hybrid",
    seats: 60,
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=250&fit=crop",
  },
  {
    title: "Export-Import Business Masterclass",
    date: "22-23 Feb 2026",
    location: "Online",
    mode: "Online",
    seats: 150,
    price: "₹1,999",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop",
  },
  {
    title: "Industrial Project Planning",
    date: "1 Mar 2026",
    location: "Ahmedabad",
    mode: "Offline",
    seats: 40,
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
  },
];

export default function Workshops() {
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
              <Calendar className="w-4 h-4" />
              Upcoming Events
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Workshops & Training Programs
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Join our hands-on workshops and learn directly from industry experts. Online and offline options available.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Workshops Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary hover:shadow-xl transition-all group"
              >
                <div className="relative">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full ${
                    workshop.mode === "Online" 
                      ? "bg-green-500 text-white" 
                      : workshop.mode === "Hybrid"
                      ? "bg-purple-500 text-white"
                      : "bg-orange-500 text-white"
                  }`}>
                    {workshop.mode}
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {workshop.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      {workshop.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      {workshop.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      {workshop.seats} seats available
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xl font-bold text-primary">{workshop.price}</span>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                      Register Now
                    </button>
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
            Want a Custom Workshop for Your Team?
          </h2>
          <p className="text-muted-foreground mb-8">
            We offer customized corporate training programs for organizations.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
            Request Corporate Training
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
