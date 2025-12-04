import React from "react";

function PhoneCard({ AddToCard }) {
  // YOUR ORIGINAL DATA — kept exactly as you had it!
  const phones = [
    { name: "iPhone 17 Pro Max", price: 1099, color: "Orange",       img: "src/assets/image copy.png" },
    { name: "iPhone 17 Pro Max", price: 1099, color: "Black",        img: "src/assets/image copy 2.png" },
    { name: "iPhone 17 Pro Max", price: 1099, color: "White",        img: "src/assets/image copy 3.png" },
    { name: "iPhone Air",        price: 999,  color: "Sky",          img: "src/assets/image copy 4.png" },
    { name: "iPhone Air",        price: 999,  color: "Gold",         img: "src/assets/image copy 5.png" },
    { name: "iPhone Air",        price: 999,  color: "White",        img: "src/assets/image copy 6.png" },
    { name: "iPhone Air",        price: 999,  color: "Black",        img: "src/assets/image copy 7.png" },
    { name: "iPhone 17",         price: 799,  color: "Purple",       img: "src/assets/image copy 8.png" },
    { name: "iPhone 17",         price: 799,  color: "Green",        img: "src/assets/image copy 9.png" },
    { name: "iPhone 17",         price: 799,  color: "Blue",         img: "src/assets/image copy 10.png" },
    { name: "iPhone 17",         price: 799,  color: "White",        img: "src/assets/image copy 11.png" },
    { name: "iPhone 17",         price: 799,  color: "Gray",         img: "src/assets/image copy 12.png" },
  ];

  return (
    <section id="iphone" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900">
            Phone Shop
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A phone is a device people use to talk to each other over distance. 
            Today, most phones are smartphones
          </p>
          <hr className="w-32 h-1 bg-sky-500 mx-auto mt-8 rounded-full" />
        </div>

        {/* Hero Title */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter">
            iPhone{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
              Series
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {phones.map((phone, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={phone.img}
                  alt={phone.name}
                  className="w-full h-64 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700"
                />
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  NEW
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {phone.name}
                </h3>

                {/* Rating */}
                <div className="flex justify-center items-center gap-2">
                  <span className="text-yellow-400 text-xl">★★★★★</span>
                  <span className="text-sm text-gray-500">(50 reviews)</span>
                </div>

                {/* Specs */}
                <div className="text-sm text-gray-600 space-y-1">
                  <p>6.9" • 120Hz ProMotion Display</p>
                  <p className="font-semibold">
                    Color: <span className="text-sky-500">{phone.color}</span>
                  </p>
                  <p>256GB up to 2TB Storage</p>
                </div>

                {/* Price */}
                <p className="text-3xl font-bold text-red-600">
                  From ${phone.price}
                </p>

                {/* Add to Cart Button */}
                <button
                  onClick={() => AddToCard(phone.name, phone.price, phone.img)}
                  className="w-full py-4 mt-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <i className="fa-solid fa-cart-shopping group-hover:translate-x-1 transition"></i>
                  Add to Cart
                </button>
              </div>

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-20">
          <button className="px-16 py-5 bg-black text-white text-lg font-bold rounded-full hover:bg-gray-800 transition transform hover:scale-105 shadow-2xl">
            View All iPhones →
          </button>
        </div>
      </div>
    </section>
  );
}

export default PhoneCard;