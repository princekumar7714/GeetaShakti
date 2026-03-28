import { motion } from "framer-motion";
import { ArrowRight, Search, Heart, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-community.jpg";
import awarenessImg from "@/assets/awareness-bg.jpg";
import screeningImg from "@/assets/screening-bg.jpg";
import activitiesImg from "@/assets/activities-bg.jpg";

const cards = [
  {
    icon: Heart,
    title: "Cancer Awareness",
    desc: "We educate the public on cancer risk factors, early warning signs, and the importance of a healthy lifestyle. Our campaigns and events aim to remove the stigma and fear associated with cancer, and to empower people with knowledge.",
    color: "bg-accent/10 text-accent",
    img: awarenessImg,
  },
  {
    icon: Search,
    title: "Cancer Screening",
    desc: "Early detection is key to a better chance of survival. We provide information and access to free screenings for common cancers such as breast, cervical, and oral cancer. Our goal is to help people recognize early signs and symptoms, so they can seek timely treatment.",
    color: "bg-primary/10 text-primary",
    img: screeningImg,
  },
  {
    icon: Activity,
    title: "Cancer Activities",
    desc: "Cancer is a journey that no one should face alone. We organize support groups and wellness activities to help patients and their families cope with the emotional and physical challenges of cancer. Our programs include counseling, nutritional guidance, and community events that foster a sense of hope and resilience.",
    color: "bg-accent/10 text-accent",
    img: activitiesImg,
  },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative">
      {/* Hero */}
      <div className="relative min-h-[600px] md:min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Community outreach camp" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/40" />
        </div>
        <div className="container relative z-10 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-accent font-medium text-sm md:text-base mb-2"
            >
              Hope Begins with You
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                BEAT CANCER
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                TOGETHER
              </motion.span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
              className="mt-2 text-2xl md:text-3xl font-display text-accent italic"
            >
              Join The Fight
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              className="mt-6 text-lg md:text-xl text-primary-foreground/80 text-pretty leading-relaxed"
            >
              Geeta Shakti is a not-for-profit foundation dedicated to early detection and compassionate care in Delhi-NCR.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link to="/donate" className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-semibold rounded-md hover:-translate-y-0.5 transition-all shadow-lg">
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Donate Now
                  </motion.span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link to="/about" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-md hover:bg-primary-foreground/10 transition-all">
                  Know More Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Service cards with images */}
      <div className="container relative z-10 -mt-16 md:-mt-20 pb-8">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="rounded-2xl bg-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all overflow-hidden"
            >
              <img src={c.img} alt={c.title} className="w-full h-44 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-pretty line-clamp-3">{c.desc}</p>
                <Link to="/services" className="mt-4 inline-flex text-sm font-medium text-accent hover:underline">
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
