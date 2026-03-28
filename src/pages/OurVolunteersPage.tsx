import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Users, Heart, Award, Calendar, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OurVolunteersPage() {
  const volunteers = [
    {
      name: "Priya Sharma",
      role: "Volunteer Coordinator",
      experience: "3 years",
      photo: "👩",
      story: "I joined Geeta Shakti to make a difference in cancer patients' lives. Every day brings new opportunities to help and inspire hope.",
      impact: "Helped 200+ patients"
    },
    {
      name: "Rahul Verma",
      role: "Awareness Campaign Volunteer",
      experience: "2 years", 
      photo: "👨",
      story: "Being part of the awareness drives has been incredibly rewarding. Educating people about cancer prevention saves lives.",
      impact: "Reached 5000+ people"
    },
    {
      name: "Anita Desai",
      role: "Patient Support Volunteer",
      experience: "4 years",
      photo: "👩",
      story: "Supporting patients through their journey is my calling. The smiles and hope we bring keep me going every day.",
      impact: "Supported 150+ families"
    },
    {
      name: "Amit Kumar",
      role: "Fundraising Volunteer",
      experience: "1 year",
      photo: "👨",
      story: "I help raise funds that enable us to provide free treatments. Every contribution makes a real difference.",
      impact: "Raised ₹10 Lakhs+"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Volunteers
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Meet the dedicated individuals who selflessly contribute their time and skills 
              to support cancer patients and spread awareness in communities.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Heart className="w-5 h-5 mr-2" />
              Become a Volunteer
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Active Volunteers", icon: <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" /> },
              { number: "10,000+", label: "Hours Contributed", icon: <Calendar className="w-6 h-6 mx-auto mb-2 text-purple-600" /> },
              { number: "50,000+", label: "Lives Impacted", icon: <Heart className="w-6 h-6 mx-auto mb-2 text-red-500" /> },
              { number: "25+", label: "Cities Covered", icon: <Award className="w-6 h-6 mx-auto mb-2 text-green-600" /> }
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

      {/* Volunteers Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Volunteers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {volunteers.map((volunteer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-6xl mb-4">{volunteer.photo}</div>
                <h3 className="text-xl font-semibold mb-2">{volunteer.name}</h3>
                <p className="text-blue-600 text-sm mb-2">{volunteer.role}</p>
                <p className="text-gray-500 text-sm mb-3">{volunteer.experience} experience</p>
                <p className="text-gray-600 text-sm mb-4 italic">"{volunteer.story}"</p>
                <div className="pt-4 border-t">
                  <p className="text-green-600 font-semibold text-sm">{volunteer.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Volunteer Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Patient Support",
                description: "Provide emotional support and assistance to patients during treatment",
                icon: <Heart className="w-8 h-8 text-red-500" />,
                time: "Flexible hours"
              },
              {
                title: "Awareness Campaigns",
                description: "Help organize and participate in cancer awareness drives and events",
                icon: <Users className="w-8 h-8 text-blue-600" />,
                time: "Weekend events"
              },
              {
                title: "Fundraising",
                description: "Assist in organizing fundraising events and donation drives",
                icon: <Award className="w-8 h-8 text-green-600" />,
                time: "Event-based"
              }
            ].map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{opportunity.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <p className="text-sm text-gray-500">Time: {opportunity.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Join Our Volunteer Team</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Area of Interest *</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select area</option>
                    <option value="patient">Patient Support</option>
                    <option value="awareness">Awareness Campaigns</option>
                    <option value="fundraising">Fundraising</option>
                    <option value="admin">Administrative Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tell us about yourself</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Share why you want to volunteer and any relevant experience..."
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                <Users className="w-5 h-5 mr-2" />
                Submit Volunteer Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+91 8114222222</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">volunteers@geetashakti.com</p>
              </div>
              <div className="flex flex-col items-center">
                <Calendar className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">Sector 121, Noida</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
