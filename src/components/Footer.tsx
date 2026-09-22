// import {
//   GraduationCap,
//   Globe,
//   Linkedin,
//   Facebook,
//   Instagram,
//   Youtube,
// } from "lucide-react";

// export function Footer() {
//   return (
//     <footer className="px-3 pb-6 sm:px-6">
//       <div className="mx-auto max-w-full">
//         <div className="container-deep p-8 sm:p-10">
          
//           {/* TOP GRID */}
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
//             {/* EVENT INFO */}
//             <div>
//               <div className="flex items-center gap-2.5">
//                 <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary text-primary">
//                   <GraduationCap className="h-5 w-5" />
//                 </span>
//                 <span className="font-display text-base font-bold">
//                   Yukti'26
//                 </span>
//               </div>

//               <p className="mt-4 text-sm text-secondary/85">
//                 National Level Conference <br />
//                 By INFYNEX <br />
//                 14–15th May 2026 <br />
//                 Dr. MGR Educational and Research Institute
//               </p>
//             </div>

//             {/* NAVIGATE */}
//             <FooterCol
//               title="Navigate"
//               links={[
//                 ["About", "#about"],
//                 ["Call for Papers", "#papers"],
//                 ["Speakers", "#speakers"],
//                 ["Schedule", "#schedule"],
//               ]}
//             />

//             {/* ATTEND */}
//             <FooterCol
//               title="Attend"
//               links={[
//                 ["Registration Fee", "#Registration"],
//                 ["Gallery", "#Gallery"],
//                 ["Contact", "#contact"],
//               ]}
//             />

//             {/* SOCIAL */}
//             <div>
//               <p className="font-display text-sm font-semibold uppercase tracking-wider text-secondary/80">
//                 Connect
//               </p>

//               <div className="mt-4 flex items-center gap-3 flex-wrap">
//                 <SocialBtn icon={Globe} href="#" />
//                 <SocialBtn icon={Linkedin} href="https://www.linkedin.com/in/ds-department-mgreri-17b960378" />
//                 <SocialBtn icon={Facebook} href="https://www.facebook.com/mgreri.ds/" />
//                 <SocialBtn icon={Instagram} href="https://www.instagram.com/mgreri.ds/" />
//                 <SocialBtn icon={Youtube} href="https://www.youtube.com/@mgrdsai" />
//               </div>
//             </div>
//           </div>

