import React from "react";
import { Link } from "react-router-dom";

function Register(){
  function CreatAccount(){
    let c = document.getElementById("Username").value;
  let d = document.getElementById("Email").value;
  let e = document.getElementById("Password").value;

  if (c === "" || d === "") {
    alert("Don't have Information!");
  } else if (e.length < 8) {
    alert("Weak Password");
  } else {
    alert("Login Success!");
  }
  }
  return (
    <div className="w-full h-[728px] bg-gray-200 flex justify-center">
      <div className="container-both flex justify-between bg-white md:rounded-2xl md:shadow-2xl md:w-[1000px] w-[400px] mt-25  h-[600px]">
        <div className="hidden md:flex container-left-register ">
         <div className="left w-[400px]">
           <h1 className="text-3xl font-bold text-sky-400 text-center pt-10">
            Hello Welcome Back!
          </h1>
          <img
            src="src/assets/image copy 47.png"
            alt=""
            className="w-[450px] h-[450px] mt-10"
          />
         </div>
        </div>
        <div className=" container-right-register md:rounded-2xl bg-black w-[500px] h-[600px]">
          <h1 className="text-sky-400 text-3xl text-center font-bold  pt-10">
            Create an Account
          </h1>
          <div className="flex flex-col px-10 ">
            <label htmlFor="name" className="text-white pt-7 pb-3 ">
              Fullname
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="Username"
                placeholder="Enter name"
                className="w-full border border-white text-white p-2 pr-10 rounded bg-transparent"
              />
              <i className="fa-solid fa-user-pen text-white absolute right-3 top-1/2 -translate-y-1/2"></i>
            </div>
            <label htmlFor="email" className="text-white pt-7 pb-3 ">
              Email
            </label>
            <div className="relative w-full">
              <input
                type="email"
                id="Email"
                placeholder="Enter email"
                className="w-full border border-white text-white p-2 pr-10 rounded bg-transparent"
              />
              <i className="fa-solid fa-envelope text-white absolute right-3 top-1/2 -translate-y-1/2"></i>
            </div>
            <label htmlFor="password" className="text-white pt-7 pb-3">
              Password
            </label>
            <div className="relative w-full">
              <input type="password"
              id="Password"
              placeholder="Enter password"
              className="w-full border border-white text-white p-2 pr-10 rounded bg-transparent" />
              <i class="fa-solid fa-lock text-white absolute right-3 top-3"></i>
            </div>
            <div className="py-5 flex gap-2">
              <input type="checkbox" className="w-[18px] " />
              <p className="text-white">I accept the <span className="text-sky-400">Terms and Conditions</span></p>
            </div>
            <button onClick={CreatAccount} className="w-[150px] h-[50px] bg-sky-600 text-white rounded transform hover:scale-105 ">Register</button>
            <p className="text-white pt-5">Already have an account? <a href="/login" className="text-sky-400">Login here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
