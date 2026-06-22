import React from "react";
import { Lightbulb, Pencil, Code2, Star, Zap, PackageCheck, Headphones, Globe } from "lucide-react";

const pillarColors = ["var(--pink)", "var(--purple)", "var(--cyan)"];
const pillarIcons = [Lightbulb, Pencil, Code2];

const pillars = [
  { word: "Dream", desc: "Every great thing starts with a vision. I imagine first, then build." },
  { word: "Draw", desc: "Planning, sketching, designing - art and code share the same canvas." },
  { word: "Develop", desc: "Turning ideas into live, real products people actually use." },
];

const stats = [
  { num: "2+", label: "Years learning" },
  { num: "6+", label: "Powerful Projects" },
  { num: "1+", label: "Freelance client" },
  { num: "∞", label: "Things to build" },
];

const techs = ["React", "Node.js", "MongoDB", "Express", "Groq AI", "Git"];

// Speaks directly to business visitors scanning this section
const whyPoints = [
  {
    icon: Zap,
    title: "Fast turnaround",
    desc: "Most projects go from brief to live in 1–3 weeks, not months.",
  },
  {
    icon: Globe,
    title: "Design, build & host",
    desc: "One person handles everything - no coordination overhead for you.",
  },
  {
    icon: PackageCheck,
    title: "Clean handoff",
    desc: "You get the code, the domain, and a site you actually own.",
  },
  {
    icon: Headphones,
    title: "Ongoing support",
    desc: "Updates, fixes, new features - available after launch too.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container px-5 md:px-6">
        <div className="section-label">about me</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          <div>
            <h2 className="section-title">
              Code is my craft.<br />
              <span className="gradient-text">Art is my soul.</span>
            </h2>

            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text2)" }}>
              I'm Vidya. A MERN stack developer from Pune, India. I started as a React intern at ATG,
              mentored students at Tansark, and now I build full-stack products and take on freelance
              work while going deeper into AI-integrated apps.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text2)" }}>
              Beyond code, I'm an artist and guitarist. I believe the best developers are also creative
              thinkers and creativity is something I never stop practicing.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-2 mb-8">
              {stats.map(s => (
                <div key={s.label} className="flex flex-col">
                  <span
                    className="text-4xl font-extrabold font-display tracking-tight"
                    style={{
                      background: "linear-gradient(135deg, var(--pink), var(--purple))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {s.num}
                  </span>
                  <span className="text-xs font-mono mt-0.5" style={{ color: "var(--text3)" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Google Business link - sits naturally in the personal/trust zone */}
            <a
              href="https://share.google/qK2rjgewGj9IyzMjk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-mono no-underline transition-all duration-200 hover:border-[var(--purple)]"
              style={{
                borderColor: "rgba(66,133,244,0.35)",
                background: "rgba(66,133,244,0.07)",
                color: "#4285F4",
              }}
            >
              {/* Inline Google G */}
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.5 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.5-.4-3.5z" fill="#FFC107"/>
                <path d="M6.3 14.7l6.6 4.8C14.7 16.1 19 13 24 13c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.5 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" fill="#FF3D00"/>
                <path d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35.3 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-8H6.2C9.5 35.6 16.3 44 24 44z" fill="#4CAF50"/>
                <path d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.6l6.2 5.2C36.9 36.5 44 31 44 24c0-1.2-.1-2.5-.4-3.5z" fill="#1976D2"/>
              </svg>
              Webs by Vidya · Google Business
            </a>
          </div>

          {/* ── RIGHT - philosophy + why work with me + tech stack ── */}
          <div className="flex flex-col gap-5">

            {/* Philosophy card - unchanged */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-4 border"
              style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Star size={16} strokeWidth={1.8} style={{ color: "var(--yellow)" }} />
                <span className="text-sm font-bold font-display" style={{ color: "var(--text)" }}>
                  My Philosophy
                </span>
              </div>

              {pillars.map((p, i) => {
                const Icon = pillarIcons[i];
                return (
                  <div
                    key={p.word}
                    className="pl-4 py-3 pr-3 rounded-r-lg"
                    style={{
                      borderLeft: `3px solid ${pillarColors[i]}`,
                      background: "var(--bg3)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={15} strokeWidth={1.8} style={{ color: pillarColors[i] }} />
                      <span className="text-sm font-bold font-display" style={{ color: "var(--text)" }}>
                        {p.word}
                      </span>
                    </div>
                    <p className="text-[13px] leading-relaxed" style={{ color: "var(--text2)" }}>
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* ── NEW: Why work with me - targets business visitors ── */}
            <div
              className="rounded-2xl p-6 border"
              style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                {/* Small gradient dot as accent, consistent with site style */}
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "linear-gradient(135deg, var(--pink), var(--purple))" }}
                />
                <span className="text-sm font-bold font-display" style={{ color: "var(--text)" }}>
                  Why work with me?
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyPoints.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="p-3 rounded-xl"
                    style={{ background: "var(--bg3)" }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={14} strokeWidth={1.8} style={{ color: "var(--purple)" }} />
                      <span className="text-xs font-bold font-mono" style={{ color: "var(--text)" }}>
                        {title}
                      </span>
                    </div>
                    <p className="text-[12px] leading-relaxed" style={{ color: "var(--text2)" }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack - unchanged */}
            <div className="flex flex-wrap gap-2">
              {techs.map(t => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono border"
                  style={{
                    borderColor: "var(--border2)",
                    color: "var(--text2)",
                    background: "var(--bg3)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}