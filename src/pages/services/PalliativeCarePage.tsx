import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Users, Phone, Mail, Calendar, Home, Clock, Shield, Flower } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { emailService } from "@/services/emailService";

export default function PalliativeCarePage() {
  const [formData, setFormData] = useState({
    patientName: "",
    caregiverName: "",
    email: "",
    phone: "",
    condition: "",
    careType: "",
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
        name: formData.caregiverName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        formType: 'Palliative Care Request',
        additionalData: {
          patientName: formData.patientName,
          condition: formData.condition,
          careType: formData.careType
        }
      });

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ 
          patientName: "", caregiverName: "", email: "", 
          phone: "", condition: "", careType: "", message: "" 
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
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Pain Management",
      description: "Specialized pain relief techniques and medication management for comfort and quality of life",
      features: ["24/7 pain monitoring", "Medication management", "Non-pharmacological therapies"]
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Emotional Support",
      description: "Counseling and psychological support for patients and families during difficult times",
      features: ["Individual counseling", "Family therapy", "Support groups", "Grief counseling"]
    },
    {
      icon: <Home className="w-8 h-8 text-green-600" />,
      title: "Home Care Services",
      description: "Professional palliative care in the comfort of your home by trained healthcare workers",
      features: ["Home visits", "Nursing care", "Personal hygiene assistance", "Wound care"]
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "End-of-Life Care",
      description: "Compassionate end-of-life care focusing on dignity, comfort, and family support",
      features: ["Dignity preservation", "Family counseling", "Spiritual support", "Bereavement support"]
    }
  ];

  const team = [
    {
      name: "Dr. Anjali Sharma",
      role: "Palliative Care Specialist",
      experience: "15+ years",
      photo: "👩‍⚕️"
    },
    {
      name: "Dr. Rajesh Verma",
      role: "Pain Management Expert",
      experience: "12+ years",
      photo: "👨‍⚕️"
    },
    {
      name: "Priya Nair",
      role: "Counseling Psychologist",
      experience: "10+ years",
      photo: "👩‍⚕️"
    },
    {
      name: "Nurse Meera",
      role: "Senior Palliative Nurse",
      experience: "8+ years",
      photo: "👩‍⚕️"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-rose-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Flower className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Palliative Care Assistance
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Providing compassionate care and support to improve quality of life for patients 
              with serious illnesses and their families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                <Heart className="w-5 h-5 mr-2" />
                Request Care Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-rose-600">
                <Phone className="w-5 h-5 mr-2" />
                24/7 Helpline: +91 8114222222
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Palliative Care */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-6">What is Palliative Care?</h2>
              <p className="text-gray-600 mb-4">
                Palliative care is specialized medical care for people living with serious illnesses. 
                It focuses on providing relief from symptoms and stress of the illness.
              </p>
              <p className="text-gray-600 mb-6">
                Our goal is to improve quality of life for both the patient and the family through 
                comprehensive physical, emotional, and spiritual support.
              </p>
              <div className="space-y-3">
                {[
                  "Pain and symptom management",
                  "Emotional and psychological support",
                  "Spiritual care and counseling",
                  "Family support and education",
                  "Coordination with medical teams"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-rose-600 mb-2">500+</div>
                  <p className="text-gray-600">Patients Cared For</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-600 mb-2">24/7</div>
                  <p className="text-gray-600">Support Available</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-600 mb-2">15+</div>
                  <p className="text-gray-600">Expert Team Members</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-600 mb-2">98%</div>
                  <p className="text-gray-600">Satisfaction Rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Palliative Care Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Compassionate Care Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{member.photo}</div>
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <p className="text-rose-600 text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.experience} experience</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Process */}
      <section className="py-16 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Care Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Assessment",
                description: "Comprehensive evaluation of patient's physical, emotional, and social needs"
              },
              {
                step: "2",
                title: "Care Planning",
                description: "Personalized care plan developed with patient and family input"
              },
              {
                step: "3",
                title: "Implementation",
                description: "Coordinated delivery of care services by our expert team"
              },
              {
                step: "4",
                title: "Ongoing Support",
                description: "Continuous monitoring and adjustment of care as needed"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Request Palliative Care Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Patient Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    value={formData.patientName}
                    onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Caregiver Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    value={formData.caregiverName}
                    onChange={(e) => setFormData({...formData, caregiverName: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Medical Condition *</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    value={formData.condition}
                    onChange={(e) => setFormData({...formData, condition: e.target.value})}
                  >
                    <option value="">Select condition</option>
                    <option value="cancer">Cancer</option>
                    <option value="heart-disease">Heart Disease</option>
                    <option value="kidney-disease">Kidney Disease</option>
                    <option value="lung-disease">Lung Disease</option>
                    <option value="neurological">Neurological Condition</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Care Type Needed *</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    value={formData.careType}
                    onChange={(e) => setFormData({...formData, careType: e.target.value})}
                  >
                    <option value="">Select care type</option>
                    <option value="home">Home Care</option>
                    <option value="hospital">Hospital-based Care</option>
                    <option value="hospice">Hospice Care</option>
                    <option value="consultation">Consultation Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Information</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Please provide details about the patient's condition, current symptoms, and specific care needs..."
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

              <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700" disabled={isSubmitting}>
                <Heart className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Submitting...' : 'Request Care Consultation'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">24/7 Palliative Care Support</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-rose-600 mb-3" />
                <h3 className="font-semibold mb-2">Emergency Helpline</h3>
                <p className="text-gray-600">+91 8114222222</p>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-rose-600 mb-3" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600">palliative@geetashakti.com</p>
                <p className="text-sm text-gray-500">Response within 2 hours</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-rose-600 mb-3" />
                <h3 className="font-semibold mb-2">Home Visit Booking</h3>
                <p className="text-gray-600">Same-day appointments</p>
                <p className="text-sm text-gray-500">Available in NCR region</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
