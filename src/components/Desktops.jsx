import React from "react";

// Reusable Card Component (DRY & Beautiful)
const ProductCard = ({ name, price, image, specs, onAddToCart }) => {
  return (
    <div className="w-[340px] h-[450px] flex flex-col justify-between bg-white rounded-2xl shadow-md shadow-gray-500 my-10 transform hover:scale-105 transition-all duration-300">
      <img
        src={image}
        alt={name}
        className="m-auto py-5 w-[200px] object-contain"
      />

      <h3 className="text-center font-bold text-lg px-4 line-clamp-2">
        {name}
      </h3>

      <ul className="list-disc text-[14px] mx-6 space-y-1 text-gray-700">
        {specs.map((spec, i) => (
          <li key={i}>{spec}</li>
        ))}
      </ul>

      <p className="text-center text-xl font-bold text-red-500">
        {price.toLocaleString() === "1299" ? "$1,299" : price}
      </p>

      <div className="text-center pb-6">
        <button
          onClick={() => onAddToCart(name, price, image)}
          className="w-64 h-12 rounded-3xl bg-sky-400 text-black font-semibold hover:bg-sky-500 hover:text-white transition-all shadow-lg hover:shadow-2xl"
        >
          Add to Cart <i className="fa-solid fa-cart-shopping ml-2"></i>
        </button>
      </div>
    </div>
  );
};

