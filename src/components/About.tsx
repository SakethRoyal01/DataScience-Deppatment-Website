import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";

import audiLogo from "@/assets/audi.png";

/* =========================================================
   COUNTER
========================================================= */

const Counter = ({
  value,
  suffix = "",
  duration = 2.2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.7,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let frame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / (duration * 1000),
        1,
      );

      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(eased * value));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

/* =========================================================
   ABOUT
========================================================= */

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  /* =======================================================
     MOUSE SYSTEM
  ======================================================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 65,
    damping: 22,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 65,
    damping: 22,
  });

  const logoX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-30, 30],
  );

  const logoY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [-22, 22],
  );

  const gridX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-8, 8],
  );

  const gridY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [-6, 6],
  );

  const handleMouseMove = (
    event: MouseEvent<HTMLElement>,
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    mouseX.set(
      (event.clientX - rect.left) / rect.width - 0.5,
    );

    mouseY.set(
      (event.clientY - rect.top) / rect.height - 0.5,
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        overflow-hidden
        bg-[#D9EEF8]
        px-6
        py-24
        sm:px-10
        sm:py-28
        lg:px-16
        lg:py-32
      "
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          top-0
          h-[520px]
          w-[520px]
          rounded-full
          bg-white/35
          blur-3xl
        "
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-48
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#B8DDED]/35
          blur-3xl
        "
      />

      {/* =====================================================
          MOVING GRID
      ===================================================== */}

      <motion.div
        style={{
          x: gridX,
          y: gridY,
        }}
        className="
          pointer-events-none
          absolute
          -inset-10
          opacity-[0.07]
        "
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(2,16,36,0.5) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(2,16,36,0.5) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "90px 90px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        />
      </motion.div>

      {/* =====================================================
          DECORATIVE DATA POINTS
      ===================================================== */}

      {[
        ["9%", "18%", 3, 0],
        ["18%", "76%", 4, 0.8],
        ["76%", "20%", 3, 1.2],
        ["91%", "63%", 4, 0.4],
        ["62%", "87%", 3, 1.6],
      ].map(([left, top, size, delay], index) => (
        <motion.div
          key={index}
          className="
            pointer-events-none
            absolute
            rounded-full
            bg-[#021024]
          "
          style={{
            left: left as string,
            top: top as string,
            width: size as number,
            height: size as number,
          }}
          animate={{
            y: [0, -14, 0],
            opacity: [0.15, 0.65, 0.15],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3.5 + index * 0.4,
            delay: delay as number,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =================================================
            LABEL
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-4"
        >
          <motion.div
            animate={{
              width: ["32px", "58px", "32px"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-px bg-[#021024]/45"
          />

          <span
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.38em]
              text-[#021024]/55
              sm:text-xs
            "
          >
            About the Department
          </span>

          <motion.span
            animate={{
              opacity: [0.25, 0.8, 0.25],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#021024]
            "
          />
        </motion.div>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div
          className="
            mt-9
            grid
            items-center
            gap-12
            lg:grid-cols-[1fr_0.72fr]
            lg:gap-16
          "
        >
          {/* =================================================
              LEFT INFORMATION
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Heading */}

            <h2
              className="
                text-4xl
                font-semibold
                tracking-[-0.045em]
                text-[#021024]
                sm:text-5xl
                lg:text-[3.4rem]
                lg:leading-[1.05]
              "
            >
              About our
              <span className="text-[#021024]/35">
                {" "}
                department.
              </span>
            </h2>

            {/* Department description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-[#021024]/65
                sm:text-lg
                sm:leading-9
              "
            >
              The Department of Data Science became an
              independent department in 2025, bringing
              together data science, artificial
              intelligence, analytics, and emerging
              technologies to create a strong environment
              for learning, innovation, and practical
              problem-solving.
            </motion.p>

            {/* =================================================
                AUDI TEXT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="
                mt-8
                border-l
                border-[#021024]/20
                pl-5
                sm:pl-6
              "
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#021024]/40" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.35em]
                    text-[#021024]/50
                  "
                >
                  In Association With
                </span>
              </div>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-[#021024]
                  sm:text-3xl
                "
              >
                AUDI
              </h3>

              <p
                className="
                  mt-2
                  max-w-xl
                  text-sm
                  leading-7
                  text-[#021024]/55
                  sm:text-base
                  sm:leading-8
                "
              >
                Association of Universal Data and
                Intelligence — an association centered
                around data, intelligence, technology,
                and innovation.
              </p>
            </motion.div>
          </motion.div>

          {/* =================================================
              AUDI DATA ORBIT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1.1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              justify-center
              lg:justify-end
            "
          >
            <motion.div
              style={{
                x: logoX,
                y: logoY,
              }}
              className="
                relative
                flex
                h-[290px]
                w-[290px]
                items-center
                justify-center
                sm:h-[330px]
                sm:w-[330px]
              "
            >
              {/* =================================================
                  RADIAL FIELD
              ================================================= */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.12, 0.22, 0.12],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  h-56
                  w-56
                  rounded-full
                  bg-white
                  blur-3xl
                "
              />

              {/* =================================================
                  OUTER ORBIT
              ================================================= */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-5
                  rounded-full
                  border
                  border-[#021024]/15
                "
              />

              {/* =================================================
                  SECOND ORBIT
              ================================================= */}

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-14
                  rounded-full
                  border
                  border-dashed
                  border-[#021024]/12
                "
              />

              {/* =================================================
                  THIRD ORBIT
              ================================================= */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-[4.5rem]
                  rounded-full
                  border
                  border-[#021024]/8
                "
              />

              {/* =================================================
                  ORBITING NODES
              ================================================= */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-5
                  rounded-full
                "
              >
                <span
                  className="
                    absolute
                    left-1/2
                    top-[-2px]
                    h-2
                    w-2
                    -translate-x-1/2
                    rounded-full
                    bg-[#021024]
                    shadow-[0_0_12px_rgba(2,16,36,0.25)]
                  "
                />
              </motion.div>

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-14
                  rounded-full
                "
              >
                <span
                  className="
                    absolute
                    bottom-[-2px]
                    left-1/2
                    h-1.5
                    w-1.5
                    -translate-x-1/2
                    rounded-full
                    bg-[#021024]/70
                  "
                />
              </motion.div>

              {/* =================================================
                  CROSSHAIR
              ================================================= */}

              <div className="pointer-events-none absolute inset-[5.5rem]">
                <span className="absolute left-1/2 top-0 h-full w-px bg-[#021024]/8" />
                <span className="absolute left-0 top-1/2 h-px w-full bg-[#021024]/8" />
              </div>

              {/* =================================================
                  SCANNING BEAM
              ================================================= */}

              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-[4.8rem]
                  rounded-full
                "
              >
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-1/2
                    w-px
                    origin-bottom
                    -translate-x-1/2
                    bg-gradient-to-t
                    from-[#021024]/25
                    to-transparent
                  "
                />
              </motion.div>

              {/* =================================================
                  LOGO
              ================================================= */}

              <motion.img
                src={audiLogo}
                alt="Association of Universal Data and Intelligence"
                animate={{
                  scale: [1, 1.035, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  z-10
                  h-48
                  w-48
                  object-contain
                  sm:h-56
                  sm:w-56
                "
              />

              {/* =================================================
                  DATA READOUT
              ================================================= */}

              <motion.div
                animate={{
                  opacity: [0.35, 0.7, 0.35],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  bottom-[-4px]
                  left-1/2
                  -translate-x-1/2
                  whitespace-nowrap
                "
              >
                <span
                  className="
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-[#021024]/45
                  "
                >
                  DATA / INTELLIGENCE / 01
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* =================================================
            STATISTICS
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="
            mt-14
            grid
            border-y
            border-[#021024]/15
            sm:grid-cols-3
          "
        >
          {/* =================================================
              STUDENTS
          ================================================= */}

          <motion.div
            whileHover={{
              backgroundColor:
                "rgba(255,255,255,0.22)",
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              group
              relative
              border-b
              border-[#021024]/15
              px-6
              py-8
              sm:border-b-0
              sm:border-r
              sm:px-8
            "
          >
            <span
              className="
                absolute
                right-6
                top-5
                text-[8px]
                font-medium
                tracking-[0.3em]
                text-[#021024]/25
              "
            >
              01
            </span>

            <p
              className="
                text-5xl
                font-semibold
                tracking-[-0.06em]
                text-[#021024]
              "
            >
              <Counter
                value={400}
                suffix="+"
              />
            </p>

            <p
              className="
                mt-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#021024]/45
              "
            >
              Students
            </p>

            <div
              className="
                mt-5
                h-px
                w-8
                bg-[#021024]/25
                transition-all
                duration-500
                group-hover:w-16
              "
            />
          </motion.div>

          {/* =================================================
              STAFF
          ================================================= */}

          <motion.div
            whileHover={{
              backgroundColor:
                "rgba(255,255,255,0.22)",
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              group
              relative
              border-b
              border-[#021024]/15
              px-6
              py-8
              sm:border-b-0
              sm:border-r
              sm:px-8
            "
          >
            <span
              className="
                absolute
                right-6
                top-5
                text-[8px]
                font-medium
                tracking-[0.3em]
                text-[#021024]/25
              "
            >
              02
            </span>

            <p
              className="
                text-5xl
                font-semibold
                tracking-[-0.06em]
                text-[#021024]
              "
            >
              <Counter
                value={20}
                suffix="+"
              />
            </p>

            <p
              className="
                mt-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#021024]/45
              "
            >
              Faculty & Staff
            </p>

            <div
              className="
                mt-5
                h-px
                w-8
                bg-[#021024]/25
                transition-all
                duration-500
                group-hover:w-16
              "
            />
          </motion.div>

          {/* =================================================
              EVENTS
          ================================================= */}

          <motion.div
            whileHover={{
              backgroundColor:
                "rgba(255,255,255,0.22)",
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              group
              relative
              px-6
              py-8
              sm:px-8
            "
          >
            <span
              className="
                absolute
                right-6
                top-5
                text-[8px]
                font-medium
                tracking-[0.3em]
                text-[#021024]/25
              "
            >
              03
            </span>

            <p
              className="
                text-5xl
                font-semibold
                tracking-[-0.06em]
                text-[#021024]
              "
            >
              <Counter
                value={30}
                suffix="+"
              />
            </p>

            <p
              className="
                mt-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#021024]/45
              "
            >
              Events Hosted
            </p>

            <div
              className="
                mt-5
                h-px
                w-8
                bg-[#021024]/25
                transition-all
                duration-500
                group-hover:w-16
              "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { About };