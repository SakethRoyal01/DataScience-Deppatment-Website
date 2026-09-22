import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const staff = [
  {
    name: "Faculty Member",
    designation: "Assistant Professor",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Faculty Member",
    designation: "Assistant Professor",
    image:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Faculty Member",
    designation: "Assistant Professor",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Faculty Member",
    designation: "Assistant Professor",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=800&q=80",
  },
];

export const Staff = () => {
  return (
    <section
      id="faculty"
      className="bg-white px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
              Our People
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Faculty & Staff
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Meet the faculty members and staff who contribute to teaching,
              research, innovation, and the academic growth of our students.
            </p>
          </div>

          <a
            href="/faculty"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-900 transition-colors hover:text-blue-600"
          >
            View all faculty
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* HOD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16 overflow-hidden rounded-3xl bg-slate-950"
        >
          <div className="grid items-center lg:grid-cols-[0.8fr_1.2fr]">

            {/* HOD image placeholder */}
            <div className="relative h-[380px] overflow-hidden sm:h-[450px] lg:h-[480px]">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85"
                alt="Head of the Department"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>

            {/* HOD information */}
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                Department Leadership
              </p>

              <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Head of the Department
              </h3>

              <p className="mt-4 text-xl text-slate-300">
                Dr. [HOD Name]
              </p>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Leading the Department of Data Science with a focus on
                academic excellence, innovation, research, and the overall
                development of our students.
              </p>

              <div className="mt-8 h-px w-20 bg-blue-500" />
            </div>
          </div>
        </motion.div>

        {/* Selected faculty */}
        <div>
          <div className="mb-7 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-slate-900">
              Faculty Members
            </h3>

            <span className="text-sm text-slate-400">
              Featured Faculty
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {staff.map((member, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                <div className="p-5">
                  <h4 className="font-semibold text-slate-900">
                    {member.name}
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    {member.designation}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};