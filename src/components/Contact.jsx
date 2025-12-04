import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 500, // animation duration in ms
      once: true,     // animate only once
    });
  }, []);
    function Send(){
      let f = document.getElementById("username").value
      let g = document.getElementById("phonenumber").value
      let h = document.getElementById("message").value
      if(f===""|g===""|h===""){
        alert("Not Success!");
      }else{
        alert("Sent Success");
      }
    }
  return (
    <div id="contact">
      <hr />
      <div className="w-full min-h-[950px] bg-gray-100 mt-[70px]">
        <h1 className="text-6xl text-gray-700 text-center font-bold py-[70px]">
          Contact Us
        </h1>

        <div className="container-contact-both flex flex-wrap justify-evenly gap-10">
          {/* Left Container - Contact Details */}
          <div data-aos="fade-up" className="container-contact-left">
            <div className="w-[500px] bg-white rounded-2xl shadow-2xl shadow-gray-400 p-5">
              <h1 className="text-center text-2xl font-bold text-gray-600 pt-5">
                Our Details
              </h1>

              {/* Email */}
              <div className="flex flex-col mt-3 pl-5">
                <h1 className="font-bold text-[20px] text-gray-600 flex items-center">
                  <a href="#" className="text-blue-600 pr-2 text-2xl">
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                  Email Support
                </h1>
                <a href="mailto:kornvathanak@gmail.com" className="pl-10 text-gray-400">
                  kornvathanak@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col mt-3 pl-5">
                <h1 className="font-bold text-[20px] text-gray-600 flex items-center">
                  <a href="#" className="text-blue-600 pr-2 text-2xl">
                    <i className="fa-solid fa-phone"></i>
                  </a>
                  Sales & Phone Support
                </h1>
                <a href="tel:+88587774911" className="pl-10 text-gray-400">
                  +(885) 87 77 49 11
                </a>
              </div>

              {/* Address */}
              <div className="flex flex-col mt-3 pl-5">
                <h1 className="font-bold text-[20px] text-gray-600 flex items-center">
                  <a href="#" className="text-blue-600 pr-2 text-2xl">
                    <i className="fa-solid fa-location-dot"></i>
                  </a>
                  Address
                </h1>
                <span className="pl-10 text-gray-400">
                  Phnom Penh, Chroy Chong Va, 299st
                </span>
              </div>
            </div>
          </div>

          {/* Right Container - Contact Form */}
          <div data-aos="fade-left" className="container-contact-right w-[600px] bg-white rounded-2xl shadow-2xl p-5">
            <h1 className="text-center font-bold text-2xl text-gray-600 pt-5">
              Send Us a Message
            </h1>

            <div className="flex flex-col px-5 mt-5 gap-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="font-bold">
                  Your Name <span className="text-sky-400">*</span>
                </label>
                <input
                  id="username"
                  className="border border-gray-400 rounded-2xl w-full h-[40px] px-2 mt-2 transform hover:scale-102 shadow-md"
                  type="text"
                  placeholder="John Shon"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="font-bold">
                  Phone Number <span className="text-sky-400">*</span>
                </label>
                <input
                  id="phonenumber"
                  className="border border-gray-400 rounded-2xl w-full h-[40px] px-2 mt-2 transform hover:scale-102 shadow-md"
                  type="text"
                  placeholder="+(885) 123-456-789"
                />
              </div>

              {/* Model */}
              <div>
                <label htmlFor="model" className="font-bold">
                  Model <span className="text-sky-400">*</span>
                </label>
                <select
                  id="model"
                  className="border border-gray-400 rounded-2xl w-full h-[40px] px-2 mt-2 transform hover:scale-102 shadow-md"
                >
                  <option value="">Select Model</option>
                  <option value="model1">iPhone Series</option>
                  <option value="model2">ASUS TUFF Series</option>
                  <option value="model3">ROG Strix Series</option>
                  <option value="model4">Mac Series</option>
                  <option value="model5">iMac Series</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="font-bold">
                  Your Message <span className="text-sky-400">*</span>
                </label>
                <textarea
                  id="message"
                  className="border border-gray-400 rounded-2xl w-full h-[100px] px-3 py-2 mt-2 align-top transform hover:scale-102 shadow-md resize-none"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button onClick={Send} className="w-full h-[45px] rounded-2xl text-gray-100 font-bold text-[18px] transform hover:scale-102 shadow-md hover:shadow-gray-600 bg-sky-600 mt-5 flex items-center justify-center gap-2">
                Send Message <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
