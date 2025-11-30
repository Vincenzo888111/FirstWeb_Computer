import React from "react";

function Accesories({ AddToCard }) {
  return (
    <div id="Accesories" className="px-[20px]">
      <div className="shadow-md my-5 py-5">
        <div className="w-full h-[100px] mt-5 px-5">
          <hr />
          <h1 className="text-black font-bold text-4xl">Accesories</h1>
          <p className="text-[18px] mt-2">
            Accesories is a extra items that go with something to make it more
            useful or stylish.
          </p>
        </div>

        <div className="text-6xl text-black text-center mt-10 mb-20">
          <span className="text-sky-400">Accesories</span>
        </div>
        <div className="text-[25px] pl-5  ">
          <h1>
            {" "}
            <span className="text-sky-400">
              <i class="fa-solid fa-circle-chevron-down"></i>
            </span>{" "}
            Essentail Computer <span className="text-sky-400">Accesories</span>{" "}
          </h1>
          <p className="text-gray-400 text-[15px] pl-3">
            Exchance your setup with must-have peripherals and computer.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="mt-5 pl-1">
            {/* Select menu */}
            <i class="fa-solid fa-filter text-sky-400 pr-2"></i>
            <label htmlFor="menu" className="font-bold pr-2">
              Category :{" "}
            </label>
            <select
              id="menu"
              className="h-10 border border-sky-400 rounded bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 "
            >
              <option value="menu1">All</option>
              <option value="menu2">Mice & Keyboard</option>
              <option value="menu3">Cables & Adapters</option>
              <option value="menu4">Webcams</option>
              <option value="menu4">AirPods</option>
            </select>
            {/* Select Brand */}
            <label htmlFor="brand" className="font-bold px-2">
              Brand :{" "}
            </label>
            <select
              id="brand"
              className="h-10 border border-sky-400 rounded bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="brand1">All</option>
              <option value="brand2">Apple</option>
              <option value="brand3">Dell</option>
              <option value="brand4">Razer</option>
              <option value="brand5">ONIKUMA</option>
              <option value="brand6">TUFF</option>
              <option value="brand7">Lenovo</option>
              <option value="brand8">PS5</option>
              <option value="brand9">JBL</option>
            </select>
          </div>
          <div className="mt-5 px-10">
            <label htmlFor="sortby" className="font-bold pr-2">
              <i class="fa-solid fa-arrow-down-wide-short font-bold text-sky-400 pr-6"></i>
              Sort by:
            </label>
            <select
              id="sortby"
              className="h-10  border border-sky-400 rounded bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="price1">Price: Low to High</option>
              <option value="price2">Price: High to Low</option>
              <option value="price3">Price: A to Z</option>
            </select>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="flex ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 52.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">PS5 Controller</h1>

            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Adaptive triggers & haptic feedback</li>
              <li>Wireless gameplay with precise control</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $85
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("PS5 Controller",85,"src/assets/image copy 52.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Repeat same button fix for others */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 53.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">PS5 Headset</h1>

            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>3D audio for immersive sound</li>
              <li>Noise-canceling dual microphones </li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $140
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("PS5 Headset",140,"src/assets/image copy 53.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Same as above — fixes applied */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 54.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2 ">PS5 Media Remote</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Easy control of streaming apps</li>
              <li>Dedicated playback buttons</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $39
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("PS5 Media Remote",39,"src/assets/image copy 54.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 55.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">PS5 Charging Station</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Charges two controllers at once</li>
              <li>Fast, click-in charging dock </li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $30
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("PS5 Charging Station",30,"src/assets/image copy 55.png")}
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
              src="src/assets/image copy 61.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">Logitech</h1>

            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Adaptive triggers & haptic feedback</li>
              <li>Wireless gameplay with precise control</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $85
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("Logitech",85,"src/assets/image copy 61.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Repeat same button fix for others */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 63.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">Logitech</h1>

            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>3D audio for immersive sound</li>
              <li>Noise-canceling dual microphones </li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $140
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("Logitech",140,"src/assets/image copy 63.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Same as above — fixes applied */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 64.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2 ">Logitech</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Easy control of streaming apps</li>
              <li>Dedicated playback buttons</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $39
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("Logitech",39,"src/assets/image copy 64.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 65.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">Logitech</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Charges two controllers at once</li>
              <li>Fast, click-in charging dock </li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $30
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("Logitech",30,"src/assets/image copy 65.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 56.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">Dell Mouse</h1>

            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Adaptive triggers & haptic feedback</li>
              <li>Wireless gameplay with precise control</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $85
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("Dell Mouse",85,"src/assets/image copy 56.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Repeat same button fix for others */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 60.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">Lenovo</h1>

            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>3D audio for immersive sound</li>
              <li>Noise-canceling dual microphones </li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $140
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("Lenovo",140,"src/assets/image copy 60.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Same as above — fixes applied */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 58.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2 ">TUFF</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Easy control of streaming apps</li>
              <li>Dedicated playback buttons</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $39
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("TUFF",39,"src/assets/image copy 58.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 59.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">ONIKUMA</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Charges two controllers at once</li>
              <li>Fast, click-in charging dock </li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $30
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("ONIKUMA",30,"src/assets/image copy 59.png")}
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
              src="src/assets/image copy 66.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">Apple AirPods</h1>

            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Adaptive triggers & haptic feedback</li>
              <li>Wireless gameplay with precise control</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $85
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("Apple AirPods",85,"src/assets/image copy 66.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Repeat same button fix for others */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 67.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">Apple AirPods</h1>

            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>3D audio for immersive sound</li>
              <li>Noise-canceling dual microphones </li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $140
            </h1>
            <div className="text-center">
              <button
                 onClick={() => AddToCard("Apple AirPods",140,"src/assets/image copy 67.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Same as above — fixes applied */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 68.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2 ">Apple AirPod(Black)</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Easy control of streaming apps</li>
              <li>Dedicated playback buttons</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $39
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("Apple AirPod(Black)",39,"src/assets/image copy 68.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 73.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">Apple AirPods</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Charges two controllers at once</li>
              <li>Fast, click-in charging dock </li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $30
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("Apple AirPods",30,"src/assets/image copy 73.png")}
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
              src="src/assets/image copy 71.png"
              className="m-auto py-5 h-40 mt-7 mb-11"
              alt=""
            />
            <h1 className="text-center font-bold my-2">JBL AirPods</h1>

            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Adaptive triggers & haptic feedback</li>
              <li>Wireless gameplay with precise control</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $85
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("JBL AirPods",85,"src/assets/image copy 71.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Repeat same button fix for others */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 70.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">JBL AirPods</h1>

            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>3D audio for immersive sound</li>
              <li>Noise-canceling dual microphones </li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $140
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("JBL AirPods",140,"src/assets/image copy 70.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Same as above — fixes applied */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 74.png"
              className="m-auto py-5 h-40 mb-12 mt-7"
              alt=""
            />
            <h1 className="text-center font-bold my-2 ">JBL AirPod</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Easy control of streaming apps</li>
              <li>Dedicated playback buttons</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $39
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("JBL AirPods",39,"src/assets/image copy 74.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 72.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">JBL AirPods</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Charges two controllers at once</li>
              <li>Fast, click-in charging dock </li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $30
            </h1>
            <div className="text-center">
              <button
               onClick={() => AddToCard("JBL AirPods",30,"src/assets/image copy 72.png")}
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
              src="src/assets/image copy 75.png"
              className="m-auto py-5 h-40 mt-7 mb-11"
              alt=""
            />
            <h1 className="text-center font-bold my-2">Webcam Logi</h1>

            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Adaptive triggers & haptic feedback</li>
              <li>Wireless gameplay with precise control</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $85
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("Webcam Logi",85,"src/assets/image copy 75.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Repeat same button fix for others */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 76.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">Webcam Logi</h1>

            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>3D audio for immersive sound</li>
              <li>Noise-canceling dual microphones </li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $140
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("Webcam Logi",140,"src/assets/image copy 76.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Same as above — fixes applied */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 77.png"
              className="m-auto py-5 h-40 mb-12 mt-7"
              alt=""
            />
            <h1 className="text-center font-bold my-2 ">Webcam Logi</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Easy control of streaming apps</li>
              <li>Dedicated playback buttons</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $39
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("Webcam Logi",39,"src/assets/image copy 77.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 78.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">Webcam Logi</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Charges two controllers at once</li>
              <li>Fast, click-in charging dock </li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $30
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("Webcam Logi",30,"src/assets/image copy 78.png")}
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
              src="src/assets/image copy 79.png"
              className="m-auto py-5 h-40 mt-7 mb-11"
              alt=""
            />
            <h1 className="text-center font-bold my-2">TUFF Adapter</h1>

            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Adaptive triggers & haptic feedback</li>
              <li>Wireless gameplay with precise control</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $85
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("TUFF Adapter",85,"src/assets/image copy 79.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Repeat same button fix for others */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 80.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">TUFF Adapter</h1>

            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>3D audio for immersive sound</li>
              <li>Noise-canceling dual microphones </li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $140
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("TUFF Adapter",140,"src/assets/image copy 80.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Same as above — fixes applied */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 81.png"
              className="m-auto py-5 h-40 mb-12 mt-7"
              alt=""
            />
            <h1 className="text-center font-bold my-2 ">TUFF Adapter</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Easy control of streaming apps</li>
              <li>Dedicated playback buttons</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $39
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("TUFF Adapter",39,"src/assets/image copy 81.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 82.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">TUFF Adapter</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Charges two controllers at once</li>
              <li>Fast, click-in charging dock </li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $30
            </h1>
            <div className="text-center">
              <button
               onClick={() => AddToCard("TUFF Adapter",30,"src/assets/image copy 82.png")}
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
              src="src/assets/image copy 83.png"
              className="m-auto py-5 h-40 mt-7 mb-11"
              alt=""
            />
            <h1 className="text-center font-bold my-2">Mic</h1>

            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Adaptive triggers & haptic feedback</li>
              <li>Wireless gameplay with precise control</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $85
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("Mic",85,"src/assets/image copy 83.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Repeat same button fix for others */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 84.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">Mic</h1>

            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>3D audio for immersive sound</li>
              <li>Noise-canceling dual microphones </li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $140
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("Mic",140,"src/assets/image copy 84.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          {/* ✅ Same as above — fixes applied */}
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 85.png"
              className="m-auto py-5 h-40 mb-12 mt-7"
              alt=""
            />
            <h1 className="text-center font-bold my-2 ">Mic</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Easy control of streaming apps</li>
              <li>Dedicated playback buttons</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $39
            </h1>
            <div className="text-center">
              <button
                oonClick={() => AddToCard("Mic",39,"src/assets/image copy 85.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 86.png"
              className="m-auto py-5 h-1/2"
              alt=""
            />
            <h1 className="text-center font-bold my-2">Mic</h1>
            <ul className="list-disc text-[15px] mx-10 ">
              <li>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  <span>★★★★☆</span>
                  <span className="text-gray-700 text-sm font-bold">50</span>
                </div>
              </li>
              <li>Charges two controllers at once</li>
              <li>Fast, click-in charging dock </li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              From $30
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("Mic",30,"src/assets/image copy 86.png")}
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

export default Accesories;
