import React from "react";

function Footer() {
  return (
    <div>
      <div className="w-full h-[700px] bg-black">
        <h1 className="text-6xl text-sky-400 font-bold text-center pt-20">
          Computer.
        </h1>
        <p className="text-gray-400 text-center mt-5">
          My Mobile Shop specializes in offering a broad selection of products,
          including smartphones, tablets, and accessories <br /> from leading
          brands such as Apple, Samsung and others more.
        </p>
        <div className="px-10 py-10 text-gray-400">
          <hr />
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-6 pl-20 ">
          {/* Location 1 */}
          <div className="flex flex-col space-y-3 p-4">
            <h1 className="text-xl font-bold text-gray-100">
              Computer.Phsa Deum Kor
            </h1>
            <a
              href="#"
              className="text-gray-300 hover:text-sky-400 flex items-start pr-1"
            >
              <i className="fa-solid fa-location-dot pr-3 pt-1"></i>
              ផ្ទះលេខ298Eo,មហាវីថី ម៉ៅសេងទុង (St.245) ខាងលិចចេនឡាផ្សារដើមគរ
            </a>
            <ul className="text-gray-400 ">
              <li><a href="#" className="hover:text-sky-400"><i class="fa-solid fa-phone pr-5"></i>Smart: 087 77 49 11</a></li>
              <li><a href="#"className="pl-5 hover:text-sky-400"> Cellcard: 012 77 49 11</a></li>
              <li><a href="#"className="pl-5 hover:text-sky-400"> Metfone: 097 77 49 11</a></li>
            </ul>
          </div>

          {/* Location 2 */}
          <div className="flex flex-col space-y-3 p-4">
            <h1 className="text-xl font-bold text-gray-100">Computer.271</h1>
            <a
              href="#"
              className="text-gray-300 hover:text-sky-400 flex items-start"
            >
              <i className="fa-solid fa-location-dot pr-3 pt-1"></i>
              ផ្ទះលេខ 598 g/ 271 (ក្បែរ KTV Royal & KTV Lavegas)
            </a>
            <ul className="text-gray-400 ">
              <li><a href="#" className="hover:text-sky-400"><i class="fa-solid fa-phone pr-5"></i>Smart: 087 77 49 11</a></li>
              <li><a href="#"className="pl-5 hover:text-sky-400"> Cellcard: 012 77 49 11</a></li>
              <li><a href="#"className="pl-5 hover:text-sky-400"> Metfone: 097 77 49 11</a></li>
            </ul>
          </div>

          {/* Location 3 */}
          <div className="flex flex-col space-y-3 p-4">
            <h1 className="text-xl font-bold text-gray-100">
              Computer.Phsar Depo
            </h1>
            <a
              href="#"
              className="text-gray-300 hover:text-sky-400 flex items-start "
            >
              <i className="fa-solid fa-location-dot pr-3 pt-1"></i>
              ផ្ទះលេខ 66Eo, មហាវីថី ម៉ៅសេងទុង (St. 215)
            </a>
            <ul className="text-gray-400 ">
              <li><a href="#" className="hover:text-sky-400"><i class="fa-solid fa-phone pr-5"></i>Smart: 087 77 49 11</a></li>
              <li><a href="#"className="pl-5 hover:text-sky-400"> Cellcard: 012 77 49 11</a></li>
              <li><a href="#"className="pl-5 hover:text-sky-400"> Metfone: 097 77 49 11</a></li>
            </ul>
          </div>
          <div className="flex flex-col space-y-3 p-4">
            <h1 className="text-2xl text-gray-100 font-bold">Contact with us</h1>
            <ul>
              <li><a href="#" className="text-gray-300 hover:text-sky-400"><i className="fa-brands fa-facebook-messenger pr-7"></i>Chat On Messenger</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400"><i className="fa-brands fa-telegram pr-7"></i>Chat On Telegram</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400"><i className="fa-brands fa-instagram pr-7"></i>Chat On Instagram</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400"><i class="fa-brands fa-x-twitter pr-7"></i>Chat On X</a></li>
              <li><a href="#">Follow Tik Tok</a></li>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex justify-center gap-5 md:mt-10 items-center pr-60">
          <h1 className="text-2xl text-gray-200">We accept payment</h1>
          <div className="w-[70px]  h-10 flex gap-5">
              <img src="src/assets/image copy 41.png" alt="" />
              <img src="src/assets/image copy 42.png" alt="" />
              <img src="src/assets/image copy 43.png" alt="" />
              <img src="src/assets/image copy 44.png" alt="" />
              <img src="src/assets/image copy 45.png" alt="" />
          </div>
        </div>
        <div className="text-gray-400 pt-10 pb-2 px-100 "><hr /></div>
        <p className="text-[15px] text-gray-300 text-center">Copyright © 2024 Computer Shop | Website by Developer <span className="text-sky-300"> Vincenzo<i class="fa-solid fa-face-grin-hearts"></i></span> </p>
      </div>
    </div>
  );
}

export default Footer;
