import React, { useRef } from "react";
import { Brush, Music, PenLine, BookOpen, ExternalLink, ChevronLeft, ChevronRight, Heart } from "lucide-react";

const interests = [
  {
    Icon: Brush,
    title: "Visual Art",
    desc: "I create digital and traditional art. Drawing is how I process the world - every sketch is a thought made visible.",
    color: "var(--pink)",
    items: ["Digital illustration", "Sketching", "Color theory", "Visual storytelling"],
    link: "https://www.instagram.com/the.magic.palette.studio/",
    linkLabel: "See my art",
  },
  {
    Icon: Music,
    title: "Guitar",
    desc: "Music is my second language. Playing guitar taught me patience, practice, and that creativity flows from discipline.",
    color: "var(--purple)",
    items: ["Acoustic guitar", "Self-taught", "Fingerstyle"],
    link: "https://youtube.com/@vidyasofficial?si=yVZLmCERwmnDrSRp",
    linkLabel: "Watch me play",
  },
  {
    Icon: PenLine,
    title: "Writing",
    desc: "I write about tech, emotions, creativity, the human mind - and a lot more.",
    color: "var(--cyan)",
    items: ["Tech blogging", "Medium stories", "Developer diaries", "Lessons learned"],
    link: "https://medium.com/@vidyatandel",
    linkLabel: "Read on Medium",
  },
  {
    Icon: BookOpen,
    title: "Continuous Learning",
    desc: "Curiosity drives me to read, experiment, and explore - whether it's a new framework, philosophy, or art style.",
    color: "var(--orange)",
    items: ["Tech research", "New languages", "Design trends", "AI exploration"],
  },
  {
    Icon: Heart,
    title: "Volunteering",
    desc: "I volunteer with Divine Harmony - a Pune-based spiritual wellbeing program by Shreekalp.",
    color: "var(--pink)",
    items: ["Divine Harmony", "Shreekalp", "Wellbeing"],
    link: "https://www.shreekalp.online/",
    linkLabel: "Visit Shreekalp",
  },
];

export default function Life() {
  const stripRef = useRef(null);

  const scroll = (dir) => {
    if (!stripRef.current) return;
    stripRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="life" className="py-24">
      <div className="container px-5 md:px-6">
        <div className="section-label">beyond the screen</div>

        {/* Header row with arrow controls */}
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="section-title mb-2">
              Life Beyond <span className="gradient-text">Tech</span>
            </h2>
            <p className="text-base max-w-md leading-relaxed" style={{ color: "var(--text2)" }}>
              Code is what I do. Art, music, and writing are who I am.
            </p>
          </div>

          {/* Arrow buttons - desktop helper, hidden on touch */}
          <div className="hidden sm:flex gap-2 flex-shrink-0">
            {[ChevronLeft, ChevronRight].map((Icon, i) => (
              <button
                key={i}
                onClick={() => scroll(i === 0 ? -1 : 1)}
                className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 hover:border-[var(--purple)]"
                style={{ background: "var(--bg2)", borderColor: "var(--border)", color: "var(--text2)" }}
              >
                <Icon size={16} strokeWidth={2} />
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal scroll strip */}
        <div
          ref={stripRef}
          className="flex gap-4 overflow-x-auto pb-4"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            // Hide scrollbar cross-browser
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {interests.map(({ Icon, title, desc, color, items, link, linkLabel, emoji }) => (
            <div
              key={title}
              className="flex-shrink-0 rounded-2xl border flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1"
              style={{
                width: "300px",
                scrollSnapAlign: "start",
                background: "var(--bg2)",
                borderColor: "var(--border)",
              }}
            >
              {/* Colored top band with emoji */}
              <div
                className="h-1.5 w-full"
                style={{ background: color }}
              />

              {/* Card content */}
              <div className="p-5 flex flex-col flex-1">

                {/* Icon + emoji row */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                    style={{ background: `${color}15`, borderColor: `${color}25` }}
                  >
                    <Icon size={18} strokeWidth={1.8} style={{ color }} />
                  </div>
                  <span className="text-2xl select-none">{emoji}</span>
                </div>

                {/* Title */}
                <h3
                  className="text-base font-extrabold font-display mb-2"
                  style={{ color: "var(--text)" }}
                >
                  {title}
                </h3>

                {/* Desc */}
                <p
                  className="text-[13px] leading-relaxed mb-4 flex-1"
                  style={{ color: "var(--text2)" }}
                >
                  {desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {items.map(item => (
                    <span
                      key={item}
                      className="text-[11px] px-2.5 py-0.5 rounded-full border font-mono"
                      style={{ borderColor: `${color}35`, color }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold font-mono no-underline mt-auto transition-opacity duration-200 hover:opacity-70"
                    style={{ color }}
                  >
                    <ExternalLink size={12} strokeWidth={2} />
                    {linkLabel}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint on mobile */}
        <p
          className="text-[11px] font-mono mt-3 sm:hidden text-center"
          style={{ color: "var(--text3)" }}
        >
          swipe to explore →
        </p>

        {/* Quote - unchanged */}
        <div
          className="rounded-2xl border px-6 py-10 md:px-12 text-center mt-14"
          style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
        >
          <div
            className="text-6xl font-serif leading-none mb-4 opacity-20"
            style={{ color: "var(--purple)" }}
          >
            "
          </div>
          <p
            className="text-base md:text-lg leading-relaxed italic max-w-2xl mx-auto mb-4"
            style={{ color: "var(--text)" }}
          >
            The best developers I know are also artists, musicians, writers, or makers of some kind.
            Creativity isn't separate from code - it's the engine underneath it.
          </p>
          <span className="text-sm font-mono" style={{ color: "var(--purple)" }}>
            - vidyasofficial
          </span>
        </div>

      </div>

      {/* Hide scrollbar for webkit */}
      <style>{`
        #life [style*="overflow-x"]::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}