import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Users, Phone, Mail, Calendar, Brain, Smile, Shield, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { emailService } from "@/services/emailService";

export default function CounselingPatientSupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    patientType: "",
    counselingType: "",
    preferredTime: "",
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
        formType: 'Counseling & Patient Support Request',
        additionalData: {
          patientType: formData.patientType,
          counselingType: formData.counselingType,
          preferredTime: formData.preferredTime
        }
      });

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ 
          name: "", email: "", phone: "", 
          patientType: "", counselingType: "", 
          preferredTime: "", message: "" 
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to submit request. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Individual Counseling",
      description: "One-on-one counseling sessions to address emotional, psychological, and mental health concerns",
      features: ["Anxiety management", "Depression support", "Coping strategies", "Emotional healing"]
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Family Counseling",
      description: "Support for families dealing with cancer, helping them navigate challenges together",
      features: ["Family dynamics", "Communication skills", "Caregiver support", "Crisis intervention"]
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Support Groups",
      description: "Group sessions where patients and families can share experiences and support each other",
      features: ["Peer support", "Shared experiences", "Community building", "Mutual encouragement"]
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Trauma-Informed Care",
      description: "Specialized counseling for those dealing with trauma related to cancer diagnosis and treatment",
      features: ["Trauma processing", "Safety planning", "Grounding techniques", "EMDR therapy"]
    }
  ];

  const counselors = [
    {
      name: "Dr. Sarah Johnson",
      role: "Clinical Psychologist",
      expertise: "Cancer Psychology, Trauma Therapy",
      experience: "10+ years",
      languages: "English, Hindi",
      photo: "👩‍⚕️"
    },
    {
      name: "Dr. Michael Chen",
      role: "Psychiatric Counselor",
      expertise: "Anxiety, Depression, Coping Skills",
      experience: "8+ years",
      languages: "English, Mandarin, Hindi",
      photo: "👨‍⚕️"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Family Therapist",
      expertise: "Family Dynamics, Caregiver Support",
      experience: "12+ years",
      languages: "English, Hindi, Punjabi",
      photo: "👩‍⚕️"
    },
    {
      name: "Dr. James Wilson",
      role: "Mental Health Counselor",
      expertise: "Grief Counseling, Support Groups",
      experience: "6+ years",
      languages: "English, Hindi",
      photo: "👨‍⚕️"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <Heart className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Counseling & Patient Support
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Professional counseling services to support the emotional and mental well-being of cancer patients and their families
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Counseling Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive mental health support tailored to the unique needs of cancer patients and their families
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="w-full">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600 mb-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Counselors */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Our Expert Counselors</h2>
              <p className="text-lg text-gray-600">Compassionate professionals dedicated to supporting your mental health journey</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {counselors.map((counselor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                      {counselor.photo}
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{counselor.name}</h3>
                    <p className="text-blue-600 text-sm font-medium mb-2">{counselor.role}</p>
                    <p className="text-gray-600 text-sm mb-3">{counselor.expertise}</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center justify-center text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {counselor.experience}
                      </div>
                      <div className="flex items-center justify-center text-gray-500">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {counselor.languages}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Counseling Form */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="text-center mb-8">
                <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Book Counseling Session</h2>
                <p className="text-gray-600">
                  Take the first step towards emotional healing and mental well-being
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Patient Type *</label>
                    <select
                      required
                      value={formData.patientType}
                      onChange={(e) => setFormData({...formData, patientType: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select patient type</option>
                      <option value="Cancer Patient">Cancer Patient</option>
                      <option value="Family Member">Family Member</option>
                      <option value="Caregiver">Caregiver</option>
                      <option value="Survivor">Cancer Survivor</option>
                      <option value="General Support">General Support</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Counseling Type *</label>
                    <select
                      required
                      value={formData.counselingType}
                      onChange={(e) => setFormData({...formData, counselingType: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select counseling type</option>
                      <option value="Individual Counseling">Individual Counseling</option>
                      <option value="Family Counseling">Family Counseling</option>
                      <option value="Support Group">Support Group</option>
                      <option value="Trauma-Informed Care">Trauma-Informed Care</option>
                      <option value="Grief Counseling">Grief Counseling</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Time *</label>
                    <select
                      required
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select preferred time</option>
                      <option value="Morning (9AM-12PM)">Morning (9AM-12PM)</option>
                      <option value="Afternoon (12PM-4PM)">Afternoon (12PM-4PM)</option>
                      <option value="Evening (4PM-7PM)">Evening (4PM-7PM)</option>
                      <option value="Weekend">Weekend</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tell us about your counseling needs</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please share what you're going through, your concerns, and what you hope to achieve through counseling..."
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

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                  {isSubmitting ? 'Booking...' : 'Book Counseling Session'}
                </Button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Crisis Support */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-red-50 rounded-lg p-8 text-center">
              <Shield className="w-16 h-16 text-red-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Crisis Support Available</h2>
              <p className="text-lg text-gray-600 mb-8">
                If you're experiencing a mental health crisis, we're here to help 24/7
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Phone className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Crisis Helpline</h3>
                  <p className="text-gray-600">+91 9112345678</p>
                  <p className="text-sm text-gray-500">24/7 Available</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Mail className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-gray-600">crisis@geetashakti.com</p>
                  <p className="text-sm text-gray-500">Response within 1 hour</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <MessageCircle className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">WhatsApp Support</h3>
                  <p className="text-gray-600">+91 9876543210</p>
                  <p className="text-sm text-gray-500">Chat support available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <Smile className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Benefits of Counseling</h2>
              <p className="text-lg text-gray-600">How professional counseling can support your cancer journey</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Emotional Healing</h3>
                <p className="text-gray-600">Process emotions and develop healthy coping mechanisms</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Support System</h3>
                <p className="text-gray-600">Build a strong support network and connect with others</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Resilience Building</h3>
                <p className="text-gray-600">Develop mental strength and resilience for the journey ahead</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
