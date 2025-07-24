import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { CheckCircle, Clock, Truck, ChefHat, Phone, MapPin } from 'lucide-react'
import { useOrderStore } from '../store/orderStore'

const OrderTracking = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { orders, currentOrder } = useOrderStore()
  const [orderId, setOrderId] = useState('')
  const [order, setOrder] = useState(null)
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    // Get order ID from location state or use current order
    const orderIdFromState = location.state?.orderId
    if (orderIdFromState) {
      setOrderId(orderIdFromState.toString())
      const foundOrder = orders.find(o => o.id === orderIdFromState)
      if (foundOrder) {
        setOrder(foundOrder)
      }
    } else if (currentOrder) {
      setOrderId(currentOrder.id.toString())
      setOrder(currentOrder)
    }
  }, [location.state, orders, currentOrder])

  // Simulate order progress
  useEffect(() => {
    if (order) {
      const timer = setInterval(() => {
        setCurrentStep(prev => {
          if (prev < 3) return prev + 1
          clearInterval(timer)
          return prev
        })
      }, 5000) // Progress every 5 seconds for demo

      return () => clearInterval(timer)
    }
  }, [order])

  const handleOrderLookup = () => {
    if (!orderId) return
    const foundOrder = orders.find(o => o.id.toString() === orderId)
    if (foundOrder) {
      setOrder(foundOrder)
    } else {
      // Create a sample order for demo
      const sampleOrder = {
        id: parseInt(orderId),
        items: [
          { name: 'Butter Chicken', quantity: 1, price: 450, image: '🍛' },
          { name: 'Garlic Naan', quantity: 2, price: 80, image: '🫓' }
        ],
        total: 610,
        customer: {
          name: 'John Doe',
          phone: '+91 98765 43210',
          address: '123 Main Street, Delhi'
        },
        status: 'confirmed',
        timestamp: new Date().toISOString(),
        estimatedTime: 30
      }
      setOrder(sampleOrder)
    }
  }

  const orderSteps = [
    {
      icon: CheckCircle,
      title: 'Order Confirmed',
      description: 'Your order has been received and confirmed',
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    },
    {
      icon: ChefHat,
      title: 'Preparing',
      description: 'Our chefs are preparing your delicious meal',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Truck,
      title: 'Out for Delivery',
      description: 'Your order is on the way to your location',
      color: 'text-orange-500',
      bgColor: 'bg-orange-100'
    },
    {
      icon: CheckCircle,
      title: 'Delivered',
      description: 'Enjoy your meal! Thank you for choosing us',
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    }
  ]

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 section-padding">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <div className="text-6xl mb-6">🔍</div>
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Track Your <span className="gradient-text">Order</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Enter your order ID to track the status of your delicious meal
            </p>
            
            <div className="space-y-4">
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter your order ID"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-center text-lg"
              />
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleOrderLookup}
                className="w-full btn-primary"
              >
                Track Order
              </motion.button>
              
              <p className="text-sm text-gray-500">
                Don't have an order ID? <button 
                  onClick={() => navigate('/menu')} 
                  className="text-primary-600 hover:underline"
                >
                  Place an order now
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Order Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="text-center mb-6">
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
              Order <span className="gradient-text">#{order.id}</span>
            </h1>
            <p className="text-gray-600">
              Placed on {new Date(order.timestamp).toLocaleString()}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">
                ₹{order.total.toFixed(2)}
              </div>
              <div className="text-sm text-gray-600">Total Amount</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {order.estimatedTime} mins
              </div>
              <div className="text-sm text-gray-600">Estimated Time</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {order.items.length}
              </div>
              <div className="text-sm text-gray-600">Items</div>
            </div>
          </div>
        </motion.div>

        {/* Order Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Order Progress
          </h2>
          
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-6 right-6 h-1 bg-gray-200 rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${(currentStep / (orderSteps.length - 1)) * 100}%` }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </div>

            {/* Steps */}
            <div className="relative grid grid-cols-4 gap-4">
              {orderSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <motion.div
                    className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      index <= currentStep 
                        ? `${step.bgColor} ${step.color}` 
                        : 'bg-gray-200 text-gray-400'
                    }`}
                    animate={index === currentStep ? { 
                      scale: [1, 1.1, 1],
                      boxShadow: ['0 0 0 0 rgba(249, 115, 22, 0.4)', '0 0 0 10px rgba(249, 115, 22, 0)', '0 0 0 0 rgba(249, 115, 22, 0)']
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <step.icon className="w-6 h-6" />
                  </motion.div>
                  
                  <div className={`font-semibold mb-2 ${
                    index <= currentStep ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </div>
                  
                  <div className={`text-sm ${
                    index <= currentStep ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {step.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Items */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Items</h3>
            
            <div className="space-y-4">
              {order.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center text-xl">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="font-semibold text-primary-600">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Customer & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            {/* Customer Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Customer Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">
                      {order.customer.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{order.customer.name}</p>
                    <p className="text-sm text-gray-600">Customer</p>
                  </div>
                </div>
                
                {order.customer.phone && (
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{order.customer.phone}</span>
                  </div>
                )}
                
                {order.customer.address && (
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-500 mt-1" />
                    <span className="text-gray-700">{order.customer.address}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
              <p className="text-primary-100 mb-6">
                Our customer support team is here to assist you with any questions about your order.
              </p>
              
              <div className="space-y-3">
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Support: +91 98765 43210</span>
                </motion.a>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/contact')}
                  className="w-full bg-white text-primary-600 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Contact Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Track Another Order */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => {
              setOrder(null)
              setOrderId('')
              setCurrentStep(0)
            }}
            className="text-primary-600 hover:text-primary-700 font-medium hover:underline"
          >
            Track Another Order
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default OrderTracking