import { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // =========================
  // Detect Scroll
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================
  // Close Menu On Desktop
  // =========================
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // =========================
  // Prevent Background Scroll
  // =========================
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Programs",
      href: "#programs",
    },
    {
      name: "Trainers",
      href: "#trainers",
    },
    {
      name: "Membership",
      href: "#membership",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* ==================================================
          NAVBAR
      ================================================== */}

      <header className="fixed left-0 top-0 z-[100] w-full px-3 pt-3 sm:px-4 sm:pt-4">
        <nav
          className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ${
            isScrolled
              ? "border-white/10 bg-zinc-950/95 shadow-2xl shadow-black/30 backdrop-blur-xl"
              : "border-white/10 bg-black/30 backdrop-blur-md"
          }`}
          aria-label="Main navigation"
        >
          <div className="flex h-[72px] items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-7">

            {/* ==================================================
                LOGO
            ================================================== */}

            <a
              href="#home"
              onClick={closeMenu}
              className="relative z-[110] flex items-center gap-2.5"
              aria-label="Drona Fitness home"
            >
              <img
                src={logo}
                alt="Drona Fitness Logo"
                className="h-12 w-auto object-contain sm:h-14"
              />

              <div className="hidden sm:block">
                <p className="text-lg font-black uppercase leading-none tracking-tight text-white sm:text-xl">
                  Drona
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-orange-500">
                  Fitness
                </p>
              </div>
            </a>


            {/* ==================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <div className="hidden items-center gap-6 md:flex lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative py-2 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:text-orange-500"
                >
                  {link.name}

                  <span
                    className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-orange-500 transition-all duration-200 group-hover:w-full"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>


            {/* ==================================================
                DESKTOP CTA
            ================================================== */}

            <a
              href="#contact"
              className="hidden rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 md:block"
            >
              Join Now
            </a>


            {/* ==================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">
                {isOpen ? "Close menu" : "Open menu"}
              </span>

              <div className="flex w-5 flex-col gap-1.5">

                {/* Top */}
                <span
                  className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                    isOpen
                      ? "translate-y-2 rotate-45"
                      : ""
                  }`}
                />

                {/* Middle */}
                <span
                  className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                    isOpen
                      ? "opacity-0"
                      : ""
                  }`}
                />

                {/* Bottom */}
                <span
                  className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                    isOpen
                      ? "-translate-y-2 -rotate-45"
                      : ""
                  }`}
                />

              </div>
            </button>

          </div>
        </nav>
      </header>


      {/* ==================================================
          MOBILE MENU
          IMPORTANT: OUTSIDE NAV
      ================================================== */}

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[90] bg-zinc-950 transition-all duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        aria-hidden={!isOpen}
      >

        {/* Background */}
        <div className="absolute inset-0 bg-zinc-950" />

        {/* Subtle Orange Glow */}
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />


        {/* ==================================================
            MOBILE CONTENT
        ================================================== */}

        <div className="relative flex min-h-screen flex-col items-center justify-center px-6">

          {/* Mobile Logo */}

          <div
            className={`absolute left-1/2 top-7 flex -translate-x-1/2 items-center gap-3 transition-all duration-300 ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-5 opacity-0"
            }`}
          >

            <img
              src={logo}
              alt="Drona Fitness Logo"
              className="h-14 w-auto object-contain"
            />

            <div>
              <p className="text-lg font-black uppercase leading-none text-white">
                Drona
              </p>

              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-orange-500">
                Fitness
              </p>
            </div>

          </div>


          {/* ==================================================
              MOBILE LINKS
          ================================================== */}

          <div className="flex flex-col items-center gap-6">

            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                tabIndex={isOpen ? 0 : -1}
                className={`text-3xl font-bold text-white transition-all duration-300 hover:text-orange-500 sm:text-4xl ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen
                    ? `${index * 60}ms`
                    : "0ms",
                }}
              >
                {link.name}
              </a>
            ))}

          </div>


          {/* ==================================================
              MOBILE CTA
          ================================================== */}

          <a
            href="#contact"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            className={`mt-10 rounded-full bg-orange-500 px-10 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{
              transitionDelay: isOpen
                ? `${navLinks.length * 60 + 100}ms`
                : "0ms",
            }}
          >
            Join Now

            <span
              className="ml-2"
              aria-hidden="true"
            >
              →
            </span>
          </a>

        </div>
      </div>
    </>
  );
}

export default Navbar;