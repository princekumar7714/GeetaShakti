import { motion } from "framer-motion";
import { ShieldCheck, Heart, Users, Eye } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Direct Patient Impact", desc: "Your donations are a lifeline, providing patients with essential resources and direct aid." },
  { icon: Heart, title: "Compassionate Care", desc: "We provide emotional support, nutritional guidance, and palliative care to improve quality of life." },
  { icon: Users, title: "Community-First Approach", desc: "Our programs are rooted in the communities we serve, ensuring support is accessible and effective." },
  { icon: Eye, title: "Transparent & Accountable", desc: "We are committed to showing you exactly how your support is used to make a meaningful difference." },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container">
        {/* About intro */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">About Us</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              Building a Community of Support
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
              Welcome to Geeta Shakti Cancer Care Foundation, a not-for-profit initiative dedicated to spreading awareness, enabling early detection, and providing compassionate guidance to those battling cancer.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              Every life touched by cancer deserves empathy, direction, and dignity — and that is what we strive to provide.
            </p>
            <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-primary tabular-nums">95</span>
                <span className="text-2xl font-bold text-primary">%</span>
              </div>
              <p className="mt-2 text-sm font-medium text-foreground">Impact Stat</p>
              <p className="text-sm text-muted-foreground">95% of donations go directly to patient support and care programs.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">Our Foundation</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              Why Trust Geeta Shakti Foundation?
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
              When you choose to support us, you are partnering with an organization that believes in transparency, impact, and a community-centered approach to fighting cancer.
            </p>
            <div className="mt-8 grid gap-5">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <r.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{r.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
