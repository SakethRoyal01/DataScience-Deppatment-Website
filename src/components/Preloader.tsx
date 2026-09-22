// import { motion } from "framer-motion";
// import clgLogo from "@/assets/clg-logo.png";

// const Preloader = () => {
//   return (
//     <motion.div
//       className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 0 }}
//       transition={{
//         delay: 1.8,
//         duration: 0.7,
//         ease: "easeInOut",
//       }}
//     >
//       <motion.div
//         className="flex flex-col items-center text-center"
//         initial={{ opacity: 0, y: 15 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <motion.img
//           src={clgLogo}
//           alt="Dr. M.G.R. Educational and Research Institute"
//           className="h-20 w-20 object-contain mb-5"
//           initial={{ scale: 0.85 }}
//           animate={{ scale: 1 }}
//           transition={{
//             duration: 0.7,
//             ease: "easeOut",
//           }}
//         />

//         <p className="text-xs tracking-[0.25em] uppercase text-slate-500 mb-2">
//           Department of
//         </p>

//         <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide text-slate-900">
//           Data Science
//         </h1>

//         <motion.div
//           className="mt-6 h-[2px] w-32 bg-slate-200 overflow-hidden"
//         >
//           <motion.div
//             className="h-full bg-slate-900"
//             initial={{ width: "0%" }}
//             animate={{ width: "100%" }}
//             transition={{
//               duration: 1.5,
//               ease: "easeInOut",
//             }}
//           />
//         </motion.div>

//         <p className="mt-3 text-[10px] tracking-[0.2em] uppercase text-slate-400">
//           Loading
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Preloader;