// Main Laptop Component - Clean & Maintainable
function Laptop({ AddToCard }) {
  const products = [
    // TUF Series - First Row
    {
      name: "ASUS TUF Gaming F16 (2025)",
      price: 1299,
      image: "src/assets/image copy 16.png",
      specs: [
        "18-inch display (first in TUF series)",
        "AMD Ryzen™ 7 260 processor",
        "NVIDIA® GeForce RTX™ 5070 GPU",
        "Windows 11 OS",
        "Ideal for gamers and creators",
      ],
    },
    {
      name: "ASUS TUF Gaming F18 (2025)",
      price: 1299,
      image: "src/assets/image copy 15.png",
      specs: [
        "18-inch display (first in TUF series)",
        "AMD Ryzen™ 7 260 processor",
        "NVIDIA® GeForce RTX™ 5070 GPU",
        "Windows 11 OS",
        "Ideal for gamers and creators",
      ],
    },
    {
      name: "ASUS TUF Gaming A14 (2025)",
      price: 1299,
      image: "src/assets/image copy 17.png",
      specs: [
        "18-inch display (first in TUF series)",
        "AMD Ryzen™ 7 260 processor",
        "NVIDIA® GeForce RTX™ 5070 GPU",
        "Windows 11 OS",
        "Ideal for gamers and creators",
      ],
    },
    {
      name: "ASUS TUF Gaming A16 (2025)",
      price: 1299,
      image: "src/assets/image copy 18.png",
      specs: [
        "18-inch display (first in TUF series)",
        "AMD Ryzen™ 7 260 processor",
        "NVIDIA® GeForce RTX™ 5070 GPU",
        "Windows 11 OS",
        "Ideal for gamers and creators",
      ],
    },

    // TUF Series - Second Row
    {
      name: "ASUS TUF Gaming F16 (2024)",
      price: 1299,
      image: "src/assets/image copy 19.png",
      specs: [
        "18-inch display (first in TUF series)",
        "AMD Ryzen™ 7 260 processor",
        "NVIDIA® GeForce RTX™ 5070 GPU",
        "Windows 11 OS",
        "Ideal for gamers and creators",
      ],
    },
    {
      name: "ASUS TUF Gaming A16 (2024)",
      price: 1299,
      image: "src/assets/image copy 20.png",
      specs: [
        "18-inch display (first in TUF series)",
        "AMD Ryzen™ 7 260 processor",
        "NVIDIA® GeForce RTX™ 5070 GPU",
        "Windows 11 OS",
        "Ideal for gamers and creators",
      ],
    },
    {
      name: "ASUS TUF Gaming A15 (2024)",
      price: 1299,
      image: "src/assets/image copy 21.png",
      specs: [
        "18-inch display (first in TUF series)",
        "AMD Ryzen™ 7 260 processor",
        "NVIDIA® GeForce RTX™ 5070 GPU",
        "Windows 11 OS",
        "Ideal for gamers and creators",
      ],
    },
    {
      name: "ASUS TUF Gaming F15 (2022)",
      price: 1299,
      image: "src/assets/image copy 22.png",
      specs: [
        "18-inch display (first in TUF series)",
        "AMD Ryzen™ 7 260 processor",
        "NVIDIA® GeForce RTX™ 5070 GPU",
        "Windows 11 OS",
        "Ideal for gamers and creators",
      ],
    },

    // ROG Series
    {
      name: "ROG Strix SCAR 18 (2025)",
      price: 2699.99,
      image: "src/assets/image copy 37.png",
      specs: [
        '16" 2.5K 240Hz ROG Nebula Display',
        "13th Gen Intel® Core™ i5-13450HX",
        "NVIDIA® GeForce RTX™ 5050 GPU",
        "Windows 11 Home",
        "2TB SSD storage",
      ],
    },
    {
      name: "ROG Zephyrus G14 (2025)",
      price: 2099.99,
      image: "src/assets/image copy 38.png",
      specs: [
        '16" 2.5K 240Hz ROG Nebula Display',
        "13th Gen Intel® Core™ i5-13450HX",
        "NVIDIA® GeForce RTX™ 5050 GPU",
        "Windows 11 Home",
        "2TB SSD storage",
      ],
    },
    {
      name: "ROG Flow Z13 (2025)",
      price: 2099.99,
      image: "src/assets/image copy 39.png",
      specs: [
        '16" 2.5K 240Hz ROG Nebula Display',
        "13th Gen Intel® Core™ i5-13450HX",
        "NVIDIA® GeForce RTX™ 5050 GPU",
        "Windows 11 Home",
        "2TB SSD storage",
      ],
    },
    {
      name: "ROG Zephyrus G16 (2025) GU605",
      price: 2799.99,
      image: "src/assets/image copy 40.png",
      specs: [
        '16" 2.5K 240Hz OLED',
        "Intel® Core™ Ultra 9",
        "NVIDIA® GeForce RTX™ 5090",
        "Windows 11 Home OLED Screen",
        "2TB SSD storage",
      ],
    },

    // MacBook Series - First Row
    {
      name: "MacBook Air (2025) Sky Blue",
      price: 1199,
      image: "src/assets/image copy 23.png",
      specs: [
        "13/15 inch",
        "10-Core CPU",
        "10-Core GPU",
        "16GB Unified Memory",
        "256GB SSD Storage",
      ],
    },
    {
      name: "MacBook Air (2025) Silver",
      price: 1199,
      image: "src/assets/image copy 24.png",
      specs: [
        "13/15 inch",
        "10-Core CPU",
        "10-Core GPU",
        "16GB Unified Memory",
        "256GB SSD Storage",
      ],
    },
    {
      name: "MacBook Air (2025) Starlight",
      price: 1199,
      image: "src/assets/image copy 25.png",
      specs: [
        "13/15 inch",
        "10-Core CPU",
        "10-Core GPU",
        "16GB Unified Memory",
        "256GB SSD Storage",
      ],
    },
    {
      name: "MacBook Air (2025) Black",
      price: 1199,
      image: "src/assets/image copy 26.png",
      specs: [
        "13/15 inch",
        "10-Core CPU",
        "10-Core GPU",
        "16GB Unified Memory",
        "256GB SSD Storage",
      ],
    },

    // MacBook Series - Second Row (Higher Storage)
    {
      name: "MacBook Air (2025) Sky Blue",
      price: 1399,
      image: "src/assets/image copy 23.png",
      specs: [
        "13/15 inch",
        "10-Core CPU",
        "10-Core GPU",
        "16GB/24GB Memory",
        "512GB SSD",
      ],
    },
    {
      name: "MacBook Air (2025) Silver",
      price: 1399,
      image: "src/assets/image copy 24.png",
      specs: [
        "13/15 inch",
        "10-Core CPU",
        "10-Core GPU",
        "16GB/24GB Memory",
        "512GB SSD",
      ],
    },
    {
      name: "MacBook Air (2025) Starlight",
      price: 1399,
      image: "src/assets/image copy 25.png",
      specs: [
        "13/15 inch",
        "10-Core CPU",
        "10-Core GPU",
        "16GB/24GB Memory",
        "512GB SSD",
      ],
    },
    {
      name: "MacBook Air (2025) Black",
      price: 1399,
      image: "src/assets/image copy 26.png",
      specs: [
        "13/15 inch",
        "10-Core CPU",
        "10-Core GPU",
        "16GB/24GB Memory",
        "512GB SSD",
      ],
    },
  ];

  return (
    <div className="w-full px-5 md:px-10 lg:px-20">
      {/* Header */}
      <div className="text-center my-16">
        <h1 className="text-5xl font-bold">Laptop Shop</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          A laptop is a portable computer used for work, study, and
          entertainment. Today, most laptops are lightweight and powerful.
        </p>
      </div>

      {/* TUF Section */}
      <section id="tuf" className="my-20">
        <h2 className="text-6xl text-center font-bold mb-10">
          ASUS TUF <span className="text-sky-400">Series</span>
        </h2>
        <h3 className="text-3xl font-bold pl-5 mb-10">
          ASUS TUF <span className="text-sky-400">Gaming</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
          {products.slice(0, 8).map((product, i) => (
            <ProductCard key={i} {...product} onAddToCart={AddToCard} />
          ))}
        </div>
      </section>

      {/* ROG Section */}
      <section id="rog" className="my-20">
        <h2 className="text-6xl text-center font-bold mb-10">
          ROG <span className="text-sky-400">Series</span>
        </h2>
        <h3 className="text-3xl font-bold pl-5 mb-10">
          ROG Strix <span className="text-sky-400">Gaming</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
          {products.slice(8, 12).map((product, i) => (
            <ProductCard key={i + 100} {...product} onAddToCart={AddToCard} />
          ))}
        </div>
      </section>

      {/* MacBook Section */}
      <section id="mac" className="my-20">
        <h2 className="text-6xl text-center font-bold mb-10">
          MacBook <span className="text-sky-400">Series</span>
        </h2>
        <h3 className="text-3xl font-bold pl-5 mb-10">
          Mac <span className="text-sky-400">Book</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
          {products.slice(12).map((product, i) => (
            <ProductCard key={i + 200} {...product} onAddToCart={AddToCard} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Laptop;
