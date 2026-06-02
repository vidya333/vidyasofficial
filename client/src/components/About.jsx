import React from "react";
import { Lightbulb, Pencil, Code2, Star } from "lucide-react";

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

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container px-5 md:px-6">
        <div className="section-label">about me</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Left */}
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
            <div className="flex flex-wrap gap-6 mt-2">
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
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">

            {/* Philosophy card */}
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

            {/* Tech stack */}
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