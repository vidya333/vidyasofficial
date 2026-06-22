import React from "react";
import { Globe, Bot, Palette, LayoutTemplate, Server, ArrowRight } from "lucide-react";

const services = [
  {
    Icon: LayoutTemplate,
    title: "Landing Pages & Business Sites",
    // Outcome first, tech second
    desc: "A professional website your customers can find, trust, and act on. Fast, mobile-first, and built to rank on Google.",
    color: "var(--orange)",
    tags: ["React", "Responsive", "SEO", "Performance"],
    from: "₹8,000",
  },
  {
    Icon: Globe,
    title: "Full-Stack Web Development",
    desc: "Custom web apps with login, dashboards, databases - built end to end. Ideal for startups and product ideas that need real infrastructure.",
    color: "var(--purple)",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    from: "₹20,000",
  },
  {
    Icon: Palette,
    title: "UI/UX Design & Development",
    desc: "Interfaces that look intentional and feel effortless. I bring an artist's eye - clean, creative, and user-focused from the first screen.",
    color: "var(--pink)",
    tags: ["Figma", "React", "CSS", "Animation"],
    from: "₹6,000",
  },
  {
    Icon: Bot,
    title: "AI-Integrated Applications",
    desc: "Add AI to your product - chatbots, content tools, smart dashboards. Powered by modern LLM APIs and wired into your existing stack.",
    color: "var(--cyan)",
    tags: ["Groq AI", "LLM APIs", "React", "Node.js"],
    from: "₹15,000",
  },
  {
    Icon: Server,
    title: "Web Hosting & Maintenance",
    desc: "Domain setup, deployment, SSL, and ongoing updates. Your site stays live, secure, and up to date - without you thinking about it.",
    color: "var(--green)",
    tags: ["VPS", "Vercel", "Cloudflare", "CI/CD"],
    from: "₹1,500/mo",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: "var(--bg2)" }}>
      <div className="container px-5 md:px-6">

        <div className="section-label">what I offer</div>

        {/* Header — two audiences, one sentence each */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <h2 className="section-title mb-3">Services</h2>
            <p className="text-base max-w-md leading-relaxed" style={{ color: "var(--text2)" }}>
              I design, build, and host websites for businesses - solo, so you get one
              point of contact and no agency markup.
            </p>
          </div>


        </div>

        {/* Cards — 5 cards, 2-col then 3-col at lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {services.map(({ Icon, title, desc, color, tags, from }) => (
            <div
              key={title}
              className="relative rounded-2xl border p-6 overflow-hidden
                transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col"
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
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text2)" }}>
                {desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
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

              {/* Starting price — conversion anchor */}
              <p className="text-[11px] font-mono" style={{ color: "var(--text3)" }}>
                starting from{" "}
                <span className="font-semiBold" style={{ color }}>
                  {from}
                </span> onwards *
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px]"
                style={{ background: color }}
              />
            </div>
          ))}
        </div>

        {/* CTA — scrolls to contact instead of raw mailto */}
        <div className="text-center pt-2">
          <p className="text-sm mb-4" style={{ color: "var(--text2)" }}>
            Not sure which service fits? Let's talk it through, no commitment needed.
          </p>
          <button
            className="btn-primary inline-flex items-center gap-2"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start a conversation
            <ArrowRight size={15} strokeWidth={2} />
          </button>
        </div>

      </div>
    </section>
  );
}