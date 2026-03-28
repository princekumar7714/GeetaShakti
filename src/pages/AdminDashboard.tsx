import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Megaphone, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  LogOut, 
  BarChart3,
  Calendar,
  User,
  Home,
  Upload,
  Mail,
  Phone,
  Eye,
  Download,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { emailService } from "@/services/emailService";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  published: boolean;
  photo?: string;
}

interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  priority: "low" | "medium" | "high";
  active: boolean;
}

interface FormSubmission {
  id: string;
  timestamp: string;
  formData: {
    name: string;
    email: string;
    phone?: string;
    message?: string;
    formType: string;
    additionalData?: Record<string, any>;
  };
  emailData: {
    to: string;
    subject: string;
    body: string;
  };
  status: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"blogs" | "announcements" | "submissions">("blogs");
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [formSubmissions, setFormSubmissions] = useState<FormSubmission[]>([]);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [editingAnnouncement, setEditingAnnouncement] = useState<Announcement | null>(null);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [showAnnouncementForm, setShowAnnouncementForm] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [filterFormType, setFilterFormType] = useState("all");
  const navigate = useNavigate();

  // Check authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuth");
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [navigate]);

  // Load form submissions
  useEffect(() => {
    const submissions = emailService.getStoredSubmissions();
    setFormSubmissions(submissions.reverse()); // Show newest first
  }, []);

  // Load data from localStorage
  useEffect(() => {
    const savedBlogs = localStorage.getItem("adminBlogs");
    const savedAnnouncements = localStorage.getItem("adminAnnouncements");
    
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    } else {
      // Sample data
      setBlogs([
        {
          id: "1",
          title: "Understanding Palliative Care: Bringing Comfort and Dignity",
          excerpt: "Because every life deserves peace and compassion. Palliative care is not about giving up — it's about giving everything to enhance quality of life.",
          content: "Full content about palliative care...",
          author: "Dr. Sarah Johnson",
          date: "2024-01-15",
          published: true
        }
      ]);
    }

    if (savedAnnouncements) {
      setAnnouncements(JSON.parse(savedAnnouncements));
    } else {
      // Sample data
      setAnnouncements([
        {
          id: "1",
          title: "Free Cancer Screening Camp - This Weekend",
          content: "Join us for a free cancer screening camp at our Noida center this weekend. Early detection saves lives!",
          date: "2024-01-20",
          priority: "high",
          active: true
        }
      ]);
    }
  }, []);

  // Save to localStorage
  const saveBlogs = (newBlogs: BlogPost[]) => {
    setBlogs(newBlogs);
    localStorage.setItem("adminBlogs", JSON.stringify(newBlogs));
  };

  const saveAnnouncements = (newAnnouncements: Announcement[]) => {
    setAnnouncements(newAnnouncements);
    localStorage.setItem("adminAnnouncements", JSON.stringify(newAnnouncements));
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    localStorage.removeItem("adminEmail");
    navigate("/admin/login");
  };

  const handleHomeRefresh = () => {
    window.open("/", "_blank");
  };

  const handleSaveBlog = (blog: BlogPost) => {
    if (editingBlog) {
      saveBlogs(blogs.map(b => b.id === blog.id ? blog : b));
    } else {
      saveBlogs([...blogs, { ...blog, id: Date.now().toString() }]);
    }
    setEditingBlog(null);
    setShowBlogForm(false);
  };

  const handleDeleteBlog = (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      saveBlogs(blogs.filter(b => b.id !== id));
    }
  };

  const handleSaveAnnouncement = (announcement: Announcement) => {
    if (editingAnnouncement) {
      saveAnnouncements(announcements.map(a => a.id === announcement.id ? announcement : a));
    } else {
      saveAnnouncements([...announcements, { ...announcement, id: Date.now().toString() }]);
    }
    setEditingAnnouncement(null);
    setShowAnnouncementForm(false);
  };

  const handleDeleteAnnouncement = (id: string) => {
    if (window.confirm("Are you sure you want to delete this announcement?")) {
      saveAnnouncements(announcements.filter(a => a.id !== id));
    }
  };

  const BlogForm = ({ blog, onSave }: { blog?: BlogPost; onSave: (blog: BlogPost) => void }) => {
    const [formData, setFormData] = useState<BlogPost>(
      blog || {
        id: "",
        title: "",
        excerpt: "",
        content: "",
        author: "",
        date: new Date().toISOString().split('T')[0],
        published: false
      }
    );
    const [previewUrl, setPreviewUrl] = useState<string | null>(blog?.photo || null);

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result as string;
          setFormData({...formData, photo: result});
          setPreviewUrl(result);
        };
        reader.readAsDataURL(file);
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg shadow-xl p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">{blog ? "Edit Blog" : "New Blog Post"}</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setShowBlogForm(false);
              setEditingBlog(null);
            }}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Excerpt</label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.excerpt}
              onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Content</label>
            <textarea
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Author</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.author}
                onChange={(e) => setFormData({...formData, author: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="published"
              className="mr-2"
              checked={formData.published}
              onChange={(e) => setFormData({...formData, published: e.target.checked})}
            />
            <label htmlFor="published" className="text-sm font-medium">Published</label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Blog Photo (Optional)</label>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <label className="flex items-center justify-center w-full h-24 px-4 py-2 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                  <div className="text-center">
                    <Upload className="w-6 h-6 mx-auto mb-1 text-gray-400" />
                    <p className="text-xs text-gray-600">
                      {formData.photo ? "Photo uploaded" : "Click to upload photo"}
                    </p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePhotoChange}
                  />
                </label>
              </div>
              {previewUrl && (
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img src={previewUrl} alt="Blog preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={() => onSave(formData)} className="flex-1">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setShowBlogForm(false);
                setEditingBlog(null);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </motion.div>
    );
  };

  const AnnouncementForm = ({ announcement, onSave }: { announcement?: Announcement; onSave: (announcement: Announcement) => void }) => {
    const [formData, setFormData] = useState<Announcement>(
      announcement || {
        id: "",
        title: "",
        content: "",
        date: new Date().toISOString().split('T')[0],
        priority: "medium",
        active: true
      }
    );

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg shadow-xl p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">{announcement ? "Edit Announcement" : "New Announcement"}</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setShowAnnouncementForm(false);
              setEditingAnnouncement(null);
            }}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Content</label>
            <textarea
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Priority</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.priority}
                onChange={(e) => setFormData({...formData, priority: e.target.value as "low" | "medium" | "high"})}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="active"
              className="mr-2"
              checked={formData.active}
              onChange={(e) => setFormData({...formData, active: e.target.checked})}
            />
            <label htmlFor="active" className="text-sm font-medium">Active</label>
          </div>

          <div className="flex gap-3">
            <Button onClick={() => onSave(formData)} className="flex-1">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setShowAnnouncementForm(false);
                setEditingAnnouncement(null);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={handleHomeRefresh}>
                <Home className="w-4 h-4 mr-2" />
                View Home
              </Button>
              <span className="text-sm text-gray-600">
                {localStorage.getItem("adminEmail")}
              </span>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b">
            <nav className="flex -mb-px">
              <button
                className={`py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === "blogs"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("blogs")}
              >
                <FileText className="w-4 h-4 inline mr-2" />
                Blog Posts ({blogs.length})
              </button>
              <button
                className={`py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === "announcements"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("announcements")}
              >
                <Megaphone className="w-4 h-4 inline mr-2" />
                Announcements ({announcements.length})
              </button>
              <button
                className={`py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === "submissions"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("submissions")}
              >
                <Mail className="w-4 h-4 inline mr-2" />
                Form Submissions ({formSubmissions.length})
              </button>
            </nav>
          </div>
        </div>

        {/* Content */}
        {activeTab === "blogs" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Blog Posts</h2>
              <Button onClick={() => setShowBlogForm(true)}>
                <Plus className="w-4 h-4 mr-2" />
                New Blog Post
              </Button>
            </div>

            {showBlogForm && (
              <BlogForm 
                blog={editingBlog || undefined} 
                onSave={handleSaveBlog} 
              />
            )}

            <div className="grid gap-4">
              {blogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow-sm p-6"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold">{blog.title}</h3>
                        {blog.published ? (
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            Published
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                            Draft
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-2">{blog.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        {blog.author}
                        <Calendar className="w-4 h-4 ml-4 mr-1" />
                        {blog.date}
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setEditingBlog(blog);
                          setShowBlogForm(true);
                        }}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteBlog(blog.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "announcements" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Announcements</h2>
              <Button onClick={() => setShowAnnouncementForm(true)}>
                <Plus className="w-4 h-4 mr-2" />
                New Announcement
              </Button>
            </div>

            {showAnnouncementForm && (
              <AnnouncementForm 
                announcement={editingAnnouncement || undefined} 
                onSave={handleSaveAnnouncement} 
              />
            )}

            <div className="grid gap-4">
              {announcements.map((announcement) => (
                <motion.div
                  key={announcement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow-sm p-6"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold">{announcement.title}</h3>
                        {announcement.active ? (
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            Active
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                            Inactive
                          </span>
                        )}
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          announcement.priority === "high" 
                            ? "bg-red-100 text-red-800"
                            : announcement.priority === "medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {announcement.priority}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{announcement.content}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {announcement.date}
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setEditingAnnouncement(announcement);
                          setShowAnnouncementForm(true);
                        }}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteAnnouncement(announcement.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "submissions" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Form Submissions</h2>
              <div className="flex gap-3">
                <select
                  value={filterFormType}
                  onChange={(e) => setFilterFormType(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Forms</option>
                  <option value="Donation">Donations</option>
                  <option value="Volunteer">Volunteers</option>
                  <option value="Contact">Contact</option>
                  <option value="Cancer Awareness Registration">Cancer Awareness</option>
                  <option value="Cancer Screening Registration">Cancer Screening</option>
                  <option value="Community Outreach Registration">Community Outreach</option>
                </select>
                <Button
                  variant="outline"
                  onClick={() => {
                    const submissions = emailService.getStoredSubmissions();
                    setFormSubmissions(submissions.reverse());
                  }}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {formSubmissions
                .filter(submission => 
                  filterFormType === "all" || submission.formData.formType.includes(filterFormType)
                )
                .map((submission) => (
                <motion.div
                  key={submission.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-lg font-semibold">{submission.formData.name}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {submission.formData.formType}
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          {submission.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="w-4 h-4 mr-2" />
                          {submission.formData.email}
                        </div>
                        {submission.formData.phone && (
                          <div className="flex items-center text-sm text-gray-600">
                            <Phone className="w-4 h-4 mr-2" />
                            {submission.formData.phone}
                          </div>
                        )}
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(submission.timestamp).toLocaleString()}
                        </div>
                      </div>

                      {submission.formData.message && (
                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-700 mb-1">Message:</p>
                          <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">{submission.formData.message}</p>
                        </div>
                      )}

                      {submission.formData.additionalData && Object.keys(submission.formData.additionalData).length > 0 && (
                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-700 mb-2">Additional Information:</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {Object.entries(submission.formData.additionalData).map(([key, value]) => (
                              value && (
                                <div key={key} className="text-sm">
                                  <span className="font-medium text-gray-600">{key}:</span>
                                  <span className="text-gray-800 ml-2">{value}</span>
                                </div>
                              )
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedSubmission(submission)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}

              {formSubmissions.filter(submission => 
                filterFormType === "all" || submission.formData.formType.includes(filterFormType)
              ).length === 0 && (
                <div className="text-center py-12">
                  <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No submissions found</h3>
                  <p className="text-gray-500">
                    {filterFormType === "all" 
                      ? "No form submissions yet" 
                      : `No ${filterFormType} submissions found`}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
