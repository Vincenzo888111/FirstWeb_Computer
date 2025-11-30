import React from "react";

function Desktops({ AddToCard }) {
  return (
    <div id="desktop" className="w-full px-[20px]">
      <p className="mx-5">
        <hr />
      </p>
            <div className="w-full h-[100px] mt-25 px-5">
        <hr />
        <h1 className="text-black font-bold text-4xl ">Desktops Shop</h1>
        <p className="text-[18px] mt-2">
          A desktop computer is a personal computer designed to stay in one place, usually on a desk.
        </p>
      </div>
      <div className="text-6xl text-black text-center my-10 ">
        iMac<span className="text-sky-400">Series</span>
      </div>
      <div className="text-[25px] pl-5 font-bold ">iMac</div>
      <div data-aos="fade-down" className="flex  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="w-[340px] h-[500px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 27.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2 mt-7 ">
              iMac (2025)Blue
            </h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>24-inch 4.5K Retina display²</li>
              <li>10-Core CPU</li>
              <li>10-Core GPU</li>
              <li>16GB Unified Memory</li>
              <li>256GB SSD Storage¹</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              Form $1,299
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("iMac (2025)Blue",1299,"src/assets/image copy 27.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[500px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 28.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">iMac(2025)Purple</h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>24-inch 4.5K Retina display²</li>
              <li>10-Core CPU</li>
              <li>10-Core GPU</li>
              <li>16GB Unified Memory</li>
              <li>256GB SSD Storage¹</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              Form $1,299
            </h1>
            <div className="text-center">
              <button
                 onClick={() => AddToCard("iMac (2025)Purple",1299,"src/assets/image copy 28.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[500px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 29.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">iMac (2025) Red</h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>24-inch 4.5K Retina display²</li>
              <li>10-Core CPU</li>
              <li>10-Core GPU</li>
              <li>16GB Unified Memory</li>
              <li>256GB SSD Storage¹</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              Form $1,299
            </h1>
            <div className="text-center">
              <button
                 onClick={() => AddToCard("iMac (2025)Red",1299,"src/assets/image copy 29.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[500px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 30.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2 mt-4">
              iMac (2025) Orange
            </h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>24-inch 4.5K Retina display²</li>
              <li>10-Core CPU</li>
              <li>10-Core GPU</li>
              <li>16GB Unified Memory</li>
              <li>256GB SSD Storage¹</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              Form $1,299
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("iMac (2025)Orange",1299,"src/assets/image copy 30.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" className="flex   ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="w-[340px] h-[500px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 31.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2 ">iMac (2025) Yellow</h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>24-inch 4.5K Retina display²</li>
              <li>10-Core CPU</li>
              <li>10-Core GPU</li>
              <li>16GB/24GB Unified Memory</li>
              <li>512GB SSD Storage¹</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              Form $1,299
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("iMac (2025)Yellow",1299,"src/assets/image copy 31.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[500px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 32.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">iMac (2025) Green</h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>24-inch 4.5K Retina display²</li>
              <li>10-Core CPU</li>
              <li>10-Core GPU</li>
              <li>16GB/24GB Unified Memory</li>
              <li>512GB SSD Storage¹</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              Form $1,299
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("iMac (2025)Green",1299,"src/assets/image copy 32.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div className="w-[340px] h-[500px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 33.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">iMac (2025) Gray</h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>24-inch 4.5K Retina display²</li>
              <li>10-Core CPU</li>
              <li>10-Core GPU</li>
              <li>16GB/24GB Unified Memory</li>
              <li>512GB SSD Storage¹</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              Form $1,299
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("iMac (2025)Gray",1299,"src/assets/image copy 33.png")}
                className="w-64 h-12 mt-5 rounded-3xl bg-sky-400 text-black  transform hover:scale-105 transition hover:text-white shadow-md  hover:shadow-2xl hover:shadow-gray-600"
              >
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          <div className="w-[340px] h-[500px] flex-col justify-between transform hover:scale-105  transition   bg-white rounded-2xl shadow-md shadow-gray-500 my-10">
            <img
              src="src/assets/image copy 34.png"
              className=" m-auto py-5 w-[200px]"
              alt=""
            />
            <h1 className="text-center font-bold my-2">iMac (2025) Black</h1>
            <ul className="list-disc text-[15px] mx-5">
              <li>24-inch 4.5K Retina display²</li>
              <li>10-Core CPU</li>
              <li>10-Core GPU</li>
              <li>16GB/24GB Unified Memory</li>
              <li>512GB SSD Storage¹</li>
            </ul>
            <h1 className="text-[18px] font-bold text-red-500 text-center">
              Form $1,299
            </h1>
            <div className="text-center">
              <button
                onClick={() => AddToCard("iMac (2025)Black",1299,"src/assets/image copy 34.png")}
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

export default Desktops;
