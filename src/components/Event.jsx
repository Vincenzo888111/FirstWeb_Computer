// import React, { useState } from "react";

// function Event() {
//   const Click = () => {
//     alert("This onclick event...");
//   };

//   const [text, setText] = useState("");

//   const Change = (event) => {
//     setText(event.target.value);
//   };

//   function MouseHover() {
//     alert("This hover event");
//   }

//   const [email, setEmail] = useState("");

//   const Submit = (event) => {
//     event.preventDefault();
//     alert(`Submit with ${email}`);
//   };

//   return (
//     <div className="h-100 flex flex-col items-center gap-6 mt-10">
//       {/* Click Event */}
//       <button
//         onClick={Click}
//         className="border-2 px-5 py-2 rounded-3xl bg-amber-200 hover:bg-amber-300 transition"
//       >
//         OnClick
//       </button>

//       {/* OnChange Event */}
//       <div className="flex flex-col items-center gap-2">
//         <p className="text-lg font-medium">{text}</p>
//         <input
//           type="text"
//           value={text}
//           onChange={Change}
//           placeholder="Enter text"
//           className="border-2 px-3 py-1 rounded-md focus:outline-none focus:border-amber-400"
//         />
//       </div>

//       {/* Mouse Hover Event */}
//       <button
//         onMouseOver={MouseHover}
//         className="border-2 px-5 py-2 rounded-3xl bg-green-200 hover:bg-green-300 transition"
//       >
//         Hover
//       </button>

//       {/* Form Submit Event */}
//       <form onSubmit={Submit} className="flex flex-col items-center gap-3">
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           className="border px-3 py-1 rounded-md focus:outline-none focus:border-green-400"
//         />
//         <button
//           type="submit"
//           className="border-2 px-5 py-2 rounded-3xl bg-blue-200 hover:bg-blue-300 transition"
//         >
//           Click to Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Event;
