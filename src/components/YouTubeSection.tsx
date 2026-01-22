import { motion } from "framer-motion";
import { Youtube, Bell, ArrowRight, Play, Users, Video, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export function YouTubeSection() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container max-w-7xl relative z-10 px-4 sm:px-6">
        {/* Section Header - Editorial Style (inspired by WorkshopsSection) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12 border-b border-slate-200 pb-4 md:pb-6"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600 mb-2">
              Video Content
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900">
              Entrepreneur India TV
            </h2>
            <p className="mt-2 md:mt-3 text-xs sm:text-sm text-slate-600 max-w-2xl">
              Watch expert talks, business insights, and success stories from India's entrepreneurship ecosystem.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@EntrepreneurIndiaTV"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs md:text-sm font-medium text-slate-600 hover:text-red-600 transition-colors min-h-[44px]"
          >
            Visit Channel
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* YouTube Card - Compact & Wide Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-3 md:top-4 right-3 md:right-4">
                <Youtube className="w-16 h-16 md:w-20 md:h-20 text-white" />
              </div>
              <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 w-20 h-20 md:w-24 md:h-24 border-2 border-white/20 rounded-full" />
            </div>

            <div className="relative">
              {/* Horizontal Layout - All in One Row */}
              <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6 lg:gap-8">
                {/* Left: Icon & Info */}
                <div className="flex-shrink-0 flex items-center gap-3 md:gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                    <Youtube className="w-7 h-7 md:w-8 md:h-8 text-red-600" />
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-0.5">
                      Entrepreneur India TV
                    </h3>
                    <div className="text-white/80 text-[10px] sm:text-xs md:text-sm">@EntrepreneurIndiaTV</div>
                    <div className="flex items-center gap-1 md:gap-1.5 text-white/70 text-[10px] sm:text-xs mt-1">
                      <Play className="w-2.5 h-2.5 md:w-3 md:h-3 flex-shrink-0" />
                      <span>Educational Content</span>
                    </div>
                  </div>
                </div>

                {/* Center: Stats - Compact */}
                <div className="flex-grow w-full lg:w-auto">
                  <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/30 text-center hover:bg-white/25 hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative">
                        <div className="w-7 h-7 md:w-8 md:h-8 bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-1.5 md:mb-2 group-hover:scale-110 transition-transform shadow-md">
                          <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                        </div>
                        <div className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-0.5">1.23M</div>
                        <div className="text-[10px] md:text-xs text-white/90 font-semibold">Subscribers</div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/30 text-center hover:bg-white/25 hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative">
                        <div className="w-7 h-7 md:w-8 md:h-8 bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-1.5 md:mb-2 group-hover:scale-110 transition-transform shadow-md">
                          <Video className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                        </div>
                        <div className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-0.5">1.6K</div>
                        <div className="text-[10px] md:text-xs text-white/90 font-semibold">Videos</div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                      className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/30 text-center hover:bg-white/25 hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative">
                        <div className="w-7 h-7 md:w-8 md:h-8 bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-1.5 md:mb-2 group-hover:scale-110 transition-transform shadow-md">
                          <Eye className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                        </div>
                        <div className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-0.5">10M+</div>
                        <div className="text-[10px] md:text-xs text-white/90 font-semibold">Views</div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Right: CTA */}
                <div className="flex-shrink-0 w-full lg:w-auto">
                  <a
                    href="https://www.youtube.com/@EntrepreneurIndiaTV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-2 w-full lg:w-auto px-4 md:px-5 py-2.5 bg-white text-red-600 rounded-xl font-semibold hover:bg-red-50 transition-all hover:scale-105 shadow-lg text-xs md:text-sm min-h-[44px]"
                  >
                    <Bell className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover/btn:animate-bounce" />
                    <span>Subscribe</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
