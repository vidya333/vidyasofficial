import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X, Download } from "lucide-react";

const links = ["About", "Journey", "Services", "Life", "Contact"];

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled || menuOpen ? "bg-[var(--bg2)] shadow-[0_1px_0_var(--border)]" : "bg-transparent"}`}>

      <div className="max-w-[1100px] mx-auto px-5 h-16 flex items-center justify-between">

        {/* Logo */}
        <span
          className="font-display font-extrabold text-[19px] tracking-tight cursor-pointer select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-[var(--pink)]">vidyas</span>
          <span className="text-[var(--purple)]">official</span>
        </span>

        {/* Desktop links */}
        {!isMobile && (
          <div className="flex items-center gap-1">
            {links.map(l => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="text-[var(--text2)] text-sm font-medium px-3 py-1.5 rounded-lg
                  hover:text-[var(--text)] hover:bg-[var(--bg3)] transition-all duration-200"
              >
                {l}
              </button>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            title="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded-lg
              bg-[var(--bg3)] border border-[var(--border)] text-[var(--text2)]
              hover:border-[var(--border2)] transition-all duration-200"
          >
            {dark ? <Sun size={16} strokeWidth={1.8} /> : <Moon size={16} strokeWidth={1.8} />}
          </button>

          {/* Resume — desktop only */}
          {!isMobile && (
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-[13px]
                font-bold no-underline font-display
                bg-gradient-to-br from-[var(--purple)] to-[var(--pink)]
                hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Download size={13} strokeWidth={2} />
              Resume
            </a>
          )}

          {/* Hamburger — mobile only */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(m => !m)}
              className="w-9 h-9 flex items-center justify-center rounded-lg
                bg-[var(--bg3)] border border-[var(--border)] text-[var(--text2)]
                hover:border-[var(--border2)] transition-all duration-200"
            >
              {menuOpen ? <X size={18} strokeWidth={1.8} /> : <Menu size={18} strokeWidth={1.8} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMobile && menuOpen && (
        <div className="bg-[var(--bg2)] border-t border-[var(--border)] flex flex-col px-5 pb-5 pt-2 gap-0.5">
          {links.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-[var(--text2)] text-[15px] font-medium text-left px-1 py-3
                border-b border-[var(--border)] hover:text-[var(--text)] transition-colors duration-200"
            >
              {l}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="mt-3 flex items-center gap-2 w-fit px-5 py-2.5 rounded-lg text-white
              text-sm font-bold no-underline font-display
              bg-gradient-to-br from-[var(--purple)] to-[var(--pink)]"
          >
            <Download size={14} strokeWidth={2} />
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}