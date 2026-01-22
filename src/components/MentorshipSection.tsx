import { motion } from "framer-motion";
import { GraduationCap, Users, Building, ArrowRight, CheckCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { BarChart } from "./ui/statistics-card";

export function MentorshipSection() {
  const stats = [
    { value: 92, label: "Students Trained", className: "bg-gradient-to-br from-purple-500 to-indigo-600", showToolTip: true, delay: 0.2 },
    { value: 78, label: "Programs Success", className: "bg-gradient-to-br from-[#008F69] to-[#00B287]", delay: 0.4 },
    { value: 85, label: "Startup Success", className: "bg-gradient-to-br from-orange-500 to-red-600", showToolTip: true, delay: 0.6 },
    { value: 88, label: "Entrepreneurs Supported", className: "bg-gradient-to-br from-blue-500 to-cyan-600", delay: 0.8 },
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
      accentColor: "purple",
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
      gradient: "from-[#008F69] via-[#00B287] to-emerald-600",
      accentColor: "teal",
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
      gradient: "from-orange-500 via-orange-600 to-red-600",
      accentColor: "orange",
    },
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden">
      <div className="container max-w-7xl relative z-10">
        {/* Section Header - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 border-b border-slate-200 pb-6"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#008F69] mb-2">
              Mentorship & Training
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Learn from Industry Experts
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-2xl">
              Structured programs and personalized mentorship to fast-track your entrepreneurial success.
            </p>
          </div>
          <Link
            to="/edp-programs"
            className="group flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#004198] transition-colors"
          >
            View all programs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Stats - Bar Chart Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="mx-auto max-w-2xl text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
              We Don't Just Talk, We Deliver Results
            </h3>
            <p className="text-xs text-slate-600">
              Real numbers from our mentorship and training programs
            </p>
          </div>
          <div className="relative mx-auto flex h-48 md:h-56 max-w-2xl items-center justify-center gap-3 md:gap-4 md:mt-12 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: stat.delay || index * 0.2,
                  type: "spring",
                  damping: 10,
                }}
                className="h-full w-full max-w-[100px] md:max-w-[120px]"
              >
                <BarChart {...stat} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Programs Grid - Attractive Card Design */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Link
                to={program.link}
                className="group block h-full bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card Header with Gradient */}
                <div className={`relative h-36 bg-gradient-to-br ${program.gradient} p-5 overflow-hidden`}>
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/30 rounded-full" />
                    <div className="absolute bottom-2 left-4 w-12 h-12 border border-white/20 rounded-full" />
                  </div>
                  <div className="relative">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-12 h-12 bg-white/95 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <program.icon className={`w-6 h-6 ${
                          program.accentColor === 'purple' ? 'text-purple-600' :
                          program.accentColor === 'teal' ? 'text-[#008F69]' :
                          'text-orange-600'
                        }`} />
                      </div>
                      <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-md border border-white/30">
                        <span className="text-xs font-semibold text-white">{program.duration}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-white leading-tight">
                      {program.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3">
                    {program.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {program.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                          program.accentColor === 'purple' ? 'text-purple-500' :
                          program.accentColor === 'teal' ? 'text-[#008F69]' :
                          'text-orange-500'
                        }`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className={`flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all ${
                    program.accentColor === 'purple' ? 'text-purple-600' :
                    program.accentColor === 'teal' ? 'text-[#008F69]' :
                    'text-orange-600'
                  }`}>
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
