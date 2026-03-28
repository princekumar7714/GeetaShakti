import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Users, Award, Clock, CheckCircle, Shield, Activity, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { emailService } from "@/services/emailService";

export default function EarlyDetectionAwarenessPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    screeningType: "",
    familyHistory: "",
    symptoms: "",
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
      const result = await emailService.sendFormSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        formType: 'Early Detection Screening Registration',
        additionalData: {
          age: formData.age,
          screeningType: formData.screeningType,
          familyHistory: formData.familyHistory,
          symptoms: formData.symptoms,
          preferredDate: formData.preferredDate
        }
      });

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ 
          name: "", email: "", phone: "", 
          age: "", screeningType: "", 
          familyHistory: "", symptoms: "", 
          preferredDate: "", message: "" 
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

  const screeningTypes = [
    {
      icon: <Shield className="w-8 h-8 text-pink-600" />,
      title: "Breast Cancer Screening",
      description: "Early detection through mammography and clinical breast examination",
      recommendedAge: "40+ years (or earlier with family history)",
      frequency: "Annually",
      tests: ["Mammography", "Clinical Breast Exam", "Self-Exam Training"]
    },
    {
      icon: <Activity className="w-8 h-8 text-blue-600" />,
      title: "Cervical Cancer Screening",
      description: "Pap smear and HPV testing for early cervical cancer detection",
      recommendedAge: "21-65 years",
      frequency: "Every 3 years",
      tests: ["Pap Smear", "HPV Testing", "Visual Inspection"]
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Oral Cancer Screening",
      description: "Visual examination of mouth and throat for early signs of oral cancer",
      recommendedAge: "All adults (especially tobacco users)",
      frequency: "Annually",
      tests: ["Visual Exam", "Toluidine Blue Test", "Biopsy if needed"]
    },
    {
      icon: <Search className="w-8 h-8 text-green-600" />,
      title: "Comprehensive Screening",
      description: "Complete health checkup including multiple cancer screenings",
      recommendedAge: "30+ years",
      frequency: "Annually",
      tests: ["Blood Tests", "Imaging", "Physical Exam", "Counseling"]
    }
  ];

  const warningSigns = [
    {
      title: "Unexplained Weight Loss",
      description: "Losing weight without trying could be an early sign of cancer",
      icon: "⚖️"
    },
    {
      title: "Persistent Fatigue",
      description: "Extreme tiredness that doesn't improve with rest",
      icon: "😴"
    },
    {
      title: "Changes in Skin",
      description: "New moles, sores that don't heal, or changes in existing skin conditions",
      icon: "🔍"
    },
    {
      title: "Persistent Pain",
      description: "Pain that doesn't go away and has no clear cause",
      icon: "💊"
    },
    {
      title: "Changes in Bowel/Bladder Habits",
      description: "Long-term constipation, diarrhea, or changes in stool size",
      icon: "🚽"
    },
    {
      title: "Unusual Bleeding",
      description: "Blood in urine, stool, or coughing up blood",
      icon: "🩸"
    }
  ];

  const upcomingCamps = [
    {
      date: "2024-03-25",
      title: "Free Breast Cancer Screening Camp",
      location: "Community Center, Noida",
      type: "Women's Health",
      seats: "40 seats available"
    },
    {
      date: "2024-03-28",
      title: "Comprehensive Cancer Screening",
      location: "Primary Health Center, Ghaziabad",
      type: "General Screening",
      seats: "60 seats available"
    },
    {
      date: "2024-04-02",
      title: "Oral Cancer Detection Camp",
      location: "Dental College, Delhi",
      type: "Oral Health",
      seats: "30 seats available"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <Search className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Early Detection & Awareness
              </h1>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                Detect cancer early when it's most treatable. Regular screenings and awareness can save lives.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Screening Types */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Cancer Screening Types</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Regular screenings can detect cancer early, when treatment is most effective
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {screeningTypes.map((screening, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {screening.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{screening.title}</h3>
                      <p className="text-gray-600 mb-4">{screening.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="w-4 h-4 mr-2" />
                          {screening.recommendedAge}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-2" />
                          {screening.frequency}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-700 mb-2">Tests Included:</h4>
                        <div className="flex flex-wrap gap-2">
                          {screening.tests.map((test, i) => (
                            <span key={i} className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                              {test}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        Book Screening
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="py-16 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Warning Signs to Watch For</h2>
              <p className="text-lg text-gray-600">Early detection starts with recognizing these warning signs</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {warningSigns.map((sign, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{sign.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">{sign.title}</h3>
                      <p className="text-sm text-gray-600">{sign.description}</p>
                    </div>
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
                <Calendar className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Register for Free Screening</h2>
                <p className="text-gray-600">
                  Take the first step towards early detection. Register for our free cancer screening program.
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Age *</label>
                    <input
                      type="number"
                      required
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Your age"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Screening Type *</label>
                    <select
                      required
                      value={formData.screeningType}
                      onChange={(e) => setFormData({...formData, screeningType: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select screening type</option>
                      <option value="Breast Cancer Screening">Breast Cancer Screening</option>
                      <option value="Cervical Cancer Screening">Cervical Cancer Screening</option>
                      <option value="Oral Cancer Screening">Oral Cancer Screening</option>
                      <option value="Comprehensive Screening">Comprehensive Screening</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Family History of Cancer</label>
                    <select
                      value={formData.familyHistory}
                      onChange={(e) => setFormData({...formData, familyHistory: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="No family history">No family history</option>
                      <option value="One family member">One family member</option>
                      <option value="Multiple family members">Multiple family members</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Any current symptoms or concerns?</label>
                  <textarea
                    rows={4}
                    value={formData.symptoms}
                    onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Please describe any symptoms, pain, or concerns you'd like us to check during the screening..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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

                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" disabled={isSubmitting}>
                  {isSubmitting ? 'Registering...' : 'Register for Free Screening'}
                </Button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Camps */}
        <section className="py-16 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <Calendar className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Upcoming Screening Camps</h2>
              <p className="text-lg text-gray-600">Join our free cancer screening camps in your area</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingCamps.map((camp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{camp.title}</h3>
                    <p className="text-gray-600 mb-4">{camp.location}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Date:</span>
                        <span className="font-medium">{camp.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Type:</span>
                        <span className="font-medium">{camp.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Availability:</span>
                        <span className="font-medium text-green-600">{camp.seats}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                      Register Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Numbers */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Helpline</h3>
                  <p className="text-gray-600">+91 8114222222</p>
                  <p className="text-sm text-gray-500">24/7 Available</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-gray-600">screening@geetashakti.com</p>
                  <p className="text-sm text-gray-500">Response within 24 hours</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-600">Basement and FF, BLK-03</p>
                  <p className="text-sm text-gray-500">Sector 121, Noida</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
