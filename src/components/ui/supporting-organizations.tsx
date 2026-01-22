import { motion } from "framer-motion";
import { LogoCloud } from "./logo-cloud-3";
import { cn } from "@/lib/utils";

interface SupportingOrganizationsProps {
  organizations: string[];
  title?: string;
  delay?: number;
  className?: string;
}

export function SupportingOrganizations({
  organizations,
  title = "Supporting Organizations",
  delay = 0.5,
  className,
}: SupportingOrganizationsProps) {
  // Convert organizations array to logos format
  const logos = organizations.map((org) => ({
    alt: org,
    name: org,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={cn(
        " rounded-2xl p-8",
        className
      )}
    >
      <h3 className="text-lg font-semibold text-center text-slate-900 mb-6">
        {title}
      </h3>
      
      {/* Divider */}
      <div className="mx-auto my-5 h-px max-w-sm bg-slate-200 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

      {/* Logo Cloud */}
      <LogoCloud logos={logos} />

      {/* Divider */}
      <div className="mt-5 h-px bg-slate-200 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
    </motion.div>
  );
}
