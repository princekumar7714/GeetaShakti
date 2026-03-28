import { motion } from "framer-motion";
import urgencyBg from "@/assets/urgency-bg.jpg";

const stats = [
  { value: "14", unit: "L+", desc: "New Cancer Cases Diagnosed Annually in India Need Our Help." },
  { value: "3.5", unit: "L+", desc: "New Breast and Cervical Cancer Cases Need Early Screening." },
  { value: "7", unit: "L+", desc: "Cancer-Related Deaths Every Year Emphasize Urgent Support." },
  { value: "50", unit: "%", desc: "Are Preventable Through Awareness and Healthy Lifestyle Choices." },
];

export default function StatsSection() {
  return (
    <section id="impact" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={urgencyBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">The Urgency of Cancer Care</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
            Cancer in India: Incidence and Impact Overview
          </h2>
          <p className="mt-4 text-primary-foreground/70 text-pretty">
            Analyzing incidence patterns is crucial. This data guides our prevention, research, and patient support strategies effectively to save lives.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.desc}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-center"
            >
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-primary-foreground tabular-nums">{s.value}</span>
                <span className="text-2xl font-bold text-accent">{s.unit}</span>
              </div>
              <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
