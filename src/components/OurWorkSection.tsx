import { motion } from "framer-motion";
import { Calendar, Stethoscope, HeartHandshake, Building2 } from "lucide-react";

const work = [
  {
    icon: Calendar,
    title: "Cancer Awareness & Screening Camps",
    desc: "We conduct awareness drives in schools, societies, and communities in Delhi-NCR and beyond — promoting early detection and preventive life choices.",
  },
  {
    icon: Stethoscope,
    title: "Free Consultation Clinic",
    desc: "Every Saturday, 4-7 PM, our team of oncologists and counselors provides consultations and treatment guidance to patients and families seeking support.",
    highlight: true,
  },
  {
    icon: HeartHandshake,
    title: "Patient Counseling & Support",
    desc: "We offer emotional, psychological, and nutritional counseling to patients and caregivers — ensuring no one faces the journey alone.",
  },
  {
    icon: Building2,
    title: "Collaborations & Partnerships",
    desc: "We work alongside diagnostic centers like IQ Diagnostics and hospitals to provide holistic, continuous care.",
  },
];

export default function OurWorkSection() {
  return (
    <section id="our-work" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Our Work</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Rooted in Awareness, Accessibility, and Empathy
          </h2>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {work.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`p-8 rounded-2xl bg-card shadow-card ${w.highlight ? 'ring-2 ring-accent/30' : ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <w.icon size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">{w.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-pretty">{w.desc}</p>
              {w.highlight && (
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                  <Calendar size={14} /> Every Saturday, 4-7 PM
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Reach stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl bg-card shadow-card"
        >
          <h3 className="text-lg font-semibold text-card-foreground">Our Reach So Far</h3>
          <div className="mt-4 flex flex-wrap gap-8">
            <div><span className="text-2xl font-bold text-primary tabular-nums">250+</span><p className="text-sm text-muted-foreground">patients guided through free consultations</p></div>
            <div><span className="text-2xl font-bold text-primary tabular-nums">10+</span><p className="text-sm text-muted-foreground">community awareness & screening programs</p></div>
            <div><span className="text-2xl font-bold text-primary tabular-nums">Growing</span><p className="text-sm text-muted-foreground">network of volunteers & partner institutions</p></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
