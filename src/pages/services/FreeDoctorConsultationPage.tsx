import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Calendar, Clock, Users, Stethoscope, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { emailService } from "@/services/emailService";
import { whatsappService } from "@/services/whatsappService";

export default function FreeDoctorConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    symptoms: "",
    preferredTime: ""
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
        message: formData.symptoms,
        formType: 'Doctor Consultation Booking',
        additionalData: {
          preferredDate: formData.date,
          preferredTime: formData.preferredTime
        }
      });

      // Send WhatsApp message
      const whatsappResult = await whatsappService.sendFormSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.symptoms,
        formType: 'Doctor Consultation Booking',
        additionalData: {
          preferredDate: formData.date,
          preferredTime: formData.preferredTime
        }
      });

      if (emailResult.success && whatsappResult.success) {
        setSubmitStatus({ type: 'success', message: 'Consultation booked successfully! Details sent to email and WhatsApp.' });
        setFormData({ 
          name: "", email: "", phone: "", 
          date: "", symptoms: "", preferredTime: "" 
        });
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to book consultation. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to book consultation. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Stethoscope className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Free Doctor Consultation & Health Checkups
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Access quality healthcare without financial barriers. Our expert medical team provides 
              comprehensive consultations and health screenings to ensure early detection and prevention.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
                title: "General Health Checkup",
                description: "Comprehensive physical examination including vital signs, BMI, and basic health indicators"
              },
              {
                icon: <Heart className="w-8 h-8 text-red-500" />,
                title: "Cancer Screening",
                description: "Early detection screenings for various types of cancer with advanced diagnostic tools"
              },
              {
                icon: <Users className="w-8 h-8 text-green-600" />,
                title: "Specialist Consultation",
                description: "Access to oncologists, surgeons, and other specialists for expert medical advice"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included in Your Free Consultation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Complete medical history review",
              "Physical examination",
              "Blood pressure and heart rate monitoring",
              "BMI and nutritional assessment",
              "Basic blood tests",
              "Cancer risk assessment",
              "Personalized health recommendations",
              "Referral to specialists if needed"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Book Your Free Consultation</h2>
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
                  <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Preferred Time</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                >
                  <option value="">Select a time slot</option>
                  <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (2:00 PM - 5:00 PM)</option>
                  <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Describe your symptoms or health concerns</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.symptoms}
                  onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
                  placeholder="Please describe any symptoms or health concerns you'd like to discuss..."
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
                <Calendar className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Scheduling...' : 'Schedule Free Consultation'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Need Immediate Assistance?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+91 8114222222</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">support@geetashakti.com</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Working Hours</h3>
                <p className="text-gray-600">Mon-Sat: 9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
