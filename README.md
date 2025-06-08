


# 🏥 Prescripto - Healthcare Appointment Management System

<div align="center">

![Prescripto Logo](https://img.shields.io/badge/Prescripto-Healthcare-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

*A comprehensive healthcare management platform connecting patients with healthcare providers*

[🚀 Live Demo](#) • [📖 Documentation](#) • [🐛 Report Bug](#) • [✨ Request Feature](#)

</div>

---

## 🌟 **Project Overview**

Prescripto is a modern, full-stack healthcare appointment management system that streamlines the process of booking, managing, and tracking medical appointments. The platform serves three main user types: patients, doctors, and administrators, each with dedicated interfaces and functionalities. [1](#0-0) 

## ✨ **Key Features**

### 👥 **For Patients**
- 🔍 Browse and search healthcare providers
- 📅 Book appointments with available time slots
- 💳 Secure online payments via Razorpay
- 📋 View and manage appointment history
- ❌ Cancel appointments when needed

### 👨‍⚕️ **For Doctors**
- 📊 Comprehensive appointment dashboard
- ✅ Mark appointments as completed
- ❌ Cancel appointments with notifications
- 👤 Profile management
- 📈 Track patient interactions

### 🛠️ **For Administrators**
- 👀 System-wide appointment oversight
- 👨‍⚕️ Doctor management and onboarding
- 📊 Analytics and reporting
- ⚙️ System configuration [2](#0-1) [3](#0-2) [4](#0-3) 

## 🏗️ **Architecture & Tech Stack**

### **Frontend Technologies**
- ⚛️ **React 18.3.1** - Modern UI framework
- 🎨 **Tailwind CSS 3.4.17** - Utility-first styling
- ⚡ **Vite 6.0.5** - Fast build tool
- 🌐 **React Router DOM 7.1.1** - Client-side routing
- 📡 **Axios 1.7.9** - HTTP client
- 🔔 **React Toastify 11.0.3** - Toast notifications [5](#0-4) 

### **Backend Technologies**
- 🟢 **Node.js & Express** - Server framework
- 🍃 **MongoDB** - NoSQL database
- ☁️ **Cloudinary** - Media management
- 💰 **Razorpay** - Payment processing
- 🔐 **JWT** - Authentication
- 🌐 **CORS** - Cross-origin resource sharing [6](#0-5) 

### **Admin Panel**
- ⚛️ **React 18.3.1** - Admin interface
- 🎨 **Tailwind CSS 3.4.17** - Consistent styling
- 📊 **Dashboard Components** - Data visualization [7](#0-6) 

## 📁 **Project Structure**

```
Prescripto/
├── 🎨 frontend/          # Patient-facing React application
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── 🛠️ admin/            # Admin panel React application  
│   ├── src/
│   ├── package.json
│   └── vite.config.js
└── ⚙️ backend/           # Node.js Express server
    ├── config/           # Database & service configurations
    ├── controllers/      # API request handlers
    ├── middlewares/      # Custom middleware functions
    ├── models/          # Database schemas
    ├── routes/          # API endpoint definitions
    └── server.js        # Entry point
```

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js (v18+)
- MongoDB
- Cloudinary account
- Razorpay account

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/YuvrajsinhRaj/Prescripto.git
cd Prescripto
```

2. **Backend Setup**
```bash
cd backend
npm install
# Configure environment variables
cp .env.example .env
# Add your MongoDB, Cloudinary, and Razorpay credentials
npm start
```

3. **Frontend Setup**
```bash
cd ../frontend
npm install
npm run dev
```

4. **Admin Panel Setup**
```bash
cd ../admin
npm install
npm run dev
```

## 💳 **Payment Integration**

Prescripto integrates with **Razorpay** for secure payment processing, enabling patients to pay for appointments online with multiple payment methods including cards, UPI, and net banking. [8](#0-7) 

## 🔐 **Security Features**

- 🔒 JWT-based authentication
- 🛡️ CORS protection
- 💳 Secure payment processing
- 🚫 Input validation and sanitization
- 🔐 Environment variable protection

## 🎯 **API Endpoints**

### User Routes
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User authentication
- `POST /api/user/book-appointment` - Book appointment
- `GET /api/user/appointments` - Get user appointments

### Doctor Routes  
- `GET /api/doctor/appointments` - Get doctor appointments
- `POST /api/doctor/complete-appointment` - Mark appointment complete
- `POST /api/doctor/cancel-appointment` - Cancel appointment

### Admin Routes
- `GET /api/admin/appointments` - Get all appointments
- `POST /api/admin/add-doctor` - Add new doctor
- `GET /api/admin/doctors` - Get all doctors [9](#0-8) 

## 📱 **Responsive Design**

The application is fully responsive and works seamlessly across:
- 🖥️ Desktop computers
- 💻 Laptops
- 📱 Tablets
- 📱 Mobile devices

## 🤝 **Contributing**

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 **Author**

**Yuvrajsinh Raj**
- GitHub: [@YuvrajsinhRaj](https://github.com/YuvrajsinhRaj)

## 🙏 **Acknowledgments**

- React community for the amazing ecosystem
- MongoDB for the flexible database solution
- Razorpay for seamless payment integration
- Cloudinary for media management capabilities

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by [Yuvrajsinh Raj](https://github.com/YuvrajsinhRaj)

</div>
