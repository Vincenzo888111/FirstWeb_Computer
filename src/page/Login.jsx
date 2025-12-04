import React from "react";  

function Login() {
  function Signin() {
    const a = document.getElementById("Email").value;
    const b = document.getElementById("Password").value;

    if (a === "" || b === "") {
      alert("Not Success");
    } else {
      alert("Have Information to Success");
    }
  }   // <-- ❗ THIS BRACKET WAS MISSING

  return (
    <div className="flex min-h-screen pt-[100px] flex-col md:flex-row">
      {/* Left side (sky blue) */}
      <div
        className="hidden md:flex w-1/2  items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('src/assets/image copy 47.png')",
        }}
      >
        <h2 className="text-white text-3xl font-bold"></h2>
      </div>

      {/* Right side (white) */}
      <div className="w-full md:w-1/2 bg-gray-200 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h3 className="text-4xl font-bold mb-4 text-center">Login</h3>

          <input
            type="email"
            placeholder="Email"
            id="Email"
            className="w-full border p-2 mb-6 rounded"
          />
          <input
            type="password"
            id="Password"
            placeholder="Password"
            className="w-full border p-2 mb-3 rounded"
          />

          {/* Checkbox + Forgot Password */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <input id="remember" type="checkbox" className="mr-2" />
              <label htmlFor="remember" className="text-gray-700 text-sm">
                Remember me
              </label>
            </div>
            <a
              href="#forgot"
              className="text-sky-500 text-sm hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button onClick={Signin} className="w-full bg-sky-500 text-white p-2 rounded hover:bg-sky-600 transform hover:scale-102 shadow-lg transition duration-300">
            Sign In
          </button>

          <div className="flex mt-5 justify-between gap-2">
            <button className="w-full bg-sky-500 text-white p-2 rounded hover:bg-sky-600 transform hover:scale-102 shadow-lg transition duration-300">
              <i className="fa-brands fa-facebook mr-2"></i>Facebook
            </button>
            <button className="w-full bg-sky-500 text-white p-2 rounded hover:bg-sky-600 transform hover:scale-102 shadow-lg transition duration-300">
              <i className="fa-brands fa-google mr-2"></i>Google
            </button>
          </div>
          <h1 className="text-gray-400 text-center my-5">Don't have an account? <a href="/register" className="text-gray-600">Create an Account</a></h1>
          <div className="flex justify-center gap-3 mt-5">
            <a href="#" className="facebook ">
              <i className="fa-brands fa-facebook text-4xl text-sky-700 "></i>
            </a>
            <a href="#" className="X">
              <i className="fa-brands fa-x-twitter text-4xl text-black"></i>
            </a>
            <a href="#" className="tiktok">
              <i className="fa-brands fa-tiktok text-4xl text-black"></i>
            </a>
            <a href="#" className="telegram">
              <i className="fa-brands fa-telegram text-4xl text-sky-700"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
