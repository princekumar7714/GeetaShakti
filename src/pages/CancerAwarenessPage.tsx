import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Calendar, Users, Target, Award, Megaphone, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { emailService } from "@/services/emailService";

export default function CancerAwarenessPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    event: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await emailService.sendFormSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        formType: 'Cancer Awareness Registration',
        additionalData: {
          organization: formData.organization,
          event: formData.event
        }
      });

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ 
          name: "", email: "", phone: "", 
          organization: "", event: "", message: "" 
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to submit registration. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const programs = [
    {
      icon: <Megaphone className="w-8 h-8 text-red-500" />,
      title: "Community Awareness Camps",
      description: "Educational camps in residential areas, markets, and community centers",
      impact: "20,000+ people reached",
      frequency: "Monthly camps"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "School & College Programs",
      description: "Awareness sessions for students about cancer prevention and healthy lifestyles",
      impact: "15,000+ students educated",
      frequency: "Weekly sessions"
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Corporate Wellness Programs",
      description: "Cancer awareness and prevention programs for corporate employees",
      impact: "50+ companies covered",
      frequency: "As per request"
    },
    {
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      title: "Women's Health Initiative",
      description: "Focused awareness programs on breast and cervical cancer for women",
      impact: "10,000+ women reached",
      frequency: "Special camps"
    }
  ];

  const topics = [
    {
      title: "Cancer Prevention",
      points: [
        "Healthy lifestyle and nutrition",
        "Avoiding tobacco and alcohol",
        "Regular physical activity",
        "Stress management techniques"
      ]
    },
    {
      title: "Early Detection",
      points: [
        "Warning signs and symptoms",
        "Importance of regular checkups",
        "Self-examination techniques",
        "Screening guidelines"
      ]
    },
    {
      title: "Treatment Options",
      points: [
        "Modern treatment modalities",
        "Importance of early treatment",
        "Side effect management",
        "Rehabilitation and recovery"
      ]
    },
    {
      title: "Myths vs Facts",
      points: [
        "Common misconceptions about cancer",
        "Scientific facts and evidence",
        "Importance of medical advice",
        "Avoiding false information"
      ]
    }
  ];

  const upcomingEvents = [
    {
      date: "2024-02-18",
      title: "Breast Cancer Awareness Camp",
      location: "Community Center, Sector 15, Noida",
      type: "Women's Health"
    },
    {
      date: "2024-02-22",
      title: "School Awareness Program",
      location: "Govt School, Bawana, Delhi",
      type: "Education"
    },
    {
      date: "2024-02-25",
      title: "Corporate Wellness Session",
      location: "Tech Park, Gurgaon",
      type: "Corporate"
    },
    {
      date: "2024-03-01",
      title: "General Cancer Awareness Camp",
      location: "Geeta Shakti Center, Noida",
      type: "Community"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Megaphone className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cancer Awareness
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Spreading knowledge, breaking myths, and empowering communities with the 
              information they need to prevent, detect, and fight cancer effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Join Awareness Camp
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                <Target className="w-5 h-5 mr-2" />
                Request Session
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50,000+", label: "People Educated", icon: <Users className="w-6 h-6 mx-auto mb-2 text-red-600" /> },
              { number: "200+", label: "Awareness Camps", icon: <Megaphone className="w-6 h-6 mx-auto mb-2 text-blue-600" /> },
              { number: "100+", label: "Schools Covered", icon: <Target className="w-6 h-6 mx-auto mb-2 text-green-600" /> },
              { number: "95%", label: "Awareness Level Increase", icon: <Award className="w-6 h-6 mx-auto mb-2 text-purple-600" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                {stat.icon}
                <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awareness Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Awareness Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-red-600">Impact:</span>
                    <p className="text-gray-600">{program.impact}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-red-600">Frequency:</span>
                    <p className="text-gray-600">{program.frequency}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Topics We Cover</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-red-600">{topic.title}</h3>
                <ul className="space-y-2">
                  {topic.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Know the Warning Signs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Unexplained weight loss",
              "Persistent fatigue",
              "Changes in bowel or bladder habits",
              "Unusual bleeding or discharge",
              "Thickening or lump in body",
              "Persistent cough or hoarseness",
              "Sores that don't heal",
              "Difficulty swallowing",
              "Changes in moles or warts",
              "Persistent indigestion"
            ].map((sign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-4 rounded-lg shadow-md flex items-center"
              >
                <AlertTriangle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-700">{sign}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Awareness Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center text-sm text-red-600 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(event.date).toLocaleDateString('en-IN', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                    {event.type}
                  </span>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Register to Attend
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Request Awareness Session</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Contact Person *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Organization/School *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Type of Session *</label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={formData.event}
                  onChange={(e) => setFormData({...formData, event: e.target.value})}
                >
                  <option value="">Select session type</option>
                  <option value="general">General Cancer Awareness</option>
                  <option value="women">Women's Health (Breast/Cervical)</option>
                  <option value="prevention">Prevention & Healthy Lifestyle</option>
                  <option value="screening">Early Detection & Screening</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Requirements</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Please share any specific requirements, preferred dates, or target audience..."
                />
              </div>

              {submitStatus.type && (
                <div className={`p-4 rounded-lg flex items-center space-x-2 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  <CheckCircle className="w-5 h-5" />
                  <span>{submitStatus.message}</span>
                </div>
              )}

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
                <Megaphone className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
