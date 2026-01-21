import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export type MegaMenuItem = {
  id: number;
  label: string;
  highlight?: boolean;
  subMenus?: {
    title: string;
    items: {
      label: string;
      description: string;
      icon: React.ElementType;
      link: string;
    }[];
  }[];
  link?: string;
};

export interface MegaMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  items: MegaMenuItem[];
  className?: string;
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
  ({ items, className, ...props }, ref) => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const [isHover, setIsHover] = React.useState<number | null>(null);

    const handleHover = (menuLabel: string | null) => {
      setOpenMenu(menuLabel);
    };

    return (
      <ul
        ref={ref}
        className={`relative flex items-center space-x-0 ${className || ""}`}
        {...props}
      >
        {items.map((navItem) => (
          <li
            key={navItem.label}
            className="relative"
            onMouseEnter={() => handleHover(navItem.label)}
            onMouseLeave={() => handleHover(null)}
          >
            {navItem.link && !navItem.subMenus ? (
              <Link
                to={navItem.link}
                className={`relative flex cursor-pointer items-center justify-center gap-1 py-2 px-4 text-sm transition-colors duration-300 group ${
                  navItem.highlight 
                    ? "text-white font-medium" 
                    : "text-white/60 hover:text-white"
                }`}
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span>{navItem.label}</span>
                {(isHover === navItem.id) && (
                  <motion.div
                    layoutId="hover-bg"
                    className={`absolute inset-0 size-full ${navItem.highlight ? "bg-[#00B287]" : "bg-white/10"}`}
                    style={{ borderRadius: 99 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </Link>
            ) : (
              <button
                className={`relative flex cursor-pointer items-center justify-center gap-1 py-2 px-4 text-sm transition-colors duration-300 group ${
                  navItem.highlight 
                    ? "text-white font-medium" 
                    : "text-white/60 hover:text-white"
                }`}
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span className="relative z-10">{navItem.label}</span>
                {navItem.subMenus && (
                  <ChevronDown
                    className={`relative z-10 h-4 w-4 transition-transform duration-300 ${
                      openMenu === navItem.label ? "rotate-180" : ""
                    }`}
                  />
                )}
                {(isHover === navItem.id || openMenu === navItem.label) && (
                  <motion.div
                    layoutId="hover-bg"
                    className={`absolute inset-0 size-full ${navItem.highlight ? "bg-[#00B287]" : "bg-white/10"}`}
                    style={{ borderRadius: 99 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </button>
            )}

            <AnimatePresence>
              {openMenu === navItem.label && navItem.subMenus && (
                <div className="absolute left-0 top-full w-auto pt-3 z-50">
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="w-max border border-white/10 bg-[#0c1929]/95 backdrop-blur-xl p-5 shadow-2xl shadow-black/40"
                    style={{ borderRadius: 16 }}
                  >
                    <div className="flex w-fit shrink-0 space-x-8 overflow-hidden">
                      {navItem.subMenus.map((sub) => (
                        <div className="w-full min-w-[200px]" key={sub.title}>
                          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#00B287]">
                            {sub.title}
                          </h3>
                          <ul className="space-y-1">
                            {sub.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <li key={item.label}>
                                  <Link
                                    to={item.link}
                                    className="flex items-start space-x-3 group p-2.5 rounded-lg transition-all duration-200 hover:bg-white/5"
                                  >
                                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white/70 transition-all duration-300 group-hover:bg-[#00B287] group-hover:border-[#00B287] group-hover:text-white group-hover:scale-110">
                                      <Icon className="h-4 w-4 flex-none" />
                                    </div>
                                    <div className="w-max leading-5">
                                      <p className="shrink-0 text-sm font-medium text-white group-hover:text-[#00B287] transition-colors">
                                        {item.label}
                                      </p>
                                      <p className="shrink-0 text-xs text-white/50 transition-colors duration-300 group-hover:text-white/70 max-w-[180px]">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    );
  }
);

MegaMenu.displayName = "MegaMenu";

export default MegaMenu;
