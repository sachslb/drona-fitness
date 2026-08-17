const testimonials = [
  {
    id: "01",
    name: "Rahul S.",
    role: "Member",
    duration: "Member for 2 Years",
    quote:
      "The biggest difference is the coaching. The trainers actually pay attention to your form and keep you accountable. I've made more progress here than anywhere else.",
    rating: 5,
  },
  {
    id: "02",
    name: "Priya K.",
    role: "Member",
    duration: "Member for 1 Year",
    quote:
      "The atmosphere is excellent and the equipment is always well maintained. Everyone is focused on their own goals, which makes training comfortable and motivating.",
    rating: 5,
  },
  {
    id: "03",
    name: "Arjun M.",
    role: "Member",
    duration: "Member for 3 Years",
    quote:
      "I joined to get stronger and improve my fitness. The structured programs and trainer support made it much easier to stay consistent.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-zinc-900 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500 sm:w-10" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-xs sm:tracking-[0.25em]">
                Member Stories
              </p>
            </div>

            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Real People.
              <br />
              <span className="text-orange-500">Real Results.</span>
            </h2>

          </div>

          <p className="max-w-md text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
            A strong community makes training better. Here's what some of
            our members have to say about their experience.
          </p>

        </div>


        {/* =========================
            TESTIMONIAL GRID
        ========================== */}
        <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">

          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-zinc-950 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 sm:p-7"
            >

              {/* Top Row */}
              <div className="flex items-start justify-between">

                {/* Stars */}
                <div
                  className="flex gap-1 text-orange-500"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: testimonial.rating }).map(
                    (_, index) => (
                      <span key={index} className="text-sm">
                        ★
                      </span>
                    )
                  )}
                </div>

                {/* Quote Mark */}
                <span
                  className="text-4xl font-black leading-none text-orange-500/20"
                  aria-hidden="true"
                >
                  "
                </span>

              </div>


              {/* Quote */}
              <blockquote className="mt-6 flex-1 text-sm leading-7 text-zinc-300 sm:text-base">
                "{testimonial.quote}"
              </blockquote>


              {/* Divider */}
              <div className="my-6 h-px bg-white/10" />


              {/* Member */}
              <div className="flex items-center gap-3">

                {/* Avatar */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-sm font-black text-orange-500">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    {testimonial.name}
                  </p>

                  <p className="mt-0.5 text-xs text-zinc-500">
                    {testimonial.role} · {testimonial.duration}
                  </p>
                </div>

              </div>

            </article>
          ))}

        </div>


        {/* =========================
            TRUST STATEMENT
        ========================== */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:mt-12 sm:p-8">

          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-lg font-black text-white">
                ★
              </div>

              <div>
                <p className="text-lg font-black text-white">
                  Built around our members
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  Your progress is the measure that matters.
                </p>
              </div>

            </div>


            <a
              href="#contact"
              className="inline-flex items-center text-sm font-bold text-orange-500 transition-colors hover:text-orange-400"
            >
              Start Your Journey
              <span className="ml-2 text-lg" aria-hidden="true">
                →
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;