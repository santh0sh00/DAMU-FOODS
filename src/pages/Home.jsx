import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star, Clock, MapPin, Users, ChefHat, Heart, Award, Sparkles } from 'lucide-react'
import { menuItems } from '../data/menuData'

const Home = () => {
  const popularDishes = menuItems.filter(item => item.popular).slice(0, 6)

  const stats = [
    { icon: Users, label: 'Happy Customers', value: '10,000+' },
    { icon: ChefHat, label: 'Expert Chefs', value: '15+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Star, label: 'Average Rating', value: '4.9' }
  ]

  const features = [
    {
      icon: Clock,
      title: 'Quick Delivery',
      description: 'Fast delivery within 30-45 minutes'
    },
    {
      icon: Heart,
      title: 'Fresh Ingredients',
      description: 'Only the freshest ingredients used daily'
    },
    {
      icon: ChefHat,
      title: 'Expert Chefs',
      description: 'Prepared by experienced master chefs'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 hero-gradient">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Floating Food Emojis */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-20"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotate: 0
              }}
              animate={{ 
                y: [null, -20, 0],
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            >
              {['🍛', '🍚', '🍗', '🦐', '🧀', '🥭'][Math.floor(Math.random() * 6)]}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-display font-bold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              DAMU FOOD
              <motion.span 
                className="block text-yellow-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                CENTER
              </motion.span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center space-x-2 mb-6"
            >
              <Sparkles className="w-6 h-6 text-yellow-300" />
              <p className="text-xl md:text-2xl font-light">
                Where Every Bite is a Celebration
              </p>
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </motion.div>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Experience the finest Indian cuisine with authentic flavors, fresh ingredients, 
            and exceptional service. Your culinary journey begins here.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/menu" className="btn-primary text-lg px-8 py-4 animate-glow">
                🍽️ Explore Our Menu
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/about" className="btn-secondary text-lg px-8 py-4">
                ✨ Discover Our Story
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">DAMU FOOD CENTER</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering an exceptional dining experience with every order
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center group-hover:shadow-2xl transition-all duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Most <span className="gradient-text">Popular Dishes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our customers' favorite dishes, crafted with love and authentic flavors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-6xl">
                  {dish.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{dish.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">4.8</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">₹{dish.price}</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(dish.spiceLevel)].map((_, i) => (
                        <span key={i} className="text-red-500">🌶️</span>
                      ))}
                      {dish.isVeg && <span className="text-green-500">🌱</span>}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/menu" className="btn-primary text-lg px-8 py-4">
              View Full Menu 🍽️
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Experience Amazing Food? 🍽️
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Join thousands of satisfied customers and order your favorite dishes today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/menu" className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
                  🛍️ Order Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300">
                  📞 Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home