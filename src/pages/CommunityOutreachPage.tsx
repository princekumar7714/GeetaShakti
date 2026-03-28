import { useState } from "react";
import { motion } from "framer-motion";
import { Users, MapPin, Calendar, Heart, Award, Bus, School, Home, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { emailService } from "@/services/emailService";

export default function CommunityOutreachPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    event: "",
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
        formType: 'Community Outreach Registration',
        additionalData: {
          organization: formData.organization,
          event: formData.event
        }
      });

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ 
          name: "", email: "", phone: "", 
          organization: "", event: "", message: "" 
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

  const programs = [
    {
      icon: <Bus className="w-8 h-8 text-orange-600" />,
      title: "Mobile Health Clinics",
      description: "Bringing healthcare directly to communities with limited access",
      features: ["On-site consultations", "Basic health screenings", "Medicine distribution", "Health education"]
    },
    {
      icon: <School className="w-8 h-8 text-blue-600" />,
      title: "School Health Programs",
      description: "Educating children about health, hygiene, and cancer prevention",
      features: ["Health checkups", "Nutrition education", "Cancer awareness", "Teacher training"]
    },
    {
      icon: <Home className="w-8 h-8 text-green-600" />,
      title: "Community Camps",
      description: "Organizing health camps in residential areas and villages",
      features: ["Free screenings", "Doctor consultations", "Awareness sessions", "Follow-up care"]
    }
  ];

  const upcomingEvents = [
    {
      date: "2024-02-18",
      title: "Health Camp - Sector 15, Noida",
      location: "Community Center, Sector 15",
      type: "General Health"
    },
    {
      date: "2024-02-22",
      title: "School Program - Govt School, Bawana",
      location: "Delhi",
      type: "Children's Health"
    },
    {
      date: "2024-02-25",
      title: "Mobile Clinic - Village Outreach",
      location: "Rural Area, Ghaziabad",
      type: "Rural Healthcare"
    },
    {
      date: "2024-03-01",
      title: "Women's Health Camp",
      location: "Community Center, Noida",
      type: "Women's Health"
    }
  ];

  const impact = [
    { number: "50,000+", label: "People Reached", icon: <Users className="w-6 h-6 mx-auto mb-2 text-orange-600" /> },
    { number: "200+", label: "Camps Organized", icon: <MapPin className="w-6 h-6 mx-auto mb-2 text-blue-600" /> },
    { number: "100+", label: "Schools Covered", icon: <School className="w-6 h-6 mx-auto mb-2 text-green-600" /> },
    { number: "25+", label: "Villages Served", icon: <Home className="w-6 h-6 mx-auto mb-2 text-purple-600" /> }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Community Outreach Programs
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Taking healthcare beyond hospital walls to reach every corner of the community. 
              Our outreach programs bring medical care and awareness directly to those who need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Join Our Programs
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                <MapPin className="w-5 h-5 mr-2" />
                Find Camp Near You
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {impact.map((stat, index) => (
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

      {/* Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Outreach Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
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

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Outreach Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center text-sm text-orange-600 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(event.date).toLocaleDateString('en-IN', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                    {event.type}
                  </span>
                </div>
                <div className="flex gap-3">
                  <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                    Register
                  </Button>
                  <Button variant="outline" size="sm">
                    <MapPin className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Impact Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Early Detection Saved Lives",
                story: "Our mobile clinic detected early-stage cancer in 15 patients during rural camps, enabling timely treatment.",
                location: "Rural Outreach Program"
              },
              {
                title: "Children Health Improved",
                story: "School health program reached 5,000 children with health checkups and nutrition education.",
                location: "School Health Initiative"
              },
              {
                title: "Community Empowered",
                story: "Health awareness camps educated communities about cancer prevention and early detection.",
                location: "Community Health Camps"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <Award className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">{story.title}</h3>
                <p className="text-gray-600 mb-3">{story.story}</p>
                <p className="text-sm text-orange-600 font-medium">{story.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Join Our Outreach Programs</h2>
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
                  <label className="block text-sm font-medium mb-2">Organization/School</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Program Interest *</label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={formData.event}
                  onChange={(e) => setFormData({...formData, event: e.target.value})}
                >
                  <option value="">Select program</option>
                  <option value="mobile-clinic">Mobile Health Clinic</option>
                  <option value="school-program">School Health Program</option>
                  <option value="community-camp">Community Health Camp</option>
                  <option value="volunteer">Volunteer for Outreach</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us how you'd like to participate..."
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
                <Heart className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Submitting...' : 'Join Outreach Program'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Outreach Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+91 8114222222</p>
              <p className="text-sm text-gray-500">Mon-Sat: 9AM-7PM</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">outreach@geetashakti.com</p>
              <p className="text-sm text-gray-500">24/7 Support</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-4" />
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
