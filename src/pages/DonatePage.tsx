import { motion } from "framer-motion";
import { Stethoscope, Apple, HeartHandshake, Brain, Search, Megaphone, ArrowRight, Banknote, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import DonationForm from "@/components/DonationForm";
import donateBg from "@/assets/donate-section.jpg";

const impacts = [
  { icon: Stethoscope, title: "Financial & Medical Aid", desc: "Helping patients manage costs." },
  { icon: Apple, title: "Nutritional Support", desc: "Resources for patient strength." },
  { icon: HeartHandshake, title: "Palliative Care", desc: "Improving quality of life." },
  { icon: Brain, title: "Emotional & Family Counseling", desc: "Support for emotional challenges." },
  { icon: Search, title: "Early Detection", desc: "Promoting early diagnosis." },
  { icon: Megaphone, title: "Awareness & Outreach", desc: "Educating the public." },
];

export default function DonatePage() {
  return (
    <Layout>
      {/* Donation Form */}
      <DonationForm />

      {/* Our Impact */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">Our Impact</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
                A Community of Care and Support
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                At the Geeta Shakti Cancer Foundation, we are committed to making a difference in the lives of those affected by cancer. We focus on providing compassionate care and building a strong community around our patients and their families.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impacts.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
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

      {/* Give Hope CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={donateBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">Give Hope Today</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
              Your Contribution Can Save Lives — Donate Now
            </h2>
            <p className="mt-6 text-primary-foreground/80 leading-relaxed text-pretty">
              Every donation you make brings hope, support, and vital resources to those fighting cancer. By contributing, you help provide treatments, care, and comfort, giving patients and their families strength to continue the battle.
            </p>
          </motion.div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Banknote, title: "Financial Aid", desc: "Support cancer fighters with funds for treatment and essential care." },
              { icon: Sparkles, title: "Hygiene Solutions", desc: "Ensuring cleanliness and safety for healthier, happier lives." },
              { icon: HeartHandshake, title: "Inspire Communities", desc: "Help communities come together for healthier futures." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-center"
              >
                <item.icon size={28} className="mx-auto text-accent" />
                <h3 className="mt-3 font-semibold text-primary-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="#donation-form" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-md hover:-translate-y-0.5 transition-all shadow-lg text-lg">
              Donate Now <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">Together We Can</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
              Bring More Hope into the World
            </h2>
            <p className="mt-4 text-muted-foreground">Your story starts from here. Ready to raise funds for a cause that matters?</p>
            <a href="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-md hover:-translate-y-0.5 transition-all shadow-lg">
              Make it Happen <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
