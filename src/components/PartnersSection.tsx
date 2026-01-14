import { motion } from "framer-motion";

const partners = [
  { name: "MSME", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Ministry_of_Micro%2C_Small_and_Medium_Enterprises.svg" },
  { name: "NSIC", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=60&fit=crop" },
  { name: "SIDBI", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=60&fit=crop" },
  { name: "NABARD", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=60&fit=crop" },
  { name: "NPC", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=60&fit=crop" },
  { name: "KVIC", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=60&fit=crop" },
];

export function PartnersSection() {
  return (
    <section className="py-16 lg:py-20 border-y border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Trusted By
          </p>
          <h3 className="text-xl font-semibold text-foreground">
            Our Associates & Partners
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <div className="h-12 px-6 flex items-center justify-center bg-muted rounded-lg">
                <span className="font-bold text-lg text-foreground/70">{partner.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
