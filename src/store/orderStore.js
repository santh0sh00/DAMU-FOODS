import { create } from 'zustand'

export const useOrderStore = create((set, get) => ({
  // Cart state
  cartItems: [],
  cartTotal: 0,
  isCartOpen: false,
  
  // Order state
  orders: [],
  currentOrder: null,
  
  // User state
  customerInfo: {
    name: '',
    phone: '',
    email: '',
    address: '',
    tableNumber: ''
  },
  
  // Add item to cart
  addToCart: (item) => {
    const currentItems = get().cartItems
    const existingItem = currentItems.find(cartItem => cartItem.id === item.id)
    
    if (existingItem) {
      set({
        cartItems: currentItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      })
    } else {
      set({
        cartItems: [...currentItems, { ...item, quantity: 1 }]
      })
    }
    
    get().calculateTotal()
  },
  
  // Remove item from cart
  removeFromCart: (itemId) => {
    set({
      cartItems: get().cartItems.filter(item => item.id !== itemId)
    })
    get().calculateTotal()
  },
  
  // Update item quantity
  updateQuantity: (itemId, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(itemId)
      return
    }
    
    set({
      cartItems: get().cartItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    })
    get().calculateTotal()
  },
  
  // Calculate total
  calculateTotal: () => {
    const total = get().cartItems.reduce(
      (sum, item) => sum + (item.price * item.quantity), 0
    )
    set({ cartTotal: total })
  },
  
  // Toggle cart
  toggleCart: () => set({ isCartOpen: !get().isCartOpen }),
  
  // Clear cart
  clearCart: () => set({ cartItems: [], cartTotal: 0 }),
  
  // Update customer info
  updateCustomerInfo: (info) => set({ customerInfo: { ...get().customerInfo, ...info } }),
  
  // Place order
  placeOrder: () => {
    const { cartItems, cartTotal, customerInfo } = get()
    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total: cartTotal,
      customer: customerInfo,
      status: 'pending',
      timestamp: new Date().toISOString(),
      estimatedTime: Math.floor(Math.random() * 30) + 15 // 15-45 minutes
    }
    
    set({
      orders: [...get().orders, newOrder],
      currentOrder: newOrder,
      cartItems: [],
      cartTotal: 0,
      isCartOpen: false
    })
    
    return newOrder
  },
  
  // Update order status
  updateOrderStatus: (orderId, status) => {
    set({
      orders: get().orders.map(order =>
        order.id === orderId ? { ...order, status } : order
      )
    })
  }
}))