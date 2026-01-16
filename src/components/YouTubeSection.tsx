import { motion } from "framer-motion";
import { Youtube, Users, Video, Bell, Sparkles, TrendingUp } from "lucide-react";

export function YouTubeSection() {
  return (
    <section className="relative py-8 lg:py-12 bg-gradient-to-br from-red-50 via-white to-red-50/50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-200 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-100 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* YouTube Card */}
          <div className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-2xl p-6 lg:p-8 shadow-xl relative overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 text-white">
                <Youtube className="w-20 h-20" />
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Left: Icon & Info */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-lg mb-3">
                    <Youtube className="w-9 h-9 text-red-600" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-1">
                    Entrepreneur India TV
                  </h2>
                  <div className="text-white/80 text-sm mb-2">@EntrepreneurIndiaTV</div>
                </div>

                {/* Center: Stats */}
                <div className="flex-grow">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 text-center">
                      <div className="text-2xl font-bold text-white">1.23M</div>
                      <div className="text-xs text-white/70">Subscribers</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 text-center">
                      <div className="text-2xl font-bold text-white">1.6K</div>
                      <div className="text-xs text-white/70">Videos</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 text-center">
                      <div className="text-2xl font-bold text-white">10M+</div>
                      <div className="text-xs text-white/70">Views</div>
                    </div>
                  </div>
                </div>

                {/* Right: CTA */}
                <div className="flex-shrink-0">
                  <a
                    href="https://www.youtube.com/@EntrepreneurIndiaTV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-red-600 rounded-xl font-bold hover:bg-red-50 transition-all hover:scale-105 shadow-lg group whitespace-nowrap"
                  >
                    <Bell className="w-5 h-5 group-hover:animate-bounce" />
                    Subscribe
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

