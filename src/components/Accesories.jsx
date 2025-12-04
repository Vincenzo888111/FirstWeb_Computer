import React, { useState, useMemo } from "react";

// Reusable Product Card (same style as your Laptop page)
const AccessoryCard = ({
  name,
  price,
  image,
  rating = 4,
  reviews = 50,
  specs,
  onAddToCart,
}) => {
  return (
    <div className="w-[340px] h-[450px] flex flex-col justify-between bg-white rounded-2xl shadow-md shadow-gray-500 my-10 transform hover:scale-105 transition-all duration-300">
      <img src={image} alt={name} className="m-auto py-5 h-48 object-contain" />

      <h3 className="text-center font-bold text-lg px-4">{name}</h3>

      <ul className="list-disc text-[15px] mx-10 space-y-1 text-gray-700">
        <li className="flex items-center justify-center gap-2">
          <span className="text-yellow-400 text-xl">
            {"★★★★★".slice(0, rating)}☆
          </span>
          <span className="text-sm font-bold text-gray-600">({reviews})</span>
        </li>
        {specs.map((spec, i) => (
          <li key={i}>{spec}</li>
        ))}
      </ul>

      <p className="text-center text-xl font-bold text-red-500">
        From ${price}
      </p>

      <div className="text-center pb-6">
        <button
          onClick={() => onAddToCart(name, price, image)}
          className="w-64 h-12 rounded-3xl bg-sky-400 text-black font-semibold hover:bg-sky-500 hover:text-white transition-all shadow-lg hover:shadow-2xl"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

function Accesories({ AddToCard }) {
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  // All your accessories in one place — easy to edit!
  const accessories = [
    // PS5 Accessories
    {
      id: 1,
      name: "PS5 Controller",
      price: 85,
      image: "src/assets/image copy 52.png",
      category: "Gaming",
      brand: "PS5",
      rating: 4,
      specs: [
        "Adaptive triggers & haptic feedback",
        "Wireless gameplay with precise control",
      ],
    },
    {
      id: 2,
      name: "PS5 Headset",
      price: 140,
      image: "src/assets/image copy 53.png",
      category: "Gaming",
      brand: "PS5",
      specs: [
        "3D audio for immersive sound",
        "Noise-canceling dual microphones",
      ],
    },
    {
      id: 3,
      name: "PS5 Media Remote",
      price: 39,
      image: "src/assets/image copy 54.png",
      category: "Gaming",
      brand: "PS5",
      specs: ["Easy control of streaming apps", "Dedicated playback buttons"],
    },
    {
      id: 4,
      name: "PS5 Charging Station",
      price: 30,
      image: "src/assets/image copy 55.png",
      category: "Gaming",
      brand: "PS5",
      specs: [
        "Charges two controllers at once",
        "Fast, click-in charging dock",
      ],
    },

    // Logitech
    {
      id: 5,
      name: "Logitech G Pro Mouse",
      price: 85,
      image: "src/assets/image copy 61.png",
      category: "Mice & Keyboard",
      brand: "Logitech",
      specs: ["Ultra-lightweight", "HERO 25K sensor"],
    },
    {
      id: 6,
      name: "Logitech G733 Headset",
      price: 140,
      image: "src/assets/image copy 63.png",
      category: "Mice & Keyboard",
      brand: "Logitech",
      specs: ["Wireless freedom", "Blue VO!CE mic"],
    },
    {
      id: 7,
      name: "Logitech Keyboard",
      price: 39,
      image: "src/assets/image copy 64.png",
      category: "Mice & Keyboard",
      brand: "Logitech",
      specs: ["Mechanical switches", "RGB lighting"],
    },
    {
      id: 8,
      name: "Logitech Webcam",
      price: 30,
      image: "src/assets/image copy 65.png",
      category: "Webcams",
      brand: "Logitech",
      specs: ["1080p HD", "Built-in mic"],
    },

    // Dell / Lenovo / TUFF / ONIKUMA
    {
      id: 9,
      name: "Dell Wireless Mouse",
      price: 85,
      image: "src/assets/image copy 56.png",
      category: "Mice & Keyboard",
      brand: "Dell",
      specs: ["Ergonomic design", "Long battery life"],
    },
    {
      id: 10,
      name: "Lenovo ThinkPad Keyboard",
      price: 140,
      image: "src/assets/image copy 60.png",
      category: "Mice & Keyboard",
      brand: "Lenovo",
      specs: ["Spill-resistant", "TrackPoint"],
    },
    {
      id: 11,
      name: "TUFF Gaming Mouse",
      price: 39,
      image: "src/assets/image copy 58.png",
      category: "Mice & Keyboard",
      brand: "TUFF",
      specs: ["RGB lighting", "High DPI sensor"],
    },
    {
      id: 12,
      name: "ONIKUMA Gaming Headset",
      price: 30,
      image: "src/assets/image copy 59.png",
      category: "Gaming",
      brand: "ONIKUMA",
      specs: ["50mm drivers", "Noise cancellation"],
    },

    // AirPods & JBL
    {
      id: 13,
      name: "Apple AirPods Pro",
      price: 249,
      image: "src/assets/image copy 66.png",
      category: "AirPods",
      brand: "Apple",
      specs: ["Active Noise Cancellation", "Spatial Audio"],
    },
    {
      id: 14,
      name: "Apple AirPods Max",
      price: 549,
      image: "src/assets/image copy 67.png",
      category: "AirPods",
      brand: "Apple",
      specs: ["Premium sound", "Adaptive EQ"],
    },
    {
      id: 15,
      name: "Apple AirPods (Black)",
      price: 179,
      image: "src/assets/image copy 68.png",
      category: "AirPods",
      brand: "Apple",
      specs: ["H1 chip", "Hey Siri"],
    },
    {
      id: 16,
      name: "JBL Tune 760NC",
      price: 129,
      image: "src/assets/image copy 71.png",
      category: "AirPods",
      brand: "JBL",
      specs: ["Pure Bass Sound", "35H battery"],
    },

    // Webcams & Adapters
    {
      id: 17,
      name: "Logitech C920 Webcam",
      price: 85,
      image: "src/assets/image copy 75.png",
      category: "Webcams",
      brand: "Logitech",
      specs: ["1080p video", "Auto light correction"],
    },
    {
      id: 18,
      name: "TUFF USB-C Hub",
      price: 59,
      image: "src/assets/image copy 79.png",
      category: "Cables & Adapters",
      brand: "TUFF",
      specs: ["4K HDMI", "100W PD"],
    },
    {
      id: 19,
      name: "Studio Microphone",
      price: 140,
      image: "src/assets/image copy 84.png",
      category: "Mice & Keyboard",
      brand: "Generic",
      specs: ["Cardioid pattern", "USB plug & play"],
    },
    // Add more easily here...
  ];

  // Filtering & Sorting Logic
  const filteredAndSorted = useMemo(() => {
    let filtered = accessories;

    if (category !== "All") {
      filtered = filtered.filter(
        (item) =>
          item.category === category ||
          (category === "AirPods" && item.category === "AirPods")
      );
    }
    if (brand !== "All") {
      filtered = filtered.filter((item) => item.brand === brand);
    }

    // Sort
    if (sortBy === "low") filtered.sort((a, b) => a.price - b.price);
    if (sortBy === "high") filtered.sort((a, b) => b.price - a.price);
    if (sortBy === "az") filtered.sort((a, b) => a.name.localeCompare(b.name));

    return filtered;
  }, [category, brand, sortBy]);

  return (
    <div id="Accesories" className="px-5 md:px-10 lg:px-20 py-10">
      {/* Header */}
      <div className="text-center my-16">
        <h1 className="text-5xl font-bold">Accessories</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Accessories are extra items that go with something to make it more
          useful or stylish.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-gray-50 p-6 rounded-xl mb-10">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-filter text-sky-400"></i>
            <label className="font-bold">Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-10 px-4 border border-sky-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="All">All</option>
              <option value="Gaming">Gaming Accessories</option>
              <option value="Mice & Keyboard">Mice & Keyboard</option>
              <option value="Webcams">Webcams</option>
              <option value="AirPods">Headphones / AirPods</option>
              <option value="Cables & Adapters">Cables & Adapters</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="font-bold">Brand:</label>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="h-10 px-4 border border-sky-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="All">All Brands</option>
              <option>Apple</option>
              <option>Logitech</option>
              <option>PS5</option>
              <option>JBL</option>
              <option>TUFF</option>
              <option>ONIKUMA</option>
              <option>Lenovo</option>
              <option>Dell</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <i className="fa-solid fa-arrow-down-wide-short text-sky-400"></i>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-10 px-4 border border-sky-400 rounded-lg"
          >
            <option value="featured">Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="az">A to Z</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
        {filteredAndSorted.map((item) => (
          <AccessoryCard
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            rating={item.rating}
            reviews={item.reviews || 50}
            specs={item.specs}
            onAddToCart={AddToCard}
          />
        ))}
      </div>

      {filteredAndSorted.length === 0 && (
        <p className="text-center text-xl text-gray-500 py-20">
          No products found for selected filters
        </p>
      )}
    </div>
  );
}

export default Accesories;