import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      className="
        fixed
        inset-0
        z-[9999]
        overflow-hidden
        bg-[#020812]
        text-white
      "
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 2.05,
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div className="absolute inset-0">

        {/* Very subtle central light */}
        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[55vh]
            w-[55vw]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#315D7C]/[0.10]
            blur-[140px]
          "
          animate={{
            opacity: [0.25, 0.5, 0.25],
            scale: [0.95, 1.08, 0.95],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Architectural vertical line */}
        <motion.div
          className="
            absolute
            left-1/2
            top-0
            h-full
            w-px
            bg-[#C1E8FF]/[0.045]
          "
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        {/* Architectural horizontal line */}
        <motion.div
          className="
            absolute
            left-0
            top-1/2
            h-px
            w-full
            bg-[#C1E8FF]/[0.035]
          "
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.4,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        {/* Fine grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.045]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(193,232,255,0.35) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(193,232,255,0.35) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* =================================================
            CINEMATIC LIGHT SWEEP
        ================================================= */}

        <motion.div
          className="
            absolute
            -left-[15%]
            top-0
            h-full
            w-[18%]
            bg-gradient-to-r
            from-transparent
            via-[#C1E8FF]/[0.045]
            to-transparent
            blur-[18px]
          "
          animate={{
            x: ["0vw", "125vw"],
          }}
          transition={{
            duration: 2.4,
            delay: 0.25,
            ease: [0.65, 0, 0.35, 1],
          }}
        />

        {/* =================================================
            FILM GRAIN
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
          "
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* =====================================================
          TOP INFORMATION
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-8
          top-8
          z-20
          flex
          items-center
          gap-3
          font-mono
          text-[8px]
          uppercase
          tracking-[0.35em]
          text-[#C1E8FF]/30
          sm:left-12
          sm:top-10
        "
        initial={{
          opacity: 0,
          x: -15,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.15,
          duration: 0.6,
        }}
      >
        <span className="h-px w-8 bg-[#C1E8FF]/25" />
        DS / 2026
      </motion.div>

      <motion.div
        className="
          absolute
          right-8
          top-8
          z-20
          font-mono
          text-[8px]
          uppercase
          tracking-[0.35em]
          text-[#C1E8FF]/30
          sm:right-12
          sm:top-10
        "
        initial={{
          opacity: 0,
          x: 15,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.25,
          duration: 0.6,
        }}
      >
        SYSTEM / 01
      </motion.div>

      {/* =====================================================
          MAIN TITLE
      ===================================================== */}

      <main
        className="
          relative
          z-10
          flex
          h-full
          w-full
          flex-col
          items-center
          justify-center
        "
      >

        {/* Small eyebrow */}

        <motion.div
          className="
            mb-8
            flex
            items-center
            gap-4
          "
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span className="h-px w-10 bg-[#7DA0CA]/50" />

          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.5em]
              text-[#7DA0CA]
              sm:text-[10px]
            "
          >
            Department of
          </span>

          <span className="h-px w-10 bg-[#7DA0CA]/50" />
        </motion.div>

        {/* =================================================
            GIANT GHOST TITLE
        ================================================= */}

        <motion.div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            whitespace-nowrap
            text-[19vw]
            font-black
            uppercase
            leading-none
            tracking-[-0.085em]
            text-white/[0.018]
          "
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.25,
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          DATA
        </motion.div>

        {/* =================================================
            DATA SCIENCE TITLE
        ================================================= */}

        <div className="relative w-full px-5">

          {/* DATA */}

          <div className="relative overflow-hidden text-center">

            <motion.div
              className="
                absolute
                inset-0
                bg-[#020812]
              "
              initial={{
                x: 0,
              }}
              animate={{
                x: "100%",
              }}
              transition={{
                delay: 0.52,
                duration: 0.9,
                ease: [0.76, 0, 0.24, 1],
              }}
            />

            <motion.h1
              className="
                relative
                text-[18vw]
                font-black
                uppercase
                leading-[0.76]
                tracking-[-0.085em]
                text-white
                sm:text-[15vw]
                md:text-[13vw]
                lg:text-[11vw]
              "
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.38,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              DATA
            </motion.h1>

          </div>

          {/* SCIENCE */}

          <div className="relative mt-1 overflow-hidden text-center">

            <motion.div
              className="
                absolute
                inset-0
                z-10
                bg-[#020812]
              "
              initial={{
                x: 0,
              }}
              animate={{
                x: "100%",
              }}
              transition={{
                delay: 0.72,
                duration: 1.05,
                ease: [0.76, 0, 0.24, 1],
              }}
            />

            <motion.h2
              className="
                relative
                text-[12vw]
                font-light
                uppercase
                leading-[0.8]
                tracking-[-0.065em]
                text-[#C1E8FF]
                sm:text-[10vw]
                md:text-[8.5vw]
                lg:text-[7.5vw]
              "
              initial={{
                opacity: 0,
                y: 30,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.58,
                duration: 1.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              SCIENCE
            </motion.h2>

          </div>

          {/* =================================================
              TYPOGRAPHIC LIGHT LINE
          ================================================= */}

          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              h-[1px]
              -translate-x-1/2
              bg-[#C1E8FF]
              shadow-[0_0_25px_rgba(193,232,255,0.65)]
            "
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: "72%",
              opacity: [0, 1, 0.35],
            }}
            transition={{
              delay: 1.12,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          />

        </div>

        {/* =================================================
            IDENTITY LINE
        ================================================= */}

        <motion.div
          className="
            mt-10
            flex
            items-center
            gap-4
            text-center
          "
          initial={{
            opacity: 0,
            y: 12,
            letterSpacing: "0.1em",
          }}
          animate={{
            opacity: 1,
            y: 0,
            letterSpacing: "0.38em",
          }}
          transition={{
            delay: 1.35,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span className="hidden h-px w-12 bg-[#7DA0CA]/40 sm:block" />

          <span
            className="
              text-[7px]
              font-medium
              uppercase
              text-[#C1E8FF]/45
              sm:text-[8px]
            "
          >
            Intelligence · Innovation · Impact
          </span>

          <span className="hidden h-px w-12 bg-[#7DA0CA]/40 sm:block" />
        </motion.div>

      </main>

      {/* =====================================================
          BOTTOM PROGRESS
      ===================================================== */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          z-20
          w-[190px]
          -translate-x-1/2
        "
      >

        <div
          className="
            mb-2
            flex
            justify-between
            font-mono
            text-[7px]
            uppercase
            tracking-[0.22em]
            text-white/25
          "
        >
          <span>Entering</span>
          <span>DS_01</span>
        </div>

        <div
          className="
            relative
            h-px
            w-full
            overflow-hidden
            bg-white/[0.08]
          "
        >
          <motion.div
            className="
              absolute
              inset-y-0
              left-0
              bg-[#C1E8FF]
              shadow-[0_0_14px_rgba(193,232,255,0.8)]
            "
            initial={{
              width: "0%",
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 1.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>

      </div>

      {/* =====================================================
          CINEMATIC EXIT
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[100]
          bg-[#C1E8FF]
        "
        initial={{
          clipPath: "inset(50% 0 50% 0)",
          opacity: 0,
        }}
        animate={{
          clipPath: [
            "inset(50% 0 50% 0)",
            "inset(49% 0 49% 0)",
            "inset(0% 0 0% 0)",
          ],
          opacity: [0, 0.22, 0],
        }}
        transition={{
          delay: 1.88,
          duration: 0.75,
          times: [0, 0.35, 1],
          ease: [0.76, 0, 0.24, 1],
        }}
      />
    </motion.div>
  );
};

export default Preloader;