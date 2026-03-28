import { useState } from "react";
import { motion } from "framer-motion";
import { Building, Users, Handshake, Award, MapPin, Phone, Mail, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CollaborationHospitalsPage() {
  const [formData, setFormData] = useState({
    hospitalName: "",
    contactPerson: "",
    email: "",
    phone: "",
    collaborationType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Collaboration form submitted:", formData);
  };

  const hospitals = [
    {
      name: "AIIMS Delhi",
      type: "Government Hospital",
      logo: "🏥",
      rating: 4.8,
      specialties: "Oncology, Surgery, Radiology",
      location: "New Delhi"
    },
    {
      name: "Max Healthcare",
      type: "Private Hospital Chain",
      logo: "🏥",
      rating: 4.7,
      specialties: "Cancer Treatment, ICU, Emergency",
      location: "Multiple Locations"
    },
    {
      name: "Fortis Healthcare",
      type: "Private Hospital Chain",
      logo: "🏥",
      rating: 4.6,
      specialties: "Oncology, Cardiology, Neurology",
      location: "Pan India"
    },
    {
      name: "Apollo Hospitals",
      type: "Private Hospital Chain",
      logo: "🏥",
      rating: 4.9,
      specialties: "Comprehensive Cancer Care",
      location: "Multiple Cities"
    }
  ];

  const collaborationTypes = [
    {
      icon: <Handshake className="w-8 h-8 text-blue-600" />,
      title: "Treatment Partnership",
      description: "Collaborate for discounted cancer treatments and surgeries for our patients"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Doctor Network",
      description: "Join our network of specialist doctors providing pro bono consultations"
    },
    {
      icon: <Building className="w-8 h-8 text-purple-600" />,
      title: "Infrastructure Support",
      description: "Provide hospital facilities, beds, and medical equipment"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "Research Collaboration",
      description: "Partner in cancer research studies and clinical trials"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Building className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Collaboration with Hospitals & Oncosurgeons
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Building strategic partnerships with leading hospitals and cancer specialists to provide 
              quality healthcare access to underserved communities.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Handshake className="w-5 h-5 mr-2" />
              Become a Partner Hospital
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Partner With Geeta Shakti?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Social Impact",
                description: "Make a difference in cancer care for underserved communities",
                value: "10,000+"
              },
              {
                title: "Patient Referrals",
                description: "Receive qualified patient referrals from our network",
                value: "500+/month"
              },
              {
                title: "Tax Benefits",
                description: "Avail tax benefits under CSR and healthcare initiatives",
                value: "80G Benefit"
              },
              {
                title: "Brand Recognition",
                description: "Enhanced brand visibility as a socially responsible healthcare provider",
                value: "National Reach"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.value}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Collaboration Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {collaborationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Hospitals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Hospital Partners</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hospitals.map((hospital, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4 text-center">{hospital.logo}</div>
                <h3 className="text-lg font-semibold text-center mb-2">{hospital.name}</h3>
                <p className="text-sm text-gray-600 text-center mb-2">{hospital.type}</p>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm ml-1">{hospital.rating}</span>
                </div>
                <p className="text-xs text-gray-500 text-center mb-2">{hospital.specialties}</p>
                <div className="flex items-center justify-center text-xs text-gray-500">
                  <MapPin className="w-3 h-3 mr-1" />
                  {hospital.location}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Start Your Partnership Journey</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Hospital/Clinic Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.hospitalName}
                  onChange={(e) => setFormData({...formData, hospitalName: e.target.value})}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Contact Person *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
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
                  <label className="block text-sm font-medium mb-2">Collaboration Type *</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.collaborationType}
                    onChange={(e) => setFormData({...formData, collaborationType: e.target.value})}
                  >
                    <option value="">Select collaboration type</option>
                    <option value="treatment">Treatment Partnership</option>
                    <option value="doctors">Doctor Network</option>
                    <option value="infrastructure">Infrastructure Support</option>
                    <option value="research">Research Collaboration</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tell us about your collaboration interest</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Please describe your hospital's capabilities and collaboration interests..."
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                <Handshake className="w-5 h-5 mr-2" />
                Submit Partnership Request
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Partnership Office Contact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+91 8114222222</p>
                <p className="text-sm text-gray-500">Mon-Sat: 9:00 AM - 8:00 PM</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">partnerships@geetashakti.com</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">Basement and FF, BLK-03</p>
                <p className="text-gray-600">Sector 121, Noida</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
