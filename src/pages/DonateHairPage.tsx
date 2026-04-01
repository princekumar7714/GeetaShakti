import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Scissors, Users, Calendar, CheckCircle, Phone, Mail, MapPin, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { emailService } from "@/services/emailService";
import { whatsappService } from "@/services/whatsappService";

export default function DonateHairPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    hairLength: "",
    hairType: "",
    donationDate: "",
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
      // Send email
      const emailResult = await emailService.sendFormSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        formType: 'Hair Donation',
        additionalData: {
          age: formData.age,
          hairLength: formData.hairLength,
          hairType: formData.hairType,
          donationDate: formData.donationDate,
          hasPhoto: formData.photo ? 'Yes' : 'No'
        }
      });

      // Send WhatsApp message
      const whatsappResult = await whatsappService.sendFormSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        formType: 'Hair Donation',
        additionalData: {
          age: formData.age,
          hairLength: formData.hairLength,
          hairType: formData.hairType,
          donationDate: formData.donationDate,
          hasPhoto: formData.photo ? 'Yes' : 'No'
        }
      });

      if (emailResult.success && whatsappResult.success) {
        setSubmitStatus({ type: 'success', message: 'Hair donation submitted successfully! Details sent to email and WhatsApp.' });
        setFormData({ 
          name: "", email: "", phone: "", age: "", 
          hairLength: "", hairType: "", donationDate: "", 
          message: "", photo: null 
        });
        setPreviewUrl(null);
        
        // Send confirmation email
        await emailService.sendDonationConfirmation({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          formType: 'Hair Donation'
        });
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to submit donation. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to submit donation. Please try again.' });
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

  const requirements = [
    "Minimum hair length: 12 inches",
    "Hair must be clean and dry",
    "No chemical treatments in last 6 months",
    "Hair can be colored if in good condition",
    "Gray hair is welcome",
    "Bundle hair in ponytail or braid"
  ];

  const benefits = [
    "Help cancer patients regain confidence",
    "Provide free wigs to those in need",
    "Support children and adults undergoing treatment",
    "Make a meaningful difference in someone's life"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Scissors className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Donate Your Hair, Change a Life
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Your hair donation can bring hope and confidence to cancer patients. 
              Join us in this beautiful gesture of compassion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                <Heart className="w-5 h-5 mr-2" />
                Donate Hair Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
                <Phone className="w-5 h-5 mr-2" />
                Call Us
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
              { number: "5,000+", label: "Hair Donations", icon: <Scissors className="w-6 h-6 mx-auto mb-2 text-pink-600" /> },
              { number: "1,000+", label: "Wigs Made", icon: <Heart className="w-6 h-6 mx-auto mb-2 text-purple-600" /> },
              { number: "50+", label: "Partner Salons", icon: <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" /> },
              { number: "100%", label: "Free Distribution", icon: <CheckCircle className="w-6 h-6 mx-auto mb-2 text-green-600" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                {stat.icon}
                <div className="text-3xl font-bold text-pink-600 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Hair Donation Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Guidelines</h3>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Benefits of Donation</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Heart className="w-5 h-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Hair Donation Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Age *</label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="100"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Hair Length *</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    value={formData.hairLength}
                    onChange={(e) => setFormData({...formData, hairLength: e.target.value})}
                  >
                    <option value="">Select length</option>
                    <option value="12-15 inches">12-15 inches</option>
                    <option value="15-20 inches">15-20 inches</option>
                    <option value="20+ inches">20+ inches</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Hair Type *</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    value={formData.hairType}
                    onChange={(e) => setFormData({...formData, hairType: e.target.value})}
                  >
                    <option value="">Select type</option>
                    <option value="straight">Straight</option>
                    <option value="wavy">Wavy</option>
                    <option value="curly">Curly</option>
                    <option value="colored">Colored</option>
                    <option value="gray">Gray</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Preferred Donation Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  value={formData.donationDate}
                  onChange={(e) => setFormData({...formData, donationDate: e.target.value})}
                />
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">Upload Hair Photo (Optional)</label>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <label className="flex items-center justify-center w-full h-32 px-4 py-2 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-pink-500 transition-colors">
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
                      <img src={previewUrl} alt="Hair preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us why you want to donate your hair..."
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

              <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700" disabled={isSubmitting}>
                <Scissors className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Submitting...' : 'Submit Hair Donation'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-pink-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+91 8114222222</p>
              <p className="text-sm text-gray-500">Mon-Sat: 9AM-7PM</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-pink-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">hairdonation@geetashakti.com</p>
              <p className="text-sm text-gray-500">24/7 Support</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-pink-600 mx-auto mb-4" />
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
