import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Users, Phone, Mail, Calendar, Brain, Smile, Shield, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { emailService } from "@/services/emailService";
import { whatsappService } from "@/services/whatsappService";

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
      // Send email
      const emailResult = await emailService.sendFormSubmission({
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

      // Send WhatsApp message
      const whatsappResult = await whatsappService.sendFormSubmission({
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

      if (emailResult.success && whatsappResult.success) {
        setSubmitStatus({ type: 'success', message: 'Request submitted successfully! Details sent to email and WhatsApp.' });
        setFormData({ 
          name: "", email: "", phone: "", 
          patientType: "", counselingType: "", 
          preferredTime: "", message: "" 
        });
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to submit request. Please try again.' });
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
      description: "Support for families to navigate the challenges of cancer together and strengthen relationships",
      features: ["Family dynamics", "Communication skills", "Caregiver support", "Conflict resolution"]
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-600" />,
      title: "Support Groups",
      description: "Group therapy sessions with fellow patients and survivors for shared experiences and mutual support",
      features: ["Peer support", "Shared experiences", "Group activities", "Community building"]
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      title: "Trauma-Informed Care",
      description: "Specialized counseling for trauma recovery and building resilience during and after treatment",
      features: ["Trauma processing", "PTSD support", "Resilience building", "Safety planning"]
    }
  ];

  const supportTypes = [
    {
      title: "Pre-Diagnosis Counseling",
      description: "Support for individuals dealing with cancer fears, screening anxiety, and waiting for results",
      duration: "45-60 minutes",
      frequency: "As needed"
    },
    {
      title: "Post-Diagnosis Support",
      description: "Emotional support and coping strategies after receiving a cancer diagnosis",
      duration: "60 minutes",
      frequency: "Weekly for 4-6 weeks"
    },
    {
      title: "Treatment Side Effects",
      description: "Managing emotional and psychological side effects of cancer treatments",
      duration: "45-60 minutes",
      frequency: "Bi-weekly"
    },
    {
      title: "Survivorship Counseling",
      description: "Support for cancer survivors dealing with life after treatment and fear of recurrence",
      duration: "60 minutes",
      frequency: "Monthly or as needed"
    },
    {
      title: "Grief and Bereavement",
      description: "Counseling for families dealing with loss and grief",
      duration: "60 minutes",
      frequency: "Weekly initially"
    },
    {
      title: "Caregiver Support",
      description: "Specialized support for family members and caregivers",
      duration: "45-60 minutes",
      frequency: "Bi-weekly"
    }
  ];

  const counselors = [
    {
      name: "Dr. Priya Sharma",
      role: "Clinical Psychologist",
      expertise: "Cancer Psychology, Trauma",
      experience: "12+ years",
      languages: "English, Hindi",
      photo: "👩‍⚕️"
    },
    {
      name: "Dr. Anjali Verma",
      role: "Counseling Psychologist",
      expertise: "Family Therapy, Grief Counseling",
      experience: "8+ years",
      languages: "English, Hindi, Punjabi",
      photo: "👩‍⚕️"
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Psychiatric Social Worker",
      expertise: "Support Groups, Community Counseling",
      experience: "10+ years",
      languages: "English, Hindi, Urdu",
      photo: "👨‍⚕️"
    },
    {
      name: "Dr. Meera Nair",
      role: "Mental Health Counselor",
      expertise: "Anxiety, Depression, Coping Skills",
      experience: "6+ years",
      languages: "English, Hindi, Malayalam",
      photo: "👩‍⚕️"
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
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Comprehensive mental health and emotional support services for cancer patients, 
              survivors, and their families throughout their journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Counseling Session
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Phone className="w-5 h-5 mr-2" />
                24/7 Crisis Helpline
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
              { number: "3000+", label: "Patients Supported", icon: <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" /> },
              { number: "15+", label: "Expert Counselors", icon: <Brain className="w-6 h-6 mx-auto mb-2 text-purple-600" /> },
              { number: "500+", label: "Support Groups", icon: <MessageCircle className="w-6 h-6 mx-auto mb-2 text-green-600" /> },
              { number: "98%", label: "Satisfaction Rate", icon: <Smile className="w-6 h-6 mx-auto mb-2 text-orange-600" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                {stat.icon}
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Counseling Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Types of Support We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-3 text-blue-600">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium">{type.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Frequency:</span>
                    <span className="font-medium">{type.frequency}</span>
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Expert Counselors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {counselors.map((counselor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{counselor.photo}</div>
                <h3 className="text-lg font-semibold mb-2">{counselor.name}</h3>
                <p className="text-blue-600 text-sm mb-2">{counselor.role}</p>
                <p className="text-gray-600 text-xs mb-2">{counselor.expertise}</p>
                <p className="text-gray-500 text-xs mb-2">{counselor.experience}</p>
                <p className="text-gray-500 text-xs">Languages: {counselor.languages}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Groups Schedule */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Support Groups Schedule</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-6 border-r border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Online Support Groups</h3>
                <div className="space-y-4">
                  {[
                    { name: "Young Adults with Cancer", time: "Every Tuesday, 6:00 PM", participants: "15-20" },
                    { name: "Breast Cancer Survivors", time: "Every Thursday, 5:00 PM", participants: "20-25" },
                    { name: "Caregivers Support", time: "Every Saturday, 4:00 PM", participants: "10-15" },
                    { name: "Grief and Loss", time: "Every Wednesday, 7:00 PM", participants: "8-12" }
                  ].map((group, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{group.name}</h4>
                        <p className="text-sm text-gray-600">{group.time}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-blue-600">{group.participants}</p>
                        <Button variant="outline" size="sm">Join</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">In-Person Support Groups</h3>
                <div className="space-y-4">
                  {[
                    { name: "General Cancer Support", time: "Every Monday, 5:00 PM", location: "Main Center" },
                    { name: "Family Support Group", time: "Every Friday, 6:00 PM", location: "Community Hall" },
                    { name: "Men's Cancer Support", time: "1st & 3rd Sunday, 10:00 AM", location: "Conference Room" },
                    { name: "Women's Wellness Circle", time: "2nd & 4th Sunday, 10:00 AM", location: "Wellness Center" }
                  ].map((group, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{group.name}</h4>
                        <p className="text-sm text-gray-600">{group.time}</p>
                        <p className="text-xs text-gray-500">{group.location}</p>
                      </div>
                      <Button variant="outline" size="sm">Join</Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counseling Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Book Counseling Session</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Patient Type *</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.patientType}
                    onChange={(e) => setFormData({...formData, patientType: e.target.value})}
                  >
                    <option value="">Select patient type</option>
                    <option value="patient">Current Patient</option>
                    <option value="survivor">Cancer Survivor</option>
                    <option value="caregiver">Family Member/Caregiver</option>
                    <option value="bereaved">Bereaved Family Member</option>
                    <option value="prevention">At-Risk Individual</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Counseling Type *</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.counselingType}
                    onChange={(e) => setFormData({...formData, counselingType: e.target.value})}
                  >
                    <option value="">Select counseling type</option>
                    <option value="individual">Individual Counseling</option>
                    <option value="family">Family Counseling</option>
                    <option value="group">Support Group</option>
                    <option value="trauma">Trauma-Informed Care</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Time *</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Afternoon (2:00 PM - 5:00 PM)</option>
                    <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                    <option value="weekend">Weekend Sessions</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tell us about your counseling needs</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Please share what you're going through, your concerns, and what you hope to achieve through counseling..."
                />
              </div>

              {submitStatus.type && (
                <div className={`p-4 rounded-lg flex items-center space-x-2 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  <Heart className="w-5 h-5" />
                  <span>{submitStatus.message}</span>
                </div>
              )}

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                <MessageCircle className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Booking...' : 'Book Counseling Session'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Crisis Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-red-800">24/7 Crisis Support Available</h2>
            <p className="text-lg text-gray-700 mb-6">
              If you or someone you know is experiencing a mental health crisis, we're here to help.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <Phone className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Crisis Helpline</h3>
                <p className="text-gray-600">+91 8114222222</p>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <MessageCircle className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">WhatsApp Support</h3>
                <p className="text-gray-600">+91 8114222222</p>
                <p className="text-sm text-gray-500">Instant response</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <Mail className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600">crisis@geetashakti.com</p>
                <p className="text-sm text-gray-500">Response within 1 hour</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
