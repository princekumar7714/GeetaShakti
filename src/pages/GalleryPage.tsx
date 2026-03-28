import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Calendar, Camera, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import img1 from "@/assets/1.png";
import img2 from "@/assets/2 (1).png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import img5 from "@/assets/5.png";
import img6 from "@/assets/6.png";


export default function GalleryPage() {

  const galleryItems = [
    {
      id: 1,
      title: "Cancer Awareness Camp - Delhi",
      category: "camps",
      date: "2024-03-15",
      image: img1,
      description: "Organizing cancer awareness camp in Delhi with 500+ participants"
    },
    {
      id: 2,
      title: "Volunteer Meet 2024",
      category: "volunteers",
      date: "2024-03-10",
      image: img2,
      description: "Annual volunteer meet and training session"
    },
    {
      id: 3,
      title: "Free Health Checkup Camp",
      category: "events",
      date: "2024-03-05",
      image: img3,
      description: "Free health checkup camp for underprivileged communities"
    },
    {
      id: 4,
      title: "Patient Care Program",
      category: "patients",
      date: "2024-02-28",
      image: img4,
      description: "Providing care and support to cancer patients"
    },
    {
      id: 5,
      title: "Award Ceremony 2024",
      category: "awards",
      date: "2024-02-20",
      image: img5,
      description: "Receiving excellence award in healthcare service"
    },
    {
      id: 6,
      title: "School Awareness Program",
      category: "camps",
      date: "2024-02-15",
      image: img6,
      description: "Cancer awareness program in schools"
    }
  ];


  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-pink-6 00 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <Camera className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Gallery
              </h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Capturing moments of hope, compassion, and service in our journey to fight cancer
              </p>
            </motion.div>
          </div>
        </section>


        {/* Gallery Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto"
            >
              <Heart className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Be Part of Our Journey</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join us in our mission to provide hope and care to cancer patients. 
                Your support can make a real difference in someone's life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </Button>
                <Button size="lg" variant="outline">
                  <Users className="w-5 h-5 mr-2" />
                  Become a Volunteer
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
