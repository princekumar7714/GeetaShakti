import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Heart, Calendar, Clock, Award, CheckCircle, Phone, Mail, MapPin, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { emailService } from "@/services/emailService";

export default function BecomeVolunteerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    occupation: "",
    availability: "",
    interests: [] as string[],
    experience: "",
    message: "",
    photo: null as File | null
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
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
        formType: 'Volunteer Application',
        additionalData: {
          age: formData.age,
          occupation: formData.occupation,
          availability: formData.availability,
          interests: formData.interests.join(', '),
          experience: formData.experience,
          hasPhoto: formData.photo ? 'Yes' : 'No'
        }
      });

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ 
          name: "", email: "", phone: "", age: "", 
          occupation: "", availability: "", interests: [], 
          experience: "", message: "", photo: null 
        });
        setPreviewUrl(null);
        
        // Send confirmation email
        await emailService.sendVolunteerConfirmation({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          formType: 'Volunteer Application'
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to submit application. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({...formData, photo: file});
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const opportunities = [
    {
      title: "Patient Support",
      description: "Provide emotional support and companionship to patients",
      icon: <Heart className="w-6 h-6 text-red-500" />
    },
    {
      title: "Event Management",
      description: "Help organize awareness campaigns and fundraising events",
      icon: <Calendar className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Administrative Support",
      description: "Assist with office tasks and data management",
      icon: <Users className="w-6 h-6 text-green-500" />
    },
    {
      title: "Health Camps",
      description: "Participate in medical camps and outreach programs",
      icon: <Award className="w-6 h-6 text-purple-500" />
    }
  ];

  const benefits = [
    "Make a real difference in cancer patients' lives",
    "Gain valuable experience in healthcare sector",
    "Receive training and professional development",
    "Join a community of compassionate individuals",
    "Certificate of appreciation and recognition",
    "Flexible volunteering opportunities"
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
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Become a Volunteer
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Join our team of dedicated volunteers and make a meaningful impact in the lives 
              of cancer patients and their families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Heart className="w-5 h-5 mr-2" />
                Join as Volunteer
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <Phone className="w-5 h-5 mr-2" />
                Learn More
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
              { number: "500+", label: "Active Volunteers", icon: <Users className="w-6 h-6 mx-auto mb-2 text-green-600" /> },
              { number: "10,000+", label: "Hours Contributed", icon: <Clock className="w-6 h-6 mx-auto mb-2 text-blue-600" /> },
              { number: "50+", label: "Events Organized", icon: <Calendar className="w-6 h-6 mx-auto mb-2 text-purple-600" /> },
              { number: "5,000+", label: "Lives Impacted", icon: <Heart className="w-6 h-6 mx-auto mb-2 text-red-600" /> }
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

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Volunteer Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{opportunity.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{opportunity.title}</h3>
                <p className="text-gray-600 text-sm">{opportunity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Volunteer With Us?</h2>
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

      {/* Volunteer Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Volunteer Application</h2>
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
                  <label className="block text-sm font-medium mb-2">Age *</label>
                  <input
                    type="number"
                    required
                    min="18"
                    max="80"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Occupation</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.occupation}
                    onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Availability *</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.availability}
                    onChange={(e) => setFormData({...formData, availability: e.target.value})}
                  >
                    <option value="">Select availability</option>
                    <option value="weekends">Weekends Only</option>
                    <option value="weekdays">Weekdays Only</option>
                    <option value="flexible">Flexible</option>
                    <option value="full-time">Full Time</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Areas of Interest *</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Patient Support",
                    "Event Management", 
                    "Administrative Support",
                    "Health Camps",
                    "Fundraising",
                    "Social Media"
                  ].map((interest) => (
                    <label key={interest} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="rounded text-green-600 focus:ring-green-500"
                      />
                      <span className="text-sm">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Previous Experience</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  placeholder="Tell us about any relevant volunteer or work experience..."
                />
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">Upload Photo (Optional)</label>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <label className="flex items-center justify-center w-full h-32 px-4 py-2 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-green-500 transition-colors">
                      <div className="text-center">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm text-gray-600">
                          {formData.photo ? formData.photo.name : "Click to upload photo"}
                        </p>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handlePhotoChange}
                      />
                    </label>
                  </div>
                  {previewUrl && (
                    <div className="w-24 h-24 rounded-lg overflow-hidden">
                      <img src={previewUrl} alt="Volunteer preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Motivation</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Why do you want to volunteer with Geeta Shakti?"
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

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                <Users className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Volunteer Team</h2>
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
              <p className="text-gray-600">volunteers@geetashakti.com</p>
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
