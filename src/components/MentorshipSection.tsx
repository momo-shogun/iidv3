import { motion } from "framer-motion";
import { GraduationCap, Users, Building, ArrowRight, Sparkles, CheckCircle, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export function MentorshipSection() {
  const stats = [
    { icon: Users, number: "10K+", label: "Students Trained" },
    { icon: Award, number: "500+", label: "Programs Conducted" },
    { icon: TrendingUp, number: "85%", label: "Startup Success" },
  ];

  const programs = [
    {
      icon: GraduationCap,
      title: "EDP Programs",
      description: "Comprehensive Entrepreneurship Development Programs transforming business ideas into successful ventures with structured learning.",
      highlights: [
        "Business Planning & Strategy",
        "Market & Feasibility Analysis",
        "Financial Management",
        "Mentorship by Industry Leaders",
      ],
      duration: "3-6 Months",
      link: "/edp-programs",
      gradient: "from-purple-500 via-purple-600 to-indigo-700",
    },
    {
      icon: Users,
      title: "Workshops",
      description: "Interactive, hands-on workshops conducted by industry experts covering essential business skills and practical knowledge.",
      highlights: [
        "Industry Expert Sessions",
        "Practical Case Studies",
        "Networking Opportunities",
        "Certificate of Completion",
      ],
      duration: "1-3 Days",
      link: "/workshops",
      gradient: "from-green-500 via-green-600 to-teal-700",
    },
    {
      icon: Building,
      title: "Corporate Training",
      description: "Customized training solutions for organizations looking to upskill employees and enhance business capabilities.",
      highlights: [
        "Tailored Curriculum",
        "On-site/Online Training",
        "Industry-specific Content",
        "Professional Certification",
      ],
      duration: "Flexible",
      link: "/workshops/corporate",
      gradient: "from-orange-500 via-orange-600 to-red-700",
    },
  ];

  return (
    <section className="relative py-8 lg:py-10 bg-gradient-to-br from-purple-50 via-white to-indigo-50/30 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-200 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-sm rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-semibold text-purple-500">Mentorship & Training</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Learn from <span className="text-purple-500">Industry Experts</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Structured programs and personalized mentorship to fast-track your entrepreneurial success
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl p-4 shadow-md text-center border border-purple-100"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-purple-500" />
              <div className="text-2xl md:text-3xl font-bold text-purple-500 mb-1">{stat.number}</div>
              <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <Link
                to={program.link}
                className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 h-full"
              >
                {/* Gradient Header */}
                <div className={`h-36 bg-gradient-to-br ${program.gradient} p-5 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/30 rounded-full" />
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3 shadow-lg">
                      <program.icon className="w-6 h-6 text-gray-800" />
                    </div>
                    <h3 className="font-bold text-lg text-white mb-1">
                      {program.title}
                    </h3>
                    <div className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded-md">
                      <span className="text-xs font-medium text-white">{program.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {program.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {program.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-xs text-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all text-sm pt-4 border-t border-border">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-center text-white shadow-xl"
        >
          <Award className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Start Your Learning Journey Today</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join thousands of successful entrepreneurs and business leaders who transformed their careers with our programs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/edp-programs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-all hover:scale-105 shadow-lg"
            >
              Explore EDP Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/workshops"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all"
            >
              View Workshops
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

