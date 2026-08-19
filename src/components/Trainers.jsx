import { useEffect, useRef, useState } from "react";

const trainers = [
  {
    id: "01",
    name: "Alex Morgan",
    role: "Strength & Conditioning Coach",
    experience: "8+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1200&q=90",
    position: { x: -28, y: -24, rotate: -5 },
  },

  {
    id: "02",
    name: "Sarah Williams",
    role: "Personal Trainer",
    experience: "6+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1200&q=90",
    position: { x: 28, y: -18, rotate: 5 },
  },

  {
    id: "03",
    name: "Daniel Carter",
    role: "Functional Fitness Coach",
    experience: "7+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=90",
    position: { x: 31, y: 24, rotate: -4 },
  },

  {
    id: "04",
    name: "Michael Stone",
    role: "Performance Coach",
    experience: "10+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=90",
    position: { x: -29, y: 25, rotate: 5 },
  },

  {
    id: "05",
    name: "Emma Carter",
    role: "Mobility & Fitness Coach",
    experience: "5+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=90",
    position: { x: -5, y: -34, rotate: -3 },
  },

  {
    id: "06",
    name: "Ryan Brooks",
    role: "Elite Training Coach",
    experience: "9+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=90",
    position: { x: 5, y: 35, rotate: 4 },
  },
];

function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function easeOutCubic(value) {
  return 1 - Math.pow(1 - value, 3);
}

function Trainers() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        if (!sectionRef.current) {
          ticking = false;
          return;
        }

        const rect = sectionRef.current.getBoundingClientRect();

        const scrollDistance =
          sectionRef.current.offsetHeight -
          window.innerHeight;

        if (scrollDistance <= 0) {
          ticking = false;
          return;
        }

        const value = clamp(
          -rect.top / scrollDistance
        );

        setProgress(value);

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const total = trainers.length;

  /*
   * Each trainer gets one scroll stage.
   */
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
        height: `${total * 110 + 100}vh`,
      }}
    >

      {/* =====================================================
          STICKY SCREEN
      ====================================================== */}

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
            h-[450px]
            w-[450px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-orange-500/[0.035]
            blur-[140px]
          "
        />


        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            z-[100]
          "
        >

          <div
            className="
              mx-auto
              flex
              max-w-7xl
              items-start
              justify-between
              px-5
              pt-8
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
                    text-[10px]
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
            FLOATING TRAINERS AREA
        ====================================================== */}

        <div className="absolute inset-0">


          {/* ===================================================
              DECORATIVE CENTER RINGS
          ==================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[260px]
              w-[260px]
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

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[190px]
              w-[190px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-white/[0.025]
              sm:h-[250px]
              sm:w-[250px]
            "
          />


          {/* ===================================================
              TRAINER IMAGES
          ==================================================== */}

          {trainers.map((trainer, index) => {

            const stageStart =
              index * stageSize;

            const stageProgress = clamp(
              (progress - stageStart) /
                stageSize
            );


            /*
             * -----------------------------------------------
             * IMAGE STARTS INSIDE THE CENTER CIRCLE
             * -----------------------------------------------
             */

            const entryProgress = clamp(
              stageProgress / 0.72
            );

            const eased =
              easeOutCubic(entryProgress);


            /*
             * Start exactly at center.
             */

            const startX = 0;
            const startY = 0;
            const startRotate = 0;


            /*
             * Final position outside circle.
             */

            const finalX = trainer.position.x;
            const finalY = trainer.position.y;
            const finalRotate =
              trainer.position.rotate;


            /*
             * Move from CENTER → OUTSIDE.
             */

            const x =
              startX +
              (finalX - startX) * eased;

            const y =
              startY +
              (finalY - startY) * eased;

            const rotate =
              startRotate +
              (finalRotate - startRotate) *
                eased;


            /*
             * -----------------------------------------------
             * SCALE
             *
             * Image starts tiny inside circle.
             * Then grows as it leaves.
             * -----------------------------------------------
             */

            const scale =
              0.08 +
              eased * 0.92;


            /*
             * -----------------------------------------------
             * OPACITY
             * -----------------------------------------------
             */

            let opacity = eased;

            /*
             * Keep previous trainers visible.
             */

            if (index < activeIndex) {
              opacity = 1;
            }


            /*
             * Future trainers invisible.
             */

            if (index > activeIndex) {
              opacity = 0;
            }


            /*
             * Current image.
             */

            if (index === activeIndex) {
              opacity = Math.max(
                opacity,
                0.05
              );
            }


            /*
             * -----------------------------------------------
             * BLUR
             *
             * Strong blur when inside circle.
             * Sharp when outside.
             * -----------------------------------------------
             */

            const blur =
              Math.max(
                0,
                7 - eased * 7
              );


            /*
             * -----------------------------------------------
             * Image size
             * -----------------------------------------------
             */

            const width =
              "clamp(210px, 23vw, 360px)";


            /*
             * -----------------------------------------------
             * MOBILE POSITION
             * -----------------------------------------------
             */

            const mobileX =
              finalX * 0.72;

            const mobileY =
              finalY * 0.72;


            const actualX =
              window.innerWidth < 640
                ? mobileX
                : x;

            const actualY =
              window.innerWidth < 640
                ? mobileY
                : y;


            return (
              <div
                key={trainer.id}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-zinc-900
                  shadow-2xl
                  sm:rounded-3xl
                "
                style={{
                  width,

                  aspectRatio:
                    "1.45 / 1",

                  zIndex:
                    20 + index,

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
                    `blur(${blur}px)`,

                  willChange:
                    "transform, opacity, filter",

                  pointerEvents:
                    "none",
                }}
              >

                {/* IMAGE */}

                <img
                  src={trainer.image}
                  alt={`${trainer.name}, ${trainer.role}`}
                  draggable="false"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                  "
                />


                {/* DARK OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/20
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
                      text-[9px]
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
                    p-4
                    sm:p-5
                  "
                >

                  <p
                    className="
                      mb-1
                      text-[7px]
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
                      text-sm
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
                      text-[8px]
                      leading-4
                      text-zinc-300
                      sm:text-[10px]
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
                    rounded-2xl
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
                h-[82px]
                w-[82px]
                items-center
                justify-center
                rounded-full
                border
                border-white/25
                bg-black
                shadow-[0_0_35px_rgba(0,0,0,0.8)]
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


              {/* Inner glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-2
                  rounded-full
                  bg-white/[0.025]
                "
              />


              {/* Text */}

              <div className="relative text-center">

                <p
                  className="
                    font-serif
                    text-[13px]
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
                    text-[5px]
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
            bottom-6
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


            {/* Scroll */}

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
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-zinc-600
                "
              >
                Scroll
              </span>

              <div
                className="
                  h-px
                  w-16
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
            right-5
            top-1/2
            z-[100]
            hidden
            -translate-y-1/2
            flex-col
            gap-4
            lg:flex
          "
        >

          {trainers.map(
            (trainer, index) => {

              const active =
                index === activeIndex;

              return (
                <div
                  key={trainer.id}
                  className="
                    flex
                    items-center
                    gap-2
                  "
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
            }
          )}

        </div>

      </div>
    </section>
  );
}

export default Trainers;