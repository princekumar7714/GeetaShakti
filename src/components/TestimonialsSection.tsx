import { motion } from "framer-motion";
import { Star } from "lucide-react";
import anitaImg from "@/assets/testimonial-anita.jpg";
import sunitaImg from "@/assets/testimonial-sunita.jpg";
import rameshImg from "@/assets/testimonial-ramesh.jpg";

const testimonials = [
  { name: "Anita", img: anitaImg, text: "Geetashakti Cancer Care Foundation made my treatment journey smooth. Doctors and staff supported me at every step, giving courage, hope, and strength throughout recovery." },
  { name: "Sunita Patel", img: sunitaImg, text: "The patient-focused approach and dedicated staff gave me confidence. Geetashakti brought hope, strength, and comfort during a challenging time in my life." },
  { name: "Ramesh Kumar", img: rameshImg, text: "Advanced treatments combined with compassionate care helped me recover faster. The environment is truly supportive, making the entire journey stress-free and positive." },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Our Testimonials</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Life-Changing Experiences Shared by Patients
          </h2>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card shadow-card"
            >
              <div className="flex gap-1 text-accent">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed italic text-pretty">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
