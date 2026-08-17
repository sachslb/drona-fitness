const trainers = [
  {
    id: "01",
    name: "Alex Morgan",
    role: "Strength & Conditioning Coach",
    experience: "8+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "02",
    name: "Sarah Williams",
    role: "Personal Trainer",
    experience: "6+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "03",
    name: "Daniel Carter",
    role: "Functional Fitness Coach",
    experience: "7+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
  },
];

function Trainers() {
  return (
    <section
      id="trainers"
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
                Our Team
              </p>
            </div>

            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Meet The
              <br />
              <span className="text-orange-500">Experts.</span>
            </h2>

          </div>

          <p className="max-w-md text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
            Our coaches bring experience, knowledge and a personal
            approach to every session. You're not just joining a gym —
            you're getting a team behind your goals.
          </p>

        </div>


        {/* =========================
            TRAINER GRID
        ========================== */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:mt-16 lg:grid-cols-3">

          {trainers.map((trainer) => (
            <article
              key={trainer.id}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950 sm:rounded-2xl"
            >

              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/5]">

                <img
                  src={trainer.image}
                  alt={`${trainer.name}, ${trainer.role}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-all duration-700 ease-out sm:grayscale sm:group-hover:scale-105 sm:group-hover:grayscale-0"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Trainer Number */}
                <span className="absolute right-3 top-3 text-[10px] font-bold text-white/50 sm:right-5 sm:top-5 sm:text-sm">
                  {trainer.id}
                </span>

                {/* Trainer Details */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6 lg:p-7">

                  {/* Experience */}
                  <p className="mb-1 text-[8px] font-bold uppercase tracking-wide text-orange-500 sm:mb-2 sm:text-xs sm:tracking-wider">
                    {trainer.experience}
                  </p>

                  {/* Name */}
                  <h3 className="text-sm font-black uppercase leading-tight tracking-tight text-white sm:text-xl lg:text-2xl">
                    {trainer.name}
                  </h3>

                  {/* Role */}
                  <p className="mt-1 text-[9px] leading-4 text-zinc-300 sm:mt-2 sm:text-sm sm:leading-5">
                    {trainer.role}
                  </p>

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* =========================
            TRUST BAR
        ========================== */}
        <div className="mt-8 grid gap-5 rounded-xl border border-white/10 bg-zinc-950 p-5 sm:mt-12 sm:gap-6 sm:rounded-2xl sm:p-8 md:grid-cols-3">

          {/* Item 1 */}
          <div className="flex gap-3 sm:gap-4">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-sm font-bold text-orange-500 sm:h-10 sm:w-10">
              ✓
            </div>

            <div>
              <h3 className="text-sm font-bold text-white sm:text-base">
                Certified Coaches
              </h3>

              <p className="mt-1 text-xs leading-5 text-zinc-500 sm:text-sm sm:leading-6">
                Qualified professionals focused on safe and effective training.
              </p>
            </div>

          </div>


          {/* Item 2 */}
          <div className="flex gap-3 sm:gap-4">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-sm font-bold text-orange-500 sm:h-10 sm:w-10">
              ✓
            </div>

            <div>
              <h3 className="text-sm font-bold text-white sm:text-base">
                Personal Attention
              </h3>

              <p className="mt-1 text-xs leading-5 text-zinc-500 sm:text-sm sm:leading-6">
                Training guidance built around your individual goals.
              </p>
            </div>

          </div>


          {/* Item 3 */}
          <div className="flex gap-3 sm:gap-4">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-sm font-bold text-orange-500 sm:h-10 sm:w-10">
              ✓
            </div>

            <div>
              <h3 className="text-sm font-bold text-white sm:text-base">
                Real Progress
              </h3>

              <p className="mt-1 text-xs leading-5 text-zinc-500 sm:text-sm sm:leading-6">
                Focus on consistency, measurable progress and long-term results.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Trainers;