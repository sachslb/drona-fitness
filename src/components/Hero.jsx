function Hero() {
  return (
    <main>
      <section
        id="home"
        className="relative flex min-h-[100svh] items-end overflow-hidden bg-zinc-950 lg:items-center"
        aria-labelledby="hero-title"
      >
        {/* =========================
            BACKGROUND IMAGE
        ========================== */}
        <div
          className="absolute inset-0 bg-cover bg-[65%_center] bg-no-repeat sm:bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2000&q=90')",
          }}
          aria-hidden="true"
        />

        {/* =========================
            OVERLAYS
        ========================== */}

        {/* Main dark overlay */}
        <div
          className="absolute inset-0 bg-black/45 sm:bg-black/55"
          aria-hidden="true"
        />

        {/* Mobile bottom gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent lg:hidden"
          aria-hidden="true"
        />

        {/* Desktop left gradient */}
        <div
          className="absolute inset-0 hidden bg-gradient-to-r from-black via-black/75 to-transparent lg:block"
          aria-hidden="true"
        />

        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-zinc-950 to-transparent"
          aria-hidden="true"
        />

        {/* =========================
            HERO CONTENT
        ========================== */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 pt-32 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20 lg:pt-36">

          <div className="max-w-4xl">

            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3 sm:mb-6">
              <span className="h-px w-7 bg-orange-500 sm:w-12" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm sm:tracking-[0.3em]">
                Premium Fitness Club
              </p>
            </div>


            {/* =========================
                HEADING
            ========================== */}
            <h1
              id="hero-title"
              className="max-w-4xl text-[3.4rem] font-black uppercase leading-[0.88] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            >
              Build Your
              <br />

              <span className="text-orange-500">
                Strongest
              </span>

              <br />

              Self
            </h1>


            {/* =========================
                DESCRIPTION
            ========================== */}
            <p className="mt-5 max-w-md text-sm leading-6 text-zinc-300 sm:mt-7 sm:text-lg sm:leading-8">
              Train harder. Move better.
              <br className="sm:hidden" />
              {" "}Become your strongest self.
            </p>


            {/* =========================
                CTA BUTTONS
            ========================== */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">

              <a
                href="#membership"
                className="inline-flex min-h-13 items-center justify-center rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/10 transition-all duration-200 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                Start Training

                <span
                  className="ml-2 text-lg"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>


              <a
                href="#programs"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/25 bg-black/20 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-200 hover:border-white/50 hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore Programs
              </a>

            </div>


            {/* =========================
                MOBILE STATS
            ========================== */}
            <div className="mt-8 grid max-w-md grid-cols-3 gap-2 sm:hidden">

              <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                <p className="text-xl font-black text-white">
                  10K+
                </p>

                <p className="mt-1 text-[8px] font-medium uppercase tracking-wide text-zinc-400">
                  Members
                </p>
              </div>


              <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                <p className="text-xl font-black text-white">
                  25+
                </p>

                <p className="mt-1 text-[8px] font-medium uppercase tracking-wide text-zinc-400">
                  Trainers
                </p>
              </div>


              <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                <p className="text-xl font-black text-white">
                  15
                </p>

                <p className="mt-1 text-[8px] font-medium uppercase tracking-wide text-zinc-400">
                  Years
                </p>
              </div>

            </div>


            {/* =========================
                DESKTOP STATS
            ========================== */}
            <div className="mt-12 hidden max-w-xl grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-8 sm:mt-16 sm:grid sm:pt-10">

              <div className="pr-6">
                <h2 className="text-3xl font-black text-white md:text-4xl">
                  10K+
                </h2>

                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-zinc-400">
                  Active Members
                </p>
              </div>


              <div className="px-6">
                <h2 className="text-3xl font-black text-white md:text-4xl">
                  25+
                </h2>

                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-zinc-400">
                  Expert Trainers
                </p>
              </div>


              <div className="pl-6">
                <h2 className="text-3xl font-black text-white md:text-4xl">
                  15
                </h2>

                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-zinc-400">
                  Years Experience
                </p>
              </div>

            </div>

          </div>
        </div>


        {/* =========================
            SCROLL INDICATOR
        ========================== */}
        <a
          href="#programs"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-zinc-400 transition hover:text-white lg:flex"
          aria-label="Scroll to programs"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
            Scroll
          </span>

          <span className="h-10 w-px bg-gradient-to-b from-zinc-400 to-transparent" />
        </a>

      </section>
    </main>
  );
}

export default Hero;