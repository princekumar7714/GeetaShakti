import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Camera, Users, Calendar, Clock, Search, Filter, ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import blogNutrition from "@/assets/blog-nutrition.jpg";
import blogDetection from "@/assets/blog-detection.jpg";
import blogCoping from "@/assets/blog-coping.jpg";
import blogPalliative from "@/assets/blog-palliative.jpg";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  published: boolean;
  category?: string;
  comments?: number;
  likes?: number;
  shares?: number;
  readTime?: string;
  time?: string;
}

interface Comment {
  id: number;
  author: string;
  avatar: string;
  comment: string;
  time: string;
  likes: number;
}

const blogContent = `
  <p class="mb-4">Cancer is one of the leading causes of death worldwide, but early detection can significantly improve survival rates. Regular screenings and awareness of warning signs are crucial in the fight against cancer.</p>
  
  <h3 class="text-xl font-semibold mt-6 mb-3">Why Early Detection Matters</h3>
  <p class="mb-4">When cancer is detected early, treatment is more likely to be successful. In fact, many cancers have a 90% or higher survival rate when caught in the early stages. This is why regular screenings and being aware of your body's changes are so important.</p>
  
  <h3 class="text-xl font-semibold mt-6 mb-3">Common Warning Signs</h3>
  <ul class="list-disc pl-6 mb-4 space-y-2">
    <li>Unexplained weight loss</li>
    <li>Fatigue that doesn't get better with rest</li>
    <li>Pain that doesn't go away</li>
    <li>Changes in bowel or bladder habits</li>
    <li>Persistent cough or hoarseness</li>
    <li>Unusual lumps or swelling</li>
  </ul>
  
  <h3 class="text-xl font-semibold mt-6 mb-3">How Geeta Shakti Helps</h3>
  <p class="mb-4">At Geeta Shakti, we provide free cancer screenings and awareness camps throughout Delhi-NCR. Our mobile screening units visit communities to make early detection accessible to everyone, regardless of their economic status.</p>
  
  <p class="mb-4">Remember, early detection saves lives. Don't wait for symptoms to become severe. If you notice any changes in your body or are due for a screening, contact us today.</p>
`;

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "John Doe",
      avatar: "JD",
      comment: "Thank you for sharing this valuable information! This article really helped me understand the importance of regular screenings.",
      time: "2 hours ago",
      likes: 12
    },
    {
      id: 2,
      author: "Jane Smith",
      avatar: "JS",
      comment: "This story is truly inspiring! I've been meaning to get my screening done, and this article motivated me to schedule it.",
      time: "5 hours ago",
      likes: 8
    },
    {
      id: 3,
      author: "Rahul Kumar",
      avatar: "RK",
      comment: "Geeta Shakti is doing amazing work. I attended one of your awareness camps last month and it was very informative.",
      time: "1 day ago",
      likes: 15
    }
  ]);

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "Awareness", label: "Awareness" },
    { id: "Health Tips", label: "Health Tips" },
    { id: "Patient Care", label: "Patient Care" },
    { id: "Support", label: "Support" }
  ];

  useEffect(() => {
    // Load blogs from localStorage (database simulation)
    const savedBlogs = localStorage.getItem("adminBlogs");
    if (savedBlogs) {
      const parsed = JSON.parse(savedBlogs);
      const enrichedPosts = parsed.filter((blog: BlogPost) => blog.published).map((blog: BlogPost) => ({
        ...blog,
        category: blog.category || "Awareness",
        comments: Math.floor(Math.random() * 50) + 10,
        likes: Math.floor(Math.random() * 300) + 100,
        shares: Math.floor(Math.random() * 150) + 50,
        readTime: `${Math.floor(Math.random() * 5) + 3} min read`,
        content: blogContent,
        time: "10:00 AM"
      }));
      setPosts(enrichedPosts);
    } else {
      // Fallback to static posts if no admin blogs exist
      const staticPosts = [
        { 
          title: "Understanding Palliative Care: Bringing Comfort and Dignity", 
          excerpt: "Because every life deserves peace and compassion. Palliative care is not about giving up — it's about giving everything to enhance quality of life.", 
          date: "2024-03-15",
          time: "10:30 AM",
          id: "1",
          content: blogContent,
          author: "Dr. Sarah Johnson",
          published: true,
          category: "Patient Care",
          comments: 24,
          likes: 156,
          shares: 89,
          readTime: "5 min read"
        },
        { 
          title: "Eating Right During Cancer Care: The Role of Nutrition in Recovery", 
          excerpt: "Food that strengthens the body and spirit. Proper nutrition can make a world of difference during cancer treatment and recovery.", 
          date: "2024-03-10",
          time: "2:45 PM",
          id: "2",
          content: blogContent,
          author: "Dr. Michael Chen",
          published: true,
          category: "Health Tips",
          comments: 42,
          likes: 289,
          shares: 167,
          readTime: "8 min read"
        },
        { 
          title: "The Power of Early Detection: Why Cancer Screening Saves Lives", 
          excerpt: "Awareness today can prevent pain tomorrow. Cancer caught early is often curable — yet thousands miss the window.", 
          date: "2024-03-05",
          time: "4:15 PM",
          id: "3",
          content: blogContent,
          author: "Dr. Emily Rodriguez",
          published: true,
          category: "Awareness",
          comments: 18,
          likes: 134,
          shares: 78,
          readTime: "6 min read"
        },
        { 
          title: "Coping with Cancer: The Role of Emotional & Family Support", 
          excerpt: "Together, we can heal hearts and minds. Cancer doesn't just affect the body — it impacts the entire family.", 
          date: "2024-02-28",
          time: "11:00 AM",
          id: "4",
          content: blogContent,
          author: "Dr. James Wilson",
          published: true,
          category: "Support",
          comments: 31,
          likes: 198,
          shares: 112,
          readTime: "7 min read"
        }
      ];
      setPosts(staticPosts);
    }
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const blogImages = [blogPalliative, blogNutrition, blogDetection, blogCoping];

  const handleCommentSubmit = () => {
    if (newComment.trim() && selectedPost) {
      const comment: Comment = {
        id: comments.length + 1,
        author: "You",
        avatar: "YU",
        comment: newComment,
        time: "Just now",
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  if (selectedPost) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
          {/* Back Button */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <button 
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </button>
          </div>

          {/* Blog Detail */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  {selectedPost.category}
                </span>
                <span className="text-sm text-gray-500">{selectedPost.readTime}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                {selectedPost.title}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {selectedPost.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-purple-700">
                      {selectedPost.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{selectedPost.author}</p>
                    <p className="text-sm text-gray-500">Medical Professional</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{selectedPost.time || "10:00 AM"}</span>
                  </div>
                </div>
              </div>

              {/* Blog Content */}
              <div 
                className="prose prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: selectedPost.content || blogContent }}
              />

              {/* Engagement Bar */}
              <div className="flex items-center justify-between p-6 bg-white rounded-xl shadow-lg mb-8">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>{selectedPost.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                    <Camera className="w-5 h-5" />
                    <span>{comments.length}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                    <Users className="w-5 h-5" />
                    <span>{selectedPost.shares}</span>
                  </button>
                </div>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                  Share Article
                </Button>
              </div>

              {/* Comments Section */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Comments ({comments.length})
                </h3>

                {/* Add Comment */}
                <div className="mb-8">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-purple-700">YU</span>
                    </div>
                    <div className="flex-1">
                      <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Share your thoughts..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                        rows={3}
                      />
                      <div className="mt-3 flex justify-end">
                        <Button
                          onClick={handleCommentSubmit}
                          className="bg-purple-600 hover:bg-purple-700"
                          disabled={!newComment.trim()}
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Post Comment
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <motion.div
                      key={comment.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex gap-3"
                    >
                      <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-medium text-blue-700">{comment.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-800">{comment.author}</h4>
                          <span className="text-sm text-gray-500">{comment.time}</span>
                        </div>
                        <p className="text-gray-600 mb-3">{comment.comment}</p>
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-purple-600 transition-colors">
                            <Heart className="w-4 h-4" />
                            <span>{comment.likes}</span>
                          </button>
                          <button className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
                            Reply
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </article>
        </div>
      </Layout>
    );
  }

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

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="aspect-[16/10] bg-muted overflow-hidden">
                    <img 
                      src={blogImages[index % blogImages.length]} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 hover:text-purple-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.time || "10:00 AM"}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-gray-500">
                        By {post.author}
                      </span>
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
                        <span className="text-purple-600 hover:text-purple-700 font-medium">
                          Read More →
                        </span>
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