//           {/* BOTTOM */}
//           <div className="mt-10 border-t border-white/10 pt-6 text-xs text-secondary/70 text-center">
//             © Yukti'26 · Department of Data Science, Dr. MGR Educational and Research Institute.
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function FooterCol({
//   title,
//   links,
// }: {
//   title: string;
//   links: [string, string][];
// }) {
//   return (
//     <div>
//       <p className="font-display text-sm font-semibold uppercase tracking-wider text-secondary/80">
//         {title}
//       </p>
//       <ul className="mt-4 space-y-2 text-sm">
//         {links.map(([label, href]) => (
//           <li key={href}>
//             <a
//               href={href}
//               className="text-secondary/85 transition-colors hover:text-secondary"
//             >
//               {label}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function SocialBtn({
//   icon: Icon,
//   href,
// }: {
//   icon: React.ComponentType<{ className?: string }>;
//   href: string;
// }) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20"
//     >
//       <Icon className="h-5 w-5 text-secondary" />
//     </a>
//   );
// }




"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}



/* =========================================================
   STYLES
========================================================= */

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

.cinematic-footer-wrapper {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;

  --footer-bg: #021024;
  --footer-blue: #7DA0CA;
  --footer-light: #C1E8FF;

  --pill-bg-1: rgba(193, 232, 255, 0.08);
  --pill-bg-2: rgba(125, 160, 202, 0.035);
  --pill-border: rgba(193, 232, 255, 0.13);
  --pill-highlight: rgba(255, 255, 255, 0.10);
}

@keyframes footer-breathe {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.35;
  }

  100% {
    transform: translate(-50%, -50%) scale(1.12);
    opacity: 0.65;
  }
}

@keyframes footer-marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@keyframes footer-heartbeat {
  0%,
  100% {
    transform: scale(1);
  }

  15%,
  45% {
    transform: scale(1.18);
  }

  30% {
    transform: scale(1);
  }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-marquee {
  animation: footer-marquee 38s linear infinite;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

/* =========================================================
   GRID
========================================================= */

.footer-bg-grid {
  background-size: 60px 60px;

  background-image:
    linear-gradient(
      to right,
      rgba(193, 232, 255, 0.035) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      rgba(193, 232, 255, 0.035) 1px,
      transparent 1px
    );

  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 25%,
    black 75%,
    transparent
  );

  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent,
    black 25%,
    black 75%,
    transparent
  );
}

/* =========================================================
   AURORA
========================================================= */

.footer-aurora {
  background:
    radial-gradient(
      circle at 50% 50%,
      rgba(193, 232, 255, 0.14) 0%,
      rgba(125, 160, 202, 0.09) 35%,
      transparent 70%
    );
}

/* =========================================================
   GLASS PILL
========================================================= */

.footer-glass-pill {
  background:
    linear-gradient(
      145deg,
      var(--pill-bg-1) 0%,
      var(--pill-bg-2) 100%
    );

  box-shadow:
    0 12px 35px -12px rgba(0, 0, 0, 0.45),
    inset 0 1px 1px var(--pill-highlight),
    inset 0 -1px 2px rgba(0, 0, 0, 0.25);

  border: 1px solid var(--pill-border);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  transition:
    transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.4s ease,
    border-color 0.4s ease,
    box-shadow 0.4s ease;
}

.footer-glass-pill:hover {
  background:
    linear-gradient(
      145deg,
      rgba(193, 232, 255, 0.13),
      rgba(125, 160, 202, 0.06)
    );

  border-color: rgba(193, 232, 255, 0.30);

  box-shadow:
    0 20px 45px -12px rgba(0, 0, 0, 0.55),
    inset 0 1px 1px rgba(255, 255, 255, 0.18);
}

/* =========================================================
   GIANT BACKGROUND TEXT
========================================================= */

.footer-giant-bg-text {
  font-size: 25vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.07em;

  color: transparent;

  -webkit-text-stroke:
    1px rgba(193, 232, 255, 0.08);

  background:
    linear-gradient(
      180deg,
      rgba(193, 232, 255, 0.11) 0%,
      rgba(193, 232, 255, 0.015) 65%,
      transparent 100%
    );

  -webkit-background-clip: text;
  background-clip: text;
}

/* =========================================================
   MAIN HEADING
========================================================= */

.footer-text-glow {
  background:
    linear-gradient(
      180deg,
      #ffffff 0%,
      #c1e8ff 55%,
      #7da0ca 100%
    );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  filter:
    drop-shadow(
      0 0 25px rgba(193, 232, 255, 0.12)
    );
}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 767px) {

  .footer-giant-bg-text {
    font-size: 34vw;
  }

}
`;

/* =========================================================
   MAGNETIC BUTTON
========================================================= */

type MagneticButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      as?: React.ElementType;
    };

const MagneticButton = React.forwardRef<
  HTMLElement,
  MagneticButtonProps
>(({ className = "", children, as: Component = "button", ...props }, forwardedRef) => {

  const localRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const element = localRef.current;

    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const x =
        e.clientX -
        rect.left -
        centerX;

      const y =
        e.clientY -
        rect.top -
        centerY;

      gsap.to(element, {
        x: x * 0.22,
        y: y * 0.22,
        rotationX: -y * 0.08,
        rotationY: x * 0.08,
        scale: 1.04,
        duration: 0.35,
        ease: "power3.out",
        overwrite: true,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.9,
        ease: "elastic.out(1, 0.35)",
        overwrite: true,
      });
    };

    element.addEventListener(
      "mousemove",
      handleMouseMove
    );

    element.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      element.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      element.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <Component
      ref={(node: HTMLElement) => {
        localRef.current = node;

        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          (
            forwardedRef as React.MutableRefObject<HTMLElement | null>
          ).current = node;
        }
      }}
      className={`cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
});

MagneticButton.displayName =
  "MagneticButton";

