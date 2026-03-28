import { useState } from "react";
import { motion } from "framer-motion";
import { Apple, Calendar, Users, BookOpen, Target, Heart, Utensils, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NutritionalGuidancePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    condition: "",
    goals: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nutrition form submitted:", formData);
  };

  const services = [
    {
      icon: <Apple className="w-8 h-8 text-green-600" />,
      title: "Cancer Prevention Nutrition",
      description: "Evidence-based dietary guidance to reduce cancer risk and boost immunity",
      features: ["Antioxidant-rich foods", "Immune-boosting nutrients", "Lifestyle modifications"]
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "During Treatment Nutrition",
      description: "Specialized nutrition plans to manage side effects and maintain strength during cancer treatment",
      features: ["Side effect management", "Protein optimization", "Hydration strategies"]
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Post-Treatment Recovery",
      description: "Nutritional support for recovery, rebuilding strength, and preventing recurrence",
      features: ["Tissue repair", "Energy restoration", "Long-term health"]
    },
    {
      icon: <Utensils className="w-8 h-8 text-orange-600" />,
      title: "Personalized Meal Planning",
      description: "Custom meal plans tailored to individual health conditions and dietary preferences",
      features: ["Custom recipes", "Budget-friendly options", "Cultural preferences"]
    }
  ];

  const nutritionTips = [
    {
      category: "Foods to Include",
      items: [
        "Colorful fruits and vegetables (antioxidants)",
        "Whole grains and fiber-rich foods",
        "Lean proteins (fish, poultry, legumes)",
        "Healthy fats (nuts, seeds, olive oil)",
        "Probiotic-rich foods (yogurt, kefir)"
      ]
    },
    {
      category: "Foods to Limit",
      items: [
        "Processed meats and red meat",
        "Sugary beverages and desserts",
        "Refined carbohydrates",
        "Excessive salt and preserved foods",
        "Alcohol and tobacco"
      ]
    },
    {
      category: "Healthy Habits",
      items: [
        "Eat 5-6 small meals throughout the day",
        "Stay hydrated with 8-10 glasses of water",
        "Chew food thoroughly and eat mindfully",
        "Maintain a healthy body weight",
        "Exercise regularly for 30 minutes daily"
      ]
    }
  ];

  const recipes = [
    {
      name: "Rainbow Vegetable Stir-Fry",
      time: "20 minutes",
      difficulty: "Easy",
      benefits: "Rich in antioxidants and fiber"
    },
    {
      name: "Turmeric Lentil Soup",
      time: "30 minutes",
      difficulty: "Easy",
      benefits: "Anti-inflammatory and protein-rich"
    },
    {
      name: "Berry Spinach Smoothie",
      time: "10 minutes",
      difficulty: "Easy",
      benefits: "Packed with vitamins and antioxidants"
    },
    {
      name: "Grilled Fish with Herbs",
      time: "25 minutes",
      difficulty: "Medium",
      benefits: "High in omega-3 fatty acids"
    }
  ];

  return (
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
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Expert nutritional counseling and personalized meal planning to support cancer 
              prevention, treatment, and recovery through the healing power of food.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Apple className="w-5 h-5 mr-2" />
                Book Nutrition Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <BookOpen className="w-5 h-5 mr-2" />
                Download Free Meal Plan
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
              { number: "2000+", label: "Patients Counselled", icon: <Users className="w-6 h-6 mx-auto mb-2 text-green-600" /> },
              { number: "500+", label: "Custom Meal Plans", icon: <Utensils className="w-6 h-6 mx-auto mb-2 text-orange-600" /> },
              { number: "10+", label: "Expert Nutritionists", icon: <Award className="w-6 h-6 mx-auto mb-2 text-blue-600" /> },
              { number: "95%", label: "Health Improvement", icon: <Target className="w-6 h-6 mx-auto mb-2 text-purple-600" /> }
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

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Nutrition Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Tips */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Essential Nutrition Guidelines</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {nutritionTips.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-green-600">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <Apple className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthy Recipes */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Healthy Cancer-Fighting Recipes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recipes.map((recipe, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl mb-4 text-center">🥗</div>
                <h3 className="text-lg font-semibold mb-3">{recipe.name}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {recipe.time}
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    {recipe.difficulty}
                  </div>
                </div>
                <p className="text-xs text-green-600 mb-4">{recipe.benefits}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Get Recipe
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Book Nutrition Consultation</h2>
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
                    min="1"
                    max="100"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Health Condition *</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.condition}
                    onChange={(e) => setFormData({...formData, condition: e.target.value})}
                  >
                    <option value="">Select condition</option>
                    <option value="prevention">Cancer Prevention</option>
                    <option value="treatment">During Cancer Treatment</option>
                    <option value="recovery">Post-Treatment Recovery</option>
                    <option value="general">General Wellness</option>
                    <option value="other">Other Health Condition</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Health Goals *</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.goals}
                    onChange={(e) => setFormData({...formData, goals: e.target.value})}
                  >
                    <option value="">Select goals</option>
                    <option value="weight">Weight Management</option>
                    <option value="immunity">Boost Immunity</option>
                    <option value="energy">Increase Energy</option>
                    <option value="recovery">Support Recovery</option>
                    <option value="prevention">Disease Prevention</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Information</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Please share any dietary restrictions, allergies, food preferences, or specific health concerns..."
                />
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                <Apple className="w-5 h-5 mr-2" />
                Book Nutrition Consultation
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ramesh Kumar",
                age: "52 years",
                story: "After following the nutrition plan during chemotherapy, I maintained my weight and energy levels. The personalized meal plans made a huge difference.",
                condition: "During Cancer Treatment"
              },
              {
                name: "Sunita Devi",
                age: "45 years",
                story: "The preventive nutrition guidance helped me adopt a healthier lifestyle. I feel more energetic and have reduced my cancer risk factors.",
                condition: "Cancer Prevention"
              },
              {
                name: "Amit Sharma",
                age: "38 years",
                story: "Post-treatment nutrition support helped me regain strength and recover faster. The immune-boosting diet plan was exactly what I needed.",
                condition: "Post-Treatment Recovery"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{story.name}</h3>
                    <p className="text-sm text-gray-500">{story.age}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">{story.story}</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  {story.condition}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
