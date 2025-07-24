import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { User, Phone, Mail, MapPin, CreditCard, Check } from 'lucide-react'
import { useOrderStore } from '../store/orderStore'
import toast from 'react-hot-toast'

const Checkout = () => {
  const navigate = useNavigate()
  const { 
    cartItems, 
    cartTotal, 
    customerInfo, 
    updateCustomerInfo, 
    placeOrder 
  } = useOrderStore()

  const [isProcessing, setIsProcessing] = useState(false)
  const [orderType, setOrderType] = useState('delivery') // delivery or pickup

  const handleInputChange = (field, value) => {
    updateCustomerInfo({ [field]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (cartItems.length === 0) {
      toast.error('Your cart is empty!')
      return
    }

    if (!customerInfo.name || !customerInfo.phone) {
      toast.error('Please fill in required fields')
      return
    }

    setIsProcessing(true)
    
    // Simulate order processing
    setTimeout(() => {
      const order = placeOrder()
      setIsProcessing(false)
      toast.success('Order placed successfully! 🎉')
      navigate('/order-tracking', { state: { orderId: order.id } })
    }, 2000)
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="text-6xl mb-4">🛍️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some delicious items to place an order</p>
          <button
            onClick={() => navigate('/menu')}
            className="btn-primary"
          >
            Browse Menu
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Complete Your <span className="gradient-text">Order</span>
          </h1>
          <p className="text-gray-600">Just a few more details and your delicious meal will be on its way!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Details</h2>

            {/* Order Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Order Type</label>
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setOrderType('delivery')}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                    orderType === 'delivery'
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <MapPin className="w-6 h-6 mx-auto mb-2" />
                  <div className="font-medium">Delivery</div>
                  <div className="text-sm text-gray-600">30-45 mins</div>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setOrderType('pickup')}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                    orderType === 'pickup'
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Check className="w-6 h-6 mx-auto mb-2" />
                  <div className="font-medium">Pickup</div>
                  <div className="text-sm text-gray-600">15-20 mins</div>
                </motion.button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      required
                      value={customerInfo.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      required
                      value={customerInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {orderType === 'delivery' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      required
                      value={customerInfo.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your complete address..."
                    />
                  </div>
                </div>
              )}

              {orderType === 'pickup' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Table Number (Optional)
                  </label>
                  <input
                    type="text"
                    value={customerInfo.tableNumber}
                    onChange={(e) => handleInputChange('tableNumber', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Table number if dining in"
                  />
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isProcessing}
                whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  isProcessing
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'btn-primary'
                }`}
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processing Order...</span>
                  </div>
                ) : (
                  `Place Order - ₹${cartTotal.toFixed(2)}`
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center text-xl">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">₹{item.price} x {item.quantity}</p>
                  </div>
                  <div className="font-semibold text-primary-600">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-6 space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span>{orderType === 'delivery' ? '₹40.00' : '₹0.00'}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Taxes</span>
                <span>₹{(cartTotal * 0.05).toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-xl font-bold text-gray-900">
                <span>Total</span>
                <span className="text-primary-600">
                  ₹{(cartTotal + (orderType === 'delivery' ? 40 : 0) + cartTotal * 0.05).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2 text-green-700">
                <Check className="w-5 h-5" />
                <span className="font-medium">
                  Estimated {orderType === 'delivery' ? 'delivery' : 'pickup'} time: 
                  {orderType === 'delivery' ? ' 30-45 minutes' : ' 15-20 minutes'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Checkout