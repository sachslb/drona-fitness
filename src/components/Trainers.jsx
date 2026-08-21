import { useEffect, useRef, useState } from "react";

const trainers = [
  {
    id: "01",
    name: "Alex Morgan",
    role: "Strength & Conditioning Coach",
    experience: "8+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1000&q=80",
    position: { x: -28, y: -22, rotate: -5 },
  },
  {
    id: "02",
    name: "Sarah Williams",
    role: "Personal Trainer",
    experience: "6+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1000&q=80",
    position: { x: 28, y: -18, rotate: 5 },
  },
  {
    id: "03",
    name: "Daniel Carter",
    role: "Functional Fitness Coach",
    experience: "7+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80",
    position: { x: 31, y: 22, rotate: -4 },
  },
  {
    id: "04",
    name: "Michael Stone",
    role: "Performance Coach",
    experience: "10+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    position: { x: -29, y: 24, rotate: 5 },
  },
  {
    id: "05",
    name: "Emma Carter",
    role: "Mobility & Fitness Coach",
    experience: "5+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
    position: { x: -5, y: -32, rotate: -3 },
  },
  {
    id: "06",
    name: "Ryan Brooks",
    role: "Elite Training Coach",
    experience: "9+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80",
    position: { x: 5, y: 32, rotate: 4 },
  },
];

function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function easeOutCubic(value) {
  return 1 - Math.pow(1 - value, 3);
}

