// import React, { useRef, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { images } from "../constants";
// import UserProfileButton from "../components/UserProfileButton";

// const Sidebar = () => {
//   const sideBarRef = useRef(null);
//   const [menuIsShown, setMenuIsShown] = useState(false);
//   const [sideBarWidth, setSideBarWidth] = useState(0);

//   const toggleMenuHandler = () => {
//     setMenuIsShown((prevState) => {
//       return !prevState;
//     });
//   };

//   useEffect(() => {
//     setSideBarWidth(sideBarRef.current.clientWidth);
//   }, []);

//   return (
//     <>
//       <div
//         ref={sideBarRef}
//         className="sticky top-0 z-30 lg:h-screen"
//       >
//         <div className="flex flex-row items-center justify-between w-full h-full p-5 lg:flex-col">
//           <div className="flex items-center space-x-4 lg:space-x-0">
//             <Link to="/">
//               <img className="h-auto bg-black w-14 " src={images.logo} alt="logo" />
//             </Link>
//             <div className="flex items-center lg:hidden">
//               <UserProfileButton />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
