import React from "react";

function PhoneCard({ AddToCard }) {
  // YOUR EXACT DATA – NOT A SINGLE CHANGE
  const phones = [
    {
      name: "iPhone 17 Pro Max",
      price: 1099,
      color: "Orange",
      img: "src/assets/image copy.png",
    },
    {
      name: "iPhone 17 Pro Max",
      price: 1099,
      color: "Black",
      img: "src/assets/image copy 2.png",
    },
    {
      name: "iPhone 17 Pro Max",
      price: 1099,
      color: "White",
      img: "src/assets/image copy 3.png",
    },
    {
      name: "iPhone Air",
      price: 999,
      color: "Sky",
      img: "src/assets/image copy 4.png",
    },
    {
      name: "iPhone Air",
      price: 999,
      color: "Gold",
      img: "src/assets/image copy 5.png",
    },
    {
      name: "iPhone Air",
      price: 999,
      color: "White",
      img: "src/assets/image copy 6.png",
    },
    {
      name: "iPhone Air",
      price: 999,
      color: "Black",
      img: "src/assets/image copy 7.png",
    },
    {
      name: "iPhone 17",
      price: 799,
      color: "Purple",
      img: "src/assets/image copy 8.png",
    },
    {
      name: "iPhone 17",
      price: 799,
      color: "Green",
      img: "src/assets/image copy 9.png",
    },
    {
      name: "iPhone 17",
      price: 799,
      color: "Blue",
      img: "src/assets/image copy 10.png",
    },
    {
      name: "iPhone 17",
      price: 799,
      color: "White",
      img: "src/assets/image copy 11.png",
    },
    {
      name: "iPhone 17",
      price: 799,
      color: "Gray",
      img: "src/assets/image copy 12.png",
    },
  ];

  return (
    <section id="iphone" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            Phone Shop
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A phone is a device people use to talk to each other over distance.
            Today, most phones are smartphones
          </p>
        </div>

        {/* Big Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
            iPhone Series
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {phones.map((phone, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
            >
              {/* Image + Badge */}
              <div className="relative bg-gradient-to-b from-gray-50 to-white p-8">
                <div className="absolute top-4 left-4 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  HOT
                </div>
                <img
                  src={phone.img}
                  alt={phone.name}
                  className="w-full h-60 object-contain mx-auto drop-shadow-xl group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 text-center">
                <h3 className="text-2xl font-bold text-gray-800">
                  {phone.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                  <span className="text-gray-500 text-sm">(50)</span>
                </div>

                {/* Specs */}
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Super Retina XDR • 120Hz</p>
                  <p className="font-semibold">
                    Color: <span className="text-sky-600">{phone.color}</span>
                  </p>
                  <p>256GB – 2TB Storage</p>
                </div>

                {/* Price */}
                <p className="text-3xl font-extrabold text-red-600">
                  ${phone.price}
                </p>

                {/* Button */}
                <button
                  onClick={() => AddToCard(phone.name, phone.price, phone.img)}
                  className="w-full py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold text-lg rounded-2xl 
                    shadow-lg hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300 
                    flex items-center justify-center gap-2 group/button"
                >
                  <i className="fa-solid fa-cart-shopping group-hover/button:translate-x-1 transition"></i>
                  Add to Cart
                </button>
              </div>

              {/* Subtle Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-20">
          <button className="px-14 py-5 bg-black hover:bg-gray-900 text-white font-bold text-lg rounded-full transition transform hover:scale-105 shadow-2xl">
            View All Phones →
          </button>
        </div>
      </div>
    </section>
  );
}

export default PhoneCard;
