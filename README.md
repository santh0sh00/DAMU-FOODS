# DAMU FOOD CENTER 🍽️

A stunning, modern restaurant website with exceptional UI design and complete order management system. Built with React, featuring beautiful animations, responsive design, and user-friendly functionality that makes people want to visit just to admire the website!

## ✨ Features

### 🎨 **Exceptional UI/UX Design**
- **Stunning visual design** with modern gradients and animations
- **Beautiful floating food emojis** and interactive elements
- **Smooth page transitions** using Framer Motion
- **Responsive design** that works perfectly on all devices
- **Custom color scheme** with warm restaurant-themed colors

### 🍕 **Complete Restaurant Functionality**
- **Interactive menu** with categories, search, and filters
- **Shopping cart** with smooth slide-in animation
- **Order management** with real-time tracking
- **Customer information** forms with validation
- **Order status tracking** with progress indicators

### 🚀 **Modern Technology Stack**
- **React 18** with functional components and hooks
- **Vite** for lightning-fast development
- **Tailwind CSS** for beautiful, responsive styling
- **Framer Motion** for smooth animations
- **Zustand** for state management
- **React Router** for seamless navigation
- **Lucide React** for beautiful icons

### 📱 **Pages & Components**
- **Home** - Stunning hero section with animated backgrounds
- **Menu** - Interactive menu with filtering and search
- **About** - Restaurant story and team information
- **Contact** - Contact form with map and info
- **Checkout** - Complete order form with validation
- **Order Tracking** - Real-time order status updates

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone or extract the project:**
   ```bash
   # If you have git access
   git clone <repository-url>
   cd damu-food-center
   
   # Or if you have the files, navigate to the project directory
   cd damu-food-center
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:3000`
   - The website will automatically open if your browser supports it

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🎯 How to Use

### 1. **Exploring the Menu**
- Browse different categories (Appetizers, Main Courses, Biryanis, etc.)
- Use the search bar to find specific dishes
- Filter by vegetarian options
- Click the "+" button to add items to cart

### 2. **Managing Your Cart**
- Click the cart icon in the navbar to view items
- Adjust quantities or remove items
- Proceed to checkout when ready

### 3. **Placing an Order**
- Fill in your customer information
- Choose delivery or pickup
- Complete the order form
- Track your order status in real-time

### 4. **Order Tracking**
- Use your order ID to track progress
- See real-time updates on preparation and delivery
- Contact support if needed

## 🎨 Design Highlights

### **Color Scheme**
- **Primary**: Warm orange gradients (#f97316 to #ea580c)
- **Secondary**: Cool blue accents (#0ea5e9)
- **Background**: Clean grays and whites
- **Accents**: Yellow highlights for special elements

### **Typography**
- **Display Font**: Playfair Display (elegant serif)
- **Body Font**: Inter (clean sans-serif)
- **Responsive text** scaling across devices

### **Animations**
- **Floating food emojis** on hero section
- **Smooth hover effects** on all interactive elements
- **Page transitions** with staggered animations
- **Cart slide-in** animation
- **Progress indicators** for order tracking

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation with cart
│   ├── Footer.jsx      # Footer with links and info
│   └── Cart.jsx        # Shopping cart sidebar
├── pages/              # Main page components
│   ├── Home.jsx        # Landing page with hero
│   ├── Menu.jsx        # Menu with filtering
│   ├── About.jsx       # Restaurant story
│   ├── Contact.jsx     # Contact form and info
│   ├── Checkout.jsx    # Order checkout form
│   └── OrderTracking.jsx # Order status tracking
├── store/              # State management
│   └── orderStore.js   # Zustand store for orders
├── data/               # Sample data
│   └── menuData.js     # Menu items and categories
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles and Tailwind
```

## 🌟 Key Features Explained

### **State Management**
- Uses Zustand for simple, effective state management
- Handles cart items, customer info, and orders
- Persistent state across page navigation

### **Responsive Design**
- Mobile-first approach with Tailwind CSS
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions on mobile devices

### **Performance Optimizations**
- Vite for fast development and building
- Component-based architecture for reusability
- Optimized animations with Framer Motion
- Efficient re-renders with proper React patterns

## 🎯 Customization

### **Adding New Menu Items**
Edit `src/data/menuData.js`:
```javascript
{
  id: 18,
  name: 'Your New Dish',
  description: 'Delicious description',
  price: 299,
  category: 'mains',
  image: '🍛',
  spiceLevel: 2,
  isVeg: false,
  popular: false
}
```

### **Changing Colors**
Modify `tailwind.config.js` primary/secondary color schemes:
```javascript
colors: {
  primary: {
    500: '#your-color',
    600: '#your-darker-color'
  }
}
```

### **Adding New Pages**
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

## 🚀 Deployment

### **Netlify (Recommended)**
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### **Vercel**
1. Connect your repository
2. Vercel will auto-detect Vite and deploy

### **Traditional Hosting**
1. Run `npm run build`
2. Upload `dist` folder contents to your web server
3. Configure server for SPA routing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern restaurant websites and food apps
- **Icons**: Lucide React icon library
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Colors**: Carefully crafted warm and inviting palette
- **Animations**: Framer Motion for smooth interactions

---

## 🔥 Why This Website Stands Out

This isn't just another restaurant website. It's crafted with attention to every detail:

- **Visual Appeal**: Every element is designed to be beautiful and engaging
- **User Experience**: Intuitive navigation and smooth interactions
- **Performance**: Fast loading and responsive across all devices
- **Functionality**: Complete order management system
- **Modern Tech**: Built with the latest web technologies

**The result?** A website so beautiful and functional that people will visit just to experience the design! 🎨✨

---

*Built with ❤️ for food lovers by food lovers* 
