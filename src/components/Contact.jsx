import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  // Formspree form ID
  const [state, handleSubmit, reset] = useForm("myegbavz");

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-zinc-900 py-20 sm:py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            HEADER
        ========================== */}
        <div className="max-w-3xl">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-orange-500 sm:w-10" />

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-xs sm:tracking-[0.25em]">
              Get Started
            </p>
          </div>

          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Ready To
            <br />
            <span className="text-orange-500">Get Stronger?</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
            Have questions about membership, training programs or personal
            training? Get in touch with our team and we'll help you find
            the right way to start.
          </p>

        </div>

        {/* =========================
            CONTACT GRID
        ========================== */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[1fr_1.15fr]">

          {/* =========================
              CONTACT INFO
          ========================== */}
          <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:p-8">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
              Visit Us
            </p>

            <h3 className="mt-3 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
              Start Your
              <br />
              <span className="text-orange-500">Journey.</span>
            </h3>

            {/* Details */}
            <div className="mt-10 space-y-7">

              {/* Address */}
              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                  <span aria-hidden="true">⌖</span>
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Gym Address
                  </p>

                  <p className="mt-1 max-w-xs text-sm leading-6 text-zinc-500">
                    123 Fitness Avenue,
                    <br />
                    Bengaluru, Karnataka 560001
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                  <span aria-hidden="true">☎</span>
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Phone
                  </p>

                  <a
                    href="tel:+919876543210"
                    className="mt-1 block text-sm text-zinc-500 transition-colors hover:text-orange-500"
                  >
                    +91 98765 43210
                  </a>
                </div>

              </div>

              {/* Email */}
              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                  <span aria-hidden="true">✉</span>
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Email
                  </p>

                  <a
                    href="mailto:hello@ironforgegym.com"
                    className="mt-1 block break-all text-sm text-zinc-500 transition-colors hover:text-orange-500"
                  >
                    hello@ironforgegym.com
                  </a>
                </div>

              </div>

            </div>

            {/* Opening Hours */}
            <div className="mt-10 border-t border-white/10 pt-7">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                Opening Hours
              </p>

              <div className="mt-4 space-y-2 text-sm">

                <div className="flex justify-between gap-4">
                  <span className="text-zinc-400">
                    Monday – Saturday
                  </span>

                  <span className="font-medium text-white">
                    5:30 AM – 10:00 PM
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-zinc-400">
                    Sunday
                  </span>

                  <span className="font-medium text-white">
                    7:00 AM – 2:00 PM
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* =========================
              CONTACT FORM
          ========================== */}
          <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:p-8">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Contact Our Team
              </p>

              <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                Let's Talk.
              </h3>
            </div>

            {/* =========================
                SUCCESS STATE
            ========================== */}
            {state.succeeded ? (
              <div className="mt-8 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-8 text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white">
                  ✓
                </div>

                <h4 className="mt-5 text-xl font-black uppercase text-white">
                  Enquiry Sent!
                </h4>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-zinc-400">
                  Thank you for contacting IRONFORGE. Our team will
                  get back to you as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={reset}
                  className="mt-6 rounded-full border border-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-300 transition hover:border-orange-500 hover:text-orange-500"
                >
                  Send Another Enquiry
                </button>

              </div>
            ) : (

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* Name + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      minLength={2}
                      maxLength={80}
                      required
                      className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-500"
                    />

                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="mt-1 text-xs text-red-400"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[+]?[0-9 ()-]{10,20}"
                      maxLength={20}
                      required
                      className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-500"
                    />

                    <ValidationError
                      prefix="Phone"
                      field="phone"
                      errors={state.errors}
                      className="mt-1 text-xs text-red-400"
                    />
                  </div>

                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    maxLength={120}
                    required
                    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-500"
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-1 text-xs text-red-400"
                  />
                </div>

                {/* Goal */}
                <div>
                  <label
                    htmlFor="goal"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400"
                  >
                    Your Goal
                  </label>

                  <select
                    id="goal"
                    name="goal"
                    defaultValue=""
                    required
                    className="w-full appearance-none rounded-xl border border-white/10 bg-zinc-900 px-4 py-3.5 text-sm text-white outline-none transition focus:border-orange-500"
                  >
                    <option value="" disabled>
                      Select your goal
                    </option>

                    <option value="Build Muscle">
                      Build Muscle
                    </option>

                    <option value="Weight Loss">
                      Weight Loss
                    </option>

                    <option value="Build Strength">
                      Build Strength
                    </option>

                    <option value="Improve Fitness">
                      Improve Fitness
                    </option>

                    <option value="Personal Training">
                      Personal Training
                    </option>
                  </select>

                  <ValidationError
                    prefix="Goal"
                    field="goal"
                    errors={state.errors}
                    className="mt-1 text-xs text-red-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us what you're looking for..."
                    minLength={10}
                    maxLength={1000}
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-zinc-900 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-500"
                  />

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="mt-1 text-xs text-red-400"
                  />
                </div>

                {/* Formspree General Error */}
                {state.errors && (
                  <ValidationError
                    errors={state.errors}
                    className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-center text-xs leading-5 text-red-400"
                  />
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="flex min-h-12 w-full items-center justify-center rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {state.submitting ? (
                    <>
                      <span
                        className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <span
                        className="ml-2 text-lg"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] leading-5 text-zinc-600">
                  Your information is used only to respond to your enquiry.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
