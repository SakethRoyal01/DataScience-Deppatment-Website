import React from "react";
import { Link } from "react-router-dom";

interface StaffMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

/* =========================================================
   30 STAFF MEMBERS
   Replace these sample details with your real faculty later
   ========================================================= */

const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=1",
  },
  {
    id: 2,
    name: "Dr. Rahul Kumar",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=2",
  },
  {
    id: 3,
    name: "Dr. Priya Nair",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=3",
  },
  {
    id: 4,
    name: "Dr. Arjun Mehta",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=4",
  },
  {
    id: 5,
    name: "Dr. Sneha Rao",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=5",
  },
  {
    id: 6,
    name: "Dr. Vikram Singh",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=6",
  },
  {
    id: 7,
    name: "Dr. Meera Iyer",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=7",
  },
  {
    id: 8,
    name: "Dr. Karthik Reddy",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=8",
  },
  {
    id: 9,
    name: "Dr. Divya Menon",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=9",
  },
  {
    id: 10,
    name: "Dr. Aditya Verma",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=10",
  },
  {
    id: 11,
    name: "Dr. Kavya Krishnan",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=11",
  },
  {
    id: 12,
    name: "Dr. Naveen Raj",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=13",
  },
  {
    id: 13,
    name: "Dr. Ishita Das",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=14",
  },
  {
    id: 14,
    name: "Dr. Suresh Babu",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=15",
  },
  {
    id: 15,
    name: "Dr. Neha Kapoor",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=16",
  },
  {
    id: 16,
    name: "Dr. Rohit Malhotra",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=17",
  },
  {
    id: 17,
    name: "Dr. Aishwarya Menon",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=18",
  },
  {
    id: 18,
    name: "Dr. Sanjay Kumar",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=19",
  },
  {
    id: 19,
    name: "Dr. Harini Rao",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=20",
  },
  {
    id: 20,
    name: "Dr. Manoj Patel",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=21",
  },
  {
    id: 21,
    name: "Dr. Pooja Sharma",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=22",
  },
  {
    id: 22,
    name: "Dr. Akash Gupta",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=23",
  },
  {
    id: 23,
    name: "Dr. Lakshmi Devi",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=24",
  },
  {
    id: 24,
    name: "Dr. Varun Joshi",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=25",
  },
  {
    id: 25,
    name: "Dr. Riya Thomas",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=26",
  },
  {
    id: 26,
    name: "Dr. Abhishek Rao",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=27",
  },
  {
    id: 27,
    name: "Dr. Nandini Shah",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=28",
  },
  {
    id: 28,
    name: "Dr. Vivek Anand",
    designation: "Professor",
    image: "https://i.pravatar.cc/600?img=29",
  },
  {
    id: 29,
    name: "Dr. Swetha Ramesh",
    designation: "Associate Professor",
    image: "https://i.pravatar.cc/600?img=30",
  },
  {
    id: 30,
    name: "Dr. Mohan Krishna",
    designation: "Assistant Professor",
    image: "https://i.pravatar.cc/600?img=31",
  },
];

/* =========================================================
   HOD
   ========================================================= */

const hod: StaffMember = {
  id: 0,
  name: "Dr. Rajesh Kumar",
  designation: "Head of the Department",
  image: "https://i.pravatar.cc/700?img=12",
};

/* =========================================================
   STAFF CARD
   ========================================================= */

const StaffCard = ({ member }: { member: StaffMember }) => {
  return (
    <div
      className="
        group/staff
        w-[210px]
        flex-shrink-0
        sm:w-[230px]
        md:w-[250px]
      "
    >
      {/* IMAGE */}
      <div
        className="
          relative
          aspect-[4/5]
          overflow-hidden
          rounded-2xl
          bg-slate-200
          shadow-md
        "
      >
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
            group-hover/staff:scale-110
            group-hover/staff:grayscale-0
          "
        />

        {/* Hover gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/85
            via-black/20
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover/staff:opacity-100
          "
        />

        {/* Details over image */}
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
            group-hover/staff:translate-y-0
            group-hover/staff:opacity-100
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

      {/* Normal details below image */}
      <div
        className="
          mt-4
          text-center
          transition-opacity
          duration-300
          group-hover/staff:opacity-0
        "
      >
        <h3 className="text-base font-semibold text-slate-800 sm:text-lg">
          {member.name}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {member.designation}
        </p>
      </div>
    </div>
  );
};

/* =========================================================
   HOD CARD
   ========================================================= */

