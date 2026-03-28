import { motion } from "framer-motion";
import { HeartPulse, Apple, Brain, Search, Stethoscope, Building2, Users, GraduationCap } from "lucide-react";

const services = [
  { icon: HeartPulse, title: "Palliative Care Assistance", desc: "We offer compassionate palliative care support to enhance comfort, dignity, and peace for those in advanced cancer stages." },
  { icon: Apple, title: "Nutritional Guidance", desc: "Our experts guide patients with personalized diet plans and nutrition tips to boost recovery and maintain strength." },
  { icon: Brain, title: "Counseling & Patient Support", desc: "We provide emotional, psychological, and family counseling to support patients and caregivers throughout their cancer journey." },
  { icon: Search, title: "Early Detection & Awareness", desc: "Our awareness programs and screening camps focus on identifying cancer in its early stages and educating people about prevention." },
  { icon: Stethoscope, title: "Free Doctor Consultation & Health Checkups", desc: "We offer free medical consultations and basic health screenings to promote early care and prevent serious illness in underserved communities." },
  { icon: Building2, title: "Collaboration with Hospitals & Oncosurgeons", desc: "We work with hospitals and oncology experts to ensure patients receive complete care through trusted medical partnerships." },
  { icon: Users, title: "Community Outreach Programs", desc: "Our outreach initiatives bring health checkups, awareness drives, and counseling sessions to rural and underprivileged areas." },
  { icon: GraduationCap, title: "Educational Workshops & Seminars", desc: "We organize workshops and seminars to spread knowledge about cancer prevention, treatment, and community health awareness." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Our Best Service</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            A Path to Hope: Support and Wellness Programs
          </h2>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-muted group-hover:bg-accent/10 flex items-center justify-center text-muted-foreground group-hover:text-accent transition-colors">
                <s.icon size={24} />
              </div>
              <h3 className="text-base font-semibold text-card-foreground leading-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{s.desc}</p>
              <a href="#" className="mt-auto text-accent font-medium text-sm hover:underline">Learn More →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
