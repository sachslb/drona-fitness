import { useEffect, useRef, useState } from "react";

const trainers = [
  {
    id: "01",
    name: "Alex Morgan",
    role: "Strength & Conditioning Coach",
    experience: "8+ Years",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "02",
    name: "Sarah Williams",
    role: "Personal Training Specialist",
    experience: "6+ Years",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "03",
    name: "Daniel Carter",
    role: "Functional Fitness Coach",
    experience: "7+ Years",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "04",
    name: "Michael Stone",
    role: "Performance & Mobility Coach",
    experience: "9+ Years",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "05",
    name: "Emma Brooks",
    role: "Strength & Fitness Coach",
    experience: "5+ Years",
    image:
      "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "06",
    name: "Ryan Cooper",
    role: "Athletic Performance Coach",
    experience: "10+ Years",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90",
  },
];

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function easeInOutCubic(value) {
  return value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function Trainers() {
  const sectionRef = useRef(null);

  const [progress, setProgress] = useState(0);

  /*
   * ---------------------------------------------------------
   * SCROLL PROGRESS
   * ---------------------------------------------------------
   */

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const scrollDistance =
        sectionRef.current.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      const value = clamp(
        -rect.top / scrollDistance,
        0,
        1
      );

      setProgress(value);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * TRAINER PROGRESS
   * ---------------------------------------------------------
   *
   * Each trainer gets one complete scroll section.
   */

  const total = trainers.length;

  const rawProgress = progress * total;

  const activeIndex = clamp(
    Math.floor(rawProgress),
    0,
    total - 1
  );

  const localProgress = rawProgress - activeIndex;

  /*
   * Smooth transition.
   */
  const smoothProgress = easeInOutCubic(
    clamp(localProgress, 0, 1)
  );

  const activeTrainer = trainers[activeIndex];

  /*
   * ---------------------------------------------------------
   * IMAGE ANIMATION
   * ---------------------------------------------------------
   *
   * Every image starts inside the center circle.
   *
   * 0%    = tiny circle
   * 25%   = growing
   * 50%   = full image
   * 75%   = full image
   * 100%  = shrinking back into circle
   *
   * Then next trainer starts from the same circle.
   */

  const getTrainerStyle = (index) => {
    const difference = index - activeIndex;

    let scale = 0.08;
    let opacity = 0;
    let x = 0;
    let y = 0;
    let rotate = 0;
    let blur = 8;

    /*
     * CURRENT IMAGE
     */
    if (difference === 0) {
      /*
       * Enter from circle
       */
      if (smoothProgress < 0.5) {
        const enter = smoothProgress / 0.5;

        const easedEnter = easeInOutCubic(enter);

        scale = 0.08 + easedEnter * 0.92;
        opacity = easedEnter;

        /*
         * Slight movement while emerging.
         */
        x = 0;
        y = 20 - easedEnter * 20;

        rotate = 4 - easedEnter * 4;

        blur = 8 - easedEnter * 8;
      }

      /*
       * Stay large.
       */
      else if (smoothProgress < 0.78) {
        scale = 1;
        opacity = 1;

        x = 0;
        y = 0;
        rotate = 0;
        blur = 0;
      }

      /*
       * EXIT BACK INTO CIRCLE
       */
      else {
        const exit =
          (smoothProgress - 0.78) / 0.22;

        const easedExit = easeInOutCubic(
          clamp(exit, 0, 1)
        );

        scale = 1 - easedExit * 0.92;
        opacity = 1 - easedExit;

        /*
         * Move toward the center.
         */
        x = 0;
        y = easedExit * 20;

        rotate = easedExit * -4;

        blur = easedExit * 8;
      }
    }

    /*
     * NEXT IMAGE
     *
     * It waits in the center and begins
     * appearing while current image exits.
     */
    else if (difference === 1) {
      /*
       * Don't show next image until
       * current image starts leaving.
       */
      if (smoothProgress < 0.72) {
        scale = 0.08;
        opacity = 0;
        x = 0;
        y = 0;
        rotate = 4;
        blur = 8;
      } else {
        const enter =
          (smoothProgress - 0.72) / 0.28;

        const easedEnter = easeInOutCubic(
          clamp(enter, 0, 1)
        );

        scale = 0.08 + easedEnter * 0.92;
        opacity = easedEnter;

        x = 0;
        y = 20 - easedEnter * 20;

        rotate = 4 - easedEnter * 4;

        blur = 8 - easedEnter * 8;
      }
    }

    /*
     * PREVIOUS IMAGE
     *
     * Keep it completely hidden after
     * transition.
     */
    else {
      scale = 0.08;
      opacity = 0;
      x = 0;
      y = 0;
      rotate = 0;
      blur = 8;
    }

    return {
      opacity,
      transform: `
        translate3d(${x}px, ${y}px, 0)
        scale(${scale})
        rotate(${rotate}deg)
      `,
      filter: `blur(${blur}px)`,
      zIndex:
        difference === 0
          ? 10
          : difference === 1
          ? 9
          : 1,
    };
  };

  return (
    <section
      ref={sectionRef}
      id="trainers"
      className="relative bg-[#090909]"
      style={{
        height: `${(total + 1) * 100}vh`,
      }}
    >
      {/* =====================================================
          STICKY SCREEN
      ====================================================== */}

      <div className="sticky top-0 h-screen overflow-hidden">

        {/* =================================================
            BACKGROUND
        ================================================== */}

        <div className="absolute inset-0 bg-[#090909]" />

        {/* Very subtle radial lighting */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[650px]
            w-[650px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-orange-500/[0.035]
            blur-[140px]
          "
        />

        {/* =================================================
            TOP HEADER
        ================================================== */}

        <div className="absolute left-0 right-0 top-0 z-50">

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

                <span
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
                </span>

              </div>

              <h2
                className="
                  text-3xl
                  font-black
                  uppercase
                  leading-[0.88]
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

            <div className="text-right">

              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-zinc-600
                  sm:text-[10px]
                "
              >
                Trainer
              </p>

              <p
                className="
                  mt-1
                  text-xl
                  font-black
                  text-white
                  sm:text-3xl
                "
              >
                {activeTrainer.id}

                <span className="ml-1 text-zinc-700">
                  / {String(total).padStart(2, "0")}
                </span>
              </p>

            </div>

          </div>

        </div>

        {/* =================================================
            IMAGE AREA
        ================================================== */}

        <div className="absolute inset-0 flex items-center justify-center">

          <div
            className="
              relative
              h-[52vh]
              w-[82vw]
              max-w-[850px]
              sm:h-[62vh]
              sm:w-[70vw]
              lg:h-[68vh]
              lg:w-[54vw]
            "
          >

            {trainers.map((trainer, index) => (

              <div
                key={trainer.id}
                className="
                  absolute
                  inset-0
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/[0.08]
                  bg-zinc-900
                  shadow-[0_30px_100px_rgba(0,0,0,0.6)]
                "
                style={{
                  ...getTrainerStyle(index),
                  willChange:
                    "transform, opacity, filter",
                  pointerEvents: "none",
                }}
              >

                {/* IMAGE */}

                <img
                  src={trainer.image}
                  alt={`${trainer.name} - ${trainer.role}`}
                  draggable="false"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                  "
                />

                {/* DARK OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/20
                    to-black/5
                  "
                />

                {/* LEFT SHADOW */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/50
                    via-transparent
                    to-transparent
                  "
                />

                {/* NUMBER */}

                <div
                  className="
                    absolute
                    right-5
                    top-5
                    sm:right-8
                    sm:top-8
                  "
                >
                  <span
                    className="
                      text-xs
                      font-black
                      tracking-[0.25em]
                      text-white/60
                      sm:text-sm
                    "
                  >
                    {trainer.id}
                  </span>
                </div>

                {/* TRAINER INFO */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-5
                    sm:p-8
                    lg:p-10
                  "
                >

                  <p
                    className="
                      mb-2
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-orange-500
                      sm:text-xs
                    "
                  >
                    {trainer.experience}
                  </p>

                  <h3
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
                    {trainer.name}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-md
                      text-xs
                      leading-5
                      text-zinc-300
                      sm:text-sm
                    "
                  >
                    {trainer.role}
                  </p>

                </div>

              </div>

            ))}

            {/* =================================================
                CENTER CIRCLE
                THIS SITS ABOVE THE IMAGES
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                z-[30]
                -translate-x-1/2
                -translate-y-1/2
              "
            >

              {/* Outer glow */}

              <div
                className="
                  absolute
                  -inset-3
                  rounded-full
                  bg-orange-500/[0.08]
                  blur-xl
                "
              />

              {/* Circle */}

              <div
                className="
                  relative
                  flex
                  h-[92px]
                  w-[92px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-black/80
                  shadow-[0_0_40px_rgba(0,0,0,0.8)]
                  backdrop-blur-md
                  sm:h-[112px]
                  sm:w-[112px]
                  lg:h-[125px]
                  lg:w-[125px]
                "
              >

                {/* Rotating ring */}

                <div
                  className="
                    absolute
                    inset-[-5px]
                    rounded-full
                    border
                    border-orange-500/20
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-white
                    sm:text-[10px]
                  "
                >
                  Trainers
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* =================================================
            BOTTOM INFO
        ================================================== */}

        <div
          className="
            absolute
            bottom-6
            left-0
            right-0
            z-50
            sm:bottom-8
            lg:bottom-10
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

            {/* DESCRIPTION */}

            <div className="hidden sm:block">

              <p
                className="
                  max-w-sm
                  text-xs
                  leading-5
                  text-zinc-500
                  lg:text-sm
                "
              >
                Meet the people behind the
                transformation. Every coach brings
                experience, discipline and a
                different approach to your goals.
              </p>

            </div>

            {/* SCROLL */}

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
                  className="h-full origin-left bg-orange-500"
                  style={{
                    transform: `scaleX(${progress})`,
                  }}
                />

              </div>

            </div>

          </div>

        </div>

        {/* =================================================
            RIGHT SIDE INDICATOR
        ================================================== */}

        <div
          className="
            absolute
            right-4
            top-1/2
            z-50
            hidden
            -translate-y-1/2
            flex-col
            gap-3
            lg:flex
          "
        >

          {trainers.map((trainer, index) => {

            const active = index === activeIndex;

            return (
              <div
                key={trainer.id}
                className="flex items-center gap-2"
              >

                <span
                  className={`
                    text-[9px]
                    font-bold
                    transition-all
                    duration-300
                    ${
                      active
                        ? "text-orange-500"
                        : "text-zinc-700"
                    }
                  `}
                >
                  {trainer.id}
                </span>

                <div
                  className={`
                    h-[2px]
                    transition-all
                    duration-500
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