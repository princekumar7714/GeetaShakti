import { motion } from "framer-motion";
import { ArrowRight, Banknote, Sparkles } from "lucide-react";
import donateBg from "@/assets/donate-section.jpg";

export default function DonateSection() {
  return (
    <section id="donate" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={donateBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/90" />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Give Hope Today</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
            Your Contribution Can Save Lives — Donate Now
          </h2>
          <p className="mt-6 text-primary-foreground/80 leading-relaxed text-pretty">
            Every donation you make brings hope, support, and vital resources to those fighting cancer. By contributing, you help provide treatments, care, and comfort, giving patients and their families strength to continue the battle.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            { icon: Banknote, title: "Financial Aid", desc: "Support cancer fighters with funds for treatment and essential care." },
            { icon: Sparkles, title: "Inspire Communities", desc: "Help communities come together for healthier, happier lives." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
            >
              <item.icon size={28} className="text-accent" />
              <h3 className="mt-3 font-semibold text-primary-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-md hover:-translate-y-0.5 transition-all shadow-lg text-lg">
            Donate Now <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
