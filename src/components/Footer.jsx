function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            MAIN FOOTER
        ========================== */}
        <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12 lg:py-20">

          {/* =========================
              BRAND
          ========================== */}
          <div className="max-w-sm">

            <a
              href="#home"
              className="inline-block text-2xl font-black tracking-tight text-white"
            >
              DRONA
              <span className="text-orange-500">FITNESS</span>
            </a>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              A premium fitness community built to help you become
              stronger, healthier and more confident through consistent
              training.
            </p>


            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-zinc-400 transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-zinc-400 transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                FB
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-zinc-400 transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                YT
              </a>

            </div>

          </div>


          {/* =========================
              NAVIGATION
          ========================== */}
          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Navigation
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a
                  href="#home"
                  className="text-sm text-zinc-500 transition-colors hover:text-orange-500"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-sm text-zinc-500 transition-colors hover:text-orange-500"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#programs"
                  className="text-sm text-zinc-500 transition-colors hover:text-orange-500"
                >
                  Programs
                </a>
              </li>

              <li>
                <a
                  href="#trainers"
                  className="text-sm text-zinc-500 transition-colors hover:text-orange-500"
                >
                  Trainers
                </a>
              </li>

              <li>
                <a
                  href="#membership"
                  className="text-sm text-zinc-500 transition-colors hover:text-orange-500"
                >
                  Membership
                </a>
              </li>

            </ul>

          </div>


          {/* =========================
              CONTACT
          ========================== */}
          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4">

              <a
                href="tel:+919876543210"
                className="block text-sm leading-6 text-zinc-500 transition-colors hover:text-orange-500"
              >
                +91 98765 43210
              </a>

              <a
                href="mailto:hello@ironforgegym.com"
                className="block break-all text-sm leading-6 text-zinc-500 transition-colors hover:text-orange-500"
              >
                hello@ironforgegym.com
              </a>

              <p className="text-sm leading-6 text-zinc-500">
                123 Fitness Avenue
                <br />
                Bengaluru, Karnataka 560001
              </p>

            </div>

          </div>


          {/* =========================
              OPENING HOURS
          ========================== */}
          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Opening Hours
            </h3>

            <div className="mt-5 space-y-4">

              <div>
                <p className="text-sm font-medium text-zinc-300">
                  Monday – Saturday
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  5:30 AM – 10:00 PM
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-zinc-300">
                  Sunday
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  7:00 AM – 2:00 PM
                </p>
              </div>

            </div>


            {/* CTA */}
            <a
              href="#contact"
              className="mt-6 inline-flex items-center text-sm font-bold text-orange-500 transition-colors hover:text-orange-400"
            >
              Start Training
              <span className="ml-2 text-lg" aria-hidden="true">
                →
              </span>
            </a>

          </div>

        </div>


        {/* =========================
            BOTTOM BAR
        ========================== */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs leading-5 text-zinc-600">
            © {currentYear} Drona Fitness. All rights reserved.
          </p>


          <div className="flex gap-5">

            <a
              href="#"
              className="text-xs text-zinc-600 transition-colors hover:text-zinc-300"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-zinc-600 transition-colors hover:text-zinc-300"
            >
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;