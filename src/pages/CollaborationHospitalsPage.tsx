import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Users, HandHeart, Award, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export default function CollaborationHospitalsPage() {
  const [formData, setFormData] = useState({
    hospitalName: "",
    contactPerson: "",
    email: "",
    phone: "",
    specialization: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Collaboration form submitted:", formData);
  };

  const partnerships = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: "Hospital Partnerships",
      description: "Collaborate with leading hospitals for comprehensive cancer care",
      features: ["Shared infrastructure", "Joint treatment programs", "Referral systems", "Cost-sharing arrangements"]
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Doctor Network",
      description: "Connect with experienced oncologists and healthcare professionals",
      features: ["Specialist consultations", "Second opinions", "Treatment planning", "Continuous education"]
    },
    {
      icon: <HandHeart className="w-8 h-8 text-purple-600" />,
      title: "Community Outreach",
      description: "Extend healthcare services to underserved communities",
      features: ["Mobile clinics", "Health camps", "Awareness programs", "Screening initiatives"]
    }
  ];

  const hospitals = [
    {
      name: "Max Super Specialty Hospital",
      location: "Noida",
      type: "Multi-Specialty",
      services: ["Oncology", "Surgery", "Radiology"]
    },
    {
      name: "Fortis Healthcare",
      location: "Delhi",
      type: "Multi-Specialty",
      services: ["Cancer Care", "ICU", "Emergency"]
    },
    {
      name: "Apollo Hospitals",
      location: "Gurgaon",
      type: "Multi-Specialty",
      services: ["Oncology", "Transplant", "Research"]
    },
    {
      name: "AIIMS Delhi",
      location: "New Delhi",
      type: "Government",
      services: ["Cancer Research", "Treatment", "Training"]
    }
  ];

  const benefits = [
    "Access to advanced medical facilities",
    "Reduced treatment costs for patients",
    "Expert medical consultations",
    "Comprehensive care coordination",
    "Emergency support services",
    "Continuous medical education"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Building2 className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Collaboration with Hospitals & Oncosurgeons
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Building strong partnerships with healthcare institutions to provide comprehensive 
              cancer care and treatment solutions for our patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <HandHeart className="w-5 h-5 mr-2" />
                Become a Partner
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <Phone className="w-5 h-5 mr-2" />
                Contact Partnership Team
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
              { number: "25+", label: "Partner Hospitals", icon: <Building2 className="w-6 h-6 mx-auto mb-2 text-green-600" /> },
              { number: "100+", label: "Expert Doctors", icon: <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" /> },
              { number: "5,000+", label: "Patients Treated", icon: <HandHeart className="w-6 h-6 mx-auto mb-2 text-purple-600" /> },
              { number: "50%", label: "Cost Reduction", icon: <Award className="w-6 h-6 mx-auto mb-2 text-orange-600" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                {stat.icon}
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partnership Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{partnership.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{partnership.title}</h3>
                <p className="text-gray-600 mb-4">{partnership.description}</p>
                <ul className="space-y-2">
                  {partnership.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Hospitals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partner Hospitals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hospitals.map((hospital, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">{hospital.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{hospital.location}</p>
                <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full mb-3">
                  {hospital.type}
                </span>
                <div className="space-y-1">
                  {hospital.services.map((service, idx) => (
                    <div key={idx} className="text-xs text-gray-500">• {service}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center space-x-3 bg-green-50 p-4 rounded-lg"
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Become Our Partner</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Hospital Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.hospitalName}
                    onChange={(e) => setFormData({...formData, hospitalName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Contact Person *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Specialization *</label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.specialization}
                  onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                >
                  <option value="">Select specialization</option>
                  <option value="oncology">Oncology</option>
                  <option value="surgery">Surgery</option>
                  <option value="radiology">Radiology</option>
                  <option value="pathology">Pathology</option>
                  <option value="multi-specialty">Multi-Specialty</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your hospital and how you'd like to collaborate..."
                />
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                <HandHeart className="w-5 h-5 mr-2" />
                Submit Partnership Request
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Office</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+91 8114222222</p>
              <p className="text-sm text-gray-500">Mon-Sat: 9AM-7PM</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">partnerships@geetashakti.com</p>
              <p className="text-sm text-gray-500">24/7 Support</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">Sector 121, Noida</p>
              <p className="text-sm text-gray-500">Basement and FF, BLK-03</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
