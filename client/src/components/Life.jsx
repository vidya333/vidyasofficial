import React from "react";
import { Brush, Music, PenLine, BookOpen, ExternalLink } from "lucide-react";

const interests = [
  {
    Icon: Brush,
    title: "Visual Art",
    desc: "I create digital and traditional art. Drawing is how I process the world — every sketch is a thought made visible.",
    color: "var(--pink)",
    items: ["Digital illustration", "Sketching", "Color theory", "Visual storytelling"],
    link: "https://www.instagram.com/project.magic.palette/"
  },
  {
    Icon: Music,
    title: "Guitar",
    desc: "Music is my second language. Playing guitar taught me patience, practice, and that creativity flows from discipline.",
    color: "var(--purple)",
    items: ["Acoustic guitar", "Self-taught", "Fingerstyle"],
    link: "https://youtube.com/@vidyasofficial?si=yVZLmCERwmnDrSRp"
  },
  {
    Icon: PenLine,
    title: "Writing",
    desc: "I write about tech, emotions, creativity, human mind and about lot more.",
    color: "var(--cyan)",
    items: ["Tech blogging", "Medium stories", "Developer diaries", "Lessons learned"],
    link: "https://medium.com",
  },
  {
    Icon: BookOpen,
    title: "Continuous Learning",
    desc: "Curiosity drives me to read, experiment, and explore whether it's a new framework, philosophy, or art style.",
    color: "var(--orange)",
    items: ["Tech research", "New languages", "Design trends", "AI exploration"],
  },
];

export default function Life() {
  return (
    <section id="life" className="py-24">
      <div className="container px-5 md:px-6">
        <div className="section-label">beyond the screen</div>
        <h2 className="section-title">
          Life Beyond <span className="gradient-text">Tech</span>
        </h2>
        <p className="text-base max-w-md mb-14 leading-relaxed" style={{ color: "var(--text2)" }}>
          Code is what I do. Art, music, and writing are who I am. Here's the rest of the picture.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {interests.map(({ Icon, title, desc, color, items, link }) => (
            <div
              key={title}
              className="rounded-2xl border overflow-hidden transition-all duration-200 hover:-translate-y-1"
              style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
            >
              {/* Header */}
              <div
                className="px-6 pt-5 pb-4 flex gap-3"
                style={{ background: `linear-gradient(135deg, ${color}18, transparent)` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 border border-gray-300"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={18} strokeWidth={1.8} style={{ color }} />
                </div>
                <h3 className="text-lg font-extrabold font-display pt-2" style={{ color }}>
                  {title}
                </h3>
              </div>

              {/* Body */}
              <div className="px-6 pb-5">
                <p className="text-sm leading-relaxed mt-3 mb-4" style={{ color: "var(--text2)" }}>
                  {desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {items.map(i => (
                    <span
                      key={i}
                      className="text-[11px] px-2.5 py-0.5 rounded-full border font-mono"
                      style={{ borderColor: `${color}30`, color }}
                    >
                      {i}
                    </span>
                  ))}
                </div>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold no-underline
                      transition-opacity duration-200 hover:opacity-70"
                    style={{ color }}
                  >
                    <ExternalLink size={13} strokeWidth={2} />
                    Have a look
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div
          className="rounded-2xl border px-6 py-10 md:px-12 text-center"
          style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
        >
          <div
            className="text-6xl font-serif leading-none mb-4 opacity-20"
            style={{ color: "var(--purple)" }}
          >
            "
          </div>
          <p className="text-base md:text-lg leading-relaxed italic max-w-2xl mx-auto mb-4"
            style={{ color: "var(--text)" }}>
            The best developers I know are also artists, musicians, writers, or makers of some kind.
            Creativity isn't separate from code - it's the engine underneath it.
          </p>
          <span className="text-sm font-mono" style={{ color: "var(--purple)" }}>
            — vidyasofficial
          </span>
        </div>
      </div>
    </section>
  );
}