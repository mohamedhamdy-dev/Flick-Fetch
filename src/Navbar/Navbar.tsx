// import { useState } from "react";
// import SVG from "./SVG";
// import { Link, useNavigate, NavLink } from "react-router";
// import { motion } from "motion/react";
// import { FaListAlt } from "react-icons/fa";

// function Navbar() {
//   const [searchText, setSearchText] = useState("");
//   const [isFocused, setIsFocused] = useState(false);
//   const navigate = useNavigate();
//   const handleKeyDown = (event: React.KeyboardEvent) => {
//     if (event.key === "Enter") {
//       navigate(`show?q=${searchText}`);
//     }
//   };

//   return (
//     <div className="xsss:gap-6 mb-6 grid grid-cols-2 gap-x-2 gap-y-6 rounded-lg bg-gradient-to-r from-[#000851] to-[#1CB5E0] px-2 py-4 text-white lg:grid-cols-3 xl:px-10 2xl:px-20">
//       <Link
//         className="col-start-1 row-start-1 flex items-center gap-1"
//         to={"/"}
//       >
//         <SVG />
//         <h1 className="xsss:text-xl text-lg text-nowrap lg:text-3xl">
//           Flick Fetch
//         </h1>
//       </Link>
//       <div className="col-span-2 col-start-1 row-start-2 flex items-center justify-center md:row-start-1 lg:col-span-1 lg:col-start-2">
//         <motion.input
//           onFocus={() => {
//             setIsFocused(true);
//           }}
//           onBlur={() => setIsFocused(false)}
//           animate={isFocused ? { scale: 1.1 } : { scale: 1 }}
//           type="text"
//           placeholder="Search"
//           className="xsss:px-4 xss:p-2 xss:w-60 rounded-l-full bg-white px-3 py-1 pb-1.5 text-gray-950 outline-none sm:w-[300px] sm:px-5"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           onKeyDown={handleKeyDown}
//         />

//         <Link
//           className="xss:h-10 xss:w-20 h-8 w-14 cursor-pointer"
//           to={`show?q=${searchText}`}
//         >
//           <motion.svg
//             initial={{ backgroundColor: "#314158" }}
//             animate={isFocused ? { scale: 1.1 } : { scale: 1 }}
//             whileHover={{
//               backgroundColor: "#000851",
//               transition: {
//                 duration: 0.3,
//               },
//             }}
//             stroke="currentColor"
//             fill="currentColor"
//             strokeWidth="0"
//             version="1.1"
//             id="search"
//             x="0px"
//             y="0px"
//             viewBox="0 0 24 24"
//             className="z-10 block size-full overflow-hidden rounded-r-full bg-slate-700 py-1"
//             height="1em"
//             width="1em"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <g>
//               <path
//                 d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
//                 c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
//                 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
//                 z"
//               ></path>
//             </g>
//           </motion.svg>
//         </Link>
//       </div>
//       <NavLink
//         to="./watch-list"
//         className="col-start-2 row-start-1 ml-auto flex w-fit cursor-pointer items-center justify-end gap-2 antialiased duration-100 hover:scale-120 lg:col-start-3"
//       >
//         <FaListAlt className="size-8" /> <span>Watch List</span>
//       </NavLink>
//     </div>
//   );
// }

// export default Navbar;

// import { useState } from "react";
// import SVG from "./SVG";
// import { Link, useNavigate, NavLink } from "react-router";
// import { FaListAlt } from "react-icons/fa";

// function Navbar() {
//   const [searchText, setSearchText] = useState("");
//   const navigate = useNavigate();

//   const handleKeyDown = (event: React.KeyboardEvent) => {
//     if (event.key === "Enter") {
//       navigate(`show?q=${searchText}`);
//     }
//   };

//   return (
//     <div className="xsss:gap-6 mb-6 grid grid-cols-2 gap-x-2 gap-y-6 rounded-lg bg-gradient-to-r from-[#000851] to-[#1CB5E0] px-2 py-4 text-white lg:grid-cols-3 xl:px-10 2xl:px-20">
//       <Link
//         className="col-start-1 row-start-1 flex items-center gap-1"
//         to={"/"}
//       >
//         <SVG />
//         <h1 className="xsss:text-xl text-lg text-nowrap lg:text-3xl">
//           Flick Fetch
//         </h1>
//       </Link>
//       <div className="col-span-2 col-start-1 row-start-2 flex items-center justify-center md:row-start-1 lg:col-span-1 lg:col-start-2">
//         <input
//           type="text"
//           placeholder="Search"
//           className="xsss:px-4 xss:p-2 xss:w-60 rounded-l-full bg-white px-3 py-1 pb-1.5 text-gray-950 outline-none sm:w-[300px] sm:px-5"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           onKeyDown={handleKeyDown}
//         />

