// import React from "react";
// import heroImage from "@/assets/hero-bg2.png";
// import heroImage1 from "@/assets/hero.png";

// // --- SVG Icon Components ---
// const CoffeeCupIcon = ({ className = "w-8 h-8" }) => (
//   <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//     <path d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.31 2.69 6 6 6h2c3.31 0 6-2.69 6-6V5c0-1.1-.9-2-2-2zm-1 6H13v-2h4.5v2zm-6.5 0H6.5v-2H11v2zm6.5-4H13V5h4.5v2zm-6.5-2v2H6.5V5H11zM20 8v4c0 3.31-2.69 6-6 6h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c4.42 0 8-3.58 8-8V8c0-.55-.45-1-1-1s-1 .45-1 1z" />
//   </svg>
// );

// const SearchIcon = ({ className = "w-5 h-5" }) => (
//   <svg className={className} viewBox="0 0 20 20" fill="currentColor">
//     <path
//       fillRule="evenodd"
//       d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//       clipRule="evenodd"
//     />
//   </svg>
// );

// const ArrowRightIcon = ({ className = "w-6 h-6" }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round">
//     <path d="M5 12h14M12 5l7 7-7 7" />
//   </svg>
// );

// const FacebookIcon = ({ className = "w-6 h-6" }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//     <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12z" />
//   </svg>
// );

// const InstagramIcon = ({ className = "w-6 h-6" }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.116 0-3.483.011-4.691.068-2.696.123-3.944 1.37-4.068 4.068-.057 1.207-.068 1.574-.068 4.691s.011 3.483.068 4.691c.124 2.698 1.372 3.945 4.068 4.068 1.207.057 1.574.068 4.691.068s3.483-.011 4.691-.068c2.697-.123 3.945-1.37 4.068-4.068.057-1.207.068-1.574.068-4.691s-.011-3.483-.068-4.691c-.123-2.697-1.371-3.945-4.068-4.068-1.207-.057-1.574-.068-4.691-.068zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.463a3.328 3.328 0 110-6.656 3.328 3.328 0 010 6.656zm5.708-7.79a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
//   </svg>
// );

// const TwitterIcon = ({ className = "w-6 h-6" }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//     <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 002.048-2.578 9.3 9.3 0 01-2.958 1.13 4.66 4.66 0 00-7.938 4.25 13.229 13.229 0 01-9.602-4.868c-.333.57-.523 1.234-.523 1.942 0 1.616.823 3.043 2.072 3.878a4.63 4.63 0 01-2.11-.583v.06a4.66 4.66 0 003.733 4.568 4.69 4.69 0 01-2.104.08 4.661 4.661 0 004.35 3.234 9.348 9.348 0 01-5.786 1.995c-.376 0-.747-.022-1.112-.065a13.175 13.175 0 007.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.602a9.454 9.454 0 002.323-2.41z" />
//   </svg>
// );

// const YouTubeIcon = ({ className = "w-6 h-6" }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//     <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//   </svg>
// );

// // --- HeroSection Component ---
// export default function HeroSection() {
//   const navItems = ["Coffee", "Tea", "Menu", "Order", "Contact"];

//   return (
//     <section className="min-h-screen bg-white text-stone-900 font-sans antialiased overflow-hidden">
//       <div className="flex flex-col lg:flex-row">
//         {/* Left Pane */}
//         <div className="w-full lg:w-[55%] xl:w-1/2 bg-white p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col min-h-screen">
//           {/* Header */}
//           <header className="flex items-center justify-between w-full flex-shrink-0">
//             <div className="flex items-center space-x-3">
//               <CoffeeCupIcon className="w-8 h-8 text-stone-900" />
//               <span className="text-2xl font-bold">Coffee Shop</span>
//             </div>
//             <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
//               {navItems.map((item) => (
//                 <a
//                   key={item}
//                   href="#"
//                   className="text-stone-600 hover:text-stone-900 transition-colors duration-300 font-medium">
//                   {item}
//                 </a>
//               ))}
//             </nav>
//           </header>

