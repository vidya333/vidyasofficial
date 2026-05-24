import React from "react";
import { Globe, Bot, Palette, LayoutTemplate, Mail } from "lucide-react";

const services = [
  {
    Icon: Globe,
    title: "Freelance Web Development",
    desc: "Full-stack websites and web apps built with React, Node.js, and MongoDB. From landing pages to complete platforms.",
    color: "var(--purple)",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    Icon: Bot,
    title: "AI-Integrated Applications",
    desc: "Web apps with AI features - chatbots, content generators, analytics dashboards powered by LLMs and modern AI APIs.",
    color: "var(--cyan)",
    tags: ["Groq AI", "LLM APIs", "React", "Node.js"],
  },
  {
    Icon: Palette,
    title: "UI/UX Design & Development",
    desc: "Beautiful, functional interfaces. I bring an artist's eye to every design clean, creative, and user-focused.",
    color: "var(--pink)",
    tags: ["Figma", "React", "CSS", "Animation"],
  },
  {
    Icon: LayoutTemplate,
    title: "Landing Pages & Business Sites",
    desc: "Professional websites for local businesses, startups, and personal brands. Fast, SEO-friendly, and mobile-first.",
    color: "var(--orange)",
    tags: ["React", "Responsive", "SEO", "Performance"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: "var(--bg2)" }}>
      <div className="container px-5 md:px-6">

        <div className="section-label">what I offer</div>
        <h2 className="section-title">Services</h2>
        <p className="text-base max-w-md mb-14 leading-relaxed" style={{ color: "var(--text2)" }}>
          Open to freelance projects, internships, and collaborations. Let's build something great.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {services.map(({ Icon, title, desc, color, tags }) => (
            <div
              key={title}
              className="relative rounded-2xl border p-6 overflow-hidden
                transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: "var(--bg)", borderColor: "var(--border)" }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border"
                style={{ background: `${color}15`, borderColor: `${color}30` }}
              >
                <Icon size={22} strokeWidth={1.8} style={{ color }} />
              </div>

              <h3 className="text-base font-bold font-display mb-2.5" style={{ color: "var(--text)" }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text2)" }}>
                {desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {tags.map(t => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-0.5 rounded-full border font-mono"
                    style={{ color, borderColor: `${color}40` }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px]"
                style={{ background: color }} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-2">
          <p className="text-sm mb-4" style={{ color: "var(--text2)" }}>
            Have a project in mind?
          </p>
          <a
            href="mailto:vidya.nk07@gmail.com"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Mail size={15} strokeWidth={2} />
            Let's work together
          </a>
        </div>
      </div>
    </section>
  );
}