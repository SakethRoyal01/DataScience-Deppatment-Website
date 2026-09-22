// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
//   useScroll,
// } from "framer-motion";
// import { useRef } from "react";

// const Hero = () => {
//   const heroRef = useRef<HTMLElement>(null);

//   /* =========================================================
//      SCROLL
//   ========================================================= */

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   const titleY = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["0px", "-140px"]
//   );

//   const titleScale = useTransform(
//     scrollYProgress,
//     [0, 0.8],
//     [1, 0.78]
//   );

//   const visualY = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["0px", "180px"]
//   );

//   const visualRotate = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, 12]
//   );

//   const scrollOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.2],
//     [1, 0]
//   );

//   /* =========================================================
//      MOUSE PARALLAX
//   ========================================================= */

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const smoothX = useSpring(mouseX, {
//     stiffness: 60,
//     damping: 20,
//   });

//   const smoothY = useSpring(mouseY, {
//     stiffness: 60,
//     damping: 20,
//   });

//   const visualX = useTransform(
//     smoothX,
//     [-1, 1],
//     [-25, 25]
//   );

//   const visualMouseY = useTransform(
//     smoothY,
//     [-1, 1],
//     [-20, 20]
//   );

//   const handleMouseMove = (
//     event: React.MouseEvent<HTMLElement>
//   ) => {
//     const rect =
//       event.currentTarget.getBoundingClientRect();

//     const x =
//       (event.clientX - rect.left) / rect.width;

//     const y =
//       (event.clientY - rect.top) / rect.height;

//     mouseX.set(x * 2 - 1);
//     mouseY.set(y * 2 - 1);
//   };

//   const handleMouseLeave = () => {
//     mouseX.set(0);
//     mouseY.set(0);
//   };

//   return (
//     <section
//       ref={heroRef}
//       id="home"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       className="
//         relative
//         min-h-screen
//         overflow-hidden
//         bg-[#C1E8FF]
//         text-[#021024]
//       "
//     >
//       {/* =====================================================
//           BACKGROUND
//       ====================================================== */}

//       <div className="absolute inset-0">

//         {/* Soft blue field */}

//         <div className="absolute inset-0 bg-[#C1E8FF]" />

//         {/* Large architectural blue shape */}

//         <motion.div
//           style={{
//             x: visualX,
//             y: visualMouseY,
//           }}
//           className="
//             absolute
//             -right-[12vw]
//             top-[8vh]
//             h-[72vh]
//             w-[48vw]
//             rounded-[48%_52%_45%_55%]
//             bg-[#7DA0CA]
//             opacity-80
//           "
//         />

//         {/* Deep blue shape */}

//         <motion.div
//           style={{
//             x: useTransform(
//               smoothX,
//               [-1, 1],
//               [15, -15]
//             ),
//             y: useTransform(
//               smoothY,
//               [-1, 1],
//               [10, -10]
//             ),
//           }}
//           className="
//             absolute
//             -right-[7vw]
//             bottom-[-28vh]
//             h-[55vh]
//             w-[38vw]
//             rounded-full
//             bg-[#052659]
//           "
//         />

//         {/* Thin architectural lines */}

//         <div
//           className="
//             absolute
//             left-[7%]
//             right-0
//             top-[25%]
//             h-px
//             bg-[#021024]/10
//           "
//         />

//         <div
//           className="
//             absolute
//             bottom-[15%]
//             left-0
//             right-0
//             h-px
//             bg-white/40
//           "
//         />

//         <div
//           className="
//             absolute
//             bottom-0
//             right-[24%]
//             top-0
//             w-px
//             bg-[#021024]/10
//           "
//         />
//       </div>

//       {/* =====================================================
//           SUBTLE GRID
//       ====================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-[0.035]
//         "
//         style={{
//           backgroundImage: `
//             linear-gradient(
//               #021024 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               #021024 1px,
//               transparent 1px
//             )
//           `,
//           backgroundSize: "100px 100px",
//         }}
//       />

//       {/* =====================================================
//           TOP INDEX
//       ====================================================== */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           y: -15,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           duration: 0.8,
//           delay: 0.2,
//         }}
//         className="
//           absolute
//           left-7
//           top-8
//           z-20
//           sm:left-10
//           lg:left-14
//         "
//       >
//         <p className="
//           text-[10px]
//           font-medium
//           uppercase
//           tracking-[0.35em]
//           text-[#052659]/60
//         ">
//           DS — 01
//         </p>
//       </motion.div>

//       {/* =====================================================
//           TOP RIGHT
//       ====================================================== */}

//       <motion.div
//         initial={{
//           opacity: 0,
//         }}
//         animate={{
//           opacity: 1,
//         }}
//         transition={{
//           duration: 1,
//           delay: 0.6,
//         }}
//         className="
//           absolute
//           right-7
//           top-8
//           z-20
//           hidden
//           text-right
//           sm:right-10
//           md:block
//           lg:right-14
//         "
//       >
//         <p className="
//           text-[9px]
//           uppercase
//           tracking-[0.3em]
//           text-[#052659]/50
//         ">
//           Data
//         </p>

//         <p className="
//           mt-1
//           text-[9px]
//           uppercase
//           tracking-[0.3em]
//           text-[#052659]/50
//         ">
//           Intelligence
//         </p>

//         <p className="
//           mt-1
//           text-[9px]
//           uppercase
//           tracking-[0.3em]
//           text-[#052659]/50
//         ">
//           Innovation
//         </p>
//       </motion.div>

//       {/* =====================================================
//           MAIN CONTENT
//       ====================================================== */}

//       <div
//         className="
//           relative
//           z-10
//           mx-auto
//           flex
//           min-h-screen
//           max-w-[1600px]
//           items-center
//           px-7
//           py-32
//           sm:px-10
//           lg:px-14
//         "
//       >
//         <motion.div
//           style={{
//             y: titleY,
//             scale: titleScale,
//           }}
//           className="
//             relative
//             z-20
//             w-full
//             max-w-[1150px]
//             origin-left
//           "
//         >
//           {/* Small heading */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: -30,
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//             }}
//             transition={{
//               duration: 0.8,
//               delay: 0.3,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="mb-7 flex items-center gap-4"
//           >
//             <span className="
//               h-px
//               w-14
//               bg-[#052659]
//             " />

//             <span className="
//               text-[11px]
//               font-medium
//               uppercase
//               tracking-[0.38em]
//               text-[#052659]
//               sm:text-xs
//             ">
//               Department of
//             </span>
//           </motion.div>

//           {/* =================================================
//               MAIN TITLE
//           ================================================== */}

//           <div className="overflow-hidden">
//             <motion.h1
//               initial={{
//                 y: "110%",
//               }}
//               animate={{
//                 y: 0,
//               }}
//               transition={{
//                 duration: 1.15,
//                 delay: 0.35,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className="
//                 text-[clamp(4.5rem,12.5vw,12rem)]
//                 font-semibold
//                 leading-[0.78]
//                 tracking-[-0.075em]
//                 text-[#021024]
//               "
//             >
//               DATA
//             </motion.h1>
//           </div>

//           <div className="overflow-hidden">
//             <motion.h1
//               initial={{
//                 y: "110%",
//               }}
//               animate={{
//                 y: 0,
//               }}
//               transition={{
//                 duration: 1.15,
//                 delay: 0.46,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className="
//                 text-[clamp(4.5rem,12.5vw,12rem)]
//                 font-semibold
//                 leading-[0.78]
//                 tracking-[-0.075em]
//                 text-[#052659]
//               "
//             >
//               SCIENCE
//             </motion.h1>
//           </div>

//           {/* =================================================
//               LOWER CONTENT
//           ================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 25,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.9,
//               delay: 0.9,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               mt-12
//               flex
//               flex-col
//               gap-7
//               sm:flex-row
//               sm:items-center
//             "
//           >
//             <p className="
//               max-w-md
//               text-sm
//               leading-7
//               text-[#021024]/60
//               sm:text-base
//               sm:leading-8
//             ">
//               Explore a department built around data,
//               intelligence, and the ideas shaping tomorrow.
//             </p>

//             {/* Explore */}

//             <motion.a
//               href="#about"
//               whileHover={{
//                 x: 8,
//               }}
//               whileTap={{
//                 scale: 0.96,
//               }}
//               transition={{
//                 duration: 0.3,
//               }}
//               className="
//                 group
//                 flex
//                 w-fit
//                 items-center
//                 gap-4
//                 text-[11px]
//                 font-medium
//                 uppercase
//                 tracking-[0.25em]
//                 text-[#021024]
//               "
//             >
//               <span
//                 className="
//                   flex
//                   h-12
//                   w-12
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-[#021024]/25
//                   transition-all
//                   duration-500
//                   group-hover:bg-[#021024]
//                   group-hover:text-white
//                 "
//               >
//                 <span className="
//                   transition-transform
//                   duration-500
//                   group-hover:translate-x-1
//                 ">
//                   →
//                 </span>
//               </span>

//               Explore
//             </motion.a>
//           </motion.div>
//         </motion.div>

//         {/* ===================================================
//             RIGHT VISUAL
//         ==================================================== */}

//         <motion.div
//           style={{
//             x: visualX,
//             y: visualY,
//             rotate: visualRotate,
//           }}
//           className="
//             pointer-events-none
//             absolute
//             bottom-[16%]
//             right-[4%]
//             z-10
//             hidden
//             h-[500px]
//             w-[500px]
//             lg:block
//           "
//         >
//           {/* Large ring */}

//           <motion.div
//             animate={{
//               rotate: 360,
//             }}
//             transition={{
//               duration: 40,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="
//               absolute
//               inset-0
//               rounded-full
//               border
//               border-white/70
//             "
//           />

//           {/* Second ring */}

//           <motion.div
//             animate={{
//               rotate: -360,
//             }}
//             transition={{
//               duration: 28,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="
//               absolute
//               inset-[65px]
//               rounded-full
//               border
//               border-[#052659]/20
//             "
//           />

//           {/* Third ring */}

//           <div className="
//             absolute
//             inset-[130px]
//             rounded-full
//             border
//             border-white/60
//           " />

//           {/* Central shape */}

//           <motion.div
//             animate={{
//               scale: [1, 1.035, 1],
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="
//               absolute
//               left-1/2
//               top-1/2
//               h-32
//               w-32
//               -translate-x-1/2
//               -translate-y-1/2
//               rounded-full
//               bg-[#C1E8FF]
//               shadow-[0_25px_80px_rgba(2,16,36,0.15)]
//             "
//           />

//           {/* Orbiting point */}

//           <motion.div
//             animate={{
//               rotate: 360,
//             }}
//             transition={{
//               duration: 12,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="
//               absolute
//               inset-[80px]
//               rounded-full
//             "
//           >
//             <span className="
//               absolute
//               left-1/2
//               top-[-4px]
//               h-2
//               w-2
//               -translate-x-1/2
//               rounded-full
//               bg-[#052659]
//             " />
//           </motion.div>

//           {/* Static data points */}

//           <span className="
//             absolute
//             left-[8%]
//             top-[48%]
//             h-2
//             w-2
//             rounded-full
//             bg-[#052659]
//           " />

//           <span className="
//             absolute
//             right-[8%]
//             top-[25%]
//             h-2
//             w-2
//             rounded-full
//             bg-white
//           " />

//           <span className="
//             absolute
//             bottom-[12%]
//             right-[27%]
//             h-3
//             w-3
//             rounded-full
//             bg-[#5483B3]
//           " />
//         </motion.div>
//       </div>

//       {/* =====================================================
//           SCROLL INDICATOR
//       ====================================================== */}

//       <motion.a
//         href="#about"
//         style={{
//           opacity: scrollOpacity,
//         }}
//         className="
//           absolute
//           bottom-8
//           left-7
//           z-30
//           sm:left-10
//           lg:left-14
//         "
//       >
//         <motion.div
//           whileHover={{
//             y: 5,
//           }}
//           className="
//             flex
//             items-center
//             gap-4
//           "
//         >
//           <span className="
//             text-[9px]
//             font-medium
//             uppercase
//             tracking-[0.35em]
//             text-[#021024]/50
//           ">
//             Explore
//           </span>

//           <motion.span
//             animate={{
//               height: [25, 40, 25],
//             }}
//             transition={{
//               duration: 1.8,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="
//               w-px
//               bg-[#052659]/50
//             "
//           />
//         </motion.div>
//       </motion.a>

//       {/* =====================================================
//           MOBILE DECORATIVE ELEMENT
//       ====================================================== */}

//       <motion.div
//         animate={{
//           y: [0, -8, 0],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           bottom-[12%]
//           right-8
//           h-16
//           w-16
//           rounded-full
//           border
//           border-white/60
//           lg:hidden
//         "
//       >
//         <span className="
//           absolute
//           left-1/2
//           top-1/2
//           h-2
//           w-2
//           -translate-x-1/2
//           -translate-y-1/2
//           rounded-full
//           bg-[#052659]
//         " />
//       </motion.div>
//     </section>
//   );
// };

// export { Hero };



import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { useRef, type MouseEvent } from "react";

import audiLogo from "@/assets/audi.png";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  /* =========================================================
     MOUSE PARALLAX
  ========================================================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 45,
    damping: 18,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 45,
    damping: 18,
    mass: 0.5,
  });

  /* Background = shallow movement */

  const backgroundX = useTransform(
    smoothX,
    [-600, 600],
    [-28, 28]
  );

  const backgroundY = useTransform(
    smoothY,
    [-600, 600],
    [-20, 20]
  );

  /* Grid = medium movement */

  const gridX = useTransform(
    smoothX,
    [-600, 600],
    [-45, 45]
  );

  const gridYMouse = useTransform(
    smoothY,
    [-600, 600],
    [-30, 30]
  );

  /* Title = subtle depth */

  const titleX = useTransform(
    smoothX,
    [-600, 600],
    [-18, 18]
  );

  const titleY = useTransform(
    smoothY,
    [-600, 600],
    [-12, 12]
  );

  /* Main visual = strongest parallax */

  const visualX = useTransform(
    smoothX,
    [-600, 600],
    [-90, 90]
  );

  const visualY = useTransform(
    smoothY,
    [-600, 600],
    [-65, 65]
  );

  /* Perspective */

  const rotateX = useTransform(
    smoothY,
    [-600, 600],
    [3, -3]
  );

  const rotateY = useTransform(
    smoothX,
    [-600, 600],
    [-4, 4]
  );

  /* Cursor light */

  const lightX = useTransform(
    smoothX,
    [-600, 600],
    ["10%", "90%"]
  );

  const lightY = useTransform(
    smoothY,
    [-600, 600],
    ["10%", "90%"]
  );

  /* =========================================================
     SCROLL
  ========================================================= */

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  /* Entire scene */

  const sceneY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -320]
  );

  const sceneScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.78]
  );

  const sceneOpacity = useTransform(
    scrollYProgress,
    [0, 0.78],
    [1, 0]
  );

  /* Title */

  const titleScrollY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -260]
  );

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.62],
    [1, 0]
  );

  /* Main visual */

  const visualScrollY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -360]
  );

  const visualScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.72]
  );

  /* Grid */

  const gridScrollY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -800]
  );

  /* Background */

  const backgroundScrollY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -100]
  );

  /* Orbit */

  const orbitScrollRotation = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 110]
  );

  /* Progress */

  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  /* =========================================================
     MOUSE HANDLER
  ========================================================= */

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      e.clientX - (rect.left + rect.width / 2);

    const y =
      e.clientY - (rect.top + rect.height / 2);

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  /* =========================================================
     DATA NODES
  ========================================================= */

  const nodes = [
    { x: 18, y: 17, delay: 0 },
    { x: 78, y: 21, delay: 0.8 },
    { x: 87, y: 53, delay: 1.4 },
    { x: 17, y: 68, delay: 2 },
    { x: 72, y: 83, delay: 2.6 },
    { x: 47, y: 5, delay: 3.2 },
    { x: 8, y: 45, delay: 1.1 },
    { x: 92, y: 75, delay: 3.7 },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full overflow-hidden bg-[#C1E8FF] text-[#021024]"
    >
      {/* =====================================================
          CURSOR LIGHT
      ===================================================== */}

      <motion.div
        style={{
          left: lightX,
          top: lightY,
        }}
        className="pointer-events-none absolute z-[2] h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.65)_0%,rgba(255,255,255,0.2)_30%,transparent_70%)] blur-3xl"
      />

      {/* =====================================================
          FILM GRAIN
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 z-[45] opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E\")",
        }}
      />

      {/* =====================================================
          GIANT BACKGROUND LETTERS
      ===================================================== */}

      <motion.div
        style={{
          x: backgroundX,
          y: backgroundScrollY,
        }}
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
      >
        <div className="select-none whitespace-nowrap text-[38vw] font-black leading-none tracking-[-0.14em] text-[#021024]/[0.025]">
          DS
        </div>
      </motion.div>

      {/* =====================================================
          ARCHITECTURAL GRID
      ===================================================== */}

      <motion.div
        style={{
          x: gridX,
          y: gridScrollY,
        }}
        className="pointer-events-none absolute inset-[-20%] z-[1]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(2,16,36,0.07) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(2,16,36,0.07) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "72px 72px",
            transform:
              "perspective(850px) rotateX(60deg) scale(1.35)",
            transformOrigin: "center bottom",
          }}
        />
      </motion.div>

      {/* =====================================================
          ARCHITECTURAL LINES
      ===================================================== */}

      <motion.div
        style={{
          x: backgroundX,
          y: backgroundY,
        }}
        className="pointer-events-none absolute inset-[-6%] z-[2]"
      >
        {/* Horizontal lines */}

        {[8, 20, 32, 44, 56, 68, 80, 92].map(
          (top, index) => (
            <motion.div
              key={`horizontal-${index}`}
              className="absolute left-0 right-0 h-px bg-[#021024]/[0.065]"
              style={{
                top: `${top}%`,
              }}
              animate={{
                x: [0, 18, 0],
              }}
              transition={{
                duration: 6 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )
        )}

        {/* Vertical lines */}

        {[7, 20, 33, 46, 59, 72, 85, 96].map(
          (left, index) => (
            <motion.div
              key={`vertical-${index}`}
              className="absolute bottom-0 top-0 w-px bg-[#021024]/[0.055]"
              style={{
                left: `${left}%`,
              }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 7 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )
        )}
      </motion.div>

      {/* =====================================================
          MAIN SCENE
      ===================================================== */}

      <motion.div
        style={{
          y: sceneY,
          scale: sceneScale,
          opacity: sceneOpacity,
        }}
        className="relative z-10 min-h-screen"
      >
        {/* ===================================================
            TOP LEFT
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          className="absolute left-7 top-7 z-30 md:left-12 md:top-10"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-[#021024]"
            />

            {/* <span className="text-[9px] font-bold uppercase tracking-[0.35em]">
              Department of Data Science
            </span> */}
          </div>
        </motion.div>



        {/* ===================================================
            TITLE
        =================================================== */}

        <motion.div
          style={{
            x: titleX,
            y: titleY,
          }}
          className="absolute left-7 top-[24%] z-20 md:left-[8%] md:top-[25%]"
        >
          <motion.div
            style={{
              y: titleScrollY,
              opacity: titleOpacity,
            }}
          >
            {/* Eyebrow */}

<motion.div
  initial={{
    opacity: 0,
    x: -30,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    duration: 0.8,
    delay: 0.15,
  }}
  className="mb-6 flex items-center gap-4"
>
  <div className="h-px w-12 bg-[#021024]/50" />

  <span className="text-base font-semibold uppercase tracking-[0.35em] opacity-60 md:text-xl">
    Department of
  </span>
</motion.div>

            {/* DATA */}

            <div className="overflow-hidden">
              <motion.h1
                initial={{
                  y: "110%",
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-[18vw] font-black leading-[0.72] tracking-[-0.095em] md:text-[11.5vw]"
              >
                DATA
              </motion.h1>
            </div>

            {/* SCIENCE */}

            <div className="overflow-hidden">
              <motion.h1
                initial={{
                  y: "110%",
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-[18vw] font-black leading-[0.72] tracking-[-0.095em] md:text-[11.5vw]"
              >
                SCIENCE
              </motion.h1>
            </div>

            <motion.div
  initial={{
    opacity: 0,
    y: 25,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.8,
    duration: 0.8,
  }}
  className="mt-8 flex items-center gap-6"
>
  {/* Association Text */}
  <div className="flex flex-col justify-center">
    <span className="text-[10px] font-medium uppercase tracking-[0.3em] opacity-50 md:text-xs">
      In Association With
    </span>

    <span className="mt-1 text-lg font-semibold tracking-wide text-[#021024] md:text-xl">
      AUDI
    </span>
  </div>

  {/* Association Logo */}
  <motion.div
    animate={{
      y: [0, -4, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="flex h-20 w-20 shrink-0 items-center justify-center md:h-24 md:w-24"
  >
    <img
      src={audiLogo}
      alt="Association of Universal Data & Intelligence"
      className="h-full w-full object-contain"
    />
  </motion.div>
</motion.div>

 
          </motion.div>
        </motion.div>

        {/* ===================================================
            MAIN DATA VISUAL
        =================================================== */}

        <motion.div
          style={{
            x: visualX,
            y: visualScrollY,
            scale: visualScale,
            rotateX,
            rotateY,
            perspective: 1200,
          }}
          className="absolute right-[-14%] top-[9%] h-[690px] w-[690px] md:right-[0%] md:top-[10%] md:h-[650px] md:w-[650px]"
        >
          {/* =================================================
              SCANNING BEAM
          ================================================= */}

          <motion.div
            animate={{
              top: ["2%", "96%", "2%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[5%] right-[5%] z-30 h-px bg-gradient-to-r from-transparent via-[#021024]/70 to-transparent"
          />

          {/* =================================================
              OUTER ROTATING SYSTEM
          ================================================= */}

          <motion.div
            style={{
              rotate: orbitScrollRotation,
            }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 rounded-full border border-[#021024]/20" />

            <div className="absolute inset-[6%] rounded-full border border-dashed border-[#021024]/20" />

            <div className="absolute inset-[14%] rounded-full border border-[#021024]/20" />

            <div className="absolute inset-[25%] rounded-full border border-[#021024]/10" />
          </motion.div>

          {/* =================================================
              ORBIT 1
          ================================================= */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[6%]"
          >
            <div className="absolute left-1/2 top-[-5px] h-3 w-3 -translate-x-1/2 rounded-full bg-[#021024]" />

            <div className="absolute bottom-[-4px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#021024]/40" />
          </motion.div>

          {/* =================================================
              ORBIT 2
          ================================================= */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[14%]"
          >
            <div className="absolute right-[-5px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#021024]" />

            <div className="absolute bottom-[15%] left-[-4px] h-2 w-2 rounded-full bg-[#021024]/45" />
          </motion.div>

          {/* =================================================
              ORBIT 3
          ================================================= */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[25%]"
          >
            <div className="absolute left-[15%] top-[-4px] h-2 w-2 rounded-full bg-[#021024]" />
          </motion.div>

          {/* =================================================
              INNER ROTATING MARKERS
          ================================================= */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[32%]"
          >
            <div className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#021024]" />
          </motion.div>

          {/* =================================================
              CENTRAL REACTOR
          ================================================= */}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{
                scale: [1, 1.045, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-48 w-48 items-center justify-center rounded-full border border-[#021024]/25"
            >
              {/* Rotating dashed ring */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-4 rounded-full border border-dashed border-[#021024]/30"
              />

              {/* Second ring */}

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 13,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[17%] rounded-full border border-[#021024]/20"
              />

              {/* Core */}

              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(2,16,36,0.15)",
                    "0 0 70px rgba(2,16,36,0.4)",
                    "0 0 20px rgba(2,16,36,0.15)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#021024]"
              >
                <motion.div
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [1, 0.15, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute h-5 w-5 rounded-full bg-[#C1E8FF]"
                />

                <div className="relative h-2 w-2 rounded-full bg-white" />
              </motion.div>
            </motion.div>
          </div>

          {/* =================================================
              NETWORK LINES
          ================================================= */}

          <svg
            viewBox="0 0 650 650"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <motion.path
              d="M120 125 L325 325 L510 155"
              fill="none"
              stroke="#021024"
              strokeOpacity="0.2"
              strokeWidth="1"
              strokeDasharray="4 9"
              animate={{
                strokeDashoffset: [0, -52],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.path
              d="M95 465 L325 325 L500 525"
              fill="none"
              stroke="#021024"
              strokeOpacity="0.18"
              strokeWidth="1"
              strokeDasharray="4 9"
              animate={{
                strokeDashoffset: [0, -52],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.path
              d="M325 325 L325 55"
              fill="none"
              stroke="#021024"
              strokeOpacity="0.1"
              strokeWidth="1"
              strokeDasharray="3 10"
              animate={{
                strokeDashoffset: [0, -40],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.path
              d="M325 325 L600 325"
              fill="none"
              stroke="#021024"
              strokeOpacity="0.1"
              strokeWidth="1"
              strokeDasharray="3 10"
              animate={{
                strokeDashoffset: [0, -40],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.path
              d="M325 325 L70 325"
              fill="none"
              stroke="#021024"
              strokeOpacity="0.1"
              strokeWidth="1"
              strokeDasharray="3 10"
              animate={{
                strokeDashoffset: [0, -40],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>

          {/* =================================================
              DATA NODES
          ================================================= */}

          {nodes.map((node, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.25, 1, 0.25],
                scale: [0.85, 1.2, 0.85],
              }}
              transition={{
                duration: 3 + index * 0.45,
                delay: node.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative h-2.5 w-2.5 rounded-full bg-[#021024]">
                <motion.div
                  animate={{
                    scale: [0.7, 1.5, 0.7],
                    opacity: [0.2, 0.55, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#021024]/20"
                />
              </div>
            </motion.div>
          ))}

          {/* =================================================
              DATA CARD LEFT
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[0%] top-[39%] border border-[#021024]/20 bg-[#C1E8FF]/80 p-4 backdrop-blur-md"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1.5 rounded-full bg-[#021024]"
              />

              <span className="font-mono text-[8px] uppercase tracking-[0.25em] opacity-50">
                Data stream
              </span>
            </div>

            <div className="mt-2 font-mono text-lg font-bold">
              10.24K
            </div>

            <div className="mt-1 font-mono text-[7px] opacity-40">
              RECORDS / SEC
            </div>
          </motion.div>

          {/* =================================================
              DATA CARD RIGHT
          ================================================= */}

          <motion.div
            animate={{
              y: [0, 13, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[0%] top-[55%] border border-[#021024]/20 bg-[#C1E8FF]/80 p-4 backdrop-blur-md"
          >
            <div className="font-mono text-[8px] uppercase tracking-[0.25em] opacity-50">
              Model confidence
            </div>

            <div className="mt-2 font-mono text-lg font-bold">
              98.7%
            </div>

            <div className="mt-2 h-px w-20 overflow-hidden bg-[#021024]/10">
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-full bg-[#021024]"
              />
            </div>
          </motion.div>

          {/* =================================================
              SMALL DATA LABELS
          ================================================= */}

          <motion.div
            animate={{
              opacity: [0.25, 0.7, 0.25],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute bottom-[15%] left-[27%] font-mono text-[7px] leading-4"
          >
            X 32.581
            <br />
            Y 18.204
            <br />
            Z 04.921
          </motion.div>

          <div className="absolute right-[23%] top-[13%] font-mono text-[7px] uppercase tracking-[0.2em] opacity-35">
            NODE_07
          </div>

          {/* =================================================
              RADAR CROSSHAIR
          ================================================= */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2"
          >
            <div className="absolute left-1/2 top-0 h-4 w-px bg-[#021024]/30" />

            <div className="absolute bottom-0 left-1/2 h-4 w-px bg-[#021024]/30" />

            <div className="absolute left-0 top-1/2 h-px w-4 bg-[#021024]/30" />

            <div className="absolute right-0 top-1/2 h-px w-4 bg-[#021024]/30" />
          </motion.div>
        </motion.div>

        {/* ===================================================
            BOTTOM LEFT
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="absolute bottom-9 left-7 z-30 md:left-12"
        >
          <div className="mb-3 font-mono text-[8px] uppercase tracking-[0.4em] opacity-45">
            Explore
          </div>

          <div className="flex items-center gap-3">
            <motion.div
              animate={{
                height: [18, 40, 18],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-px bg-[#021024]/60"
            />

            <span className="font-mono text-[8px] uppercase tracking-[0.3em] opacity-50">
              Scroll to discover
            </span>
          </div>
        </motion.div>

        {/* ===================================================
            BOTTOM RIGHT
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 25,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 1.1,
            duration: 0.8,
          }}
          className="absolute bottom-9 right-7 z-30 hidden text-right md:right-12 md:block"
        >
          <div className="font-mono text-[8px] uppercase leading-5 tracking-[0.28em] opacity-45">
            Data Science
            <br />
            Data Science & Artificial intelligence

          </div>
        </motion.div>
      </motion.div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <motion.div
        style={{
          opacity: titleOpacity,
        }}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 9, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[7px] uppercase tracking-[0.45em] opacity-40">
            Scroll
          </span>

          <div className="h-9 w-px bg-[#021024]/30" />
        </motion.div>
      </motion.div>

      {/* =====================================================
          SIDE INDEX
      ===================================================== */}

      <div className="pointer-events-none absolute left-3 top-1/2 z-30 hidden -translate-y-1/2 md:block">
        <div className="flex -rotate-90 origin-left items-center gap-4">
          <span className="font-mono text-[7px] uppercase tracking-[0.4em] opacity-35">
            01 / 06
          </span>

          <div className="h-px w-16 bg-[#021024]/20" />

          <span className="font-mono text-[7px] uppercase tracking-[0.4em] opacity-35">
            Introduction
          </span>
        </div>
      </div>

      {/* =====================================================
          SCROLL PROGRESS
      ===================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-50 h-[2px] bg-[#021024]/10">
        <motion.div
          style={{
            width: progressWidth,
          }}
          className="h-full bg-[#021024]"
        />
      </div>
    </section>
  );
};

export default Hero;