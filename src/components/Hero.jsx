function Hero() {
  return (
    <main>
      <section
        id="home"
        className="relative flex min-h-[100svh] items-center overflow-hidden bg-zinc-950"
        aria-labelledby="hero-title"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2000&q=90')",
          }}
          aria-hidden="true"
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0 bg-black/65"
          aria-hidden="true"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30"
          aria-hidden="true"
        />

        {/* Bottom Gradient */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-6 sm:pb-20 lg:px-8 lg:pt-36">

          <div className="max-w-4xl">

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="h-px w-8 bg-orange-500 sm:w-12" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm sm:tracking-[0.3em]">
                Premium Fitness Club
              </p>
            </div>

            {/* Heading */}
            <h1
              id="hero-title"
              className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            >
              Build Your
              <br />

              <span className="text-orange-500">
                Strongest
              </span>

              <br />

              Self.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:mt-8 sm:text-lg sm:leading-8">
              Push your limits, transform your body and become
              stronger every single day. Train harder, move better
              and become the strongest version of yourself.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">

              <a
                href="#membership"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-white transition-all duration-200 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:px-8"
              >
                Start Training
                <span className="ml-2 text-lg" aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href="#programs"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-white hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:px-8"
              >
                Explore Programs
              </a>

            </div>

            {/* Stats */}
            <div className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-8 sm:mt-16 sm:pt-10">

              {/* Stat 1 */}
              <div className="pr-3 sm:pr-6">
                <h2 className="text-2xl font-black text-white sm:text-3xl md:text-4xl">
                  10K+
                </h2>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-zinc-400 sm:text-xs">
                  Active Members
                </p>
              </div>

              {/* Stat 2 */}
              <div className="px-3 sm:px-6">
                <h2 className="text-2xl font-black text-white sm:text-3xl md:text-4xl">
                  25+
                </h2>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-zinc-400 sm:text-xs">
                  Expert Trainers
                </p>
              </div>

              {/* Stat 3 */}
              <div className="pl-3 sm:pl-6">
                <h2 className="text-2xl font-black text-white sm:text-3xl md:text-4xl">
                  15
                </h2>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-zinc-400 sm:text-xs">
                  Years Experience
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
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