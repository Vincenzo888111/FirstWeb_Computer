import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-sky-950"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -right-40 w-96 h-96 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left space-y-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
              Power on your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                Productivity
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Discover a world of high-performance computing. From cutting-edge
              laptops to custom-built desktops, find the perfect tool to fuel
              your creativity and success.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link
                to="/#laptop"
                className="group relative px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 rounded-2xl overflow-hidden shadow-2xl shadow-sky-600/50 hover:shadow-sky-500/70 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                Explore Products
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition"></i>
              </Link>

              <Link
                to="/#desktop"
                className="px-10 py-5 text-lg font-bold text-white border-2 border-sky-500 rounded-2xl backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:border-sky-400 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <i className="fa-solid fa-computer"></i>
                Build Your PC
              </Link>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-10 bg-sky-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="relative animate-float">
                <img
                  src="https://scontent.fpnh5-5.fna.fbcdn.net/v/t39.30808-1/540088015_1260118259225126_6578331105253984422_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHOb7LnJz3K76cGB2CbQAMsqb7rV4_XQuGpvutXj9dC4ReEaQvm8ydE70gjGMpF0s3_QDWNoSXBg85gIPJVYHAq&_nc_ohc=Pw68mfP30u4Q7kNvwF1AAYi&_nc_oc=AdmbgipAymTOFUkCZGICscxbYnKI4eR6G1Wn4uwlaqQWPCzsOSqn4LE97HR7g4NM44Y&_nc_zt=24&_nc_ht=scontent.fpnh5-5.fna&_nc_gid=HZ5GoLOazmpHohEsL4SFFw&oh=00_Afk1JTtZQUa8myb55KzZcTGmYunXUlpJ5roETLKXex52Ow&oe=69372935"
                  alt="Computer Shop"
                  className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full object-cover border-8 border-sky-500/30 shadow-2xl ring-4 ring-sky-400/20"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold px-6 py-3 rounded-full shadow-2xl animate-pulse text-sm">
                Open Today
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed: Normal <style> tag instead of <style jsx> */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-25px); }
          }
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          .delay-2000 { animation-delay: 2s; }
          .delay-4000 { animation-delay: 4s; }
        `}
      </style>
    </section>
  );
}

export default Home;
