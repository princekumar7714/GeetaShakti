import { motion } from "framer-motion";
import { HeartPulse, Apple, Brain, Search, Stethoscope, Building2, Users, GraduationCap } from "lucide-react";
import Layout from "@/components/Layout";
import servicePalliative from "@/assets/service-palliative.jpg";
import blogNutrition from "@/assets/blog-nutrition.jpg";
import blogCoping from "@/assets/blog-coping.jpg";
import blogDetection from "@/assets/blog-detection.jpg";
import outreachImg1 from "@/assets/WhatsApp Image 2026-03-26 at 7.11.03 AM.jpeg";
import outreachImg2 from "@/assets/WhatsApp Image 2026-03-26 at 7.11.03 AM (1).jpeg";

const services = [
  { icon: HeartPulse, title: "Palliative Care Assistance", desc: "We offer compassionate palliative care support to enhance comfort, dignity, and peace for those in advanced cancer stages.", img: servicePalliative },
  { icon: Apple, title: "Nutritional Guidance", desc: "Our experts guide patients with personalized diet plans and nutrition tips to boost recovery and maintain strength.", img: blogNutrition },
  { icon: Brain, title: "Counseling & Patient Support", desc: "We provide emotional, psychological, and family counseling to support patients and caregivers throughout their cancer journey.", img: blogCoping },
  { icon: Search, title: "Early Detection & Awareness", desc: "Our awareness programs and screening camps focus on identifying cancer in its early stages and educating people about prevention.", img: blogDetection },
  { icon: Stethoscope, title: "Free Doctor Consultation & Health Checkups", desc: "We offer free medical consultations and basic health screenings to promote early care and prevent serious illness in underserved communities." },
  { icon: Building2, title: "Collaboration with Hospitals & Oncosurgeons", desc: "We work with hospitals and oncology experts to ensure patients receive complete care through trusted medical partnerships." },
  { icon: Users, title: "Community Outreach Programs", desc: "Our outreach initiatives bring health checkups, awareness drives, and counseling sessions to rural and underprivileged areas." },
  { icon: GraduationCap, title: "Educational Workshops & Seminars", desc: "We organize workshops and seminars to spread knowledge about cancer prevention, treatment, and community health awareness." },
];

export default function ServicesPage() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">Our Best Service</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
              A Path to Hope: Support and Wellness Programs
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all overflow-hidden flex flex-col"
              >
                {s.img && (
                  <img src={s.img} alt={s.title} className="w-full h-40 object-cover" />
                )}
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted group-hover:bg-accent/10 flex items-center justify-center text-muted-foreground group-hover:text-accent transition-colors">
                    <s.icon size={20} />
                  </div>
                  <h3 className="text-sm font-semibold text-card-foreground leading-tight">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed text-pretty">{s.desc}</p>
                  <a href="#" className="mt-auto text-accent font-medium text-xs hover:underline">Learn More →</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Outreach in Action */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">Our Work</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
              Services in Action: Making a Difference
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our dedicated team working tirelessly to bring healthcare and awareness to communities in need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img 
                src={outreachImg1} 
                alt="Community Outreach Event" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Community Health Camp</h3>
                  <p className="text-sm">Free consultations and health checkups for underserved communities</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img 
                src={outreachImg2} 
                alt="Awareness Drive" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Awareness & Education Drive</h3>
                  <p className="text-sm">Spreading knowledge about early detection and prevention</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Join Our Mission</span>
            </div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Together, we can make a real difference in the lives of those affected by cancer. 
              Join us in our mission to spread hope, awareness, and quality healthcare.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
