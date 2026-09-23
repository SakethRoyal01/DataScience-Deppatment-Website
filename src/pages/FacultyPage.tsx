import React from "react";
import { Link } from "react-router-dom";

interface StaffMember {
  name: string;
  designation: string;
  image: string;
}

/* =========================================================
   30 SAMPLE STAFF MEMBERS
   Replace these details with your real faculty details later
   ========================================================= */

const staffMembers: StaffMember[] = [
  {
    name: "Ananya Sharma",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=1",
  },
  {
    name: "Rahul Kumar",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=2",
  },
  {
    name: "Priya Nair",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=3",
  },
  {
    name: "Arjun Mehta",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=4",
  },
  {
    name: "Sneha Rao",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=5",
  },
  {
    name: "Vikram Singh",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=6",
  },
  {
    name: "Meera Iyer",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=7",
  },
  {
    name: "Karthik Reddy",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=8",
  },
  {
    name: "Divya Menon",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=9",
  },
  {
    name: "Aditya Verma",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=10",
  },
  {
    name: "Kavya Krishnan",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=11",
  },
  {
    name: "Naveen Raj",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=13",
  },
  {
    name: "Ishita Das",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=14",
  },
  {
    name: "Suresh Babu",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=15",
  },
  {
    name: "Neha Kapoor",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=16",
  },
  {
    name: "Rohit Malhotra",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=17",
  },
  {
    name: "Aishwarya Menon",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=18",
  },
  {
    name: "Sanjay Kumar",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=19",
  },
  {
    name: "Harini Rao",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=20",
  },
  {
    name: "Manoj Patel",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=21",
  },
  {
    name: "Pooja Sharma",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=22",
  },
  {
    name: "Akash Gupta",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=23",
  },
  {
    name: "Lakshmi Devi",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=24",
  },
  {
    name: "Varun Joshi",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=25",
  },
  {
    name: "Riya Thomas",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=26",
  },
  {
    name: "Abhishek Rao",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=27",
  },
  {
    name: "Nandini Shah",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=28",
  },
  {
    name: "Vivek Anand",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=29",
  },
  {
    name: "Swetha Ramesh",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=30",
  },
  {
    name: "Mohan Krishna",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=31",
  },
];

/* =========================================================
   FACULTY PAGE
   ========================================================= */

const FacultyPage = () => {
  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="relative overflow-hidden bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

        {/* Decorative background circles */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100/60" />

        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-slate-100" />

        <div className="relative mx-auto max-w-5xl text-center">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 sm:text-sm">
            Our Faculty
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            All Staff Members
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Meet the dedicated faculty members of the Department of
            Data Science who contribute to academic excellence,
            research and student development.
          </p>

        </div>
      </section>

      {/* =====================================================
          STAFF GRID
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

        {/* Section heading */}
        <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
              Faculty Directory
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Our Teaching Staff
            </h2>
          </div>

          <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            {staffMembers.length} Faculty Members
          </div>

        </div>

        {/* ===================================================
            STAFF GRID
        =================================================== */}

        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

          {staffMembers.map((member, index) => (

            <div
              key={`${member.name}-${index}`}
              className="group"
            >

              {/* =================================================
                  STAFF IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  aspect-[4/5]
                  overflow-hidden
                  rounded-2xl
                  bg-slate-100
                  shadow-sm
                  transition-all
                  duration-500
                  group-hover:-translate-y-1
                  group-hover:shadow-xl
                "
              >

                {/* Staff image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    grayscale
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:grayscale-0
                  "
                />

                {/* =================================================
                    DARK GRADIENT
                    Appears when hovering
                ================================================= */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/85
                    via-black/25
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* =================================================
                    DETAILS ON IMAGE
                    Hidden normally
                    Visible on hover
                ================================================= */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    translate-y-4
                    p-5
                    text-white
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >

                  <h3 className="text-base font-semibold sm:text-lg">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm text-white/80">
                    {member.designation}
                  </p>

                </div>

              </div>

              {/* =================================================
                  NORMAL DETAILS BELOW IMAGE

                  These are visible normally.
                  They disappear when the card is hovered.
              ================================================= */}

              <div
                className="
                  mt-4
                  text-center
                  transition-opacity
                  duration-300
                  group-hover:opacity-0
                "
              >

                <h3 className="text-base font-semibold text-slate-800">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {member.designation}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* =====================================================
            BACK BUTTON
        ===================================================== */}

        <div className="mt-14 flex justify-center">

          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-300
              bg-white
              px-6
              py-3
              text-sm
              font-semibold
              text-slate-700
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-700
              hover:text-blue-700
              hover:shadow-md
              sm:px-7
              sm:py-3.5
            "
          >
            <span>←</span>
            Back to Home
          </Link>

        </div>

      </section>

    </main>
  );
};

export default FacultyPage;