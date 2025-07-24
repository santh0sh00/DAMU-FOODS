export const menuCategories = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    description: 'Start your meal with our delicious appetizers',
    icon: '🥗'
  },
  {
    id: 'mains',
    name: 'Main Courses',
    description: 'Our signature main dishes that will satisfy your hunger',
    icon: '🍖'
  },
  {
    id: 'biryanis',
    name: 'Biryanis',
    description: 'Aromatic and flavorful biryanis made with premium ingredients',
    icon: '🍚'
  },
  {
    id: 'seafood',
    name: 'Seafood',
    description: 'Fresh seafood prepared with authentic spices',
    icon: '🦐'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet endings to your perfect meal',
    icon: '🍰'
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Refreshing drinks to complement your meal',
    icon: '🥤'
  }
]

export const menuItems = [
  // Appetizers
  {
    id: 1,
    name: 'Chicken 65',
    description: 'Spicy fried chicken pieces with curry leaves and green chili',
    price: 280,
    category: 'appetizers',
    image: '🍗',
    spiceLevel: 3,
    isVeg: false,
    popular: true
  },
  {
    id: 2,
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese marinated in aromatic spices',
    price: 320,
    category: 'appetizers',
    image: '🧀',
    spiceLevel: 2,
    isVeg: true,
    popular: true
  },
  {
    id: 3,
    name: 'Fish Finger',
    description: 'Crispy fish fingers served with mint chutney',
    price: 350,
    category: 'appetizers',
    image: '🐟',
    spiceLevel: 1,
    isVeg: false
  },
  
  // Main Courses
  {
    id: 4,
    name: 'Butter Chicken',
    description: 'Tender chicken in rich tomato and cream gravy',
    price: 450,
    category: 'mains',
    image: '🍛',
    spiceLevel: 2,
    isVeg: false,
    popular: true
  },
  {
    id: 5,
    name: 'Palak Paneer',
    description: 'Cottage cheese in creamy spinach gravy',
    price: 380,
    category: 'mains',
    image: '🥬',
    spiceLevel: 1,
    isVeg: true
  },
  {
    id: 6,
    name: 'Mutton Curry',
    description: 'Slow-cooked mutton in traditional spices',
    price: 520,
    category: 'mains',
    image: '🍖',
    spiceLevel: 3,
    isVeg: false
  },
  
  // Biryanis
  {
    id: 7,
    name: 'Hyderabadi Chicken Biryani',
    description: 'Fragrant basmati rice with tender chicken and dum-cooked',
    price: 480,
    category: 'biryanis',
    image: '🍚',
    spiceLevel: 2,
    isVeg: false,
    popular: true
  },
  {
    id: 8,
    name: 'Mutton Biryani',
    description: 'Premium mutton pieces with aromatic rice and saffron',
    price: 580,
    category: 'biryanis',
    image: '🍛',
    spiceLevel: 3,
    isVeg: false
  },
  {
    id: 9,
    name: 'Vegetable Biryani',
    description: 'Mixed vegetables with fragrant basmati rice',
    price: 350,
    category: 'biryanis',
    image: '🥕',
    spiceLevel: 1,
    isVeg: true
  },
  
  // Seafood
  {
    id: 10,
    name: 'Fish Curry',
    description: 'Fresh fish in coconut-based curry sauce',
    price: 420,
    category: 'seafood',
    image: '🐟',
    spiceLevel: 2,
    isVeg: false
  },
  {
    id: 11,
    name: 'Prawn Masala',
    description: 'Jumbo prawns in spicy onion-tomato gravy',
    price: 550,
    category: 'seafood',
    image: '🦐',
    spiceLevel: 3,
    isVeg: false,
    popular: true
  },
  
  // Desserts
  {
    id: 12,
    name: 'Gulab Jamun',
    description: 'Soft milk dumplings in sweet cardamom syrup',
    price: 120,
    category: 'desserts',
    image: '🍯',
    spiceLevel: 0,
    isVeg: true
  },
  {
    id: 13,
    name: 'Kulfi',
    description: 'Traditional Indian ice cream with pistachios',
    price: 100,
    category: 'desserts',
    image: '🍦',
    spiceLevel: 0,
    isVeg: true
  },
  {
    id: 14,
    name: 'Rasmalai',
    description: 'Soft cottage cheese dumplings in sweetened milk',
    price: 140,
    category: 'desserts',
    image: '🥛',
    spiceLevel: 0,
    isVeg: true
  },
  
  // Beverages
  {
    id: 15,
    name: 'Mango Lassi',
    description: 'Creamy yogurt drink with fresh mango',
    price: 80,
    category: 'beverages',
    image: '🥭',
    spiceLevel: 0,
    isVeg: true
  },
  {
    id: 16,
    name: 'Masala Chai',
    description: 'Traditional spiced tea with milk',
    price: 40,
    category: 'beverages',
    image: '☕',
    spiceLevel: 1,
    isVeg: true
  },
  {
    id: 17,
    name: 'Fresh Lime Soda',
    description: 'Refreshing lime soda with mint',
    price: 60,
    category: 'beverages',
    image: '🍋',
    spiceLevel: 0,
    isVeg: true
  }
]