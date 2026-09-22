import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import clgLogo from "@/assets/clg-logo.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

const links = [
  { name: "Home", href: "#home" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "#contact" },
];


  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="fixed inset-x-0 top-0 z-50">
        <motion.div
          initial={false}
          animate={{
            y: scrolled ? 10 : 0,

            width: scrolled
              ? "calc(100% - 80px)"
              : "100%",

            maxWidth: scrolled
              ? "980px"
              : "1600px",
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
            relative mx-auto
            ${scrolled ? "rounded-2xl" : ""}
          `}
        >
          {/* =================================================
              NAVBAR SURFACE
          ================================================== */}

          <motion.div
            initial={false}
            animate={{
              backgroundColor: scrolled
                ? "#C3E8FD"
                : "rgba(237,235,221,0)",

              borderColor: scrolled
                ? "#A9D8EF"
                : "transparent",

              boxShadow: scrolled
                ? "0 10px 30px rgba(74,122,148,0.10)"
                : "none",

              backdropFilter: scrolled
                ? "blur(8px)"
                : "blur(0px)",
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`
              relative
              w-full
              border
              ${scrolled ? "rounded-2xl" : "border-transparent"}
            `}
          >
            {/* =================================================
                INNER NAVBAR
            ================================================== */}

            <div
              className="
                mx-auto
                flex
                items-center
                justify-between
                px-5
                transition-[height,padding]
                duration-500
                sm:px-7
                md:px-8
                lg:px-10
              "
              style={{
                height: scrolled
                  ? "60px"
                  : "92px",
              }}
            >
              {/* =================================================
                  BRAND
              ================================================== */}

              <motion.a
                href="#home"
                onClick={closeMenu}
                layout
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex min-w-0 items-center"
              >
                {/* =================================================
                    COLLEGE LOGO
                    Only visible before scrolling
                ================================================== */}

                <motion.div
                  initial={false}
                  animate={{
                    width: scrolled
                      ? 0
                      : "auto",

                    opacity: scrolled
                      ? 0
                      : 1,

                    scale: scrolled
                      ? 0.85
                      : 1,

                    marginRight: scrolled
                      ? 0
                      : undefined,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="shrink-0 overflow-hidden"
                >
                  <img
                    src={clgLogo}
                    alt="Dr. M.G.R. Educational and Research Institute"
                    className="
                      h-[60px]
                      w-auto
                      shrink-0
                      object-contain
                      transition-transform
                      duration-500
                      hover:scale-[1.025]
                      sm:h-[66px]
                    "
                  />
                </motion.div>

                {/* =================================================
                    SEPARATOR
                    Only visible before scrolling
                ================================================== */}

                <motion.div
                  initial={false}
                  animate={{
                    width: scrolled
                      ? 0
                      : 1,

                    opacity: scrolled
                      ? 0
                      : 1,

                    marginLeft: scrolled
                      ? 0
                      : undefined,

                    marginRight: scrolled
                      ? 0
                      : undefined,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    h-9
                    shrink-0
                    bg-[#630000]/20
                    sm:mx-6
                  "
                />

                {/* =================================================
                    DEPARTMENT
                ================================================== */}

                <motion.div
                  layout
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    flex
                    min-w-0
                    items-center
                  "
                >
                  {/* Before scroll:
                      two lines
                  */}

                  <motion.div
                    initial={false}
                    animate={{
                      display: scrolled
                        ? "none"
                        : "flex",
                    }}
                    className="
                      hidden
                      flex-col
                      justify-center
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.34em]
                        text-[#630000]
                        sm:text-[10px]
                      "
                    >
                      Department of
                    </span>

                    <span
                      className="
                        mt-1
                        whitespace-nowrap
                        text-[15px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#1B1717]
                        sm:text-[16px]
                      "
                    >
                      Data Science
                    </span>
                  </motion.div>

                  {/* =================================================
                      AFTER SCROLL:
                      ONE SINGLE LINE
                  ================================================== */}

                  <motion.span
                    initial={false}
                    animate={{
                      opacity: scrolled
                        ? 1
                        : 0,

                      scale: scrolled
                        ? 1
                        : 0.94,

                      x: scrolled
                        ? 0
                        : -8,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: scrolled ? 0.08 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`
                      whitespace-nowrap
                      text-[12px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-[#1B1717]
                      sm:text-[13px]
                      md:text-[14px]
                      ${
                        scrolled
                          ? "block"
                          : "hidden"
                      }
                    `}
                  >
                    Department of Data Science
                  </motion.span>
                </motion.div>
              </motion.a>

              {/* =================================================
                  DESKTOP NAVIGATION
              ================================================== */}

              <nav
  className="
    hidden
    items-center
    gap-7
    md:flex
    lg:gap-9
  "
>
  {links.map((link, index) => {
    const navContent = (
      <>
        <motion.span
          animate={{
            color: "#1B1717",
            fontSize: scrolled ? "10px" : "12px",
            letterSpacing: scrolled ? "0.18em" : "0.23em",
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            relative
            block
            font-semibold
            uppercase
            transition-all
            duration-300
            group-hover:-translate-y-[1px]
            group-hover:text-[#630000]
          "
        >
          {link.name}
        </motion.span>

        <motion.span
          initial={{
            scaleX: 0,
          }}
          whileHover={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            bottom-0
            left-0
            h-px
            w-full
            origin-left
            bg-[#810100]
          "
        />
      </>
    );

    return link.href.startsWith("/") ? (
      <motion.div
        key={link.name}
        initial={{
          opacity: 0,
          y: -8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.15 + index * 0.07,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative"
      >
        <Link
          to={link.href}
          className="
            group
            relative
            block
            py-2
          "
        >
          {navContent}
        </Link>
      </motion.div>
    ) : (
      <motion.a
        key={link.name}
        href={link.href}
        initial={{
          opacity: 0,
          y: -8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.15 + index * 0.07,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          group
          relative
          py-2
        "
      >
        {navContent}
      </motion.a>
    );
  })}
</nav>

              {/* =================================================
                  MOBILE BUTTON
              ================================================== */}

              <motion.button
                type="button"
                aria-label={
                  mobileOpen
                    ? "Close navigation"
                    : "Open navigation"
                }
                onClick={() =>
                  setMobileOpen(
                    (value) => !value,
                  )
                }
                whileTap={{
                  scale: 0.9,
                }}
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-[#1B1717]
                  transition-colors
                  duration-300
                  hover:bg-[#A9D8EF]/50
                  md:hidden
                "
              >
                <motion.div
                  animate={{
                    rotate: mobileOpen
                      ? 90
                      : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  {mobileOpen ? (
                    <X
                      size={22}
                      strokeWidth={1.4}
                    />
                  ) : (
                    <Menu
                      size={22}
                      strokeWidth={1.4}
                    />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <motion.div
        initial={false}
        animate={{
          opacity: mobileOpen ? 1 : 0,
          y: mobileOpen ? 0 : -12,
          pointerEvents: mobileOpen
            ? "auto"
            : "none",
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          left-0
          right-0
          top-[60px]
          z-40
          px-3
          md:hidden
        "
      >
        <motion.div
          animate={{
            backgroundColor: "#C3E8FD",
            borderColor: "#A9D8EF",
          }}
          className="
            overflow-hidden
            rounded-2xl
            border
            shadow-[0_12px_30px_rgba(74,122,148,0.10)]
          "
        >
          <nav className="flex flex-col px-5 py-2">
   {links.map((link, index) => {
  const mobileClassName = `
    border-b
    border-[#A9D8EF]
    py-4
    text-[11px]
    font-semibold
    uppercase
    tracking-[0.22em]
    text-[#1B1717]
    last:border-0
  `;

  return link.href.startsWith("/") ? (
    <Link
      key={link.name}
      to={link.href}
      onClick={closeMenu}
      className={mobileClassName}
    >
      <motion.div
        initial={{
          opacity: 0,
          x: -12,
        }}
        animate={{
          opacity: mobileOpen ? 1 : 0,
          x: mobileOpen ? 0 : -12,
        }}
        transition={{
          duration: 0.28,
          delay: mobileOpen ? index * 0.06 : 0,
        }}
      >
        {link.name}
      </motion.div>
    </Link>
  ) : (
    <motion.a
      key={link.name}
      href={link.href}
      onClick={closeMenu}
      initial={{
        opacity: 0,
        x: -12,
      }}
      animate={{
        opacity: mobileOpen ? 1 : 0,
        x: mobileOpen ? 0 : -12,
      }}
      transition={{
        duration: 0.28,
        delay: mobileOpen ? index * 0.06 : 0,
      }}
      className={mobileClassName}
    >
      {link.name}
    </motion.a>
  );
})}
          </nav>
        </motion.div>
      </motion.div>
    </>
  );
};

export { Navbar };