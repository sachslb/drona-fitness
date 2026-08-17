const galleryImages = [
  {
    id: "01",
    title: "Strength Floor",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "02",
    title: "Training Session",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "03",
    title: "Functional Training",
    image:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "04",
    title: "Personal Training",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "05",
    title: "Cardio Zone",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "06",
    title: "Training Community",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1400&q=85",
  },
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-zinc-950 py-20 sm:py-24 lg:py-32"
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
                Inside The Gym
              </p>
            </div>

            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Built For
              <br />
              <span className="text-orange-500">Progress.</span>
            </h2>

          </div>

          <p className="max-w-md text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
            Take a look inside our training environment — from dedicated
            strength equipment to focused personal training sessions.
          </p>

        </div>


        {/* =========================
            GALLERY GRID
        ========================== */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-12">

          {galleryImages.map((item, index) => (
            <article
              key={item.id}
              className={`group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900 sm:rounded-2xl ${
                index === 0 || index === 5
                  ? "col-span-2 lg:col-span-6"
                  : "col-span-1 lg:col-span-3"
              }`}
            >

              {/* Image */}
              <div
                className={`relative overflow-hidden ${
                  index === 0 || index === 5
                    ? "aspect-[16/9]"
                    : "aspect-square"
                }`}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-6">

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-xs">
                      {item.id}
                    </p>

                    <h3 className="mt-1 text-sm font-black uppercase tracking-tight text-white sm:text-lg">
                      {item.title}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/20 text-sm text-white backdrop-blur-sm transition-all duration-300 group-hover:border-orange-500 group-hover:bg-orange-500 sm:h-10 sm:w-10"
                    aria-hidden="true"
                  >
                    ↗
                  </span>

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* =========================
            BOTTOM CTA
        ========================== */}
        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-zinc-900/60 p-6 sm:mt-12 sm:p-8 md:flex-row md:items-center">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Come See It Yourself
            </p>

            <h3 className="mt-2 text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
              Your next workout starts here.
            </h3>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Visit The Gym
            <span className="ml-2 text-lg" aria-hidden="true">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Gallery;