import React from "react";

function Laptop({ AddToCard }) {
  return (
    <div id="tuff" className="w-full px-[20px]">
      <div className="w-full h-[100px] mt-25 px-5">
        <hr />
        <h1 className="text-black font-bold text-4xl ">Laptop Shop</h1>
        <p className="text-[18px] mt-2">
          A laptop is a portable computer used for work, study, and
          entertainment. Today, most laptops are lightweight and powerful.
        </p>
      </div>
      <div className="text-6xl text-black text-center mt-15 mb-10">
        ASUS TUFF <span className="text-sky-400">Series</span>
      </div>
      <div className="text-[25px] pl-5 font-bold ">
        ASUS TUFF <span className="text-sky-400">Gaming</span>
      </div>
      <div data-aos="fade-up" className="flex ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105 transition bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 16.png"
              className="m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">
              ASUS TUF Gaming F16 (2025)
            </h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>18-inch display (first in TUF series)</li>
              <li>AMD Ryzen™ 7 260 processor</li>
              <li>NVIDIA® GeForce RTX™ 5070 GPU</li>
              <li>Windows 11 OS</li>
              <li>Ideal for gamers and creators</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              $1,299
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("ASUS TUF Gaming F16 (2025)",1299,"src/assets/image copy 16.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black transform hover:scale-105 transition hover:text-white shadow-md hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10 ">
            <img
              src="src/assets/image copy 15.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">
              ASUS TUF Gaming F18 (2025)
            </h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>18-inch display (first in TUF series)</li>
              <li>AMD Ryzen™ 7 260 processor</li>
              <li>NVIDIA® GeForce RTX™ 5070 GPU</li>
              <li>Windows 11 OS</li>
              <li>Ideal for gamers and creators</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              $1,299
            </h1>
            <div className="text-center">
              <button
                 onClick={() => AddToCard("ASUS TUF Gaming F18 (2025)",1299,"src/assets/image copy 18.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 17.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">
              ASUS TUF Gaming A14 (2025)
            </h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>18-inch display (first in TUF series)</li>
              <li>AMD Ryzen™ 7 260 processor</li>
              <li>NVIDIA® GeForce RTX™ 5070 GPU</li>
              <li>Windows 11 OS</li>
              <li>Ideal for gamers and creators</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              $1,299
            </h1>
            <div className="text-center">
              <button
                  onClick={() => AddToCard("ASUS TUF Gaming A14 (2025)",1299,"src/assets/image copy 17.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 18.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">
              ASUS TUF Gaming A16 (2025)
            </h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>18-inch display (first in TUF series)</li>
              <li>AMD Ryzen™ 7 260 processor</li>
              <li>NVIDIA® GeForce RTX™ 5070 GPU</li>
              <li>Windows 11 OS</li>
              <li>Ideal for gamers and creators</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              $1,299
            </h1>
            <div className="text-center">
              <button
                  onClick={() => AddToCard("ASUS TUF Gaming A16 (2025)",1299,"src/assets/image copy 19.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" className="flex ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 19.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">
              ASUS TUF Gaming F16 (2024)
            </h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>18-inch display (first in TUF series)</li>
              <li>AMD Ryzen™ 7 260 processor</li>
              <li>NVIDIA® GeForce RTX™ 5070 GPU</li>
              <li>Windows 11 OS</li>
              <li>Ideal for gamers and creators</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              $1,299
            </h1>
            <div className="text-center">
              <button
                  onClick={() => AddToCard("ASUS TUF Gaming F16 (2024)",1299,"src/assets/image copy 20.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10 ">
            <img
              src="src/assets/image copy 20.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">
              ASUS TUF Gaming A16 (2024)
            </h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>18-inch display (first in TUF series)</li>
              <li>AMD Ryzen™ 7 260 processor</li>
              <li>NVIDIA® GeForce RTX™ 5070 GPU</li>
              <li>Windows 11 OS</li>
              <li>Ideal for gamers and creators</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              $1,299
            </h1>
            <div className="text-center">
              <button
                 onClick={() => AddToCard("ASUS TUF Gaming A16 (2024)",1299,"src/assets/image copy 21.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 21.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">
              ASUS TUF Gaming A15 (2024)
            </h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>18-inch display (first in TUF series)</li>
              <li>AMD Ryzen™ 7 260 processor</li>
              <li>NVIDIA® GeForce RTX™ 5070 GPU</li>
              <li>Windows 11 OS</li>
              <li>Ideal for gamers and creators</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              $1,299
            </h1>
            <div className="text-center">
              <button
                  onClick={() => AddToCard(" ASUS TUF Gaming A15 (2024)",1299,"src/assets/image copy 22.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 22.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">
              ASUS TUF Gaming F15 (2022)
            </h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>18-inch display (first in TUF series)</li>
              <li>AMD Ryzen™ 7 260 processor</li>
              <li>NVIDIA® GeForce RTX™ 5070 GPU</li>
              <li>Windows 11 OS</li>
              <li>Ideal for gamers and creators</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              $1,299
            </h1>
            <div className="text-center">
              <button
                  onClick={() => AddToCard("ASUS TUF Gaming F15 (2022)",1299,"src/assets/image copy 23.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="mx-5">
        <hr />
      </p>
      <div className="w-full h-[100px] mt-25 px-5" id="rog">
        <hr />
        <h1 className="text-black font-bold text-4xl ">Laptop Shop</h1>
        <p className="text-[18px] mt-2">
          A laptop is a portable computer used for work, study, and
          entertainment. Today, most laptops are lightweight and powerful.
        </p>
      </div>
      <div className="text-6xl text-black text-center mt-20 mb-10">
        ROG <span className="text-sky-400">Series</span>
      </div>
      <div className="text-[25px] pl-5 font-bold ">
        ROG Strix<span className="text-sky-400">Gaming</span>
      </div>
      <div data-aos="fade-up" className="flex    ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 37.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2 mt-[10px]">
              ROG Strix SCAR 18 (2025)
            </h1>
            <ul className="list-disc text-[13px]  mx-5">
              <li>
                16" 2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula Display
              </li>
              <li>13th Gen Intel® Core™ i5-13450HX Processor</li>
              <li>NVIDIA® GeForce RTX™ 5050 Laptop GPU</li>
              <li>Windows 11 Home</li>
              <li>2TB M.2 NVMe™ PCIe® 4.0 SSD storage</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              $2,699.99
            </h1>
            <div className="text-center">
              <button
                  onClick={() => AddToCard("ROG Strix SCAR 18 (2025)",2699,"src/assets/image copy 36.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 38.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2 mt-[17px]">
              ROG Zephyrus G14 (2025)
            </h1>

            <ul className="list-disc text-[13px]  mx-5">
              <li>
                16" 2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula Display
              </li>
              <li>13th Gen Intel® Core™ i5-13450HX Processor</li>
              <li>NVIDIA® GeForce RTX™ 5050 Laptop GPU</li>
              <li>Windows 11 Home</li>
              <li>2TB M.2 NVMe™ PCIe® 4.0 SSD storage</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              $2,099.99
            </h1>
            <div className="text-center">
              <button
                  onClick={() => AddToCard("ROG Zephyrus G14 (2025)",2099,"src/assets/image copy 37.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 39.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">ROG Flow Z13 (2025)</h1>
            <ul className="list-disc text-[13px]  mx-5">
              <li>
                16" 2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula Display
              </li>
              <li>13th Gen Intel® Core™ i5-13450HX Processor</li>
              <li>NVIDIA® GeForce RTX™ 5050 Laptop GPU</li>
              <li>Windows 11 Home</li>
              <li>2TB M.2 NVMe™ PCIe® 4.0 SSD storage</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              $2,099.99
            </h1>
            <div className="text-center">
              <button
                  onClick={() => AddToCard("ROG Flow Z13 (2025)",2099,"src/assets/image copy 38.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 40.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2 mt-[18px]">
              ROG Zephyrus G16 (2025) GU605
            </h1>
            <ul className="list-disc text-[13px]  mx-5">
              <li>
                16" 2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula Display
              </li>
              <li>13th Gen Intel® Core™ Ultra 9 Processor</li>
              <li>NVIDIA® GeForce RTX™ 5090 Laptop GPU</li>
              <li>Windows 11 Home OLED Screen</li>
              <li>2TB M.2 NVMe™ PCIe® 4.0 SSD storage</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              $2,799.99
            </h1>
            <div className="text-center">
              <button
                  onClick={() => AddToCard("ROG Zephyrus G16 (2025) GU605",2799,"src/assets/image copy 39.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="flex   ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 36.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">
              ROG Strix G16 (2025) G615
            </h1>
            <ul className="list-disc text-[13px]  mx-5">
              <li>
                16" 2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula Display
              </li>
              <li>13th Gen Intel® Core™ i5-13450HX Processor</li>
              <li>NVIDIA® GeForce RTX™ 5050 Laptop GPU</li>
              <li>Windows 11 Home</li>
              <li>2TB M.2 NVMe™ PCIe® 4.0 SSD storage</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              $1,299
            </h1>
            <div className="text-center">
              <button
                  onClick={() => AddToCard("ROG Strix G16 (2025) G615",1299,"src/assets/image copy 40.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 36.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">
              ROG Strix G16 (2025) G615
            </h1>
            <ul className="list-disc text-[13px]  mx-5">
              <li>
                16" 2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula Display
              </li>
              <li>13th Gen Intel® Core™ i5-13450HX Processor</li>
              <li>NVIDIA® GeForce RTX™ 5050 Laptop GPU</li>
              <li>Windows 11 Home</li>
              <li>2TB M.2 NVMe™ PCIe® 4.0 SSD storage</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              $1,299
            </h1>
            <div className="text-center">
              <button
                  onClick={() => AddToCard("ROG Strix G16 (2025) G615",1299,"src/assets/image copy 41.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 36.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">
              ROG Strix G16 (2025) G615
            </h1>
            <ul className="list-disc text-[13px]  mx-5">
              <li>
                16" 2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula Display
              </li>
              <li>13th Gen Intel® Core™ i5-13450HX Processor</li>
              <li>NVIDIA® GeForce RTX™ 5050 Laptop GPU</li>
              <li>Windows 11 Home</li>
              <li>2TB M.2 NVMe™ PCIe® 4.0 SSD storage</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              $1,299
            </h1>
            <div className="text-center">
              <button
                  onClick={() => AddToCard("ROG Strix G16 (2025) G615",1299,"src/assets/image copy 42.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 36.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">
              ROG Strix G16 (2025) G615
            </h1>
            <ul className="list-disc text-[13px]  mx-5">
              <li>
                16" 2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula Display
              </li>
              <li>13th Gen Intel® Core™ i5-13450HX Processor</li>
              <li>NVIDIA® GeForce RTX™ 5050 Laptop GPU</li>
              <li>Windows 11 Home</li>
              <li>2TB M.2 NVMe™ PCIe® 4.0 SSD storage</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              $1,299
            </h1>
            <div className="text-center">
              <button
                  onClick={() => AddToCard("ROG Strix G16 (2025) G615",1299,"src/assets/image copy 43.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[100px] mt-25 px-5" id="mac">
        <hr />
        <h1 className="text-black font-bold text-4xl ">Laptop Shop</h1>
        <p className="text-[18px] mt-2">
          A laptop is a portable computer used for work, study, and
          entertainment. Today, most laptops are lightweight and powerful.
        </p>
      </div>
      <div className="text-6xl text-black text-center my-20">
        Mac Book <span className="text-sky-400">Series</span>
      </div>
      <div className="text-[25px] pl-5 font-bold ">
        Mac <span className="text-sky-400">Book</span>
      </div>
      <div data-aos="fade-down" className="flex   ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 23.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2 ">
              MacBook Air (2025)Sky Blue
            </h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>13/15 inch</li>
              <li>10-Core CPU</li>
              <li>10-Core GPU</li>
              <li>16GB Unified Memory</li>
              <li>256GB SSD Storage¹</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              Form $1,199
            </h1>
            <div className="text-center">
              <button
                  onClick={() => AddToCard(" MacBook Air (2025)Sky Blue",1399,"src/assets/image copy 23.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 24.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">
              MacBook Air (2025) Silver
            </h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>13/15 inch</li>
              <li>10-Core CPU</li>
              <li>10-Core GPU</li>
              <li>16GB Unified Memory</li>
              <li>256GB SSD Storage¹</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              Form $1,199
            </h1>
            <div className="text-center">
              <button
                 onClick={() => AddToCard("MacBook Air (2025) Silver",1399,"src/assets/image copy 24.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 25.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">
              MacBook Air (2025) Starlight
            </h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>13/15 inch</li>
              <li>10-Core CPU</li>
              <li>10-Core GPU</li>
              <li>16GB Unified Memory</li>
              <li>256GB SSD Storage¹</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              Form $1,199
            </h1>
            <div className="text-center">
              <button
                  onClick={() => AddToCard(" MacBook Air (2025) Starlight",1399,"src/assets/image copy 25.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 26.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">
              MacBook Air (2025) Black
            </h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>13/15 inch</li>
              <li>10-Core CPU</li>
              <li>10-Core GPU</li>
              <li>16GB Unified Memory</li>
              <li>256GB SSD Storage¹</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              Form $1,199
            </h1>
            <div className="text-center">
              <button
                  onClick={() => AddToCard(" MacBook Air (2025) Black",1399,"src/assets/image copy 26.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" className="flex  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 23.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2 ">
              MacBook Air (2025)Sky Blue
            </h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>13/15 inch</li>
              <li>10-Core CPU</li>
              <li>10-Core GPU</li>
              <li>16GB/24GB Unified Memory</li>
              <li>512GB SSD Storage¹</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              Form $1,399
            </h1>
            <div className="text-center">
              <button
                  onClick={() => AddToCard(" MacBook Air (2025)Sky Blue",1399,"src/assets/image copy 23.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 24.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">
              MacBook Air (2025) Silver
            </h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>13/15 inch</li>
              <li>10-Core CPU</li>
              <li>10-Core GPU</li>
              <li>16GB/24GB Unified Memory</li>
              <li>512GB SSD Storage¹</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              Form $1,399
            </h1>
            <div className="text-center">
              <button
                  onClick={() => AddToCard("MacBook Air (2025) Silver",1399,"src/assets/image copy 24.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 25.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">
              MacBook Air (2025) Starlight
            </h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>13/15 inch</li>
              <li>10-Core CPU</li>
              <li>10-Core GPU</li>
              <li>16GB/24GB Unified Memory</li>
              <li>512GB SSD Storage¹</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              Form $1,399
            </h1>
            <div className="text-center">
              <button
                  onClick={() => AddToCard("MacBook Air (2025) Starlight",1399,"src/assets/image copy 25.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[450px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 26.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">
              MacBook Air (2025) Black
            </h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>13/15 inch</li>
              <li>10-Core CPU</li>
              <li>10-Core GPU</li>
              <li>16GB/24GB Unified Memory</li>
              <li>512GB SSD Storage¹</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              Form $1,399
            </h1>
            <div className="text-center">
              <button
                 onClick={() => AddToCard("MacBook Air (2025) Black",1199,"src/assets/image copy 26.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Laptop;
