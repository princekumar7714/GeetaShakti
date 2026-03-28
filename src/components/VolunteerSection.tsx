import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function VolunteerSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">Get Involved</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
              Become a Volunteer
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
              Your time and skills are invaluable to our cause. Volunteers are the heart of our foundation, helping with everything from organizing events and awareness drives to providing direct support to patients. Join us and make a tangible difference in someone's life.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-md hover:-translate-y-0.5 transition-all shadow-lg">
              Join Us <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Patient Care", pct: 90 },
              { label: "Community Outreach", pct: 80 },
              { label: "Fundraising", pct: 60 },
              { label: "Research", pct: 97 },
            ].map((item) => (
              <div key={item.label} className="p-5 rounded-2xl bg-muted">
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <div className="mt-3 h-2 bg-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-accent rounded-full"
                  />
                </div>
                <p className="mt-2 text-xs text-muted-foreground tabular-nums">{item.pct}%</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
