import React from "react";

function PhoneCard({ AddToCard }) {
  return (
    <div id="iphone" className="w-full px-[20px]">
      <div className="w-full h-[100px] mt-5 px-5">
        <hr />
        <h1 className="text-black font-bold text-4xl">Phone Shop</h1>
        <p className="text-[18px] mt-2">
          A phone is a device people use to talk to each other over distance.
          Today, most phones are smartphones
        </p>
      </div>

      <div className="text-6xl text-black text-center mt-10 mb-10">
        iPhone <span className="text-sky-400">Series</span>
      </div>
      <div className="text-[25px] pl-5 font-bold ">
        iPhone <span className="text-sky-400">Series</span>{" "}
      </div>
      <div data-aos="fade-left" className="flex  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center items-center">
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2 text-orange-400">
              iPhone 17 Pro Max
            </h1>

            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>
                6.9-inch display / 120fps /
                <span className="text-orange-400 font-bold">Orange</span>
              </li>
              <li>256GB / 512GB / 1TB / 2TB</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $1,099
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("iPhone 17 Pro Max", 1099,"src/assets/image copy.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Repeat same button fix for others */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 2.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2 text-gray-700">
              iPhone 17 Pro Max
            </h1>
            
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>
                6.9-inch display / 120fps /
                <span className="text-gray-700 font-bold">Black</span>
              </li>
              <li>256GB / 512GB / 1TB / 2TB</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $1,099
            </h1>
            <div className="text-center">
              <button
               onClick={() => AddToCard("iPhone 17 Pro Max", 1099,"src/assets/image copy 2.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Same as above — fixes applied */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 3.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2 text-gray-400">
              iPhone 17 Pro Max
            </h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>
                6.9-inch display / 120fps /
                <span className="text-gray-400 font-bold">White</span>
              </li>
              <li>256GB / 512GB / 1TB / 2TB</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $1,099
            </h1>
            <div className="text-center">
              <button
               onClick={() => AddToCard("iPhone 17 Pro Max", 1099,"src/assets/image copy 3.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 4.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2 text-sky-300">
              iPhone Air
            </h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>
                6.5-inch display / 60fps /
                <span className="text-sky-300 font-bold">Sky</span>
              </li>
              <li>256GB / 512GB</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $999
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("iPhone Air", 999,"src/assets/image copy 4.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-right" className="flex ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 5.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2 ">iPhone Air</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>
                6.5-inch display / 60fps /
                <span className=" font-bold">Gold</span>
              </li>
              <li>256GB / 512GB</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $999
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("iPhone Air",999,"src/assets/image copy 5.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Repeat same button fix for others */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 6.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">iPhone Air</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>
                6.5-inch display / 60fps /
                <span className=" font-bold">White</span>
              </li>
              <li>256GB / 512GB</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $999
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("iPhone Air",999,"src/assets/image copy 6.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Same as above — fixes applied */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 7.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">iPhone Air</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              <li>
                6.5-inch display / 60fps /
                <span className=" font-bold">Black</span>
              </li>
              <li>256GB / 512GB</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $999
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("iPhone Air",999,"src/assets/image copy 7.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 12.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2 ">iPhone 17</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              <li>
                6.3-inch display / 60fps /
                <span className=" font-bold">Gray</span>
              </li>
              <li>256GB / 512GB</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $799
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("iPhone 17",799,"src/assets/image copy 12.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="flex ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 9.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2 text-green-600">
              iPhone 17
            </h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              <li>
                6.1-inch display / 60fps /
                <span className="text-green-600 font-bold">Green</span>
              </li>
              <li>256GB / 512GB</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $799
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("iPhone 17",799,"src/assets/image copy 9.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Repeat same button fix for others */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 10.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2 text-blue-600">
              iPhone 17
            </h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              <li>
                6.9-inch display / 60fps /
                <span className="text-blue-600 font-bold">Blue</span>
              </li>
              <li>256GB / 512GB</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $799
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("iPhone 17",799,"src/assets/image copy 10.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Same as above — fixes applied */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 11.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">iPhone 17</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              <li>
                6.9-inch display / 60fps /
                <span className="font-bold">White</span>
              </li>
              <li>256GB / 512GB</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $799
            </h1>
            <div className="text-center">
              <button
               onClick={() => AddToCard("iPhone 17",799,"src/assets/image copy 11.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 8.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2 text-purple-300">
              iPhone 17
            </h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              <li>
                6.9-inch display / 60fps /
                <span className="text-purple-300 font-bold">Purple</span>
              </li>
              <li>256GB / 512GB</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $799
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("iPhone 17",799,"src/assets/image copy 8.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="flex ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 9.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2 text-green-600">
              iPhone 17
            </h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              <li>
                6.1-inch display / 60fps /
                <span className="text-green-600 font-bold">Green</span>
              </li>
              <li>256GB / 512GB</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $799
            </h1>
            <div className="text-center">
              <button
               onClick={() => AddToCard("iPhone 17",799,"src/assets/image copy 9.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Repeat same button fix for others */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 10.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2 text-blue-600">
              iPhone 17
            </h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              <li>
                6.9-inch display / 60fps /
                <span className="text-blue-600 font-bold">Blue</span>
              </li>
              <li>256GB / 512GB</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $799
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("iPhone 17",799,"src/assets/image copy 10.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Same as above — fixes applied */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 11.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">iPhone 17</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              <li>
                6.9-inch display / 60fps /
                <span className="font-bold">White</span>
              </li>
              <li>256GB / 512GB</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $799
            </h1>
            <div className="text-center">
              <button
               onClick={() => AddToCard("iPhone 17",799,"src/assets/image copy 11.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 8.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2 text-purple-300">
              iPhone 17
            </h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              <li>
                6.9-inch display / 60fps /
                <span className="text-purple-300 font-bold">Purple</span>
              </li>
              <li>256GB / 512GB</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $799
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("iPhone 17",799,"src/assets/image copy 8.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneCard;
