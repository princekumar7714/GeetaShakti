import { motion } from "framer-motion";
import { ArrowRight, Users, Calendar, Heart } from "lucide-react";
import Layout from "@/components/Layout";

export default function GetInvolvedPage() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">Join Our Mission</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
                Become a Volunteer
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
                Your time and skills are invaluable to our cause. Volunteers are the heart of our foundation, helping with everything from organizing events and awareness drives to providing direct support to patients. Join us and make a tangible difference in someone's life.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: Calendar, title: "Organize Events", desc: "Help plan and execute awareness drives and screening camps." },
                  { icon: Heart, title: "Patient Support", desc: "Provide companionship and emotional support to patients." },
                  { icon: Users, title: "Community Outreach", desc: "Spread awareness in schools, societies, and communities." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-muted">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-semibold rounded-md hover:-translate-y-0.5 transition-all shadow-lg">
                Sign Up to Volunteer <ArrowRight size={18} />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="space-y-4">
                {[
                  { label: "Patient Care", pct: 90 },
                  { label: "Community Outreach", pct: 80 },
                  { label: "Fundraising", pct: 60 },
                  { label: "Research", pct: 97 },
                ].map((item) => (
                  <div key={item.label} className="p-5 rounded-2xl bg-card shadow-card">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-card-foreground">{item.label}</span>
                      <span className="text-muted-foreground tabular-nums">{item.pct}%</span>
                    </div>
                    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${item.pct}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} className="h-full bg-accent rounded-full" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-8 rounded-2xl bg-primary text-center">
                <h3 className="text-2xl font-bold text-primary-foreground">Donate Hair</h3>
                <p className="mt-3 text-sm text-primary-foreground/80 leading-relaxed">
                  Your hair can give someone the confidence to face another day. Donate your hair to help create wigs for cancer patients undergoing treatment.
                </p>
                <a href="/contact" className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-md hover:-translate-y-0.5 transition-all">
                  Learn More <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