//         <Link
//           className="xss:h-10 xss:w-20 h-8 w-14 cursor-pointer"
//           to={`show?q=${searchText}`}
//         >
//           <svg
//             stroke="currentColor"
//             fill="currentColor"
//             strokeWidth="0"
//             version="1.1"
//             id="search"
//             x="0px"
//             y="0px"
//             viewBox="0 0 24 24"
//             className="z-10 block size-full overflow-hidden rounded-r-full bg-slate-700 py-1"
//             height="1em"
//             width="1em"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <g>
//               <path
//                 d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
//                 c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
//                 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
//                 z"
//               ></path>
//             </g>
//           </svg>
//         </Link>
//       </div>
//       <NavLink
//         to="./watch-list"
//         className="col-start-2 row-start-1 ml-auto flex w-fit cursor-pointer items-center justify-end gap-2 antialiased duration-100 hover:scale-120 lg:col-start-3"
//       >
//         <FaListAlt className="size-8" /> <span>Watch List</span>
//       </NavLink>
//     </div>
//   );
// }

// export default Navbar;

// import { useState } from "react";
// import SVG from "./SVG";
// import { Link, useNavigate, NavLink } from "react-router";
// import { FaListAlt } from "react-icons/fa";

// function Navbar() {
//   const [searchText, setSearchText] = useState("");
//   const navigate = useNavigate();

//   const handleKeyDown = (event: React.KeyboardEvent) => {
//     if (event.key === "Enter") {
//       navigate(`show?q=${searchText}`);
//     }
//   };

//   return (
//     <div className="xsss:gap-6 mb-6 grid grid-cols-2 gap-x-2 gap-y-6 rounded-lg bg-gradient-to-r from-[#000851] to-[#1CB5E0] px-2 py-4 text-white lg:grid-cols-3 xl:px-10 2xl:px-20">
//       <Link
//         className="col-start-1 row-start-1 flex items-center gap-1"
//         to={"/"}
//       >
//         <SVG />
//         <h1 className="xsss:text-xl text-lg text-nowrap lg:text-3xl">
//           Flick Fetch
//         </h1>
//       </Link>
//       <div className="col-span-2 col-start-1 row-start-2 flex items-center justify-center md:row-start-1 lg:col-span-1 lg:col-start-2">
//         <input
//           type="text"
//           placeholder="Search"
//           className="xsss:px-4 xss:p-2 xss:w-60 rounded-l-full bg-white px-3 py-1 pb-1.5 text-gray-950 transition-all duration-300 ease-in-out outline-none focus:scale-[1.03] focus:ring-2 focus:shadow-lg focus:ring-blue-400 sm:w-[300px] sm:px-5"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           onKeyDown={handleKeyDown}
//         />

//         <Link
//           className="xss:h-10 xss:w-20 h-8 w-14 cursor-pointer transition-transform duration-150 active:scale-90"
//           to={`show?q=${searchText}`}
//         >
//           <svg
//             stroke="currentColor"
//             fill="currentColor"
//             strokeWidth="0"
//             version="1.1"
//             id="search"
//             x="0px"
//             y="0px"
//             viewBox="0 0 24 24"
//             className="z-10 block size-full overflow-hidden rounded-r-full bg-slate-700 py-1"
//             height="1em"
//             width="1em"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <g>
//               <path
//                 d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
//                 c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
//                 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
//                 z"
//               ></path>
//             </g>
//           </svg>
//         </Link>
//       </div>
//       <NavLink
//         to="./watch-list"
//         className="col-start-2 row-start-1 ml-auto flex w-fit cursor-pointer items-center justify-end gap-2 antialiased duration-100 hover:scale-120 lg:col-start-3"
//       >
//         <FaListAlt className="size-8" /> <span>Watch List</span>
//       </NavLink>
//     </div>
//   );
// }

// export default Navbar;

// import { useState } from "react";
// import SVG from "./SVG";
// import { Link, useNavigate, NavLink } from "react-router";
// import { FaListAlt } from "react-icons/fa";
// import { motion } from "framer-motion";

// function Navbar() {
//   const [searchText, setSearchText] = useState("");
//   const navigate = useNavigate();

//   const handleKeyDown = (event: React.KeyboardEvent) => {
//     if (event.key === "Enter") {
//       navigate(`show?q=${searchText}`);
//     }
//   };

//   return (
//     <div className="xsss:gap-6 mb-6 grid grid-cols-2 gap-x-2 gap-y-6 rounded-lg bg-gradient-to-r from-[#000851] to-[#1CB5E0] px-2 py-4 text-white lg:grid-cols-3 xl:px-10 2xl:px-20">
//       {/* Logo */}
//       <Link
//         className="col-start-1 row-start-1 flex items-center gap-1"
//         to={"/"}
//       >
//         <SVG />
//         <h1 className="xsss:text-xl text-lg text-nowrap lg:text-3xl">
//           Flick Fetch
//         </h1>
//       </Link>