const HODCard = () => {
  return (
    <div className="group mx-auto w-full max-w-5xl">
      <div
        className="
          relative
          overflow-hidden
          rounded-[2rem]
          border
          border-slate-200
          bg-white
          shadow-[0_20px_60px_rgba(15,23,42,0.10)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-[0_25px_70px_rgba(15,23,42,0.16)]
        "
      >
        {/* Decorative background */}
        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-64
            w-64
            rounded-full
            bg-blue-50
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-24
            -left-24
            h-64
            w-64
            rounded-full
            bg-slate-50
          "
        />

        <div className="relative flex flex-col md:flex-row">
          {/* HOD IMAGE */}
          <div className="relative w-full p-4 sm:p-6 md:w-[42%] md:p-7">
            <div className="relative h-[320px] overflow-hidden rounded-[1.5rem] sm:h-[380px] md:h-[400px]">
              <img
                src={hod.image}
                alt={hod.name}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Hover gradient */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* HOD badge */}
              <div
                className="
                  absolute
                  left-5
                  top-5
                  rounded-full
                  bg-white/90
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-slate-800
                  shadow-lg
                  backdrop-blur-sm
                "
              >
                HOD
              </div>

              {/* Details on image when hovered */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  translate-y-4
                  p-6
                  text-white
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                  Head of the Department
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {hod.name}
                </h3>

                <p className="mt-1 text-sm text-white/80">
                  Department of Data Science
                </p>
              </div>
            </div>
          </div>

          {/* HOD DETAILS */}
          <div
            className="
              relative
              flex
              flex-1
              flex-col
              justify-center
              px-6
              pb-8
              pt-2
              sm:px-8
              sm:pb-10
              md:px-10
              md:py-10
              lg:px-14
            "
          >
            {/* Heading */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-blue-700" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
                Head of the Department
              </span>
            </div>

            {/* Name */}
            <h2
              className="
                mt-5
                text-3xl
                font-bold
                tracking-tight
                text-slate-900
                sm:text-4xl
                lg:text-5xl
              "
            >
              {hod.name}
            </h2>

            {/* Decorative line */}
            <div className="mt-5 h-[3px] w-20 rounded-full bg-blue-700" />

            {/* Department */}
            <p className="mt-6 text-base font-medium text-slate-700 sm:text-lg">
              Department of Data Science
            </p>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Leading the department with academic excellence,
              innovation and research, while inspiring students
              to explore new possibilities in the field of Data
              Science.
            </p>

            {/* Academic Leadership */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50">
                <span className="text-lg text-blue-700">✦</span>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Academic Leadership
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Excellence • Innovation • Research
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   MAIN STAFF SECTION
   ========================================================= */

export const Staff = () => {
  const loopedStaff = [...staffMembers, ...staffMembers];

  return (
    <section
      id="staff"
      className="
        w-full
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* HEADER */}
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          text-center
          sm:px-8
          lg:px-10
        "
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
          Our Faculty
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          Meet Our Team
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
          Meet the experienced faculty members who guide,
          inspire and empower our students through knowledge,
          innovation and research.
        </p>
      </div>

      {/* HOD */}
      <div
        className="
          mx-auto
          mt-12
          max-w-7xl
          px-5
          sm:mt-14
          sm:px-8
          lg:px-10
        "
      >
        <HODCard />
      </div>

      {/* FACULTY HEADING */}
      <div
        className="
          mx-auto
          mt-16
          max-w-7xl
          px-5
          text-center
          sm:mt-20
          sm:px-8
          lg:px-10
        "
      >
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
          Faculty Members
        </p>

        <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
          Our Teaching Staff
        </h2>
      </div>

      {/* =====================================================
          INFINITE STAFF CAROUSEL

          Hover anywhere over this moving track:
          animation pauses.
      ===================================================== */}

      <div className="relative mt-10 w-full overflow-hidden sm:mt-12">
        {/* Left fade */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-10
            h-full
            w-16
            bg-gradient-to-r
            from-white
            to-transparent
            sm:w-28
          "
        />

        {/* Right fade */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-10
            h-full
            w-16
            bg-gradient-to-l
            from-white
            to-transparent
            sm:w-28
          "
        />

        {/* Moving track */}
        <div
          className="
            staff-loop
            flex
            w-max
            gap-5
            px-3
            hover:[animation-play-state:paused]
            sm:gap-6
            sm:px-5
            lg:gap-7
          "
        >
          {loopedStaff.map((member, index) => (
            <StaffCard
              key={`${member.id}-${index}`}
              member={member}
            />
          ))}
        </div>
      </div>

      {/* VIEW ALL STAFF */}
      <div className="mt-12 flex justify-center sm:mt-14">
        <Link
          to="/all-staff"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-blue-700
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            shadow-md
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-blue-800
            hover:shadow-lg
            sm:px-7
            sm:py-3.5
          "
        >
          View All Staff

          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Staff;