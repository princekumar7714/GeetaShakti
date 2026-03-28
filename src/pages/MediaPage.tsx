import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import awarenessImg from "@/assets/awareness-bg.jpg";
import screeningImg from "@/assets/screening-bg.jpg";
import activitiesImg from "@/assets/activities-bg.jpg";

const mediaItems = [
  { title: "Cancer Awareness Campaign", img: awarenessImg, desc: "Our awareness drives in schools, societies, and communities across Delhi-NCR." },
  { title: "Cancer Screening Camp", img: screeningImg, desc: "Free screening camps for early detection of breast, cervical, and oral cancer." },
  { title: "Community Activities", img: activitiesImg, desc: "Support groups, wellness activities, and community events fostering hope and resilience." },
];

export default function MediaPage() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">Our Gallery</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
              Moments of Impact and Hope
            </h2>
            <p className="mt-4 text-muted-foreground">Glimpses from our events, camps, and community outreach programs.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl shadow-card hover:shadow-card-hover transition-all overflow-hidden bg-card"
              >
                <div className="relative overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-card-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
