import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import blogNutrition from "@/assets/blog-nutrition.jpg";
import blogDetection from "@/assets/blog-detection.jpg";
import blogCoping from "@/assets/blog-coping.jpg";
import blogPalliative from "@/assets/blog-palliative.jpg";

const posts = [
  { title: "Eating Right During Cancer Care: The Role of Nutrition in Recovery", excerpt: "Food that strengthens the body and spirit. Proper nutrition can make a world of difference.", date: "16 Oct", img: blogNutrition },
  { title: "The Power of Early Detection: Why Cancer Screening Saves Lives", excerpt: "Awareness today can prevent pain tomorrow. Cancer caught early is often curable.", date: "16 Oct", img: blogDetection },
  { title: "Coping with Cancer: The Role of Emotional & Family Support", excerpt: "Together, we can heal hearts and minds. Cancer doesn't just affect the body.", date: "16 Oct", img: blogCoping },
  { title: "Understanding Palliative Care: Bringing Comfort and Dignity", excerpt: "Because every life deserves peace and compassion. Palliative care is not about giving up.", date: "16 Oct", img: blogPalliative },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Latest News</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Latest News and Articles
          </h2>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all overflow-hidden"
            >
              <div className="relative">
                <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-lg">
                  <div className="flex items-center gap-1"><Calendar size={11} />{p.date}</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-3 py-1.5 bg-foreground/50 backdrop-blur-sm">
                  <span className="text-xs text-primary-foreground/80">Geetashakti • 0 Comments</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-semibold text-card-foreground leading-snug line-clamp-2 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{p.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/blog" className="text-sm font-medium text-accent hover:underline">View All Articles →</Link>
        </div>
      </div>
    </section>
  );
}
