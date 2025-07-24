import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Plus, Filter, Star } from 'lucide-react'
import { menuCategories, menuItems } from '../data/menuData'
import { useOrderStore } from '../store/orderStore'
import toast from 'react-hot-toast'

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [showVegOnly, setShowVegOnly] = useState(false)
  const { addToCart } = useOrderStore()

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory
    const searchMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const vegMatch = !showVegOnly || item.isVeg
    
    return categoryMatch && searchMatch && vegMatch
  })

  const handleAddToCart = (item) => {
    addToCart(item)
    toast.success(`${item.name} added to cart! 🛍️`)
  }

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
            <h1 className="text-5xl font-display font-bold mb-4">
              Our Delicious <span className="text-yellow-300">Menu</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Explore our extensive collection of authentic Indian dishes, 
              made with love and traditional recipes passed down through generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="sticky top-16 bg-white shadow-md z-40 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative flex-1 max-w-md"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </motion.div>

            {/* Veg Filter */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2"
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showVegOnly}
                  onChange={(e) => setShowVegOnly(e.target.checked)}
                  className="rounded text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm font-medium">🌱 Veg Only</span>
              </label>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Items
            </motion.button>
            
            {menuCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredItems.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">No dishes found</h3>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                  >
                    {/* Image */}
                    <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-6xl relative">
                      {item.image}
                      {item.popular && (
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-current" />
                          <span>Popular</span>
                        </div>
                      )}
                      <div className="absolute top-4 right-4 flex space-x-1">
                        {item.isVeg && (
                          <div className="bg-green-500 text-white p-1 rounded-full">
                            <span className="text-xs">🌱</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                        <div className="flex items-center space-x-1">
                          {[...Array(item.spiceLevel)].map((_, i) => (
                            <span key={i} className="text-red-500 text-sm">🌶️</span>
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-primary-600">₹{item.price}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-gray-600">4.8</span>
                          </div>
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleAddToCart(item)}
                          className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                          <Plus className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}

export default Menu