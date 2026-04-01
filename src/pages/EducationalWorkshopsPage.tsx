import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Users, Award, BookOpen, Target, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { emailService } from "@/services/emailService";
import { whatsappService } from "@/services/whatsappService";

export default function EducationalWorkshopsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    workshopType: "",
    participantCount: "",
    preferredDate: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Send email
      const emailResult = await emailService.sendFormSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        formType: 'Educational Workshop Registration',
        additionalData: {
          organization: formData.organization,
          workshopType: formData.workshopType,
          participantCount: formData.participantCount,
          preferredDate: formData.preferredDate
        }
      });

      // Send WhatsApp message
      const whatsappResult = await whatsappService.sendFormSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        formType: 'Educational Workshop Registration',
        additionalData: {
          organization: formData.organization,
          workshopType: formData.workshopType,
          participantCount: formData.participantCount,
          preferredDate: formData.preferredDate
        }
      });

      if (emailResult.success && whatsappResult.success) {
        setSubmitStatus({ type: 'success', message: 'Registration submitted successfully! Details sent to email and WhatsApp.' });
        setFormData({ 
          name: "", email: "", phone: "", 
          organization: "", workshopType: "", 
          participantCount: "", preferredDate: "", message: "" 
        });
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to submit registration. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to submit registration. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const workshops = [
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      title: "Cancer Awareness Workshop",
      description: "Comprehensive workshop on cancer prevention, early detection, and treatment options",
      duration: "2-3 hours",
      audience: "General Public, Schools, Colleges",
      topics: ["Types of cancer", "Prevention strategies", "Early detection", "Treatment options"]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Nutrition & Cancer Prevention",
      description: "Learn about dietary habits and lifestyle changes that can help prevent cancer",
      duration: "2 hours",
      audience: "General Public, Patients, Caregivers",
      topics: ["Anti-cancer foods", "Healthy eating habits", "Lifestyle modifications", "Nutrition during treatment"]
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Caregiver Training Program",
      description: "Essential training for family members and caregivers of cancer patients",
      duration: "4 hours",
      audience: "Family Members, Caregivers, Healthcare Workers",
      topics: ["Patient care basics", "Emotional support", "Medication management", "Emergency response"]
    },
    {
      icon: <Target className="w-8 h-8 text-orange-600" />,
      title: "School Health Education",
      description: "Age-appropriate cancer awareness and health education for students",
      duration: "1-2 hours",
      audience: "Students (Class 6-12), Teachers",
      topics: ["Healthy lifestyle", "Disease prevention", "Body awareness", "Mental health"]
    }
  ];

  const upcomingWorkshops = [
    {
      date: "2024-03-25",
      title: "Cancer Awareness Workshop",
      location: "Community Center, Noida",
      type: "Public Workshop",
      seats: "25 seats available"
    },
    {
      date: "2024-03-28",
      title: "Nutrition & Cancer Prevention",
      location: "Online Webinar",
      type: "Online Session",
      seats: "50 seats available"
    },
    {
      date: "2024-04-02",
      title: "Caregiver Training Program",
      location: "Hospital Conference Room",
      type: "Training Program",
      seats: "15 seats available"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <GraduationCap className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Educational Workshops & Seminars
              </h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Empowering communities with knowledge through interactive workshops and educational programs on cancer awareness and prevention
              </p>
            </motion.div>
          </div>
        </section>

        {/* Workshops Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Workshop Programs</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer a variety of educational workshops designed to raise awareness and provide valuable knowledge about cancer prevention and care
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {workshop.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{workshop.title}</h3>
                      <p className="text-gray-600 mb-4">{workshop.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-2" />
                          {workshop.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="w-4 h-4 mr-2" />
                          {workshop.audience}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-700 mb-2">Topics Covered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {workshop.topics.map((topic, i) => (
                            <span key={i} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Workshops */}
        <section className="py-16 bg-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Upcoming Workshops</h2>
              <p className="text-lg text-gray-600">Join our upcoming educational workshops and seminars</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingWorkshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{workshop.title}</h3>
                    <p className="text-gray-600 mb-4">{workshop.location}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Date:</span>
                        <span className="font-medium">{workshop.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Type:</span>
                        <span className="font-medium">{workshop.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Availability:</span>
                        <span className="font-medium text-green-600">{workshop.seats}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                      Register Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="text-center mb-8">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Register for Workshop</h2>
                <p className="text-gray-600">
                  Sign up for our educational workshops and gain valuable knowledge about cancer prevention and care
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Organization/Institution</label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="School, College, Company, etc."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Workshop Type *</label>
                    <select
                      required
                      value={formData.workshopType}
                      onChange={(e) => setFormData({...formData, workshopType: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select a workshop</option>
                      <option value="Cancer Awareness Workshop">Cancer Awareness Workshop</option>
                      <option value="Nutrition & Cancer Prevention">Nutrition & Cancer Prevention</option>
                      <option value="Caregiver Training Program">Caregiver Training Program</option>
                      <option value="School Health Education">School Health Education</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Participants</label>
                    <input
                      type="number"
                      value={formData.participantCount}
                      onChange={(e) => setFormData({...formData, participantCount: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Expected number of participants"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Information</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your specific requirements or questions..."
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

                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
                  {isSubmitting ? 'Registering...' : 'Register for Workshop'}
                </Button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Why Attend Our Workshops?</h2>
              <p className="text-lg text-gray-600">Gain valuable knowledge and skills to make a difference</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Knowledge</h3>
                <p className="text-gray-600">Learn from healthcare professionals and cancer experts</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
                <p className="text-gray-600">Engage in hands-on activities and group discussions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Practical Skills</h3>
                <p className="text-gray-600">Gain practical skills for cancer prevention and care</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
