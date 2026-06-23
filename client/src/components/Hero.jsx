import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ROLES = [
  "websites for businesses",
  "MERN Stack apps",
  "landing pages that convert",
  "full-stack web experiences",
  "brands a home online",
];

const socials = [
  { label: "LinkedIn", url: "https://linkedin.com/in/vidya333" },
  { label: "Twitter", url: "https://twitter.com/vidya_tandel" },
  { label: "Instagram", url: "https://instagram.com/vidyasofficiall" },
  { label: "GitHub", url: "https://github.com/vidya333" },
];

export default function Hero() {
  const roleRef = useRef(null);
  const idx = useRef(0);
  const char = useRef(0);
  const del = useRef(false);
  const auraRef = useRef(null);
  const dotRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const word = ROLES[idx.current];
      if (!del.current) {
        char.current++;
        if (char.current > word.length) { del.current = true; return; }
      } else {
        char.current--;
        if (char.current <= 0) {
          del.current = false;
          idx.current = (idx.current + 1) % ROLES.length;
          return;
        }
      }
      if (roleRef.current) roleRef.current.textContent = word.slice(0, char.current);
    };
    const interval = setInterval(tick, 100);
    return () => clearInterval(interval);
  }, []);

  // Aura + cursor — unchanged
  useEffect(() => {
    const section = sectionRef.current;
    let mouseX = 0, mouseY = 0;
    let auraX = 0, auraY = 0;
    let raf;
    const lerp = (a, b, t) => a + (b - a) * t;
    const onMove = (e) => {
      const rect = section.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + "px";
        dotRef.current.style.top = mouseY + "px";
      }
    };
    const onEnter = () => {
      if (auraRef.current) auraRef.current.style.opacity = "1";
      if (dotRef.current) dotRef.current.style.opacity = "1";
    };
    const onLeave = () => {
      if (auraRef.current) auraRef.current.style.opacity = "0";
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };
    const animate = () => {
      auraX = lerp(auraX, mouseX, 0.07);
      auraY = lerp(auraY, mouseY, 0.07);
      if (auraRef.current) {
        auraRef.current.style.left = auraX + "px";
        auraRef.current.style.top = auraY + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    animate();
    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseenter", onEnter);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseenter", onEnter);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ cursor: "none" }}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:mt-16"
    >
      {/* Aura blob */}
      <div
        ref={auraRef}
        className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-300"
        style={{
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(155,89,255,0.25) 0%, rgba(236,72,153,0.15) 35%, transparent 70%)",
        }}
      />

      {/* Cursor dot */}
      <div
        ref={dotRef}
        className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-300"
        style={{
          width: 10, height: 10,
          background: "rgba(155,89,255,0.75)",
          boxShadow: "0 0 0 3px rgba(155,89,255,0.2)",
        }}
      />

      {/* Background blobs */}
      <div
        className="absolute w-72 h-72 md:w-[400px] md:h-[400px] rounded-full blur-[100px] opacity-[0.12] pointer-events-none animate-[float_8s_ease-in-out_infinite]"
        style={{ background: "var(--purple)", top: "10%", left: "5%" }}
      />
      <div
        className="absolute w-72 h-72 md:w-[400px] md:h-[400px] rounded-full blur-[100px] opacity-[0.12] pointer-events-none animate-[float_8s_ease-in-out_infinite] [animation-delay:2s]"
        style={{ background: "var(--pink)", top: "60%", right: "5%" }}
      />
      <div
        className="absolute w-64 h-64 md:w-[350px] md:h-[350px] rounded-full blur-[100px] opacity-[0.10] pointer-events-none animate-[float_8s_ease-in-out_infinite] [animation-delay:4s]"
        style={{ background: "var(--cyan)", bottom: "10%", left: "40%" }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-10 pb-20 px-5 md:px-6">

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border font-mono text-[13px]"
            style={{
              background: "rgba(155,89,255,0.1)",
              borderColor: "rgba(155,89,255,0.3)",
              color: "var(--purple)",
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--green)" }} />
            let's build together
          </div>

          {/* Google Business badge */}
          <Link
            to="/webs-by-vidya"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border font-mono text-[13px] no-underline transition-all duration-200 hover:border-[var(--purple)]"
            style={{
              background: "rgba(66,133,244,0.08)",
              borderColor: "rgba(66,133,244,0.3)",
              color: "#4285F4",
            }}
          >
            {/* Google G — inline SVG */}
            <svg width="13" height="13" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.5 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.5-.4-3.5z" fill="#FFC107"/>
              <path d="M6.3 14.7l6.6 4.8C14.7 16.1 19 13 24 13c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.5 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" fill="#FF3D00"/>
              <path d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35.3 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-8H6.2C9.5 35.6 16.3 44 24 44z" fill="#4CAF50"/>
              <path d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.6l6.2 5.2C36.9 36.5 44 31 44 24c0-1.2-.1-2.5-.4-3.5z" fill="#1976D2"/>
            </svg>
            Webs by Vidya
          </Link>
          
        </div>

        {/* Name — kept, it's your brand */}
        <h1
          className="font-display font-extrabold leading-none mb-4"
          style={{ fontSize: "clamp(42px, 8vw, 88px)", letterSpacing: "-3px" }}
        >
          <span
            className="block font-mono font-normal text-[0.3em] mb-2"
            style={{ color: "var(--text2)" }}
          >
            hey, I'm
          </span>
          <span className="gradient-text">Vidya Tandel</span>
        </h1>

        {/* Outcome-led subheading — the actual hook for business visitors */}
        <p
          className="font-display font-semibold mb-4"
          style={{
            fontSize: "clamp(16px, 2.5vw, 26px)",
            color: "var(--text)",
            letterSpacing: "1px",
          }}
        >
          I build{" "}
          <span
            ref={roleRef}
            className="font-bold"
            style={{ color: "var(--pink)", display: "inline-block" }}
          />
          <span className="animate-pulse" style={{ color: "var(--purple)" }}>|</span>
        </p>

        {/* Tagline — speaks to both audiences */}
        <p
          className="text-base md:text-lg leading-relaxed max-w-xl mb-9"
          style={{ color: "var(--text2)" }}
        >
          Based in Pune · I design, build, and host websites for businesses -
          from landing pages to full-stack apps. Clean code, clear timelines, no jargon.
        </p>

        {/* Dual CTAs — business path + portfolio path */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            className="btn-primary"
            onClick={() => document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" })}
          >
            My Journey
          </button>
          <button
            className="btn-outline"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View my work
          </button>
        </div>

        {/* Trust bar — quick credibility signals before they scroll */}
        <div
          className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm font-mono"
          style={{ color: "var(--text3)" }}
        >
          <span>✦ 2+ years experience</span>
          <span>✦ 2+ client projects delivered</span>
          <span>✦ Design → Build → Host</span>
          <span>✦ Reviews on Google</span>
        </div>

        {/* Social links — for recruiters */}
        <div className="flex flex-wrap gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 rounded-full text-xs font-mono no-underline border transition-all duration-200 hover:border-[var(--purple)] hover:text-[var(--text)]"
              style={{ borderColor: "var(--border2)", color: "var(--text2)" }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div
          className="w-px h-14 animate-[float_2s_ease-in-out_infinite]"
          style={{ background: "linear-gradient(to bottom, var(--purple), transparent)" }}
        />
        <span className="text-[10px] font-mono tracking-[0.15em]" style={{ color: "var(--text3)" }}>
          scroll
        </span>
      </div>
    </section>
  );
}