//           {/* Hero Text */}
//           <main className="flex-grow flex flex-col justify-center py-12 lg:py-0">
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-stone-800 leading-tight">
//               {/* <span className="font-cursive text-4xl md:text-5xl block mb-2 font-normal text-stone-700">
//                 Best coffee
//               </span> */}
//               One Drink. <br />
//               <span className="text-[#B45F06]">Every Day</span> <br />
//               <span className="text-[#B45F06] text-4xl">
//                 Endless Possibilities.
//               </span>
//             </h1>
//             <p className="mt-6 max-w-md text-stone-600 leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam.
//             </p>
//             <button className="mt-8 bg-stone-900 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-stone-800 transition-all duration-300 self-start">
//               Subscribe Now
//             </button>
//           </main>

//           {/* Footer */}
//           <footer className="w-full flex-shrink-0">
//             <div className="flex items-center space-x-4">
//               <img
//                 src={heroImage}
//                 alt="Iced Coffee"
//                 className="w-20 h-20 rounded-lg object-cover"
//               />
//               <div>
//                 <p className="text-stone-600 max-w-xs">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//                 <a
//                   href="#"
//                   className="group inline-flex items-center text-stone-900 font-bold mt-2">
//                   Learn More
//                   <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//                 </a>
//               </div>
//             </div>
//           </footer>
//         </div>

//         {/* Right Pane */}
//         <div className="w-full lg:w-[45%] xl:w-1/2 bg-[#C6A98F] relative min-h-[60vh] lg:min-h-screen">
//           {/* Search */}
//           <div className="absolute top-0 right-0 p-6 sm:p-8 md:p-12 lg:p-16 w-full lg:w-auto flex justify-end">
//             <div className="relative w-full max-w-xs">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full bg-white/20 border-2 border-white/50 rounded-full py-2 pl-4 pr-10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
//               />
//               <button className="absolute inset-y-0 right-0 flex items-center justify-center bg-white text-stone-900 rounded-full w-9 h-9 m-1.5 hover:bg-gray-200 transition-colors">
//                 <SearchIcon />
//               </button>
//             </div>
//           </div>

//           {/* Coffee Image */}
//           <div
//             className="
//   absolute top-1/2
//   left-1/2 -translate-x-1/2   // center on mobile
//   lg:left-auto lg:right-0 lg:translate-x-0  // right align on desktop
//   transform -translate-y-1/2
//   pointer-events-none
//   w-[80vw] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
// ">
//             <img
//               src={heroImage1}
//               alt="Cup of coffee with beans"
//               className="w-full h-auto drop-shadow-2xl"
//             />
//           </div>

//           {/* Social Links */}
//           <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 flex items-center space-x-3 text-white">
//             <a href="#" className="hover:opacity-80 transition-opacity">
//               <FacebookIcon className="w-5 h-5" />
//             </a>
//             <a href="#" className="hover:opacity-80 transition-opacity">
//               <InstagramIcon className="w-5 h-5" />
//             </a>
//             <a href="#" className="hover:opacity-80 transition-opacity">
//               <TwitterIcon className="w-5 h-5" />
//             </a>
//             <a href="#" className="hover:opacity-80 transition-opacity">
//               <YouTubeIcon className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import heroImage from "@/assets/hero-bg2.png";
import heroImage1 from "@/assets/hero.png";

// --- SVG Icon Components ---
const CoffeeCupIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.31 2.69 6 6 6h2c3.31 0 6-2.69 6-6V5c0-1.1-.9-2-2-2zm-1 6H13v-2h4.5v2zm-6.5 0H6.5v-2H11v2zm6.5-4H13V5h4.5v2zm-6.5-2v2H6.5V5H11zM20 8v4c0 3.31-2.69 6-6 6h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c4.42 0 8-3.58 8-8V8c0-.55-.45-1-1-1s-1 .45-1 1z" />
  </svg>
);

const SearchIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowRightIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const FacebookIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.116 0-3.483.011-4.691.068-2.696.123-3.944 1.37-4.068 4.068-.057 1.207-.068 1.574-.068 4.691s.011 3.483.068 4.691c.124 2.698 1.372 3.945 4.068 4.068 1.207.057 1.574.068 4.691.068s3.483-.011 4.691-.068c2.697-.123 3.945-1.37 4.068-4.068.057-1.207.068-1.574.068-4.691s-.011-3.483-.068-4.691c-.123-2.697-1.371-3.945-4.068-4.068-1.207-.057-1.574-.068-4.691-.068zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.463a3.328 3.328 0 110-6.656 3.328 3.328 0 010 6.656zm5.708-7.79a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
  </svg>
);

const TwitterIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 002.048-2.578 9.3 9.3 0 01-2.958 1.13 4.66 4.66 0 00-7.938 4.25 13.229 13.229 0 01-9.602-4.868c-.333.57-.523 1.234-.523 1.942 0 1.616.823 3.043 2.072 3.878a4.63 4.63 0 01-2.11-.583v.06a4.66 4.66 0 003.733 4.568 4.69 4.69 0 01-2.104.08 4.661 4.661 0 004.35 3.234 9.348 9.348 0 01-5.786 1.995c-.376 0-.747-.022-1.112-.065a13.175 13.175 0 007.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.602a9.454 9.454 0 002.323-2.41z" />
  </svg>
);

const YouTubeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// --- HeroSection Component ---
export default function HeroSection() {
  const navItems = ["Coffee", "Tea", "Menu", "Order", "Contact"];

  return (
    <section className="min-h-screen bg-white text-stone-900 font-sans antialiased overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left Pane */}
        <div className="w-full lg:w-[55%] xl:w-1/2 bg-white p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col min-h-screen">
          {/* Header */}
          <header className="flex items-center justify-between w-full flex-shrink-0">
            <div className="flex items-center space-x-3">
              <CoffeeCupIcon className="w-8 h-8 text-stone-900" />
              <span className="text-2xl font-bold">Coffee Shop</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-stone-600 hover:text-stone-900 transition-colors duration-300 font-medium">
                  {item}
                </a>
              ))}
            </nav>
          </header>

          {/* Hero Text */}
          <main className="flex-grow flex flex-col justify-center py-12 lg:py-0 max-w-xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-stone-800 leading-tight mb-6 mt-6">
              One Drink. <br />
              <span className="text-[#B45F06]">Every Day</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#B45F06] mb-6">
              Endless Possibilities
            </h2>
            <p className="text-stone-600 leading-relaxed mb-8 max-w-md">
              Join our premium cafe subscription and enjoy one free drink daily
              from our curated partner cafes. Discover new flavors, book tables,
              and make every day delicious.
            </p>
            <button className="bg-stone-900 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-stone-800 transition-all duration-300 self-start">
              Subscribe Now
            </button>
          </main>

          {/* Footer */}
          <footer className="w-full flex-shrink-0 mt-12">
            <div className="flex items-center space-x-4">
              <img
                src={heroImage}
                alt="Iced Coffee"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <p className="text-stone-600 max-w-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center text-stone-900 font-bold mt-2">
                  Learn More
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </footer>
        </div>

        {/* Right Pane */}
        <div className="w-full lg:w-[45%] xl:w-1/2 bg-[#C6A98F] relative min-h-[60vh] lg:min-h-screen">
          {/* Search */}
          <div className="absolute top-0 right-0 p-6 sm:p-8 md:p-12 lg:p-16 w-full lg:w-auto flex justify-end">
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-white/20 border border-white/40 rounded-full py-2 pl-4 pr-10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="absolute inset-y-0 right-0 flex items-center justify-center bg-white text-stone-900 rounded-full w-9 h-9 m-1 hover:bg-gray-200 transition-colors">
                <SearchIcon />
              </button>
            </div>
          </div>

          {/* Coffee Image */}
          <div
            className="
              absolute top-1/2 
              left-1/2 -translate-x-1/2
              lg:left-auto lg:right-0 lg:translate-x-0
              transform -translate-y-1/2
              pointer-events-none 
              w-[80vw] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <img
              src={heroImage1}
              alt="Cup of coffee with beans"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* Social Links */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 flex items-center space-x-3 text-white">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <YouTubeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
