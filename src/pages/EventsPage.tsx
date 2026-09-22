import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    number: "01",
    category: "TECHNICAL",
    title: "Technical Symposiums",
    description:
      "Technical symposiums, competitions and innovation-driven events organized by the department.",
  },
  {
    number: "02",
    category: "WORKSHOPS",
    title: "Workshops",
    description:
      "Hands-on learning sessions conducted by faculty members, experts and industry professionals.",
  },
  {
    number: "03",
    category: "HACKATHONS",
    title: "Hackathons",
    description:
      "Collaborative challenges where students build solutions for real-world problems using technology.",
  },
  {
    number: "04",
    category: "DEPARTMENT",
    title: "Department Activities",
    description:
      "Academic, cultural and student-focused activities conducted throughout the academic year.",
  },
  {
    number: "05",
    category: "ACADEMIC",
    title: "Academic Events",
    description:
      "Guest lectures, seminars, expert sessions and academic initiatives for students.",
  },
  {
    number: "06",
    category: "STUDENT",
    title: "Student Activities",
    description:
      "Student-led activities, celebrations, competitions and initiatives within the department.",
  },
];

const EventsPage = () => {
  return (
    <main className="min-h-screen bg-[#F4F9FD] text-[#021024] overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[75vh] flex items-center justify-center px-6 py-24">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C1E8FF]/50 blur-[150px]" />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(2,16,36,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(2,16,36,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#7DA0CA]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#52739C]">
                Department of Data Science
              </span>
            </div>

            <h1 className="max-w-5xl text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.82] tracking-[-0.07em]">
              Events
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-7 text-[#021024]/55 md:text-lg">
              Explore the technical, academic and student-driven events
              organized by the Department of Data Science.
            </p>
          </motion.div>

          {/* Bottom information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-20 flex items-center gap-5"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-[#021024]/35">
              SCROLL TO EXPLORE
            </span>

            <span className="h-px w-20 bg-[#021024]/15" />
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          EVENTS
      ===================================================== */}

      <section className="relative px-6 pb-32">

        <div className="mx-auto max-w-7xl">

          {/* Section heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7DA0CA]" />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#52739C]">
                What We Organize
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-[-0.05em] md:text-6xl">
              All Events
            </h2>
          </motion.div>


          {/* Event cards */}

          <div className="grid gap-5 md:grid-cols-2">

            {events.map((event, index) => (
              <motion.article
                key={event.number}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative min-h-[330px] overflow-hidden rounded-[28px] border border-[#7DA0CA]/20 bg-[#021024] p-8 text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(2,16,36,0.18)] md:p-10"
              >

                {/* Glow */}

                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#7DA0CA]/20 blur-[80px] transition-all duration-700 group-hover:bg-[#C1E8FF]/25" />

                {/* Number */}

                <div className="relative z-10 flex items-start justify-between">

                  <span className="text-xs font-semibold tracking-[0.25em] text-[#7DA0CA]">
                    {event.category}
                  </span>

                  <span className="text-sm font-medium text-white/25">
                    {event.number}
                  </span>

                </div>


                {/* Content */}

                <div className="relative z-10 mt-24">

                  <h3 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                    {event.title}
                  </h3>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/55">
                    {event.description}
                  </p>

                </div>


                {/* Arrow */}

                <div className="absolute bottom-8 right-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-lg transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#C1E8FF]/40 group-hover:bg-[#C1E8FF]/10">
                  ↗
                </div>

              </motion.article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM STATEMENT
      ===================================================== */}

      <section className="relative overflow-hidden border-t border-[#021024]/10 px-6 py-32">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C1E8FF]/40 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-[-0.05em] md:text-6xl"
          >
            Learn. Build. Collaborate.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#021024]/50 md:text-base"
          >
            Discover the experiences, challenges and opportunities created
            by the Department of Data Science.
          </motion.p>

        </div>

      </section>

    </main>
  );
};

export default EventsPage;