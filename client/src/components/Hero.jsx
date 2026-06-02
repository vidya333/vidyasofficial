import React, { useEffect, useRef } from "react";

const ROLES = ["MERN Stack Developer", "Freelance Web Dev", "Guitarist & Artist", "Quiet Coder"];

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
      dotRef.current.style.top  = mouseY + "px";
    }
  };
  const onEnter = () => {
    if (auraRef.current) auraRef.current.style.opacity = "1";
    if (dotRef.current)  dotRef.current.style.opacity  = "1";
  };
  const onLeave = () => {
    if (auraRef.current) auraRef.current.style.opacity = "0";
    if (dotRef.current)  dotRef.current.style.opacity  = "0";
  };

  const animate = () => {
    auraX = lerp(auraX, mouseX, 0.07);
    auraY = lerp(auraY, mouseY, 0.07);
    if (auraRef.current) {
      auraRef.current.style.left = auraX + "px";
      auraRef.current.style.top  = auraY + "px";
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
    <section ref={sectionRef}  style={{ cursor: "none" }}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:mt-16"
    >
      {/* Aura blob */}
      <div ref={auraRef} className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-300"
        style={{ width: 500, height: 500,
      background: "radial-gradient(circle, rgba(155,89,255,0.25) 0%, rgba(236,72,153,0.15) 35%, transparent 70%)" }} />

      {/* Cursor dot */}
      <div ref={dotRef} className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-300"
        style={{ width: 10, height: 10, background: "rgba(155,89,255,0.75)",
      boxShadow: "0 0 0 3px rgba(155,89,255,0.2)" }} />
      
      {/* Background blobs */}
      <div className="absolute w-72 h-72 md:w-[400px] md:h-[400px] rounded-full blur-[100px] opacity-[0.12] pointer-events-none animate-[float_8s_ease-in-out_infinite]"
        style={{ background: "var(--purple)", top: "10%", left: "5%" }} />
      <div className="absolute w-72 h-72 md:w-[400px] md:h-[400px] rounded-full blur-[100px] opacity-[0.12] pointer-events-none animate-[float_8s_ease-in-out_infinite] [animation-delay:2s]"
        style={{ background: "var(--pink)", top: "60%", right: "5%" }} />
      <div className="absolute w-64 h-64 md:w-[350px] md:h-[350px] rounded-full blur-[100px] opacity-[0.10] pointer-events-none animate-[float_8s_ease-in-out_infinite] [animation-delay:4s]"
        style={{ background: "var(--cyan)", bottom: "10%", left: "40%" }} />

      {/* Content */}
      <div className="container relative z-10 pt-10 pb-20 px-5 md:px-6">

        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6
          border font-mono text-[13px]"
          style={{ background: "rgba(155,89,255,0.1)", borderColor: "rgba(155,89,255,0.3)", color: "var(--purple)" }}>
          <span className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "var(--green)" }} />
          let's build together
        </div>

        {/* Name */}
        <h1 className="font-display font-extrabold leading-none mb-5"
          style={{ fontSize: "clamp(42px, 8vw, 88px)", letterSpacing: "-3px" }}>
          <span className="block font-mono font-normal text-[0.3em] mb-2"
            style={{ color: "var(--text2)" }}>
            hey, I'm
          </span>
          <span className="gradient-text">Vidya Tandel</span>
        </h1>

        {/* Typewriter role */}
        <div className="flex items-center gap-2 flex-wrap mb-5">
          <span className="text-lg md:text-2xl" style={{ color: "var(--text2)" }}>I'm a</span>
          <span className="text-lg md:text-2xl animate-pulse" style={{ color: "var(--purple)" }}>|</span>
          <span
            ref={roleRef}
            className="text-lg md:text-2xl font-bold font-display min-w-[180px] md:min-w-[220px]"
            style={{ color: "var(--pink)" }}
          />
        </div>

        {/* Tagline */}
        <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9"
          style={{ color: "var(--text2)" }}>
           Dream Draw Develop ∞ | Building digital experiences at the intersection of code, art, and story.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            className="btn-primary"
            onClick={() => document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" })}
          >
            See my journey ↓
          </button>
          <button
            className="btn-outline"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in touch
          </button>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap gap-2">
          {socials.map(s => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 rounded-full text-xs font-mono no-underline
                border transition-all duration-200
                hover:border-[var(--purple)] hover:text-[var(--text)]"
              style={{ borderColor: "var(--border2)", color: "var(--text2)" }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-14 animate-[float_2s_ease-in-out_infinite]"
          style={{ background: "linear-gradient(to bottom, var(--purple), transparent)" }} />
        <span className="text-[10px] font-mono tracking-[0.15em]"
          style={{ color: "var(--text3)" }}>scroll</span>
      </div>
    </section>
  );
}