function easeInOutCubic(value) {
  return value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function Trainers() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateDevice();
    window.addEventListener("resize", updateDevice);

    return () => {
      window.removeEventListener("resize", updateDevice);
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const section = sectionRef.current;

        if (!section) {
          ticking = false;
          return;
        }

        const rect = section.getBoundingClientRect();

        const scrollDistance =
          section.offsetHeight - window.innerHeight;

        if (scrollDistance <= 0) {
          ticking = false;
          return;
        }

        const nextProgress = clamp(
          -rect.top / scrollDistance
        );

        setProgress(nextProgress);

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const total = trainers.length;

  /*
   * Shorter section = faster transitions.
   *
   * Mobile:
   * 6 trainers × 62vh + 70vh
   *
   * Desktop:
   * 6 trainers × 68vh + 80vh
   */
  const sectionHeight = isMobile
    ? total * 62 + 70
    : total * 68 + 80;

  const stageSize = 1 / total;

  const activeIndex = Math.min(
    Math.floor(progress / stageSize),
    total - 1
  );

  return (
    <section
      ref={sectionRef}
      id="trainers"
      className="relative bg-zinc-950"
      style={{
        height: `${sectionHeight}vh`,
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div className="absolute inset-0 bg-zinc-950" />

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-orange-500/[0.045]
            blur-[90px]
            sm:h-[420px]
            sm:w-[420px]
            sm:blur-[120px]
          "
        />

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="absolute left-0 right-0 top-0 z-[100]">
          <div
            className="
              mx-auto
              flex
              max-w-7xl
              items-start
              justify-between
              px-5
              pt-7
              sm:px-8
              sm:pt-10
              lg:px-12
              lg:pt-12
            "
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-orange-500 sm:w-10" />

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-orange-500
                    sm:text-xs
                  "
                >
                  Our Team
                </p>
              </div>

              <h2
                className="
                  text-3xl
                  font-black
                  uppercase
                  leading-[0.9]
                  tracking-tight
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Meet The
                <br />
                <span className="text-orange-500">
                  Experts.
                </span>
              </h2>
            </div>

            {/* Counter */}

            <div className="hidden text-right sm:block">
              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-zinc-600
                "
              >
                Trainer
              </p>

              <p className="mt-1 text-2xl font-black text-white">
                {trainers[activeIndex].id}

                <span className="text-zinc-700">
                  {" "}
                  / {String(total).padStart(2, "0")}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN TRAINER AREA
        ====================================================== */}

        <div className="absolute inset-0">

          {/* OUTER RING */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[230px]
              w-[230px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-white/[0.035]
              sm:h-[340px]
              sm:w-[340px]
              lg:h-[420px]
              lg:w-[420px]
            "
          />

          {/* INNER RING */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[160px]
              w-[160px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-white/[0.04]
              sm:h-[245px]
              sm:w-[245px]
            "
          />

          {/* ===================================================
              TRAINERS
          ==================================================== */}

          {trainers.map((trainer, index) => {
            const stageStart = index * stageSize;

            const stageProgress = clamp(
              (progress - stageStart) / stageSize
            );

            /*
             * ENTRY
             *
             * First 50%:
             * center → outside
             */

            const entryProgress = clamp(
              stageProgress / 0.5
            );

            const entryEase =
              easeOutCubic(entryProgress);

            /*
             * HOLD
             *
             * 50% → 72%
             *
             * Image stays outside.
             * Small floating movement.
             */

            const holdProgress = clamp(
              (stageProgress - 0.5) / 0.22
            );

            /*
             * EXIT
             *
             * 72% → 100%
             *
             * Image zooms OUT and moves away.
             */

            const exitProgress = clamp(
              (stageProgress - 0.72) / 0.28
            );

            const exitEase =
              easeInOutCubic(exitProgress);

            /*
             * Position
             */

            let x =
              trainer.position.x * entryEase;

            let y =
              trainer.position.y * entryEase;

            let rotate =
              trainer.position.rotate * entryEase;

            /*
             * Small floating movement while visible.
             */

            if (
              stageProgress > 0.5 &&
              stageProgress < 0.72
            ) {
              x +=
                Math.sin(
                  holdProgress * Math.PI
                ) * 1.5;

              y +=
                Math.cos(
                  holdProgress * Math.PI
                ) * 1.2;
            }

            /*
             * EXIT MOVEMENT
             *
             * Continue in the same direction,
             * then move farther away.
             */

            if (stageProgress > 0.72) {
              const exitDistance = 18;

              x +=
                trainer.position.x > 0
                  ? exitDistance * exitEase
                  : -exitDistance * exitEase;

              y +=
                trainer.position.y > 0
                  ? exitDistance * exitEase
                  : -exitDistance * exitEase;

              rotate +=
                trainer.position.rotate > 0
                  ? 8 * exitEase
                  : -8 * exitEase;
            }

            /*
             * ENTRY SCALE
             *
             * Tiny center image → normal card.
             */

            const entryScale =
              0.08 +
              entryEase * 0.92;

            /*
             * EXIT SCALE
             *
             * This creates the zoom-out effect.
             *
             * 1 → 0.72
             */

            const exitScale =
              1 -
              exitEase * 0.28;

            const scale =
              stageProgress < 0.72
                ? entryScale
                : exitScale;

            /*
             * OPACITY
             */

            let opacity = 0;

            if (index < activeIndex) {
              opacity = 0;
            }

            if (index === activeIndex) {
              opacity = 1;
            }

            /*
             * Fade out during exit.
             */

            if (index === activeIndex) {
              opacity =
                1 -
                exitEase * 0.8;
            }

            /*
             * Previous trainer.
             *
             * It stays slightly visible while
             * the next trainer enters.
             */

            if (index < activeIndex) {
              const previousDistance =
                activeIndex - index;

              if (previousDistance === 1) {
                opacity =
                  0.35 *
                  (1 - stageProgress);
              } else {
                opacity = 0;
              }
            }

            /*
             * Future trainers remain hidden.
             */

            if (index > activeIndex) {
              opacity = 0;
            }

            /*
             * Blur only during tiny center state.
             *
             * No expensive continuous blur.
             */

            const blur =
              entryProgress < 0.3
                ? 1.5
                : 0;

            /*
             * RESPONSIVE CARD SIZE
             */

            const width = isMobile
              ? "clamp(190px, 62vw, 280px)"
              : "clamp(240px, 23vw, 360px)";

            /*
             * Mobile movement.
             */

            const mobileMultiplier = 0.58;

            const actualX = isMobile
              ? x * mobileMultiplier
              : x;

            const actualY = isMobile
              ? y * mobileMultiplier
              : y;

            return (
              <div
                key={trainer.id}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-white/10
                  bg-zinc-900
                  shadow-[0_25px_80px_rgba(0,0,0,0.55)]
                  sm:rounded-3xl
                "
                style={{
                  width,

                  aspectRatio:
                    "1.45 / 1",

                  zIndex:
                    30 + index,

                  opacity,

                  transform: `
                    translate3d(
                      calc(-50% + ${actualX}vw),
                      calc(-50% + ${actualY}vh),
                      0
                    )
                    rotate(${rotate}deg)
                    scale(${scale})
                  `,

                  filter:
                    blur > 0
                      ? `blur(${blur}px)`
                      : "none",

                  willChange:
                    "transform, opacity",

                  backfaceVisibility:
                    "hidden",

                  WebkitBackfaceVisibility:
                    "hidden",

                  pointerEvents:
                    "none",
                }}
              >
                {/* IMAGE */}

                <img
                  src={trainer.image}
                  alt={`${trainer.name}, ${trainer.role}`}
                  draggable="false"
                  loading={
                    index === 0
                      ? "eager"
                      : "lazy"
                  }
                  decoding="async"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    select-none
                    object-cover
                  "
                />

                {/* IMAGE GRADIENT */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/10
                    to-transparent
                  "
                />

                {/* TOP LIGHT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/[0.08]
                    via-transparent
                    to-transparent
                  "
                />

                {/* NUMBER */}

                <div
                  className="
                    absolute
                    right-3
                    top-3
                    sm:right-5
                    sm:top-5
                  "
                >
                  <span
                    className="
                      text-[8px]
                      font-black
                      tracking-[0.2em]
                      text-white/70
                      sm:text-xs
                    "
                  >
                    {trainer.id}
                  </span>
                </div>

                {/* INFORMATION */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-3
                    sm:p-5
                  "
                >
                  <p
                    className="
                      mb-1
                      text-[6px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-orange-500
                      sm:text-[9px]
                    "
                  >
                    {trainer.experience}
                  </p>

                  <h3
                    className="
                      text-[13px]
                      font-black
                      uppercase
                      leading-none
                      tracking-tight
                      text-white
                      sm:text-xl
                    "
                  >
                    {trainer.name}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[7px]
                      leading-3
                      text-zinc-300
                      sm:text-[10px]
                      sm:leading-4
                    "
                  >
                    {trainer.role}
                  </p>
                </div>

                {/* BORDER */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[18px]
                    border
                    border-white/[0.07]
                    sm:rounded-3xl
                  "
                />
              </div>
            );
          })}

          {/* ===================================================
              CENTER CIRCLE
          ==================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-[90]
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <div
              className="
                relative
                flex
                h-[76px]
                w-[76px]
                items-center
                justify-center
                rounded-full
                border
                border-white/25
                bg-black
                shadow-[0_0_35px_rgba(0,0,0,0.9)]
                sm:h-[100px]
                sm:w-[100px]
              "
            >
              {/* Outer ring */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-1
                  rounded-full
                  border
                  border-white/10
                "
              />

              {/* Orange ring */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-2
                  rounded-full
                  border
                  border-orange-500/[0.08]
                "
              />

              {/* Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-3
                  rounded-full
                  bg-orange-500/[0.025]
                "
              />

              {/* Text */}

              <div className="relative text-center">
                <p
                  className="
                    font-serif
                    text-[12px]
                    italic
                    leading-none
                    text-white
                    sm:text-base
                  "
                >
                  Trainers
                </p>

                <p
                  className="
                    mt-1
                    text-[4px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-zinc-500
                    sm:text-[6px]
                  "
                >
                  Meet the team
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div
          className="
            absolute
            bottom-5
            left-0
            right-0
            z-[100]
            sm:bottom-9
          "
        >
          <div
            className="
              mx-auto
              flex
              max-w-7xl
              items-end
              justify-between
              px-5
              sm:px-8
              lg:px-12
            "
          >
            <p
              className="
                hidden
                max-w-sm
                text-xs
                leading-5
                text-zinc-600
                sm:block
              "
            >
              Meet the people behind the
              progress. Every trainer brings
              experience, discipline and a
              different approach to your goals.
            </p>

            <div
              className="
                ml-auto
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-zinc-600
                  sm:text-[8px]
                "
              >
                Scroll
              </span>

              <div
                className="
                  h-px
                  w-14
                  overflow-hidden
                  bg-white/10
                  sm:w-24
                "
              >
                <div
                  className="
                    h-full
                    origin-left
                    bg-orange-500
                  "
                  style={{
                    transform:
                      `scaleX(${progress})`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT INDICATOR
        ====================================================== */}

        <div
          className="
            absolute
            right-4
            top-1/2
            z-[100]
            hidden
            -translate-y-1/2
            flex-col
            gap-4
            lg:flex
          "
        >
          {trainers.map((trainer, index) => {
            const active =
              index === activeIndex;

            return (
              <div
                key={trainer.id}
                className="flex items-center gap-2"
              >
                <span
                  className={`
                    text-[8px]
                    font-bold
                    ${
                      active
                        ? "text-orange-500"
                        : "text-zinc-700"
                    }
                  `}
                >
                  {trainer.id}
                </span>

                <span
                  className={`
                    h-px
                    transition-all
                    duration-300
                    ${
                      active
                        ? "w-7 bg-orange-500"
                        : "w-2 bg-zinc-800"
                    }
                  `}
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