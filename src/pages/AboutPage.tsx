import { useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Heart, Users, Award, Target, ArrowRight, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import aboutHero from "@/assets/about-hero.jpg";
import missionImg from "@/assets/mission.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import anitaImg from "@/assets/testimonial-anita.jpg";
import sunitaImg from "@/assets/testimonial-sunita.jpg";
import rameshImg from "@/assets/testimonial-ramesh.jpg";
import drAnkita from "@/assets/doctor1.jpeg";
import drBabul from "@/assets/doctor2.jpeg";
import freeConsultationImg from "@/assets/WhatsApp Image 2026-03-26 at 7.11.02 AM (1).jpeg";
import inHerMemoryImg from "@/assets/WhatsApp Image 2026-03-26 at 7.11.02 AM.jpeg";
import galleryImg1 from "@/assets/WhatsApp Image 2026-03-26 at 7.11.01 AM.jpeg";
import galleryImg2 from "@/assets/WhatsApp Image 2026-03-26 at 7.11.02 AM (2).jpeg";
import galleryImg3 from "@/assets/WhatsApp Image 2026-03-26 at 7.11.04 AM.jpeg";

const team = [
  { 
    name: "Dr. Ankita Singhal", 
    role: "MBBS (GOLD MEDALIST), MD (GOLD MEDALIST)", 
    img: drBabul 
  },
  { 
    name: "Dr. Babul Bansal", 
    role: "Consultant Surgical Oncologist - AIIMS, New Delhi", 
    img: drAnkita,
    description: "More than 12 years experience. Specialist in Management of Gynecological, Breast, Head and Neck, Gastrointestinal, and other malignancies."
  },
];

const testimonials = [
  { name: "Anita", img: anitaImg, text: "Thanks to Geetashakti, my family never felt alone. Their emotional support, awareness programs, and practical assistance made navigating cancer less overwhelming and more hopeful." },
  { name: "Sunita Patel", img: sunitaImg, text: "The charity's care and counseling empowered me to face cancer with courage. Their holistic support eased my worries and restored confidence in my recovery journey." },
  { name: "Ramesh Kumar", img: rameshImg, text: "Geetashakti provided unwavering support and guidance during my cancer treatment. Their compassion and resources gave me hope, strength, and comfort in the toughest moments." },
];

export default function AboutPage() {
  const [showCompleteGallery, setShowCompleteGallery] = useState(false);

  const workInActionImages = [
    { img: galleryImg2, title: "Patient Support", desc: "Compassionate care and guidance for patients" },
    { img: galleryImg3, title: "Medical Camp", desc: "Free health checkups and consultations" },
  ];

  const allGalleryImages = [
    { img: galleryImg1, title: "Community Outreach", desc: "Health awareness programs in local communities" },
    { img: galleryImg2, title: "Patient Support", desc: "Compassionate care and guidance for patients" },
    { img: galleryImg3, title: "Medical Camp", desc: "Free health checkups and consultations" },
    { img: freeConsultationImg, title: "Awareness Drive", desc: "Educating about early detection and prevention" },
    { img: inHerMemoryImg, title: "Foundation Launch", desc: "In memory of our inspiration" },
  ];

  const displayImages = showCompleteGallery ? allGalleryImages : workInActionImages;
  return (
    <Layout>
      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={aboutHero} alt="About Geeta Shakti" className="rounded-2xl shadow-card w-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">About Us</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
                Empowering Lives Through Compassionate Care
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
                Founded in loving memory of Smt. Geeta Bansal, the Foundation continues her legacy of compassion, strength, and service to humanity. What began as a small initiative by Dr. Ankita Singhal and Dr. Babul Bansal has evolved into a community-driven mission for hope and healing.
              </p>
              <div className="mt-6 p-6 rounded-2xl bg-muted">
                <h3 className="font-semibold text-foreground">Safe Care for Every Patient</h3>
                <div className="mt-4 space-y-3">
                  {[{ label: "Safety", pct: 80 }, { label: "Satisfaction", pct: 95 }].map(s => (
                    <div key={s.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-foreground">{s.label}</span>
                        <span className="text-muted-foreground tabular-nums">{s.pct}%</span>
                      </div>
                      <div className="h-2 bg-border rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.pct}%` }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full bg-accent rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* In Her Memory - Tribute Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">Our Foundation</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">A New Beginning, In Her Memory</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={inHerMemoryImg} 
                alt="In Her Memory - A New Beginning" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Geeta Shakti Cancer Care</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  In loving memory, we launch a dream built on values of strength, compassion, and healing. 
                  Our foundation is dedicated to spreading awareness, promoting early detection, and bringing 
                  hope to those affected by cancer.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Awareness & Education</h4>
                      <p className="text-gray-600 text-sm">Spreading knowledge about cancer prevention</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Early Detection</h4>
                      <p className="text-gray-600 text-sm">Saving lives through timely screening</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Compassionate Support</h4>
                      <p className="text-gray-600 text-sm">Standing with patients and families</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-2xl text-white">
                <p className="font-semibold mb-3">Get in Touch</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span>+91 8114222222</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>Basement and FF, BLK-03, Sector 121, Noida</span>
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium">- Dr. Ankita Singhal</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Volunteers / Team */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">Our Volunteers</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">Meet Our Team</h2>
          </motion.div>
          <div className="mt-12 grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group rounded-3xl bg-white shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                  <img 
                    src={t.img} 
                    alt={t.name} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">{t.role}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.name}</h3>
                  {t.description && (
                    <p className="text-gray-600 leading-relaxed text-sm bg-blue-50 p-4 rounded-xl">{t.description}</p>
                  )}
                  <div className="mt-6 flex justify-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Cancer Consultation Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Our Initiative</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              FREE CANCER CONSULTATION, SCREENING & AWARENESS SESSIONS
            </h2>
            <p className="mt-4 text-lg text-gray-600">Early Detection Can Save Your Life</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img 
                src={freeConsultationImg} 
                alt="Free Cancer Consultation" 
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-6"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Every Saturday & Sunday</h3>
                    <p className="text-gray-600">Regular consultation sessions</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Geeta Shakti Cancer Care Foundation</h3>
                    <p className="text-gray-600">First Floor, Sector 121, Noida</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Dr. Babul Bansal</h3>
                    <p className="text-gray-600">Surgical Oncologist, AIIMS, New Delhi</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 mb-3">Join us for:</h4>
                {[
                  "Free cancer consultation & awareness guidance",
                  "Genetic counseling for high-risk families",
                  "Early detection advice & screening support",
                  "Guidance for patients and caregivers"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 border border-red-200 p-4 rounded-xl">
                <p className="text-red-800 font-semibold mb-2">⚠️ PRIOR APPOINTMENT IS NECESSARY</p>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span className="text-red-800 font-bold">Call: 8114 222 222</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={missionImg} alt="Our Mission" className="rounded-2xl shadow-card w-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">To spread awareness about cancer prevention, enable early detection through community screenings, and provide compassionate guidance and support to patients and their families throughout their journey.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <Eye size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">A world where no one faces cancer alone — where every individual has access to early screening, quality care, and a supportive community that empowers them with hope, dignity, and strength.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Our Values</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">Compassion, transparency, community-first approach, and unwavering commitment to making a tangible difference in the lives of those affected by cancer.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Work Gallery */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Gallery</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 text-balance">
              Our Work in Action
            </h2>
            <p className="mt-4 text-gray-600">
              A glimpse into our foundation's activities, events, and the lives we touch every day
            </p>
          </motion.div>

          <div className={`grid ${showCompleteGallery ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'} gap-${showCompleteGallery ? '6' : '12'} ${showCompleteGallery ? '' : 'max-w-4xl mx-auto'}`}>
            {displayImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div 
              onClick={() => setShowCompleteGallery(!showCompleteGallery)}
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span className="font-semibold">
                {showCompleteGallery ? 'Show Work in Action Only' : 'View Our Complete Gallery'}
              </span>
            </div>
            {showCompleteGallery && (
              <p className="mt-4 text-sm text-gray-600">
                Showing all {allGalleryImages.length} images from our foundation's work
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">Testimonials</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">Voices of Hope</h2>
          </motion.div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-2xl bg-card shadow-card">
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

      {/* Contact on About page */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Leave us a message</h2>
            <form className="mt-8 grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="email" placeholder="Email Address" className="px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="tel" placeholder="Phone Number" className="px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="text" placeholder="Subject" className="px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <textarea placeholder="Write a Message" rows={5} className="sm:col-span-2 px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
              <button type="submit" className="sm:col-span-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-xl hover:-translate-y-0.5 transition-all shadow-sm">
                Send A Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
