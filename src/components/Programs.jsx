const programs = [
  {
    id: "01",
    title: "Strength Training",
    description:
      "Build functional strength, increase muscle and improve your overall performance with structured resistance training.",
    level: "All Levels",
    duration: "45–60 min",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "02",
    title: "Personal Training",
    description:
      "Get one-on-one coaching with a professional trainer focused on your goals, technique and measurable progress.",
    level: "Personalized",
    duration: "60 min",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "03",
    title: "Functional Fitness",
    description:
      "Improve mobility, endurance, balance and everyday performance through dynamic full-body workouts.",
    level: "All Levels",
    duration: "45–60 min",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "04",
    title: "HIIT Training",
    description:
      "High-intensity workouts designed to challenge your cardiovascular fitness, burn calories and build endurance.",
    level: "Intermediate",
    duration: "30–45 min",
    image:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=85",
  },
];

function Programs() {
  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-zinc-950 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          {/* Heading */}
          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500 sm:w-10" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-xs sm:tracking-[0.25em]">
                Training Programs
              </p>
            </div>

            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Train With
              <br />
              <span className="text-orange-500">
                Purpose.
              </span>
            </h2>

          </div>

          {/* Description */}
          <div className="max-w-md">
            <p className="text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
              Whether you're building strength, improving endurance or
              transforming your body, our programs are designed to help
              you train smarter and achieve lasting results.
            </p>
          </div>

        </div>


        {/* =========================
            PROGRAMS GRID
            2 COLUMNS ON MOBILE
        ========================== */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:mt-16 lg:grid-cols-4">

          {programs.map((program) => (
            <article
              key={program.id}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900 sm:rounded-2xl"
            >

              {/* Image Container */}
              <div className="relative h-[330px] overflow-hidden sm:h-[430px]">

                <img
                  src={program.image}
                  alt={`${program.title} training`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />


                {/* Program Number */}
                <span className="absolute right-3 top-3 text-[10px] font-bold text-white/60 sm:right-5 sm:top-5 sm:text-sm">
                  {program.id}
                </span>


                {/* Program Content */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6">

                  {/* Level + Duration */}
                  <div className="mb-2 flex flex-wrap items-center gap-1.5 text-[7px] font-bold uppercase tracking-wide text-zinc-300 sm:mb-3 sm:gap-3 sm:text-[10px] sm:tracking-wider">

                    <span>
                      {program.level}
                    </span>

                    <span className="h-1 w-1 shrink-0 rounded-full bg-orange-500" />

                    <span>
                      {program.duration}
                    </span>

                  </div>


                  {/* Title */}
                  <h3 className="text-base font-black uppercase leading-tight tracking-tight text-white sm:text-2xl">
                    {program.title}
                  </h3>


                  {/* Description */}
                  <p className="mt-2 line-clamp-3 text-[10px] leading-4 text-zinc-300 sm:mt-3 sm:text-sm sm:leading-6">
                    {program.description}
                  </p>

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* =========================
            BOTTOM CTA
        ========================== */}
        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-xl border border-white/10 bg-zinc-900/60 p-5 sm:mt-12 sm:rounded-2xl sm:p-8 md:flex-row md:items-center">

          {/* CTA Content */}
          <div>

            <h3 className="text-lg font-bold text-white sm:text-2xl">
              Not sure which program is right for you?
            </h3>

            <p className="mt-2 max-w-xl text-xs leading-5 text-zinc-500 sm:text-sm sm:leading-6">
              Talk to our team and we'll help you find the right
              starting point based on your fitness goals.
            </p>

          </div>


          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-xs font-bold text-white transition-all duration-200 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:px-7 sm:py-3.5 sm:text-sm"
          >
            Talk to a Trainer

            <span
              className="ml-2 text-base sm:text-lg"
              aria-hidden="true"
            >
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Programs;