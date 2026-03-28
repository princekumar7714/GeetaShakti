import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Lightbulb, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function MissionVisionPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Compassion",
      description: "We approach every patient with empathy, dignity, and genuine care."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in all we do."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Innovation",
      description: "We continuously seek new and better ways to serve our community."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Collaboration",
      description: "We work together with partners, volunteers, and communities for greater impact."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Foundation Established",
      description: "Geeta Shakti Cancer Care Foundation was founded with a vision to make cancer care accessible."
    },
    {
      year: "2019",
      title: "First Awareness Camp",
      description: "Organized our first cancer awareness camp reaching over 500 people."
    },
    {
      year: "2020",
      title: "Pandemic Response",
      description: "Provided critical support to cancer patients during COVID-19 pandemic."
    },
    {
      year: "2021",
      title: "Expanded Services",
      description: "Added palliative care and nutritional guidance to our services."
    },
    {
      year: "2022",
      title: "10,000+ Patients",
      description: "Reached the milestone of supporting over 10,000 patients."
    },
    {
      year: "2023",
      title: "National Recognition",
      description: "Received national award for excellence in cancer care services."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Target className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mission & Vision
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Our unwavering commitment to fighting cancer and providing hope to every 
              patient and family affected by this disease.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                To provide comprehensive, accessible, and compassionate cancer care to all 
                individuals regardless of their socioeconomic status.
              </p>
              <p className="text-gray-600 mb-6">
                We strive to create a world where no one has to face cancer alone, where 
                early detection is routine, and where quality treatment is available to everyone.
              </p>
              <ul className="space-y-3">
                {[
                  "Provide free and subsidized cancer treatments",
                  "Promote early detection through awareness programs",
                  "Support patients and families through their journey",
                  "Collaborate with healthcare providers for better outcomes"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-pink-600 mr-3" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                A cancer-free India where every individual has access to prevention, 
                early detection, treatment, and compassionate care.
              </p>
              <p className="text-gray-600 mb-6">
                We envision a future where cancer is detected early, treated effectively, 
                and where patients and their families receive the support they need to 
                navigate their journey with hope and dignity.
              </p>
              <ul className="space-y-3">
                {[
                  "Reduce cancer mortality through early detection",
                  "Make quality cancer care accessible and affordable",
                  "Build a strong support network for patients",
                  "Lead in cancer research and innovation"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-2">
                      <Award className="w-5 h-5 text-purple-600 mr-2" />
                      <span className="font-bold text-purple-600">{milestone.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50,000+", label: "Lives Touched", icon: <Heart className="w-6 h-6 mx-auto mb-2 text-red-500" /> },
              { number: "200+", label: "Awareness Camps", icon: <Globe className="w-6 h-6 mx-auto mb-2 text-blue-600" /> },
              { number: "500+", label: "Volunteers", icon: <Users className="w-6 h-6 mx-auto mb-2 text-green-600" /> },
              { number: "25+", label: "Partner Hospitals", icon: <Shield className="w-6 h-6 mx-auto mb-2 text-purple-600" /> }
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

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            Together, we can make a difference in the lives of cancer patients and their families. 
            Your support helps us continue our mission of providing hope and healing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Button>
            </Link>
            <Link to="/become-a-volunteer">
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white w-full sm:w-auto">
                <Users className="w-5 h-5 mr-2" />
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
