import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Users, Award, BookOpen, Target, Lightbulb, Certificate } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EducationalWorkshopsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    workshop: "",
    participants: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Workshop form submitted:", formData);
  };

  const workshops = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Cancer Awareness Workshop",
      description: "Comprehensive workshop on cancer types, prevention, early detection, and treatment options",
      duration: "3 hours",
      participants: "50-100 people",
      certificate: "Yes"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Healthy Lifestyle & Nutrition",
      description: "Learn about cancer-preventive nutrition, exercise, and lifestyle modifications",
      duration: "2 hours",
      participants: "30-50 people",
      certificate: "Yes"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Caregiver Training Program",
      description: "Training for family members and caregivers on patient care and emotional support",
      duration: "4 hours",
      participants: "20-30 people",
      certificate: "Yes"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Women's Health & Cancer Prevention",
      description: "Focused workshop on breast cancer, cervical cancer, and women's health issues",
      duration: "2.5 hours",
      participants: "40-60 people",
      certificate: "Yes"
    }
  ];

  const upcomingWorkshops = [
    {
      date: "2024-02-18",
      title: "Cancer Awareness for Corporate Employees",
      location: "Tech Park, Gurgaon",
      type: "Corporate Workshop",
      seats: "25 seats left"
    },
    {
      date: "2024-02-22",
      title: "Women's Health Workshop",
      location: "Community Center, Noida",
      type: "Public Workshop",
      seats: "15 seats left"
    },
    {
      date: "2024-02-25",
      title: "Caregiver Training Session",
      location: "Geeta Shakti Center, Noida",
      type: "Specialized Training",
      seats: "10 seats left"
    },
    {
      date: "2024-03-02",
      title: "Nutrition & Cancer Prevention",
      location: "Health Club, Delhi",
      type: "Health Workshop",
      seats: "30 seats left"
    }
  ];

  const topics = [
    "Understanding Cancer Basics",
    "Risk Factors & Prevention",
    "Early Detection Signs",
    "Nutrition for Cancer Prevention",
    "Exercise & Healthy Lifestyle",
    "Mental Health & Stress Management",
    "Family Support & Caregiving",
    "Treatment Options & Advances"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <GraduationCap className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Educational Workshops & Seminars
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Empowering communities with knowledge through interactive workshops and seminars 
              on cancer prevention, early detection, and healthy living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Workshop
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                <Lightbulb className="w-5 h-5 mr-2" />
                View Schedule
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
              { number: "500+", label: "Workshops Conducted", icon: <GraduationCap className="w-6 h-6 mx-auto mb-2 text-purple-600" /> },
              { number: "25,000+", label: "People Educated", icon: <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" /> },
              { number: "50+", label: "Expert Trainers", icon: <Award className="w-6 h-6 mx-auto mb-2 text-green-600" /> },
              { number: "100%", label: "Satisfaction Rate", icon: <Certificate className="w-6 h-6 mx-auto mb-2 text-orange-600" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                {stat.icon}
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Workshop Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{workshop.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{workshop.title}</h3>
                <p className="text-gray-600 mb-4">{workshop.description}</p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-purple-600">Duration:</span>
                    <p className="text-gray-600">{workshop.duration}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-purple-600">Capacity:</span>
                    <p className="text-gray-600">{workshop.participants}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-purple-600">Certificate:</span>
                    <p className="text-gray-600">{workshop.certificate}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Topics We Cover</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <Lightbulb className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                <p className="text-sm font-medium">{topic}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Workshops</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingWorkshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center text-sm text-purple-600 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(workshop.date).toLocaleDateString('en-IN', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{workshop.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Users className="w-4 h-4 mr-1" />
                      {workshop.seats}
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full ml-4">
                    {workshop.type}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {workshop.location}
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Register Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Book a Workshop</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Contact Person *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Organization/Institution *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Workshop Type *</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={formData.workshop}
                    onChange={(e) => setFormData({...formData, workshop: e.target.value})}
                  >
                    <option value="">Select workshop type</option>
                    <option value="awareness">Cancer Awareness Workshop</option>
                    <option value="nutrition">Healthy Lifestyle & Nutrition</option>
                    <option value="caregiver">Caregiver Training Program</option>
                    <option value="women">Women's Health & Cancer Prevention</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Expected Participants *</label>
                  <input
                    type="number"
                    required
                    min="10"
                    max="100"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={formData.participants}
                    onChange={(e) => setFormData({...formData, participants: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Requirements</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Please let us know any specific requirements, preferred dates, or custom topics..."
                />
              </div>

              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                <Calendar className="w-5 h-5 mr-2" />
                Submit Workshop Request
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Participants Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Corporate Employee",
                content: "The cancer awareness workshop was eye-opening. I learned so much about prevention and early detection that I didn't know before.",
                rating: 5
              },
              {
                name: "Dr. Rajesh Kumar",
                role: "School Principal",
                content: "Geeta Shakti's workshops are professionally conducted and highly informative. Our students benefited greatly from the sessions.",
                rating: 5
              },
              {
                name: "Anita Verma",
                role: "Caregiver",
                content: "The caregiver training program gave me the skills and confidence to care for my mother. Thank you for this invaluable support.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Add Star import at the top
import { Star } from "lucide-react";
