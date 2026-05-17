import React, { useState } from "react";

const NAV_LINKS = [
  { label: "ABOUT",    href: "#about"    },
  { label: "PROJECTS", href: "#projects" },
  { label: "TOOLKIT",  href: "#toolkit"  },
  { label: "CONTACT",  href: "#contact"  },
];

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-velvet-espresso/95 backdrop-blur-sm border-b border-espresso-border">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-5 flex items-center justify-between">

        {/* Brand */}
        <a
          href="/"
          className="font-sans tracking-widest text-sm text-parchment hover:text-brass transition-all duration-400"
        >
          LINDSEY CASON
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-sans text-sm tracking-wider text-cashmere hover:text-brass transition-all duration-400 no-underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-0 p-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="block h-px w-6 bg-cashmere transition-all duration-400" />
          <span className="block h-px w-6 bg-cashmere transition-all duration-400" />
          <span
            className={`block h-px bg-cashmere transition-all duration-400 ${
              menuOpen ? "w-6" : "w-4"
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-roasted-charcoal border-t border-espresso-border">
          <ul className="flex flex-col px-8 py-6 gap-6 list-none m-0 p-0 px-8 py-6">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-sans text-sm tracking-wider text-cashmere hover:text-brass transition-all duration-400 no-underline block"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
