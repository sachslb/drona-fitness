function About() {
  const features = [
    {
      number: "01",
      title: "Expert Trainers",
      description:
        "Train with certified professionals who understand your goals and help you reach them faster.",
    },
    {
      number: "02",
      title: "Premium Equipment",
      description:
        "Access modern strength and cardio equipment designed for serious training and better results.",
    },
    {
      number: "03",
      title: "Results Focused",
      description:
        "Every workout is designed around progress, consistency and building long-term strength.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-zinc-950 py-20 sm:py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div
        className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image Side */}
          <div className="relative">

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85"
                alt="Athlete training inside a modern gym"
                className="h-[450px] w-full object-cover sm:h-[550px]"
                loading="lazy"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-6 right-4 rounded-2xl border border-white/10 bg-zinc-900/95 p-5 shadow-2xl backdrop-blur-md sm:-right-6 sm:p-7">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-4xl font-black text-orange-500 sm:text-5xl">
                    15
                  </p>
                </div>

                <div className="h-12 w-px bg-white/10" />

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white">
                    Years
                  </p>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Of Excellence
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Content Side */}
          <div>

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-500" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                About IronForge
              </p>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              More Than
              <br />
              <span className="text-orange-500">Just A Gym.</span>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              IronForge is built for people who refuse to settle.
              Whether you're starting your fitness journey or
              pushing towards your next personal record, we give
              you the environment, equipment and expertise to
              become stronger. mmmmmmmmmmmmmmmm
            </p>

            {/* Features */}
            <div className="mt-9 space-y-6">
              {features.map((feature) => (
                <div
                  key={feature.number}
                  className="group flex gap-5 border-b border-white/10 pb-6"
                >
                  {/* Number */}
                  <span className="shrink-0 text-sm font-bold text-orange-500">
                    {feature.number}
                  </span>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-white transition-colors group-hover:text-orange-500">
                      {feature.title}
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-zinc-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#programs"
              className="mt-9 inline-flex items-center gap-3 text-sm font-bold text-white transition-colors hover:text-orange-500"
            >
              Discover Our Programs

              <span className="text-lg text-orange-500">
                →
              </span>
            </a>

          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-24 grid grid-cols-2 gap-y-10 border-t border-white/10 pt-12 sm:grid-cols-4 lg:mt-32">

          <div>
            <p className="text-3xl font-black text-white sm:text-4xl">
              10K+
            </p>
            <p className="mt-2 text-xs uppercase tracking-wider text-zinc-500">
              Members
            </p>
          </div>

          <div>
            <p className="text-3xl font-black text-white sm:text-4xl">
              25+
            </p>
            <p className="mt-2 text-xs uppercase tracking-wider text-zinc-500">
              Trainers
            </p>
          </div>

          <div>
            <p className="text-3xl font-black text-white sm:text-4xl">
              40+
            </p>
            <p className="mt-2 text-xs uppercase tracking-wider text-zinc-500">
              Programs
            </p>
          </div>

          <div>
            <p className="text-3xl font-black text-white sm:text-4xl">
              15
            </p>
            <p className="mt-2 text-xs uppercase tracking-wider text-zinc-500">
              Years Strong
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;