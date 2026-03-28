import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Camera, Users, Calendar, Clock, ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const blogPost = {
  title: "Cancer Awareness: Early Detection Saves Lives",
  excerpt: "Learn about the importance of regular screenings and early detection in improving cancer survival rates.",
  content: `
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
    
    <h3 class="text-xl font-semibold mt-6 mb-3">Recommended Screenings</h3>
    <p class="mb-4">Different types of cancer have different screening recommendations:</p>
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li><strong>Breast Cancer:</strong> Mammograms every 1-2 years for women 40+</li>
      <li><strong>Cervical Cancer:</strong> Pap tests every 3 years for women 21-65</li>
      <li><strong>Colorectal Cancer:</strong> Colonoscopies every 10 years starting at 45</li>
      <li><strong>Lung Cancer:</strong> Annual CT scans for heavy smokers 50+</li>
    </ul>
    
    <h3 class="text-xl font-semibold mt-6 mb-3">How Geeta Shakti Helps</h3>
    <p class="mb-4">At Geeta Shakti, we provide free cancer screenings and awareness camps throughout Delhi-NCR. Our mobile screening units visit communities to make early detection accessible to everyone, regardless of their economic status.</p>
    
    <p class="mb-4">Remember, early detection saves lives. Don't wait for symptoms to become severe. If you notice any changes in your body or are due for a screening, contact us today.</p>
  `,
  date: "March 15, 2024",
  time: "10:30 AM",
  author: "Dr. Sarah Johnson",
  category: "Awareness",
  comments: 24,
  likes: 156,
  shares: 89,
  readTime: "5 min read",
  authorBio: "Dr. Sarah Johnson is a renowned oncologist with over 15 years of experience in cancer research and treatment. She is passionate about cancer awareness and early detection education."
};

export default function BlogDetailPage() {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([
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
    },
    {
      id: 4,
      author: "Priya Sharma",
      avatar: "PS",
      comment: "The work you're doing for cancer awareness in Delhi-NCR is incredible. Keep up the great work!",
      time: "2 days ago",
      likes: 6
    }
  ]);

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const comment = {
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

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link to="/gallery" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Gallery
          </Link>
        </div>

        {/* Blog Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                {blogPost.category}
              </span>
              <span className="text-sm text-gray-500">{blogPost.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {blogPost.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {blogPost.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-purple-700">
                    {blogPost.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">{blogPost.author}</p>
                  <p className="text-sm text-gray-500">{blogPost.authorBio}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{blogPost.time}</span>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            {/* Engagement Bar */}
            <div className="flex items-center justify-between p-6 bg-white rounded-xl shadow-lg mb-8">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>{blogPost.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Camera className="w-5 h-5" />
                  <span>{comments.length}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Users className="w-5 h-5" />
                  <span>{blogPost.shares}</span>
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
