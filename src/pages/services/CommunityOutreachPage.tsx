import { useState } from "react";
import { motion } from "framer-motion";
import { Users, MapPin, Calendar, Heart, Award, Megaphone, Target, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CommunityOutreachPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    program: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Outreach form submitted:", formData);
  };

  const programs = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Cancer Awareness Camps",
      description: "Educational camps in rural areas to spread awareness about cancer prevention and early detection",
      impact: "50,000+ people reached",
      locations: "200+ villages"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Mobile Health Clinics",
      description: "Free health checkups and basic screenings in underserved communities",
      impact: "10,000+ checkups",
      locations: "15+ mobile units"
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "School Health Programs",
      description: "Health education and screening programs in schools and colleges",
      impact: "100+ schools",
      locations: "25,000+ students"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Corporate Wellness",
      description: "Corporate partnership programs for employee health and wellness",
      impact: "50+ companies",
      locations: "5,000+ employees"
    }
  ];

  const upcomingEvents = [
    {
      date: "2024-02-15",
      title: "Cancer Awareness Camp - Village Bawana",
      location: "Bawana, Delhi",
      type: "Awareness Camp"
    },
    {
      date: "2024-02-20",
      title: "Health Checkup Drive - Govt School Sector 15",
      location: "Noida, UP",
      type: "School Program"
    },
    {
      date: "2024-02-25",
      title: "Mobile Clinic - Rural Outreach Program",
      location: "Ghaziabad, UP",
      type: "Mobile Clinic"
    },
    {
      date: "2024-03-01",
      title: "Corporate Wellness Session",
      location: "Gurgaon, Haryana",
      type: "Corporate Program"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Megaphone className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Community Outreach Programs
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Taking healthcare to the doorsteps of underserved communities through comprehensive 
              outreach programs focusing on prevention, awareness, and early detection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Users className="w-5 h-5 mr-2" />
                Volunteer for Outreach
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
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
            {[
              { number: "200+", label: "Villages Reached", icon: <MapPin className="w-6 h-6 mx-auto mb-2 text-green-600" /> },
              { number: "50,000+", label: "Lives Impacted", icon: <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" /> },
              { number: "15+", label: "Mobile Units", icon: <Heart className="w-6 h-6 mx-auto mb-2 text-red-500" /> },
              { number: "100+", label: "School Programs", icon: <Award className="w-6 h-6 mx-auto mb-2 text-purple-600" /> }
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

      {/* Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Outreach Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
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
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-green-600">Impact:</span>
                    <p className="text-gray-600">{program.impact}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-green-600">Coverage:</span>
                    <p className="text-gray-600">{program.locations}</p>
                  </div>
                </div>
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
                    <div className="flex items-center text-sm text-green-600 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(event.date).toLocaleDateString('en-IN', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {event.location}
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    {event.type}
                  </span>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Register to Attend
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-16 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Join Our Outreach Team</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
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
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                <div>
                  <label className="block text-sm font-medium mb-2">Organization (Optional)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Interested Program *</label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.program}
                  onChange={(e) => setFormData({...formData, program: e.target.value})}
                >
                  <option value="">Select a program</option>
                  <option value="awareness">Cancer Awareness Camps</option>
                  <option value="mobile">Mobile Health Clinics</option>
                  <option value="school">School Health Programs</option>
                  <option value="corporate">Corporate Wellness</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tell us about your interest</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Please share why you want to volunteer and any relevant experience..."
                />
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                <Users className="w-5 h-5 mr-2" />
                Join Outreach Team
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Early Detection Saved Her Life",
                story: "Meera, 45, was diagnosed with early-stage breast cancer during our awareness camp in village Bawana. Thanks to early detection, she received timely treatment and is now cancer-free.",
                location: "Bawana, Delhi"
              },
              {
                title: "Mobile Clinic Reached the Unreached",
                story: "Our mobile clinic provided free health checkups to 500+ villagers in Ghaziabad where medical facilities are scarce. 12 critical cases were identified and referred for treatment.",
                location: "Ghaziabad, UP"
              },
              {
                title: "School Program Created Awareness",
                story: "Our cancer awareness program in 25 schools educated over 10,000 students about healthy lifestyle choices and early warning signs of cancer.",
                location: "Noida Schools"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-3">{story.title}</h3>
                <p className="text-gray-600 mb-3">{story.story}</p>
                <div className="flex items-center text-sm text-green-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  {story.location}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
