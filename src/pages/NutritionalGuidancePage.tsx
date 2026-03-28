import { useState } from "react";
import { motion } from "framer-motion";
import { Apple, Heart, Shield, Brain, Activity, Clock, CheckCircle, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { emailService } from "@/services/emailService";

export default function NutritionalGuidancePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    healthCondition: "",
    dietaryPreferences: "",
    consultationType: "",
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
      const result = await emailService.sendFormSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        formType: 'Nutritional Guidance Consultation',
        additionalData: {
          age: formData.age,
          healthCondition: formData.healthCondition,
          dietaryPreferences: formData.dietaryPreferences,
          consultationType: formData.consultationType,
          preferredDate: formData.preferredDate
        }
      });

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ 
          name: "", email: "", phone: "", 
          age: "", healthCondition: "", 
          dietaryPreferences: "", consultationType: "", 
          preferredDate: "", message: "" 
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to submit consultation request. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nutritionServices = [
    {
      icon: <Apple className="w-8 h-8 text-green-600" />,
      title: "Cancer Prevention Nutrition",
      description: "Learn about foods and dietary habits that can help reduce cancer risk",
      features: ["Anti-cancer foods", "Immune-boosting diet", "Lifestyle nutrition", "Prevention strategies"],
      color: "green"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Treatment Support Nutrition",
      description: "Nutritional guidance during cancer treatment to manage side effects and maintain strength",
      features: ["Treatment diet plans", "Side effect management", "Strength maintenance", "Recovery support"],
      color: "red"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Recovery & Survivorship",
      description: "Post-treatment nutrition to support recovery and prevent recurrence",
      features: ["Recovery diet", "Weight management", "Long-term health", "Recurrence prevention"],
      color: "blue"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "Mental Health Nutrition",
      description: "Dietary support for mental and emotional well-being during cancer journey",
      features: ["Mood support", "Stress management", "Cognitive health", "Emotional balance"],
      color: "purple"
    }
  ];

  const antiCancerFoods = [
    { name: "Cruciferous Vegetables", description: "Broccoli, cauliflower, cabbage - rich in cancer-fighting compounds" },
    { name: "Berries", description: "Blueberries, strawberries - packed with antioxidants and anti-inflammatory compounds" },
    { name: "Leafy Greens", description: "Spinach, kale - high in vitamins, minerals, and fiber" },
    { name: "Garlic & Onions", description: "Contain sulfur compounds that boost immune system" },
    { name: "Green Tea", description: "Rich in catechins that may help prevent cancer cell growth" },
    { name: "Turmeric", description: "Contains curcumin with powerful anti-inflammatory properties" }
  ];

  const consultationTypes = [
    {
      title: "Individual Consultation",
      duration: "45-60 minutes",
      description: "Personalized nutrition plan based on your specific health needs",
      price: "₹1,500"
    },
    {
      title: "Family Nutrition Planning",
      duration: "60-90 minutes",
      description: "Comprehensive nutrition guidance for the entire family",
      price: "₹2,500"
    },
    {
      title: "Group Workshop",
      duration: "2 hours",
      description: "Educational workshop on cancer prevention nutrition",
      price: "₹500 per person"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <Utensils className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nutritional Guidance
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Expert nutritional guidance for cancer prevention, treatment support, and recovery through evidence-based dietary strategies
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Nutrition Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive nutritional support tailored to your specific needs throughout your cancer journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nutritionServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="w-full">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600 mb-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Anti-Cancer Foods */}
        <section className="py-16 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <Apple className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Powerful Anti-Cancer Foods</h2>
              <p className="text-lg text-gray-600">Incorporate these foods into your diet for optimal health and cancer prevention</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {antiCancerFoods.map((food, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Apple className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">{food.name}</h3>
                      <p className="text-sm text-gray-600">{food.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <Activity className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Consultation Options</h2>
              <p className="text-lg text-gray-600">Choose the consultation type that best fits your needs</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((consultation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">{consultation.title}</h3>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-3">
                      <Clock className="w-4 h-4" />
                      {consultation.duration}
                    </div>
                    <p className="text-gray-600 mb-4">{consultation.description}</p>
                    <div className="text-2xl font-bold text-green-600 mb-4">{consultation.price}</div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Book Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="text-center mb-8">
                <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Book Nutrition Consultation</h2>
                <p className="text-gray-600">
                  Get personalized nutritional guidance from our expert nutritionists
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Age</label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your age"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Health Condition</label>
                    <select
                      value={formData.healthCondition}
                      onChange={(e) => setFormData({...formData, healthCondition: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select condition</option>
                      <option value="Cancer Prevention">Cancer Prevention</option>
                      <option value="Currently in Treatment">Currently in Treatment</option>
                      <option value="Post-Treatment Recovery">Post-Treatment Recovery</option>
                      <option value="Caregiver Support">Caregiver Support</option>
                      <option value="General Wellness">General Wellness</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Consultation Type *</label>
                    <select
                      required
                      value={formData.consultationType}
                      onChange={(e) => setFormData({...formData, consultationType: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select consultation type</option>
                      <option value="Individual Consultation">Individual Consultation</option>
                      <option value="Family Nutrition Planning">Family Nutrition Planning</option>
                      <option value="Group Workshop">Group Workshop</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Dietary Preferences/Restrictions</label>
                  <textarea
                    rows={3}
                    value={formData.dietaryPreferences}
                    onChange={(e) => setFormData({...formData, dietaryPreferences: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Any dietary restrictions, allergies, or preferences..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Information</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your specific nutritional needs or health goals..."
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
                  {isSubmitting ? 'Booking...' : 'Book Consultation'}
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