/* =========================================================
   MARQUEE
========================================================= */

const MarqueeItem = () => (
  <div className="flex items-center gap-10 px-6">

    <span>
      DATA SCIENCE
    </span>

    <span className="text-[#7DA0CA]">
      ✦
    </span>

    <span>
      ARTIFICIAL INTELLIGENCE
    </span>

    <span className="text-[#C1E8FF]">
      ✦
    </span>

    <span>
      MACHINE LEARNING
    </span>

    <span className="text-[#7DA0CA]">
      ✦
    </span>

    <span>
      INNOVATION
    </span>

    <span className="text-[#C1E8FF]">
      ✦
    </span>

    <span>
      FUTURE OF DATA
    </span>

    <span className="text-[#7DA0CA]">
      ✦
    </span>

  </div>
);

/* =========================================================
   MAIN FOOTER
========================================================= */

export function Footer() {

  const navigate = useNavigate();

  const wrapperRef =
    useRef<HTMLDivElement>(null);

  const giantTextRef =
    useRef<HTMLDivElement>(null);

  const headingRef =
    useRef<HTMLHeadingElement>(null);

  const linksRef =
    useRef<HTMLDivElement>(null);

  /* =======================================================
     GSAP SCROLL ANIMATION
  ======================================================= */

  useEffect(() => {

    if (typeof window === "undefined") {
      return;
    }

    if (!wrapperRef.current) {
      return;
    }

    const ctx = gsap.context(() => {

      /* -----------------------------------------------
         GIANT TEXT PARALLAX
      ------------------------------------------------ */

      gsap.fromTo(
        giantTextRef.current,

        {
          y: "12vh",
          scale: 0.82,
          opacity: 0,
        },

        {
          y: "0vh",
          scale: 1,
          opacity: 1,

          ease: "power1.out",

          scrollTrigger: {
            trigger:
              wrapperRef.current,

            start: "top 85%",
            end: "bottom bottom",

            scrub: 1.2,
          },
        }
      );

      /* -----------------------------------------------
         CONTENT REVEAL
      ------------------------------------------------ */

      gsap.fromTo(
        [headingRef.current, linksRef.current],

        {
          y: 55,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,

          stagger: 0.16,

          ease: "power3.out",

          scrollTrigger: {
            trigger:
              wrapperRef.current,

            start: "top 55%",
            end: "bottom bottom",

            scrub: 1,
          },
        }
      );

    }, wrapperRef);

    return () => {
      ctx.revert();
    };

  }, []);

  /* =======================================================
     BACK TO TOP
  ======================================================= */

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: STYLES,
        }}
      />

      {/* =================================================
          FOOTER REVEAL WRAPPER
      ================================================= */}

      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{
          clipPath:
            "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        }}
      >

        {/* =================================================
            FIXED CINEMATIC FOOTER
        ================================================= */}

        <footer
          className="
            fixed
            bottom-0
            left-0
            flex
            h-screen
            w-full
            flex-col
            justify-between
            overflow-hidden
            bg-[#021024]
            text-white
            cinematic-footer-wrapper
          "
        >

          {/* =================================================
              AMBIENT AURORA
          ================================================= */}

          <div
            className="
              footer-aurora
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-0
              h-[60vh]
              w-[80vw]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%]
              blur-[90px]
              animate-footer-breathe
            "
          />

          {/* =================================================
              GRID
          ================================================= */}

          <div
            className="
              footer-bg-grid
              pointer-events-none
              absolute
              inset-0
              z-0
            "
          />

          {/* =================================================
              GIANT BACKGROUND TEXT
          ================================================= */}

          <div
            ref={giantTextRef}
            className="
              footer-giant-bg-text
              pointer-events-none
              absolute
              bottom-[-4vh]
              left-1/2
              z-0
              -translate-x-1/2
              whitespace-nowrap
              select-none
            "
          >
            AUDI
          </div>

          {/* =================================================
              TOP MARQUEE
          ================================================= */}

          <div
            className="
              absolute
              left-0
              top-12
              z-10
              w-full
              -rotate-2
              scale-110
              overflow-hidden
              border-y
              border-[#C1E8FF]/10
              bg-[#021024]/70
              py-4
              shadow-2xl
              backdrop-blur-md
            "
          >

            <div
              className="
                flex
                w-max
                animate-footer-marquee
                text-[10px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#C1E8FF]/55
                md:text-xs
              "
            >

              <MarqueeItem />
              <MarqueeItem />

            </div>

          </div>

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              flex
              w-full
              max-w-5xl
              flex-1
              flex-col
              items-center
              justify-center
              px-6
              pt-20
            "
          >

            <p
              className="
                mb-5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#7DA0CA]
                md:text-xs
              "
            >
              Department of Data Science
            </p>

            <h2
              ref={headingRef}
              className="
                footer-text-glow
                mb-10
                text-center
                text-5xl
                font-black
                leading-[0.95]
                tracking-[-0.055em]
                md:text-7xl
                lg:text-8xl
              "
            >
              Shape the Future
              <br />
              with Data.
            </h2>

            <p
              className="
                mb-10
                max-w-xl
                text-center
                text-sm
                leading-6
                text-white/45
                md:text-base
              "
            >
              Exploring data, intelligence and innovation
              to build solutions for the world ahead.
            </p>

            {/* =================================================
                NAVIGATION PILLS
            ================================================= */}

            <div
              ref={linksRef}
              className="
                flex
                w-full
                flex-wrap
                items-center
                justify-center
                gap-3
              "
            >

              <MagneticButton
                as="a"
                href="/"
                className="
                  footer-glass-pill
                  rounded-full
                  px-7
                  py-3.5
                  text-xs
                  font-semibold
                  text-white/75
                  md:px-8
                "
              >
                Home
              </MagneticButton>

              <MagneticButton
                as="a"
                href="#about"
                className="
                  footer-glass-pill
                  rounded-full
                  px-7
                  py-3.5
                  text-xs
                  font-semibold
                  text-white/75
                  md:px-8
                "
              >
                About
              </MagneticButton>

<MagneticButton
  as="a"
  href="/events"
  onClick={(e) => {
    e.preventDefault();
    navigate("/events");
  }}
  className="
    footer-glass-pill
    rounded-full
    px-7
    py-3.5
    text-xs
    font-semibold
    text-white/75
    md:px-8
  "
>
  Events
</MagneticButton>

              <MagneticButton
                as="a"
                href="#gallery"
                className="
                  footer-glass-pill
                  rounded-full
                  px-7
                  py-3.5
                  text-xs
                  font-semibold
                  text-white/75
                  md:px-8
                "
              >
                Gallery
              </MagneticButton>

              <MagneticButton
                as="a"
                href="#contact"
                className="
                  footer-glass-pill
                  rounded-full
                  px-7
                  py-3.5
                  text-xs
                  font-semibold
                  text-white/75
                  md:px-8
                "
              >
                Contact
              </MagneticButton>

            </div>

          </div>

          {/* =================================================
              BOTTOM BAR
          ================================================= */}

          <div
            className="
              relative
              z-20
              flex
              w-full
              flex-col
              items-center
              justify-between
              gap-5
              px-6
              pb-7
              md:flex-row
              md:px-12
            "
          >

            {/* COPYRIGHT */}

            <div
              className="
                order-2
                text-center
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white/30
                md:order-1
                md:text-left
                md:text-[10px]
              "
            >
              © 2026 Department of Data Science
            </div>

            {/* COLLEGE */}

            <div
              className="
                order-1
                flex
                items-center
                gap-2
                rounded-full
                border
                border-[#C1E8FF]/10
                bg-white/[0.035]
                px-5
                py-2.5
                backdrop-blur-md
                md:order-2
              "
            >

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-white/35
                  md:text-[10px]
                "
              >
                Dr. M.G.R. Educational &
                Research Institute
              </span>

            </div>

            {/* BACK TO TOP */}

            <MagneticButton
              as="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="
                group
                order-3
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                footer-glass-pill
                text-white/55
                md:h-12
                md:w-12
              "
            >

              <svg
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1.5
                "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >

                <path
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />

              </svg>

            </MagneticButton>

          </div>

        </footer>

      </div>
    </>
  );
}

export default Footer;