import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { seedData } from "../data/seed";
import {
  Briefcase, Rocket, GraduationCap, Trophy, BookOpen, Calendar, Star, X, ExternalLink, Sparkles
} from "lucide-react";

const BASE = import.meta.env.VITE_API_URL || "";

const TYPE_CONFIG = {
  experience:    { color: "#06b6d4", Icon: Briefcase,     label: "Experience" },
  project:       { color: "#a855f7", Icon: Rocket,        label: "Project" },
  certification: { color: "#10b981", Icon: GraduationCap, label: "Certification" },
  achievement:   { color: "#f59e0b", Icon: Trophy,        label: "Achievement" },
  blog:          { color: "#ec4899", Icon: BookOpen,      label: "Blog" },
  event:         { color: "#f97316", Icon: Calendar,      label: "Event" },
  other:         { color: "#64748b", Icon: Star,          label: "Other" },
};

const FILTERS = ["all", "experience", "project", "certification", "achievement", "blog"];

// ── Glassmorphic Timeline Modal ────────────────────────────────────────────
function TimelineModal({ item, onClose }) {
  const cfg = TYPE_CONFIG[item.type] || TYPE_CONFIG.other;
  const { Icon } = cfg;

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, []);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border p-6 md:p-8 max-h-[85vh] overflow-y-auto shadow-2xl transition-all"
        style={{
          background: "var(--bg2)",
          borderColor: "var(--border2)",
          boxShadow: `0 0 40px ${cfg.color}20`
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-200 hover:rotate-90 hover:opacity-80"
          style={{ background: "var(--bg3)", borderColor: "var(--border)", color: "var(--text)" }}
        >
          <X size={16} />
        </button>

        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-semibold mb-4"
          style={{ color: cfg.color, borderColor: `${cfg.color}40`, background: `${cfg.color}10` }}
        >
          <Icon size={13} />
          {cfg.label}
        </div>

        {item.image && (
          <img src={item.image} alt={item.title} className="w-full rounded-xl mb-4 object-cover max-h-56 shadow-md" />
        )}

        <h2 className="text-2xl font-extrabold font-display mb-2" style={{ color: "var(--text)" }}>
          {item.title}
        </h2>
        
        <p className="text-xs font-mono mb-4 flex items-center gap-1.5" style={{ color: "var(--text3)" }}>
          <Calendar size={12} />
          {new Date(item.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text2)" }}>
          {item.description}
        </p>

        {item.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {item.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg border text-xs font-mono"
                style={{ borderColor: `${cfg.color}30`, color: cfg.color, background: `${cfg.color}08` }}
              >
                #{t}
              </span>
            ))}
          </div>
        )}

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-white transition-all duration-200 hover:opacity-90 shadow-md"
            style={{ background: `linear-gradient(135deg, ${cfg.color}, var(--purple))` }}
          >
            <ExternalLink size={14} /> View
          </a>
        )}
      </div>
    </div>
  );
}

// Date parser for Month, Day, Year breakdown
const parseDateParts = (dateString) => {
  const dateObj = new Date(dateString);
  const isInvalid = isNaN(dateObj.getTime());
  
  return {
    month: isInvalid ? "MMM" : dateObj.toLocaleDateString("en-IN", { month: "short" }),
    day: isInvalid ? "00" : dateObj.toLocaleDateString("en-IN", { day: "2-digit" }),
    year: isInvalid ? "YYYY" : dateObj.getFullYear(),
  };
};

