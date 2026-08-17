const plans = [
  {
    name: "Basic",
    description: "Everything you need to stay consistent.",
    price: "₹1,499",
    period: "/ month",
    features: [
      "Full gym access",
      "Strength & cardio equipment",
      "Locker facilities",
      "Basic fitness assessment",
    ],
    popular: false,
  },
  {
    name: "Pro",
    description: "More guidance. More progress. Better results.",
    price: "₹2,499",
    period: "/ month",
    features: [
      "Everything in Basic",
      "Personalized workout plan",
      "Monthly progress tracking",
      "Group training sessions",
      "Trainer support",
    ],
    popular: true,
  },
  {
    name: "Elite",
    description: "A fully personalized fitness experience.",
    price: "₹4,499",
    period: "/ month",
    features: [
      "Everything in Pro",
      "Personal training sessions",
      "Personalized nutrition guidance",
      "Weekly progress tracking",
      "Priority trainer support",
    ],
    popular: false,
  },
];

function Membership() {
  return (
    <section
      id="membership"
      className="relative overflow-hidden bg-zinc-950 py-20 sm:py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-orange-500 sm:w-10" />

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-xs sm:tracking-[0.25em]">
              Membership
            </p>

            <span className="h-px w-8 bg-orange-500 sm:w-10" />
          </div>

          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Choose Your
            <br />
            <span className="text-orange-500">Commitment.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
            Flexible membership options designed to fit different training
            goals. Start where you are and upgrade whenever you're ready
            for the next level.
          </p>

        </div>


        {/* =========================
            PRICING CARDS
        ========================== */}
        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">

          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
                plan.popular
                  ? "border-orange-500 bg-zinc-900 shadow-2xl shadow-orange-500/10"
                  : "border-white/10 bg-zinc-900/60"
              }`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-orange-500 px-4 py-1.5 text-[10px] font-black uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                </div>
              )}


              {/* Plan Header */}
              <div>

                <h3 className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                  {plan.name}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-zinc-500">
                  {plan.description}
                </p>

              </div>


              {/* Price */}
              <div className="mt-7 flex items-end gap-1">

                <span className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                  {plan.price}
                </span>

                <span className="mb-1 text-sm text-zinc-500">
                  {plan.period}
                </span>

              </div>


              {/* Divider */}
              <div className="my-7 h-px bg-white/10" />


              {/* Features */}
              <ul className="flex-1 space-y-4">

                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-xs font-bold text-orange-500">
                      ✓
                    </span>

                    <span className="text-sm leading-5 text-zinc-300">
                      {feature}
                    </span>
                  </li>
                ))}

              </ul>


              {/* CTA */}
              <a
                href="#contact"
                className={`mt-8 flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 ${
                  plan.popular
                    ? "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
                    : "border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
                }`}
              >
                Get Started
                <span className="ml-2 text-lg" aria-hidden="true">
                  →
                </span>
              </a>

            </article>
          ))}

        </div>


        {/* =========================
            BOTTOM NOTE
        ========================== */}
        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">

          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/10 text-[10px] font-bold text-orange-500">
            ✓
          </span>

          <p className="text-xs text-zinc-500 sm:text-sm">
            No long-term commitment required. Ask our team about available
            plans and offers.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Membership;