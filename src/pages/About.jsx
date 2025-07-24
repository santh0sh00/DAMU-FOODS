import React from 'react'
import { motion } from 'framer-motion'
import { ChefHat, Heart, Award, Users, Clock, Sparkles } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Food',
      description: 'Every dish is prepared with love and dedication to authentic flavors'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'We use only the finest ingredients and traditional cooking methods'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building connections through shared meals and cultural experiences'
    },
    {
      icon: Clock,
      title: 'Timeless Recipes',
      description: 'Traditional recipes passed down through generations'
    }
  ]

  const chefs = [
    {
      name: 'Chef Ramesh Kumar',
      role: 'Head Chef',
      experience: '25+ years',
      specialty: 'North Indian Cuisine',
      image: '👨‍🍳'
    },
    {
      name: 'Chef Priya Sharma',
      role: 'Sous Chef',
      experience: '15+ years',
      specialty: 'South Indian Delicacies',
      image: '👩‍🍳'
    },
    {
      name: 'Chef Arjun Patel',
      role: 'Pastry Chef',
      experience: '12+ years',
      specialty: 'Indian Sweets',
      image: '👨‍🍳'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-display font-bold mb-6">
              Our <span className="text-yellow-300">Story</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              A culinary journey that began with a dream to bring authentic Indian flavors 
              to food lovers everywhere
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Where It All <span className="gradient-text">Began</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  DAMU FOOD CENTER started as a small family kitchen in 1995, with a simple 
                  mission: to serve authentic, home-style Indian cuisine that brings people 
                  together. What began as a humble endeavor by the Damu family has grown into 
                  a beloved restaurant known for its exceptional food and warm hospitality.
                </p>
                <p>
                  Our founder, Mr. Damu Krishnan, believed that food is not just nourishment 
                  for the body, but also for the soul. This philosophy drives everything we 
                  do - from sourcing the finest ingredients to preserving traditional cooking 
                  methods that have been perfected over generations.
                </p>
                <p>
                  Today, we continue to honor our heritage while embracing innovation, 
                  ensuring that every guest experiences the true essence of Indian cuisine 
                  in every bite.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center text-8xl shadow-2xl">
                🏛️
              </div>
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-yellow-400 text-black p-3 rounded-full"
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide us in creating exceptional dining experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg card-hover"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Meet Our <span className="gradient-text">Master Chefs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The culinary artists behind our exceptional dishes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg card-hover"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center text-4xl">
                  {chef.image}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{chef.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{chef.role}</p>
                <p className="text-gray-600 text-sm mb-2">{chef.experience} Experience</p>
                <p className="text-gray-600 text-sm">Specialty: {chef.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Our Journey in <span className="text-yellow-300">Numbers</span>
            </h2>
            <p className="text-xl text-primary-100">
              Milestones that mark our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '28+', label: 'Years of Excellence', icon: '🏆' },
              { number: '50,000+', label: 'Happy Customers', icon: '😊' },
              { number: '100+', label: 'Authentic Recipes', icon: '📝' },
              { number: '15+', label: 'Expert Chefs', icon: '👨‍🍳' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-8">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <div className="text-xl text-gray-600 leading-relaxed space-y-6">
              <p>
                "To preserve and celebrate the rich culinary heritage of India while 
                creating memorable dining experiences that bring families and communities 
                together through the universal language of exceptional food."
              </p>
              <p className="text-lg italic text-primary-600">
                - The Damu Family
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About