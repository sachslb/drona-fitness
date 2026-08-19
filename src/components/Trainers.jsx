import { useEffect, useRef, useState } from "react";

const trainers = [
  {
    id: "01",
    name: "Alex Morgan",
    role: "Strength & Conditioning Coach",
    experience: "8+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1200&q=90",

    // Where the image finally sits around the center
    position: {
      x: -31,
      y: -20,
      rotate: -4,
    },

    // Where the image enters from
    enter: {
      x: -70,
      y: -55,
      rotate: -16,
    },
  },

  {
    id: "02",
    name: "Sarah Williams",
    role: "Personal Trainer",
    experience: "6+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1200&q=90",

    position: {
      x: 29,
      y: 18,
      rotate: 5,
    },

    enter: {
      x: 75,
      y: 55,
      rotate: 18,
    },
  },

  {
    id: "03",
    name: "Daniel Carter",
    role: "Functional Fitness Coach",
    experience: "7+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=90",

    position: {
      x: -6,
      y: 35,
      rotate: -3,
    },

    enter: {
      x: -65,
      y: 65,
      rotate: -14,
    },
  },
];

/* ============================================================
   Utility
============================================================ */

function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function easeOutCubic(value) {
  return 1 - Math.pow(1 - value, 3);
}

function easeInOut(value) {
  return value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function Trainers() {
  const sectionRef = useRef(null);

  const [progress, setProgress] = useState(0);

  /*
   * ------------------------------------------------------------
   * SCROLL PROGRESS
   * ------------------------------------------------------------
   */

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

        const scrollableDistance =
          sectionRef.current.offsetHeight - window.innerHeight;

        if (scrollableDistance <= 0) {
          ticking = false;
          return;
        }

        const current = clamp(
          -rect.top / scrollableDistance
        );

        setProgress(current);

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * ------------------------------------------------------------
   * TRAINER STAGE
   *
   * 0 ----------------------------- 1
   *
   * Each trainer gets its own portion of the scroll.
   * ------------------------------------------------------------
   */

  const total = trainers.length;

  const stageSize = 1 / total;

  /*
   * Current trainer index
   */

  const activeIndex = Math.min(
    Math.floor(progress / stageSize),
    total - 1
  );

  /*
   * ============================================================
   * IMAGE RENDERING
   * ============================================================
   */

  return (
    <section
      ref={sectionRef}
      id="trainers"
      className="relative bg-zinc-950"
      style={{
        height: `${total * 120 + 100}vh`,
      }}
    >
      {/* ======================================================
          STICKY VIEWPORT
      ======================================================= */}

      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ====================================================
            BACKGROUND
        ===================================================== */}

        <div className="absolute inset-0 bg-zinc-950" />

        {/* Very subtle orange glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-orange-500/[0.035]
            blur-[130px]
          "
        />


        {/* ====================================================
            TOP HEADER
        ===================================================== */}

        <div className="absolute left-0 right-0 top-0 z-[80]">

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
              sm:pt-9
              lg:px-12
              lg:pt-11
            "
          >

            {/* LEFT */}

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


            {/* RIGHT COUNTER */}

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
                Trainers
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


        {/* ====================================================
            CENTRAL AREA
        ===================================================== */}

        <div className="absolute inset-0">

          {/* ==================================================
              CENTER DECORATIVE RING
          =================================================== */}

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
              sm:h-[300px]
              sm:w-[300px]
              lg:h-[360px]
              lg:w-[360px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[170px]
              w-[170px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-white/[0.025]
              sm:h-[220px]
              sm:w-[220px]
            "
          />


          {/* ==================================================
              TRAINER IMAGES
          =================================================== */}

          {trainers.map((trainer, index) => {

            /*
             * -----------------------------------------------
             * Stage calculation
             * -----------------------------------------------
             */

            const stageStart = index * stageSize;

            const stageEnd = stageStart + stageSize;

            const stageProgress = clamp(
              (progress - stageStart) /
                (stageEnd - stageStart)
            );


            /*
             * -----------------------------------------------
             * Entry animation
             *
             * 0 → 45%
             * -----------------------------------------------
             */

            const enterProgress = clamp(
              stageProgress / 0.45
            );

            const enterEase = easeOutCubic(
              enterProgress
            );


            /*
             * -----------------------------------------------
             * Small settling movement
             * -----------------------------------------------
             */

            const settleProgress = clamp(
              (stageProgress - 0.45) / 0.55
            );

            const settleEase = easeInOut(
              settleProgress
            );


            /*
             * -----------------------------------------------
             * Position
             * -----------------------------------------------
             */

            const startX = trainer.enter.x;

            const startY = trainer.enter.y;

            const startRotate = trainer.enter.rotate;

            const finalX = trainer.position.x;

            const finalY = trainer.position.y;

            const finalRotate = trainer.position.rotate;


            /*
             * Interpolate entry → final position
             */

            let x =
              startX +
              (finalX - startX) * enterEase;

            let y =
              startY +
              (finalY - startY) * enterEase;

            let rotate =
              startRotate +
              (finalRotate - startRotate) *
                enterEase;


            /*
             * Add tiny floating movement after entry.
             */

            if (stageProgress > 0.45) {

              const floatingAmount =
                Math.sin(
                  settleProgress * Math.PI
                ) * 3;

              x += floatingAmount;

              y -= floatingAmount * 0.7;

            }


            /*
             * -----------------------------------------------
             * Scale
             * -----------------------------------------------
             */

            const scale =
              0.15 +
              enterEase * 0.85;


            /*
             * -----------------------------------------------
             * Opacity
             * -----------------------------------------------
             */

            let opacity = enterEase;

            /*
             * Once the image has appeared, keep it visible.
             */

            if (stageProgress >= 0.45) {
              opacity = 1;
            }


            /*
             * -----------------------------------------------
             * Blur
             * -----------------------------------------------
             */

            const blur =
              Math.max(
                0,
                8 - enterEase * 8
              );


            /*
             * -----------------------------------------------
             * Slight image zoom
             * -----------------------------------------------
             */

            const imageScale =
              1.08 -
              enterEase * 0.08;


            /*
             * -----------------------------------------------
             * Width
             * -----------------------------------------------
             */

            const imageWidth =
              index === 0
                ? "clamp(230px, 25vw, 390px)"
                : index === 1
                ? "clamp(220px, 24vw, 370px)"
                : "clamp(225px, 25vw, 380px)";


            /*
             * -----------------------------------------------
             * Z-index
             * -----------------------------------------------
             */

            const zIndex =
              20 + index;


            /*
             * -----------------------------------------------
             * Don't show future images until their stage.
             * -----------------------------------------------
             */

            if (
              progress < stageStart &&
              index !== 0
            ) {
              opacity = 0;
            }


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
                  width: imageWidth,

                  aspectRatio: "1.45 / 1",

                  zIndex,

                  opacity,

                  transform: `
                    translate3d(
                      calc(-50% + ${x}vw),
                      calc(-50% + ${y}vh),
                      0
                    )
                    rotate(${rotate}deg)
                    scale(${scale})
                  `,

                  filter: `blur(${blur}px)`,

                  willChange:
                    "transform, opacity, filter",

                  transition:
                    "none",
                }}
              >

                {/* ==========================================
                    IMAGE
                =========================================== */}

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
                  style={{
                    transform: `scale(${imageScale})`,
                  }}
                />


                {/* ==========================================
                    IMAGE DARK GRADIENT
                =========================================== */}

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


                {/* ==========================================
                    TOP NUMBER
                =========================================== */}

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


                {/* ==========================================
                    TRAINER DETAILS
                =========================================== */}

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
                      max-w-[230px]
                      text-[8px]
                      leading-4
                      text-zinc-300
                      sm:text-[10px]
                    "
                  >
                    {trainer.role}
                  </p>

                </div>


                {/* ==========================================
                    INNER BORDER
                =========================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-2xl
                    border
                    border-white/[0.06]
                    sm:rounded-3xl
                  "
                />

              </div>
            );
          })}


          {/* ==================================================
              CENTER TRAINERS CIRCLE
          =================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-[70]
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
                border-white/20
                bg-black/90
                shadow-[0_0_40px_rgba(0,0,0,0.7)]
                sm:h-[100px]
                sm:w-[100px]
              "
              style={{
                transform: `
                  scale(
                    ${
                      0.96 +
                      Math.sin(progress * Math.PI) *
                        0.05
                    }
                  )
                `,
              }}
            >

              {/* Outer glow */}

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


              {/* Small top line */}

              <div
                className="
                  absolute
                  left-1/2
                  top-[-13px]
                  h-[25px]
                  w-px
                  -translate-x-1/2
                  bg-gradient-to-b
                  from-transparent
                  to-white/20
                "
              />


              {/* Text */}

              <div className="text-center">

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
                    text-[6px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-zinc-500
                  "
                >
                  Meet the team
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* ====================================================
            BOTTOM INFORMATION
        ===================================================== */}

        <div
          className="
            absolute
            bottom-6
            left-0
            right-0
            z-[80]
            sm:bottom-8
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

            {/* Description */}

            <p
              className="
                hidden
                max-w-xs
                text-xs
                leading-5
                text-zinc-600
                sm:block
              "
            >
              Experience, knowledge and personal attention —
              our coaches are here to help you become
              stronger.
            </p>


            {/* Scroll indicator */}

            <div className="ml-auto flex items-center gap-3">

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


        {/* ====================================================
            SIDE STAGE INDICATOR
        ===================================================== */}

        <div
          className="
            absolute
            right-5
            top-1/2
            z-[80]
            hidden
            -translate-y-1/2
            flex-col
            gap-4
            lg:flex
          "
        >

          {trainers.map((trainer, index) => {

            const isActive =
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
                    transition-colors
                    ${
                      isActive
                        ? "text-orange-500"
                        : "text-zinc-700"
                    }
                  `}
                >
                  {trainer.id}
                </span>

                <div
                  className={`
                    h-px
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "w-7 bg-orange-500"
                        : "w-2 bg-zinc-800"
                    }
                  `}
                />

              </div>
            );

          })}

        </div>


        {/* ====================================================
            MOBILE CURRENT TRAINER
        ===================================================== */}

        <div
          className="
            absolute
            bottom-6
            left-5
            z-[80]
            sm:hidden
          "
        >

          <p
            className="
              text-[7px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-zinc-600
            "
          >
            Currently
          </p>

          <p
            className="
              mt-1
              text-[10px]
              font-bold
              uppercase
              text-white
            "
          >
            {trainers[activeIndex].name}
          </p>

        </div>

      </div>
    </section>
  );
}

export default Trainers;