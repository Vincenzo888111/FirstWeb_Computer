import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Home from "./page/Home";
import PhoneCard from "./components/PhoneCard";
import Laptop from "./components/Laptop";
import Desktops from "./components/Desktops";
import Accesories from "./components/Accesories";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Login from "./page/Login";
import Register from "./components/Register";
import Payment from "./components/Payment";

function App() {
  const [cart, setCart] = useState([]);

  // Initialize AOS (Animations)
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  // Unified Add to Cart Function (used by all components)
  const addToCart = (name, price, img) => {
    setCart((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(), // Unique ID
        name,
        price,
        img: img || "src/assets/default-product.png", // fallback image
        quantity: 1,
      },
    ]);
  };

  // Sample Phone Products (you can move this to a separate file later)
  const phoneProducts = [
    {
      id: 1,
      name: "iPhone 17 Pro Max",
      price: 1299,
      image: "src/assets/image copy.png",
    },
    {
      id: 2,
      name: "iPhone 17 Pro",
      price: 1199,
      image: "src/assets/image copy 2.png",
    },
    {
      id: 3,
      name: "iPhone 17",
      price: 999,
      image: "src/assets/image copy 3.png",
    },
    {
      id: 4,
      name: "iPhone 17 Air",
      price: 1099,
      image: "src/assets/image copy 4.png",
    },
    {
      id: 5,
      name: "iPhone 16 Pro Max",
      price: 1199,
      image: "src/assets/image copy 5.png",
    },
    {
      id: 6,
      name: "Samsung Galaxy S25 Ultra",
      price: 1299,
      image: "src/assets/image copy 6.png",
    },
    {
      id: 7,
      name: "Google Pixel 9 Pro",
      price: 999,
      image: "src/assets/image copy 7.png",
    },
    {
      id: 8,
      name: "OnePlus 13",
      price: 899,
      image: "src/assets/image copy 8.png",
    },
    // Add more...
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with live cart count */}
      <Header notification={cart.length} />

      {/* Main Routes */}
      <Routes>
        {/* Home Page - All Sections */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <PhoneCard products={phoneProducts} AddToCard={addToCart} />
              <Laptop AddToCard={addToCart} />
              <Desktops AddToCard={addToCart} />
              <Accesories AddToCard={addToCart} />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Cart & Payment */}
        <Route
          path="/payment"
          element={<Payment cart={cart} setCart={setCart} />}
        />

        {/* 404 Fallback (optional) */}
        <Route
          path="*"
          element={
            <div className="text-center py-20 text-4xl">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
