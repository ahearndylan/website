import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Portfolio", id: "projects" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

const Navbar = ({ setSelectedProject }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setSelectedProject(null);
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-3 rounded-2xl border border-slate-200/70 bg-white/70 shadow-sm backdrop-blur">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              type="button"
              onClick={() => handleNavClick("hero")}
              className="flex items-center gap-3 text-left"
              aria-label="Go to top"
            >
              <img
                src="/logo2.PNG"
                alt="DA Logo"
                className="h-10 w-auto object-contain"
                loading="eager"
              />
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight text-slate-900">
                  Dylan Ahearn
                </div>
                <div className="text-xs text-slate-600">Developer</div>
              </div>
            </button>

            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="rounded-xl border border-slate-200 bg-white/60 p-2 text-slate-700 shadow-sm transition hover:bg-white"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {menuOpen ? (
                    <>
                      <path d="M18 6 6 18" />
                      <path d="M6 6l12 12" />
                    </>
                  ) : (
                    <>
                      <path d="M4 6h16" />
                      <path d="M4 12h16" />
                      <path d="M4 18h16" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden border-t border-slate-200/70 px-2 py-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
