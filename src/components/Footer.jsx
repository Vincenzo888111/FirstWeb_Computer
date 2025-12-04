import React from "react";

function Footer() {
  const locations = [
    {
      name: "Computer.Phsa Deum Kor",
      address: "ផ្ទះលេខ298Eo, មហាវីថី ម៉ៅសេងទុង (St.245) ខាងលិចចេនឡាផ្សារដើមគរ",
    },
    {
      name: "Computer.271",
      address: "ផ្ទះលេខ 598 g/ 271 (ក្បែរ KTV Royal & KTV Lavegas)",
    },
    {
      name: "Computer.Phsar Depo",
      address: "ផ្ទះលេខ 66Eo, មហាវីថី ម៉ៅសេងទុង (St. 215)",
    },
  ];

  const paymentIcons = [
    "src/assets/image copy 41.png",
    "src/assets/image copy 42.png",
    "src/assets/image copy 43.png",
    "src/assets/image copy 44.png",
    "src/assets/image copy 45.png",
  ];

  return (
    <footer className="w-full bg-black text-gray-300">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-sky-400 mb-4">
            Computer.
          </h1>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
            My Mobile Shop specializes in offering a broad selection of products,
            including smartphones, tablets, and accessories <br className="hidden md:block" />
            from leading brands such as Apple, Samsung and others more.
          </p>
        </div>

        <hr className="border-gray-800 my-10" />

        {/* Locations & Contact - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Locations */}
          {locations.map((loc, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-bold text-white">{loc.name}</h3>
              <div className="flex items-start gap-3 text-gray-400">
                <i className="fa-solid fa-location-dot text-sky-400 mt-1 flex-shrink-0"></i>
                <p className="text-sm leading-relaxed">{loc.address}</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="tel:087774911" className="hover:text-sky-400 transition">
                    <i className="fa-solid fa-phone text-sky-400 pr-3"></i>
                    Smart: 087 77 49 11
                  </a>
                </li>
                <li>
                  <a href="tel:012774911" className="hover:text-sky-400 transition pl-8">
                    Cellcard: 012 77 49 11
                  </a>
                </li>
                <li>
                  <a href="tel:097774911" className="hover:text-sky-400 transition pl-8">
                    Metfone: 097 77 49 11
                  </a>
                </li>
              </ul>
            </div>
          ))}

          {/* Contact Us */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-white">Contact with us</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="flex items-center gap-4 hover:text-sky-400 transition">
                  <i className="fa-brands fa-facebook-messenger text-xl w-8"></i>
                  Chat On Messenger
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4 hover:text-sky-400 transition">
                  <i className="fa-brands fa-telegram text-xl w-8"></i>
                  Chat On Telegram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4 hover:text-sky-400 transition">
                  <i className="fa-brands fa-instagram text-xl w-8"></i>
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4 hover:text-sky-400 transition">
                  <i className="fa-brands fa-x-twitter text-xl w-8"></i>
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4 hover:text-sky-400 transition">
                  <i className="fa-brands fa-tiktok text-xl w-8"></i>
                  Follow on TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-col items-center gap-6 py-10 border-t border-gray-800">
          <h3 className="text-2xl font-semibold text-gray-200">We accept payment</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {paymentIcons.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Payment method ${i + 1}`}
                className="h-10 object-contain hover:opacity-80 transition"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-6 border-t border-gray-800">
        <p className="text-center text-sm text-gray-400">
          Copyright © 2025 Computer Shop | Website by Developer{" "}
          <span className="text-sky-400 font-medium">
            Vincenzo
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;