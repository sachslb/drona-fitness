import { useEffect, useRef, useState } from "react";

const trainers = [
  {
    id: "01",
    name: "Alex Morgan",
    role: "Strength & Conditioning Coach",
    experience: "8+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: "02",
    name: "Sarah Williams",
    role: "Personal Trainer",
    experience: "6+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: "03",
    name: "Daniel Carter",
    role: "Functional Fitness Coach",
    experience: "7+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=90",
  },
];

function Trainers() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableDistance =
        sectionRef.current.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) return;

      const current = Math.min(
        Math.max(-rect.top / scrollableDistance, 0),
        1
      );

      setProgress(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Divide the whole scroll progress into trainer sections.
   */
  const total = trainers.length;

  const rawIndex = progress * total;

  const activeIndex = Math.min(
    Math.floor(rawIndex),
    total - 1
  );

  /*
   * Progress inside the current trainer transition.
   */
  const localProgress = rawIndex - activeIndex;

  return (
    <section
      ref={sectionRef}
      id="trainers"
      className="relative bg-zinc-950"
      style={{
        height: `${trainers.length * 100 + 100}vh`,
      }}
    >
      {/* =====================================================
          STICKY CONTAINER
      ====================================================== */}

      <div className="sticky top-0 h-screen overflow-hidden">

        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div className="absolute inset-0 bg-zinc-950" />

        {/* Subtle background glow */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.04] blur-[120px]" />


        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="absolute left-0 right-0 top-0 z-30">

          <div className="mx-auto flex max-w-7xl items-start justify-between px-5 pt-8 sm:px-8 sm:pt-10 lg:px-12 lg:pt-12">

            <div>

              <div className="mb-4 flex items-center gap-3">

                <span className="h-px w-8 bg-orange-500 sm:w-10" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-orange-500 sm:text-xs">
                  Our Team
                </p>

              </div>

              <h2 className="text-3xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Meet The
                <br />
                <span className="text-orange-500">Experts.</span>
              </h2>

            </div>


            {/* Scroll counter */}

            <div className="hidden text-right sm:block">

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                Trainer
              </p>

              <p className="mt-1 text-2xl font-black text-white">
                {trainers[activeIndex].id}
                <span className="text-zinc-600">
                  {" "}
                  / {String(total).padStart(2, "0")}
                </span>
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            TRAINER IMAGE STACK
        ====================================================== */}

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="relative h-[55vh] w-[82vw] max-w-[760px] sm:h-[62vh] sm:w-[65vw] lg:h-[68vh] lg:w-[48vw]">

            {trainers.map((trainer, index) => {

              /*
               * Distance from current trainer.
               */

              const distance = index - activeIndex;

              /*
               * Current trainer transition.
               */

              let scale = 1;
              let opacity = 1;
              let translateX = 0;
              let translateY = 0;
              let blur = 0;

              /*
               * Trainer before current
               */

              if (distance < 0) {
                const exitProgress = Math.min(
                  Math.abs(distance) + localProgress,
                  1
                );

                scale = 1 - exitProgress * 0.15;
                opacity = 1 - exitProgress;
                translateX = -80 * exitProgress;
                translateY = -60 * exitProgress;
                blur = exitProgress * 8;
              }

              /*
               * Current trainer
               */

              if (distance === 0) {
                scale = 1;
                opacity = 1;
                translateX = 0;
                translateY = 0;
                blur = 0;
              }

              /*
               * Next trainer.
               *
               * This is the important part that creates
               * the Framer-style scale-up animation.
               */

              if (distance === 1) {
                scale = 0.1 + localProgress * 0.9;
                opacity = localProgress;
                translateX = 80 - localProgress * 80;
                translateY = 60 - localProgress * 60;
                blur = (1 - localProgress) * 10;
              }

              /*
               * Trainers further ahead stay hidden.
               */

              if (distance > 1) {
                scale = 0.1;
                opacity = 0;
                translateX = 80;
                translateY = 60;
                blur = 10;
              }

              /*
               * Mobile adjustments
               */

              const mobileTranslateX = translateX * 0.65;
              const mobileTranslateY = translateY * 0.65;

              return (
                <div
                  key={trainer.id}
                  className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl sm:rounded-3xl"
                  style={{
                    zIndex: total - index,
                    opacity,
                    transform: `
                      translate3d(
                        ${mobileTranslateX}px,
                        ${mobileTranslateY}px,
                        0
                      )
                      scale(${scale})
                    `,
                    filter: `blur(${blur}px)`,
                    willChange: "transform, opacity, filter",
                    pointerEvents:
                      index === activeIndex ? "auto" : "none",
                  }}
                >

                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <img
                    src={trainer.image}
                    alt={`${trainer.name}, ${trainer.role}`}
                    className="h-full w-full object-cover object-center"
                    draggable="false"
                  />


                  {/* =================================================
                      DARK GRADIENT
                  ================================================== */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />


                  {/* =================================================
                      TRAINER NUMBER
                  ================================================== */}

                  <div className="absolute right-5 top-5 sm:right-8 sm:top-8">

                    <span className="text-sm font-black tracking-widest text-white/70 sm:text-base">
                      {trainer.id}
                    </span>

                  </div>


                  {/* =================================================
                      TRAINER INFORMATION
                  ================================================== */}

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10">

                    <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-orange-500 sm:text-xs">
                      {trainer.experience}
                    </p>

                    <h3 className="max-w-xl text-3xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-5xl lg:text-6xl">
                      {trainer.name}
                    </h3>

                    <p className="mt-3 max-w-md text-xs leading-5 text-zinc-300 sm:text-sm sm:leading-6">
                      {trainer.role}
                    </p>

                  </div>


                  {/* =================================================
                      IMAGE EDGE
                  ================================================== */}

                  <div className="pointer-events-none absolute inset-0 border border-white/[0.08]" />

                </div>
              );
            })}

          </div>

        </div>


        {/* =====================================================
            DESCRIPTION
        ====================================================== */}

        <div className="absolute bottom-6 left-0 right-0 z-30 sm:bottom-8 lg:bottom-10">

          <div className="mx-auto flex max-w-7xl items-end justify-between px-5 sm:px-8 lg:px-12">

            <p className="hidden max-w-sm text-xs leading-5 text-zinc-500 sm:block sm:text-sm">
              Experience, knowledge and personal attention —
              our coaches are here to help you become stronger.
            </p>


            {/* Scroll indicator */}

            <div className="ml-auto flex items-center gap-3">

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                Scroll
              </span>

              <div className="h-px w-16 overflow-hidden bg-white/10 sm:w-24">

                <div
                  className="h-full origin-left bg-orange-500 transition-transform duration-75"
                  style={{
                    transform: `scaleX(${progress})`,
                  }}
                />

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            SIDE PROGRESS
        ====================================================== */}

        <div className="absolute right-3 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 lg:flex">

          {trainers.map((trainer, index) => {

            const isActive = index === activeIndex;

            return (
              <div
                key={trainer.id}
                className="flex items-center gap-2"
              >

                <span
                  className={`text-[9px] font-bold transition-colors ${
                    isActive
                      ? "text-orange-500"
                      : "text-zinc-700"
                  }`}
                >
                  {trainer.id}
                </span>

                <div
                  className={`h-1 transition-all duration-300 ${
                    isActive
                      ? "w-6 bg-orange-500"
                      : "w-2 bg-zinc-700"
                  }`}
                />

              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}

export default Trainers;