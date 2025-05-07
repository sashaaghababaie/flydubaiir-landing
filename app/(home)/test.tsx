// ✅ Alternative 1: height = screen height - navbar height (always)
// You can do this using Tailwind + custom utility (CSS variable for navbar height):

// Step 1: Add a CSS variable for navbar height
// In your globals.css:

// css
// Copy
// Edit
// :root {
//   --navbar-height: 64px; /* or match your actual Tailwind class, like h-16 */
// }
// Step 2: Tailwind utility to apply height
// tsx
// Copy
// Edit
// <div
//   className="w-full relative"
//   style={{ height: `calc(100vh - var(--navbar-height))` }}
// >
//   <Image
//     src="/home/hero.png"
//     alt="hero"
//     fill
//     className="object-contain"
//     sizes="100vw"
//     priority
//   />
// </div>
// This makes the container always fill the screen height minus navbar, regardless of aspect ratio.

// ✅ Alternative 2: Only apply screen-navbar height if height < width
// This condition is not directly possible with CSS alone, but you can achieve it using React with a resize listener.

// Step 1: Use a custom hook to get window dimensions
// tsx
// Copy
// Edit
// import { useEffect, useState } from "react";

// function useWindowSize() {
//   const [size, setSize] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     const update = () => setSize({ width: window.innerWidth, height: window.innerHeight });
//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   return size;
// }
// Step 2: Apply conditional style
// tsx
// Copy
// Edit
// const HeroResponsive = () => {
//   const { width, height } = useWindowSize();
//   const navbarHeight = 64;
//   const isLandscape = width > height;

//   const dynamicHeight = isLandscape ? `calc(100vh - ${navbarHeight}px)` : "auto";

//   return (
//     <div className="w-full relative" style={{ height: dynamicHeight }}>
//       <Image
//         src="/home/hero.png"
//         alt="hero"
//         fill
//         className="object-contain"
//         sizes="100vw"
//         priority
//       />
//     </div>
//   );
// };
// ✅ Alternative 3: Height = screen-navbar on mobile view only
// This can be done purely with Tailwind + media queries using custom utility classes.

// Step 1: Use Tailwind’s @media utilities
// tsx
// Copy
// Edit
// <div
//   className="w-full relative h-auto sm:h-auto"
//   style={{ height: "calc(100vh - 64px)" }}
// >
//   <div className="sm:hidden block absolute inset-0">
//     <Image
//       src="/home/hero.png"
//       alt="hero"
//       fill
//       className="object-contain"
//       sizes="100vw"
//       priority
//     />
//   </div>

//   <div className="hidden sm:block relative aspect-[16/9] w-full">
//     <Image
//       src="/home/hero.png"
//       alt="hero"
//       fill
//       className="object-contain"
//       sizes="100vw"
//       priority
//     />
//   </div>
// </div>