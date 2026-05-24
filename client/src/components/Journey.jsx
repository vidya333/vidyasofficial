import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { seedData } from "../data/seed";
import {
  Briefcase, Rocket, GraduationCap, Trophy, BookOpen, Calendar, Star, X, ExternalLink, Image
} from "lucide-react";

const BASE = import.meta.env.VITE_API_URL || "";

const TYPE_CONFIG = {
  experience:    { color: "var(--cyan)",    Icon: Briefcase,     label: "Experience" },
  project:       { color: "var(--purple)",  Icon: Rocket,        label: "Project" },
  certification: { color: "var(--green)",   Icon: GraduationCap, label: "Certification" },
  achievement:   { color: "var(--yellow)",  Icon: Trophy,        label: "Achievement" },
  blog:          { color: "var(--pink)",    Icon: BookOpen,      label: "Blog" },
  event:         { color: "var(--orange)",  Icon: Calendar,      label: "Event" },
  other:         { color: "var(--text3)",   Icon: Star,          label: "Other" },
};

const FILTERS = ["all", "experience", "project", "certification", "achievement", "blog"];

// ── Modal ──────────────────────────────────────────────────────────────────
function TimelineModal({ item, onClose }) {
  const cfg = TYPE_CONFIG[item.type] || TYPE_CONFIG.other;
  const { Icon } = cfg;
  useEffect(() => {
  document.body.classList.add("modal-open");
  return () => document.body.classList.remove("modal-open");
}, []);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-xl border p-6 md:p-9  max-h-[90vh] overflow-y-auto scroll-smooth overscroll-contain"
        style={{ background: "var(--bg2)", borderColor: "var(--border2)" }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center
            rounded-lg border cursor-pointer transition-colors duration-200"
          style={{ background: "var(--bg3)", borderColor: "var(--border)", color: "var(--text)" }}
        >
          <X size={14} strokeWidth={2} />
        </button>

        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono mb-4"
          style={{ color: cfg.color, borderColor: cfg.color }}
        >
          <Icon size={12} strokeWidth={2} />
          {cfg.label}
        </div>

        {item.image && (
          <img src={item.image} alt={item.title}
            className="w-full rounded-xl mb-4 object-cover max-h-52" />
        )}

        <h2 className="text-2xl font-extrabold font-display mb-1.5" style={{ color: "var(--text)" }}>
          {item.title}
        </h2>
        <p className="text-xs font-mono mb-4" style={{ color: "var(--text3)" }}>
          {new Date(item.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text2)" }}>
          {item.description}
        </p>

        {item.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {item.tags.map(t => (
              <span key={t} className="px-3 py-1 rounded-full border text-xs font-mono"
                style={{ borderColor: cfg.color, color: cfg.color }}>{t}</span>
            ))}
          </div>
        )}

        {item.link && (
          <a href={item.link} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 btn-primary mt-1">
            <ExternalLink size={14} strokeWidth={2} />
            View 
          </a>
        )}
      </div>
    </div>
  );
}

