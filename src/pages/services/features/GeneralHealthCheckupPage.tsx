import { useState } from "react";
import { motion } from "framer-motion";
import { Stethoscope, Heart, Activity, Clock, CheckCircle, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GeneralHealthCheckupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    concerns: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Health checkup form submitted:", formData);
  };

  const checkupComponents = [
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Cardiovascular Assessment",
      description: "Blood pressure, heart rate, and cardiovascular health evaluation"
    },
    {
      icon: <Activity className="w-6 h-6 text-blue-600" />,
      title: "BMI & Body Composition",
      description: "Body mass index, body fat percentage, and weight analysis"
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-green-600" />,
      title: "Physical Examination",
      description: "Complete head-to-toe physical examination by experienced doctors"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
      title: "Basic Lab Tests",
      description: "Blood tests, urine analysis, and essential health markers"
    }
  ];

  const preparation = [
    "Fast for 8-12 hours before the checkup",
    "Bring previous medical records if any",
    "Wear comfortable clothing",
    "List all current medications",
    "Bring insurance card and ID proof"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Stethoscope className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              General Health Checkup
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Comprehensive health evaluation to assess your overall well-being and detect 
              potential health issues early for better treatment outcomes.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Checkup
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included in Your Checkup</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {checkupComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{component.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{component.title}</h3>
                <p className="text-gray-600 text-sm">{component.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Checkup Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Checkup Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Registration",
                description: "Complete registration and medical history documentation"
              },
              {
                step: "2", 
                title: "Vital Signs",
                description: "Blood pressure, heart rate, temperature, and oxygen saturation"
              },
              {
                step: "3",
                title: "Physical Exam",
                description: "Comprehensive physical examination by qualified doctors"
              },
              {
                step: "4",
                title: "Lab Tests",
                description: "Blood and urine samples for laboratory analysis"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Guidelines */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">How to Prepare</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Before Your Visit</h3>
                <ul className="space-y-3">
                  {preparation.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    "Duration: 2-3 hours",
                    "Comfortable examination environment",
                    "Confidential health consultation",
                    "Detailed health report",
                    "Personalized recommendations",
                    "Follow-up appointment if needed"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Clock className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Book Your Health Checkup</h2>
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

              <div className="grid md:grid-cols-3 gap-6">
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
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Time *</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Afternoon (2:00 PM - 5:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Health Concerns (Optional)</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.concerns}
                  onChange={(e) => setFormData({...formData, concerns: e.target.value})}
                  placeholder="Please mention any specific health concerns or symptoms you'd like us to focus on..."
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Health Checkup
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Need More Information?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+91 8114222222</p>
                <p className="text-sm text-gray-500">Mon-Sat: 9:00 AM - 8:00 PM</p>
              </div>
              <div className="flex flex-col items-center">
                <Calendar className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Visit Hours</h3>
                <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                <p className="text-sm text-gray-500">Monday to Saturday</p>
              </div>
              <div className="flex flex-col items-center">
                <Stethoscope className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-600">Geeta Shakti Center</p>
                <p className="text-gray-600">Sector 121, Noida</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