//       {/* Search Bar */}
//       <div className="col-span-2 col-start-1 row-start-2 flex items-center justify-center md:row-start-1 lg:col-span-1 lg:col-start-2">
//         {/* Animated Input */}
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           onKeyDown={handleKeyDown}
//           className="xsss:px-4 xss:p-2 xss:w-60 rounded-l-full bg-white px-3 py-1 pb-1.5 text-gray-950 outline-none focus:shadow-[0_0_12px_rgba(56,189,248,0.6)] sm:w-[300px] sm:px-5"
//         />

//         {/* Animated Search Button */}
//         <Link to={`show?q=${searchText}`}>
//           <div className="xss:h-10 xss:w-20 h-8 w-14 cursor-pointer">
//             <svg
//               stroke="currentColor"
//               fill="currentColor"
//               strokeWidth="0"
//               viewBox="0 0 24 24"
//               className="z-10 block size-full overflow-hidden rounded-r-full bg-slate-700 py-1 duration-300 hover:bg-slate-600"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g>
//                 <path
//                   d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76
//                   c1.27-1.41,2.04-3.27,2.04-5.31c0-4.39-3.57-7.96-7.96-7.96
//                   s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96
//                   c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
//                   M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96
//                   c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96
//                   C7.24,17.98,4.11,14.86,4.11,11.02z"
//                 ></path>
//               </g>
//             </svg>
//           </div>
//         </Link>
//       </div>

//       {/* Watchlist */}
//       <NavLink
//         to="./watch-list"
//         className="col-start-2 row-start-1 ml-auto flex w-fit cursor-pointer items-center justify-end gap-2 antialiased duration-100 hover:scale-120 lg:col-start-3"
//       >
//         <FaListAlt className="size-8" /> <span>Watch List</span>
//       </NavLink>
//     </div>
//   );
// }

// export default Navbar;

import { useState } from "react";
import SVG from "./SVG";
import { Link, useNavigate, NavLink } from "react-router";
import { FaListAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      navigate(`show?q=${searchText}`);
    }
  };

  return (
    <div className="xsss:gap-6 mb-6 grid grid-cols-2 gap-x-2 gap-y-6 rounded-lg bg-gradient-to-r from-[#000851] to-[#1CB5E0] px-2 py-4 text-white lg:grid-cols-3 xl:px-10 2xl:px-20">
      {/* Logo */}
      <Link
        className="col-start-1 row-start-1 flex items-center gap-1"
        to={"/"}
      >
        <SVG />
        <h1 className="xsss:text-xl text-lg text-nowrap lg:text-3xl">
          Flick Fetch
        </h1>
      </Link>

      {/* Search Bar */}
      {/* <div className="col-span-2 col-start-1 row-start-2 flex items-center justify-center md:row-start-1 lg:col-span-1 lg:col-start-2"> */}
      <div className="col-span-2 col-start-1 row-start-2 flex items-center justify-center gap-2 md:row-start-1 lg:col-span-1 lg:col-start-2">
        {/* Animated Input */}
        <motion.input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
          whileFocus={{
            scale: 1.02,
            boxShadow: "0px 0px 12px rgba(56, 189, 248, 0.6)",
          }}
          transition={{ type: "spring", stiffness: 250, damping: 15 }}
          // className="xsss:px-4 xss:p-2 xss:w-60 rounded-l-full bg-white px-3 py-1 pb-1.5 text-gray-950 outline-none sm:w-[300px] sm:px-5"
          // className="xsss:px-4 xss:p-2 xss:w-60 rounded-full bg-white px-3 py-1 pb-1.5 text-gray-950 outline-none sm:w-[300px] sm:px-5"
          className="xsss:px-4 xss:p-2 xss:w-60 rounded-full bg-white px-3 py-1 pb-1.5 text-gray-950 outline-none sm:w-[300px] sm:px-5"
        />

        {/* Animated Search Button */}
        <Link to={`show?q=${searchText}`}>
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.8, rotate: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            // className="xss:h-10 xss:w-20 h-8 w-14 cursor-pointer"
            className="xss:h-10 xss:w-20 h-8 w-14 cursor-pointer"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              // className="z-10 block size-full overflow-hidden rounded-r-full bg-slate-700 py-1"
              className="z-10 block size-full overflow-hidden rounded-full bg-slate-700 py-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76
                  c1.27-1.41,2.04-3.27,2.04-5.31c0-4.39-3.57-7.96-7.96-7.96
                  s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96
                  c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
                  M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96
                  c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96
                  C7.24,17.98,4.11,14.86,4.11,11.02z"
                ></path>
              </g>
            </svg>
          </motion.div>
        </Link>
      </div>

      {/* Watchlist */}
      <NavLink
        to="./watch-list"
        className="col-start-2 row-start-1 ml-auto flex w-fit cursor-pointer items-center justify-end gap-2 antialiased duration-100 hover:scale-120 lg:col-start-3"
      >
        <FaListAlt className="size-8" /> <span>Watch List</span>
      </NavLink>
    </div>
  );
}

export default Navbar;
