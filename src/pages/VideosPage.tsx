import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Play, Calendar, Users, Award, Search, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", label: "All Videos" },
    { id: "awareness", label: "Awareness Campaigns" },
    { id: "testimonials", label: "Patient Stories" },
    { id: "events", label: "Events" },
    { id: "interviews", label: "Interviews" },
    { id: "educational", label: "Educational" }
  ];

  const videos = [
    {
      id: 1,
      title: "Cancer Awareness - Early Detection Saves Lives",
      category: "awareness",
      date: "2024-03-15",
      duration: "5:23",
      thumbnail: "/api/placeholder/400/225",
      views: "12.5K",
      description: "Learn about the importance of early cancer detection and regular screenings"
    },
    {
      id: 2,
      title: "Patient Story - My Journey with Cancer",
      category: "testimonials",
      date: "2024-03-10",
      duration: "8:45",
      thumbnail: "/api/placeholder/400/225",
      views: "8.2K",
      description: "An inspiring story of courage and hope from a cancer survivor"
    },
    {
      id: 3,
      title: "Free Health Camp - Noida",
      category: "events",
      date: "2024-03-05",
      duration: "3:12",
      thumbnail: "/api/placeholder/400/225",
      views: "5.7K",
      description: "Highlights from our free health checkup camp in Noida"
    },
    {
      id: 4,
      title: "Doctor Interview - Breast Cancer Prevention",
      category: "interviews",
      date: "2024-02-28",
      duration: "12:30",
      thumbnail: "/api/placeholder/400/225",
      views: "15.3K",
      description: "Expert advice on breast cancer prevention and early detection"
    },
    {
      id: 5,
      title: "Nutrition Tips for Cancer Patients",
      category: "educational",
      date: "2024-02-20",
      duration: "6:18",
      thumbnail: "/api/placeholder/400/225",
      views: "9.8K",
      description: "Essential nutrition guidelines for cancer patients and survivors"
    },
    {
      id: 6,
      title: "Volunteer Experience - Making a Difference",
      category: "testimonials",
      date: "2024-02-15",
      duration: "4:56",
      thumbnail: "/api/placeholder/400/225",
      views: "6.4K",
      description: "Hear from our volunteers about their rewarding experience"
    }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === "all" || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <Play className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Videos
              </h1>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                Watch inspiring stories, educational content, and highlights from our cancer awareness initiatives
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="rounded-full"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(c => c.id === video.category)?.label}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {video.views} views
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(video.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredVideos.length === 0 && (
              <div className="text-center py-12">
                <Play className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No videos found</h3>
                <p className="text-gray-500">Try adjusting your filters or search term</p>
              </div>
            )}
          </div>
        </section>

        {/* Featured Video Section */}
        <section className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Featured Video</h2>
              <p className="text-lg text-gray-600">Our most impactful video of the month</p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="relative">
                  <img
                    src="/api/placeholder/800/450"
                    alt="Featured Video"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Geeta Shakti - A Journey of Hope and Healing</h3>
                  <p className="text-gray-600 mb-6">
                    Join us on this emotional journey as we showcase the impact of our work in the lives of cancer patients and their families. 
                    See how your support is making a real difference in the fight against cancer.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Eye className="w-4 h-4 mr-1" />
                      25.8K views
                    </div>
                    <Button size="lg" className="bg-red-600 hover:bg-red-700">
                      <Play className="w-5 h-5 mr-2" />
                      Watch Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto"
            >
              <Heart className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Share Our Message</h2>
              <p className="text-lg text-red-100 mb-8">
                Help us spread awareness about cancer prevention and early detection. 
                Share these videos with your friends and family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-red-600">
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