function Card({ item, onClick, cfg, isLeft = true }) {
  const { Icon } = cfg;
  const { month, day, year } = parseDateParts(item.date);

  return (
    <div
      onClick={() => onClick(item)}
      className={`group relative rounded-2xl border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden flex items-stretch ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
      style={{
        background: "var(--bg2)",
        borderColor: "var(--border)",
      }}
    >
      {/* Top Accent Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: cfg.color }}
      />

      {/* Main Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <Icon size={12} style={{ color: cfg.color }} />
            <span className="text-[11px] font-mono tracking-wide font-semibold" style={{ color: cfg.color }}>
              {cfg.label}
            </span>
          </div>

          <h3 className="text-base font-bold font-display mb-1.5 leading-snug" style={{ color: "var(--text)" }}>
            {item.title}
          </h3>

          <p className="text-xs leading-relaxed mb-3 line-clamp-2" style={{ color: "var(--text2)" }}>
            {item.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.tags?.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded-md border font-mono"
              style={{ borderColor: "var(--border)", color: "var(--text3)", background: "var(--bg)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Side Date Badge */}
      <div
        className={`w-20 flex-shrink-0 flex flex-col items-center justify-center p-3 border-mono text-center ${
          isLeft ? "border-l" : "border-r"
        }`}
        style={{
          background: "var(--bg3)",
          borderColor: "var(--border)",
        }}
      >
        <span className="text-xs font-mono font-medium uppercase tracking-wider" style={{ color: "var(--text2)" }}>
          {month}
        </span>
        <span className="text-2xl font-extrabold font-display my-0.5 leading-none" style={{ color: "var(--text)" }}>
          {day}
        </span>
        <span className="text-[11px] font-mono" style={{ color: "var(--text3)" }}>
          {year}
        </span>
      </div>
    </div>
  );
}

// ── Mobile Row with Animated Entry ──────────────────────────────────────────
function MobileRow({ item, index, onClick }) {
  const cfg = TYPE_CONFIG[item.type] || TYPE_CONFIG.other;
  const { Icon } = cfg;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex items-start gap-4 mb-8 relative transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(25px)",
        transitionDelay: `${index * 0.05}s`
      }}
    >
      <div
        onClick={() => onClick(item)}
        className="w-10 h-10 rounded-xl border-2 flex items-center justify-center flex-shrink-0 cursor-pointer z-10 transition-transform duration-300 hover:scale-110 shadow-lg"
        style={{
          borderColor: cfg.color,
          background: "var(--bg)",
          boxShadow: `0 0 15px ${cfg.color}35`
        }}
      >
        <Icon size={16} style={{ color: cfg.color }} />
      </div>

      <div className="flex-1">
        <Card item={item} onClick={onClick} cfg={cfg} />
      </div>
    </div>
  );
}

// ── Desktop Alternating Row with Floating Node ─────────────────────────────
function DesktopRow({ item, index, onClick }) {
  const cfg = TYPE_CONFIG[item.type] || TYPE_CONFIG.other;
  const { Icon } = cfg;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex items-center mb-12 relative transition-all duration-700 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(35px) scale(0.97)",
        transitionDelay: `${(index % 3) * 0.1}s`
      }}
    >
      {/* Card Container */}
      <div className="w-[calc(50%-48px)]">
        <Card item={item} onClick={onClick} cfg={cfg} />
      </div>

      {/* Glowing Center Node Icon */}
      <div className="w-[96px] flex justify-center flex-shrink-0 z-10">
        <div
          onClick={() => onClick(item)}
          className="group relative w-12 h-12 rounded-2xl border-2 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-115 shadow-xl"
          style={{
            borderColor: cfg.color,
            background: "var(--bg)",
            boxShadow: `0 0 20px ${cfg.color}40`
          }}
        >
          <Icon size={20} className="transition-transform duration-300 group-hover:rotate-12" style={{ color: cfg.color }} />
          <span
            className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity blur-md"
            style={{ background: cfg.color }}
          />
        </div>
      </div>

      {/* Spacer */}
      <div className="w-[calc(50%-48px)]" />
    </div>
  );
}

// ── Skeleton Loader ───────────────────────────────────────────────────────
function TimelineLoader() {
  return (
    <div className="space-y-8 max-w-2xl mx-auto py-12">
      {[1, 2, 3].map((n) => (
        <div key={n} className="rounded-2xl border p-6 animate-pulse" style={{ background: "var(--bg2)", borderColor: "var(--border)" }}>
          <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded mb-4" />
          <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-800 rounded mb-3" />
          <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded mb-2" />
          <div className="h-3 w-1/2 bg-slate-200 dark:bg-slate-800 rounded" />
        </div>
      ))}
    </div>
  );
}

// ── Main Timeline Section Component ───────────────────────────────────────
export default function Journey() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE}/api/timeline`)
      .then((r) => setItems(r.data.length ? r.data : seedData))
      .catch(() => setItems(seedData))
      .finally(() => setLoading(false));
  }, []);

  const filtered = filter === "all" ? items : items.filter((i) => i.type === filter);
const sorted = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      {/* Background Ambient Aesthetics */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-[120px]" style={{ background: "var(--purple)" }} />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-[120px]" style={{ background: "var(--cyan)" }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)`,
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      <div className="container px-5 md:px-6 relative z-10 max-w-6xl mx-auto">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono mb-4"
            style={{ borderColor: "var(--border)", background: "var(--bg2)", color: "var(--purple)" }}
          >
            <Sparkles size={13} /> Evolutionary Path
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display mb-4" style={{ color: "var(--text)" }}>
            My Journey <span className="gradient-text">So Far</span>
          </h2>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text2)" }}>
            An interactive archive of career milestones, key projects, certifications, and personal essays.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-300 border cursor-pointer"
                style={{
                  background: active ? "linear-gradient(135deg, var(--purple), var(--pink))" : "var(--bg2)",
                  color: active ? "#ffffff" : "var(--text2)",
                  borderColor: active ? "transparent" : "var(--border)",
                  boxShadow: active ? "0 4px 15px rgba(168, 85, 247, 0.3)" : "none"
                }}
              >
                {f === "all" ? "All Milestones" : TYPE_CONFIG[f]?.label}
              </button>
            );
          })}
        </div>

        {/* Timeline Content */}
        {loading ? (
          <TimelineLoader />
        ) : (
          <div className="relative">
            {/* Dynamic Center Laser Beam Line */}
            <div
              className="absolute top-4 bottom-4 w-0.5 rounded-full"
              style={{
                left: isMobile ? "20px" : "50%",
                transform: isMobile ? "none" : "translateX(-50%)",
                background: "linear-gradient(to bottom, var(--purple), var(--pink), var(--cyan))",
                boxShadow: "0 0 10px rgba(168, 85, 247, 0.5)"
              }}
            />

            {/* Render Items */}
            {sorted.map((item, i) =>
              isMobile ? (
                <MobileRow key={item._id || i} item={item} index={i} onClick={setSelected} />
              ) : (
                <DesktopRow key={item._id || i} item={item} index={i} onClick={setSelected} />
              )
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && <TimelineModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}