// ── Card with image support ────────────────────────────────────────────────
function Card({ item, onClick, cfg }) {
  const { Icon } = cfg;
  return (
    <div
      className="rounded-xl border overflow-hidden cursor-pointer relative
        transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
      style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
      onClick={() => onClick(item)}
    >
      {/* Top color accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
        style={{ background: cfg.color }} />      
      
      {/* Content */}
      <div className="px-4 pb-4 pt-3">
        <div className="flex items-center gap-1.5 mb-2">
          <Icon size={12} strokeWidth={2} style={{ color: cfg.color }} />
          <span className="text-[11px] font-mono tracking-wide" style={{ color: cfg.color }}>
            {cfg.label}
          </span>
          <span className="ml-auto text-[10px] font-mono" style={{ color: "var(--text3)" }}>
            {new Date(item.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
          </span>
        </div>

        <h3 className="text-[15px] font-bold font-display mb-1.5 leading-snug"
          style={{ color: "var(--text)" }}>
          {item.title}
        </h3>

        <p className="text-[12px] leading-relaxed mb-3" style={{ color: "var(--text2)" }}>
          {item.description.slice(0, 150)}...
        </p>

        <div className="flex flex-wrap gap-1.5">
          {item.tags?.slice(0, 3).map(t => (
            <span key={t}
              className="text-[10px] px-2 py-0.5 rounded-full border font-mono"
              style={{ borderColor: "var(--border)", color: "var(--text3)" }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Mobile timeline dot row ────────────────────────────────────────────────
function MobileDot({ item, index, onClick }) {
  const cfg = TYPE_CONFIG[item.type] || TYPE_CONFIG.other;
  const { Icon } = cfg;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex items-start gap-0 mb-8"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s`,
      }}
    >
      {/* Left dot */}
      <div className="flex flex-col items-center flex-shrink-0 w-10 pt-1">
        <div
          className="w-9 h-9 rounded-full border-2 flex items-center justify-center
            cursor-pointer z-10 transition-transform duration-200 hover:scale-110"
          style={{
            borderColor: cfg.color,
            background: "var(--bg)",
            boxShadow: `0 0 14px ${cfg.color}40`,
          }}
          onClick={() => onClick(item)}
        >
          <Icon size={14} strokeWidth={1.8} style={{ color: cfg.color }} />
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 ml-3">
        <Card item={item} onClick={onClick} cfg={cfg} />
      </div>
    </div>
  );
}

// ── Desktop alternating row ────────────────────────────────────────────────
function DesktopDot({ item, index, onClick }) {
  const cfg = TYPE_CONFIG[item.type] || TYPE_CONFIG.other;
  const { Icon } = cfg;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="flex items-center mb-10"
      style={{
        flexDirection: isLeft ? "row" : "row-reverse",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
      }}
    >
      {/* Card side */}
      <div className="flex-1" style={{ maxWidth: "calc(50% - 44px)" }}>
        <Card item={item} onClick={onClick} cfg={cfg} />
      </div>

      {/* Center dot */}
      <div className="w-[88px] flex justify-center flex-shrink-0 z-10">
        <div
          className="w-12 h-12 rounded-full border-2 flex items-center justify-center
            cursor-pointer transition-all duration-200 hover:scale-110"
          style={{
            borderColor: cfg.color,
            background: "var(--bg)",
            boxShadow: `0 0 20px ${cfg.color}40`,
          }}
          onClick={() => onClick(item)}
        >
          <Icon size={18} strokeWidth={1.8} style={{ color: cfg.color }} />
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" style={{ maxWidth: "calc(50% - 44px)" }} />
    </div>
  );
}

// ── Main ───────────────────────────────────────────────────────────────────
export default function Journey() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    axios.get(`${BASE}/api/timeline`)
      .then(r => setItems(r.data.length ? r.data : seedData))
      .catch(() => setItems(seedData));
  }, []);

  const filtered = filter === "all" ? items : items.filter(i => i.type === filter);
  const sorted = [...filtered].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <section id="journey" className="py-24 relative">
      <div className="container px-5 md:px-6">
        <div className="section-label">my journey</div>
        <h2 className="section-title">The Path So Far</h2>
        <p className="text-base mb-10" style={{ color: "var(--text2)" }}>
          Click any card to see the full story behind each milestone.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-14">
          {FILTERS.map(f => {
            const active = filter === f;
            return (
              <button key={f} onClick={() => setFilter(f)}
                className="px-4 py-2 rounded-full text-[13px] font-display font-semibold
                  cursor-pointer transition-all duration-200 border"
                style={{
                  background: active ? "linear-gradient(135deg, var(--purple), var(--pink))" : "var(--bg3)",
                  color: active ? "#fff" : "var(--text2)",
                  borderColor: active ? "transparent" : "var(--border)",
                }}>
                {f === "all" ? "All" : TYPE_CONFIG[f]?.label}
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 rounded-full"
            style={{
              left: isMobile ? "18px" : "50%",
              transform: isMobile ? "none" : "translateX(-50%)",
              background: "linear-gradient(to bottom, var(--purple), var(--pink), var(--cyan))",
            }}
          />

          {sorted.map((item, i) =>
            isMobile
              ? <MobileDot key={item._id || i} item={item} index={i} onClick={setSelected} />
              : <DesktopDot key={item._id || i} item={item} index={i} onClick={setSelected} />
          )}
        </div>
      </div>

      {selected && <TimelineModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}