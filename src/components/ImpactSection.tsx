import { motion } from "framer-motion";
import { Stethoscope, Apple, HeartHandshake, Brain, Search, Megaphone } from "lucide-react";

const impacts = [
  { icon: Stethoscope, title: "Financial & Medical Aid", desc: "Helping patients manage costs." },
  { icon: Apple, title: "Nutritional Support", desc: "Resources for patient strength." },
  { icon: HeartHandshake, title: "Palliative Care", desc: "Improving quality of life." },
  { icon: Brain, title: "Emotional & Family Counseling", desc: "Support for emotional challenges." },
  { icon: Search, title: "Early Detection", desc: "Promoting early diagnosis." },
  { icon: Megaphone, title: "Awareness & Outreach", desc: "Educating the public." },
];

export default function ImpactSection() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Our Impact</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            A Community of Care and Support
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            At the Geeta Shakti Cancer Foundation, we are committed to making a difference in the lives of those affected by cancer.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-card shadow-card flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
