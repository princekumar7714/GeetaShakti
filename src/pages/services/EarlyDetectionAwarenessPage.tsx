import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Users, Shield, AlertTriangle, CheckCircle, Activity, Eye, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { emailService } from "@/services/emailService";
import { whatsappService } from "@/services/whatsappService";

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
      // Send email
      const emailResult = await emailService.sendFormSubmission({
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

      // Send WhatsApp message
      const whatsappResult = await whatsappService.sendFormSubmission({
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

      if (emailResult.success && whatsappResult.success) {
        setSubmitStatus({ type: 'success', message: 'Registration submitted successfully! Details sent to email and WhatsApp.' });
        setFormData({ 
          name: "", email: "", phone: "", 
          age: "", screeningType: "", 
          familyHistory: "", symptoms: "", 
          preferredDate: "", message: "" 
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

  const screeningPrograms = [
    {
      icon: <Activity className="w-8 h-8 text-red-600" />,
      title: "Breast Cancer Screening",
      description: "Clinical breast examination, mammography, and awareness about self-examination",
      ageGroup: "Women 40+ years",
      frequency: "Annually",
      includes: ["Clinical examination", "Mammography", "Self-exam training", "Risk assessment"]
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Cervical Cancer Screening",
      description: "Pap smear tests, HPV testing, and vaccination awareness programs",
      ageGroup: "Women 21-65 years",
      frequency: "Every 3 years",
      includes: ["Pap smear test", "HPV testing", "Vaccination info", "Counseling"]
    },
    {
      icon: <Search className="w-8 h-8 text-green-600" />,
      title: "Oral Cancer Screening",
      description: "Visual examination of oral cavity and awareness about tobacco risks",
      ageGroup: "Adults 18+ years",
      frequency: "Annually",
      includes: ["Oral examination", "Tobacco counseling", "Risk assessment", "Education"]
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-600" />,
      title: "Comprehensive Health Checkup",
      description: "Full body screening including blood tests and imaging for early detection",
      ageGroup: "Adults 30+ years",
      frequency: "Annually",
      includes: ["Blood tests", "Imaging", "Physical exam", "Counseling"]
    }
  ];

  const warningSigns = [
    {
      category: "General Warning Signs",
      signs: [
        "Unexplained weight loss",
        "Fatigue that doesn't get better",
        "Fever that comes and goes",
        "Pain that doesn't go away",
        "Changes in skin color"
      ]
    },
    {
      category: "Specific Cancer Signs",
      signs: [
        "Breast: Lump, changes in size/shape, nipple discharge",
        "Oral: White/red patches, non-healing sores, difficulty swallowing",
        "Cervical: Abnormal bleeding, pelvic pain, unusual discharge",
        "Lung: Persistent cough, chest pain, shortness of breath",
        "Colon: Changes in bowel habits, blood in stool, abdominal pain"
      ]
    }
  ];

  const riskFactors = [
    {
      title: "Modifiable Risk Factors",
      factors: [
        "Tobacco use (smoking/chewing)",
        "Excessive alcohol consumption",
        "Unhealthy diet and obesity",
        "Physical inactivity",
        "Exposure to harmful chemicals"
      ]
    },
    {
      title: "Non-Modifiable Risk Factors",
      factors: [
        "Age (risk increases with age)",
        "Family history of cancer",
        "Genetic mutations",
        "Previous cancer history",
        "Certain infections (HPV, Hepatitis B/C)"
      ]
    }
  ];

  const upcomingCamps = [
    {
      date: "2024-02-20",
      title: "Free Breast Cancer Screening Camp",
      location: "Community Center, Sector 15, Noida",
      type: "Women's Health",
      seats: "30 seats available"
    },
    {
      date: "2024-02-25",
      title: "Oral Cancer Detection Drive",
      location: "Geeta Shakti Center, Noida",
      type: "General Screening",
      seats: "50 seats available"
    },
    {
      date: "2024-03-02",
      title: "Comprehensive Health Checkup Camp",
      location: "Govt School, Bawana, Delhi",
      type: "Multi-Specialty",
      seats: "100 seats available"
    },
    {
      date: "2024-03-05",
      title: "Women's Health Screening Camp",
      location: "Primary Health Center, Ghaziabad",
      type: "Women's Health",
      seats: "40 seats available"
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
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Early detection saves lives! Get screened regularly and learn to recognize 
              warning signs for better treatment outcomes and survival rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Screening
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Learn Warning Signs
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
              { number: "10,000+", label: "Screenings Conducted", icon: <Activity className="w-6 h-6 mx-auto mb-2 text-orange-600" /> },
              { number: "500+", label: "Early Detections", icon: <CheckCircle className="w-6 h-6 mx-auto mb-2 text-green-600" /> },
              { number: "100+", label: "Awareness Camps", icon: <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" /> },
              { number: "95%", label: "Detection Accuracy", icon: <Shield className="w-6 h-6 mx-auto mb-2 text-purple-600" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                {stat.icon}
                <div className="text-3xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screening Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Screening Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {screeningPrograms.map((program, index) => (
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
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Age Group:</span>
                    <span className="font-medium">{program.ageGroup}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Frequency:</span>
                    <span className="font-medium">{program.frequency}</span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm font-medium mb-2">Includes:</p>
                  <ul className="space-y-1">
                    {program.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Recognize Warning Signs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {warningSigns.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-orange-600">{category.category}</h3>
                <ul className="space-y-3">
                  {category.signs.map((sign, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Factors */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Understanding Risk Factors</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {riskFactors.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-orange-600">{category.title}</h3>
                <ul className="space-y-3">
                  {category.factors.map((factor, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {factor}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Camps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Screening Camps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingCamps.map((camp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center text-sm text-orange-600 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(camp.date).toLocaleDateString('en-IN', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{camp.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Users className="w-4 h-4 mr-1" />
                      {camp.location}
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full ml-4">
                    {camp.type}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium">{camp.seats}</span>
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    Register Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Examination Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Self-Examination Guide</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Breast Self-Exam",
                steps: [
                  "Stand in front of mirror, look for changes",
                  "Raise arms, check for dimpling or swelling",
                  "Lie down, use fingers to feel for lumps",
                  "Check both breasts and underarms"
                ],
                frequency: "Monthly, after period"
              },
              {
                title: "Oral Self-Exam",
                steps: [
                  "Check lips and front of gums",
                  "Examine inner cheeks and tongue",
                  "Look at roof of mouth and throat",
                  "Feel for lumps or sore areas"
                ],
                frequency: "Monthly"
              },
              {
                title: "Skin Self-Exam",
                steps: [
                  "Examine body in full-length mirror",
                  "Check hard-to-see areas with hand mirror",
                  "Look for new moles or changes",
                  "Note any sores that won't heal"
                ],
                frequency: "Monthly"
              }
            ].map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-orange-600">{guide.title}</h3>
                <div className="space-y-3 mb-4">
                  {guide.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start text-sm">
                      <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold mr-2 mt-0.5 flex-shrink-0">
                        {idx + 1}
                      </div>
                      <span className="text-gray-600">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  <strong>Frequency:</strong> {guide.frequency}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screening Registration Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Register for Free Screening</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Age *</label>
                  <input
                    type="number"
                    required
                    min="18"
                    max="100"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Screening Type *</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={formData.screeningType}
                    onChange={(e) => setFormData({...formData, screeningType: e.target.value})}
                  >
                    <option value="">Select screening type</option>
                    <option value="breast">Breast Cancer Screening</option>
                    <option value="cervical">Cervical Cancer Screening</option>
                    <option value="oral">Oral Cancer Screening</option>
                    <option value="comprehensive">Comprehensive Health Checkup</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Family History of Cancer</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={formData.familyHistory}
                  onChange={(e) => setFormData({...formData, familyHistory: e.target.value})}
                >
                  <option value="">Select option</option>
                  <option value="none">No family history</option>
                  <option value="one">One family member</option>
                  <option value="multiple">Multiple family members</option>
                  <option value="unknown">Not sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Any current symptoms or concerns?</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={formData.symptoms}
                  onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
                  placeholder="Please describe any symptoms, pain, or concerns you'd like us to check during the screening..."
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
                <Calendar className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Registering...' : 'Register for Free Screening'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Numbers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Need Immediate Help?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-semibold mb-2">Screening Helpline</h3>
                <p className="text-gray-600">+91 8114222222</p>
                <p className="text-sm text-gray-500">Mon-Sat: 9:00 AM - 8:00 PM</p>
              </div>
              <div className="flex flex-col items-center">
                <AlertTriangle className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="font-semibold mb-2">Emergency</h3>
                <p className="text-gray-600">108 / 112</p>
                <p className="text-sm text-gray-500">24/7 Available</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600">screening@geetashakti.com</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
