import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const events = [
  {
    title: "Data Science Workshop",
    date: "September 2026",
    category: "Workshop",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "AI & Machine Learning Seminar",
    date: "August 2026",
    category: "Seminar",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Student Technical Symposium",
    date: "July 2026",
    category: "Event",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
  },
];

export const Events = () => {
  return (
    <section
      id="events"
      className="bg-slate-50 px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
              Department Life
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Events & Activities
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Explore the workshops, seminars, technical activities, and
              events conducted by the Department of Data Science.
            </p>
          </div>

          <a
            href="/events"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-900 transition-colors hover:text-blue-600"
          >
            View all events
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Event cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur">
                  {event.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-blue-600">
                  {event.date}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {event.title}
                </h3>

                <div className="mt-5">
                  <a
                    href="/events"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                  >
                    View event
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};