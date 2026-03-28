import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Camera, Users, Calendar, Clock, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const blogPosts = [
  {
    id: 1,
    title: "Cancer Awareness: Early Detection Saves Lives",
    excerpt: "Learn about the importance of regular screenings and early detection in improving cancer survival rates.",
    date: "March 15, 2024",
    time: "10:30 AM",
    author: "Dr. Sarah Johnson",
    category: "Awareness",
    comments: 24,
    likes: 156,
    shares: 89,
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    title: "Patient Success Story: Maria's Journey to Recovery",
    excerpt: "An inspiring story of courage and hope as Maria shares her experience battling cancer with our support.",
    date: "March 10, 2024",
    time: "2:45 PM",
    author: "Medical Team",
    category: "Success Stories",
    comments: 42,
    likes: 289,
    shares: 167,
    readTime: "8 min read",
    featured: true
  },
  {
    id: 3,
    title: "Volunteer Spotlight: Making a Difference in Communities",
    excerpt: "Meet our dedicated volunteers who are working tirelessly to spread cancer awareness across Delhi-NCR.",
    date: "March 5, 2024",
    time: "4:15 PM",
    author: "Community Team",
    category: "Volunteers",
    comments: 18,
    likes: 134,
    shares: 78,
    readTime: "6 min read",
    featured: false
  },
  {
    id: 4,
    title: "Nutrition Tips for Cancer Patients",
    excerpt: "Essential nutritional guidance for cancer patients undergoing treatment to maintain strength and immunity.",
    date: "February 28, 2024",
    time: "11:00 AM",
    author: "Nutrition Team",
    category: "Health Tips",
    comments: 31,
    likes: 198,
    shares: 112,
    readTime: "7 min read",
    featured: false
  },
  {
    id: 5,
    title: "Free Health Camp Success: 500+ Screenings Completed",
    excerpt: "Our recent free health screening camp in Delhi successfully completed over 500 cancer screenings.",
    date: "February 20, 2024",
    time: "3:30 PM",
    author: "Events Team",
    category: "Events",
    comments: 56,
    likes: 342,
    shares: 189,
    readTime: "4 min read",
    featured: true
  },
  {
    id: 6,
    title: "Mental Health Support for Cancer Patients",
    excerpt: "Understanding the importance of mental health support during cancer treatment and recovery.",
    date: "February 15, 2024",
    time: "9:45 AM",
    author: "Counseling Team",
    category: "Mental Health",
    comments: 29,
    likes: 167,
    shares: 98,
    readTime: "9 min read",
    featured: false
  }
];

export default function BlogSectionPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "Awareness", label: "Awareness" },
    { id: "Success Stories", label: "Success Stories" },
    { id: "Volunteers", label: "Volunteers" },
    { id: "Health Tips", label: "Health Tips" },
    { id: "Events", label: "Events" },
    { id: "Mental Health", label: "Mental Health" }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Blog & Stories
              </h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Inspiring stories, cancer awareness articles, and updates from our community
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
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
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === "all" && !searchTerm && featuredPosts.length > 0 && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Stories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-200"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-purple-600 transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.time}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-purple-700">
                              {post.author.charAt(0)}
                            </span>
                          </div>
                          <span>{post.author}</span>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1 text-gray-500 hover:text-purple-600 transition-colors">
                              <Heart className="w-4 h-4" />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-1 text-gray-500 hover:text-purple-600 transition-colors">
                              <Camera className="w-4 h-4" />
                              <span>{post.comments}</span>
                            </button>
                            <button className="flex items-center gap-1 text-gray-500 hover:text-purple-600 transition-colors">
                              <Users className="w-4 h-4" />
                              <span>{post.shares}</span>
                            </button>
                          </div>
                          <Link to="/blog-detail" className="text-purple-600 hover:text-purple-700 font-medium hover:underline">
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              {selectedCategory === "all" && !searchTerm ? "All Posts" : "Search Results"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-purple-600 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.time}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-purple-700">
                            {post.author.charAt(0)}
                          </span>
                        </div>
                        <span>{post.author}</span>
                        </div>
                      </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-1 text-gray-500 hover:text-purple-600 transition-colors">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 text-gray-500 hover:text-purple-600 transition-colors">
                            <Camera className="w-4 h-4" />
                            <span>{post.comments}</span>
                          </button>
                          <button className="flex items-center gap-1 text-gray-500 hover:text-purple-600 transition-colors">
                            <Users className="w-4 h-4" />
                            <span>{post.shares}</span>
                          </button>
                        </div>
                        <Link to="/blog-detail" className="text-purple-600 hover:text-purple-700 font-medium hover:underline">
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No posts found</h3>
                <p className="text-gray-500">Try adjusting your filters or search term</p>
              </div>
            )}

            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                  Load More Posts
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}
