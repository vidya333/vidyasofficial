import React from "react";
import { Mail, Link, AtSign, Camera, GitBranch, Heart, ExternalLink } from "lucide-react";
const socials = [
  { Icon: Link,      label: "LinkedIn",  url: "https://linkedin.com/in/vidya333" },
  { Icon: AtSign,    label: "Twitter",   url: "https://twitter.com/vidya_tandel" },
  { Icon: Camera,    label: "Instagram", url: "https://instagram.com/vidyasofficiall" },
  { Icon: GitBranch, label: "GitHub",    url: "https://github.com/vidya333" },
  { Icon: Mail,      label: "Email",     url: "mailto:vidya.nk07@gmail.com" },
];

const quickLinks = [
  { label: "About",    id: "about" },
  { label: "Journey",  id: "journey" },
  { label: "Services", id: "services" },
  { label: "Life",     id: "life" },
  { label: "Contact",  id: "contact" },
];

const projects = [
  { label: "DevPulse",        url: "https://devpulse-y0w9.onrender.com" },
  { label: "PrepWise",        url: "https://prepwise-six-omega.vercel.app" },
  { label: "VM Prosperity",   url: "https://www.vmprosperitygroup.com" },
];

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Footer() {
  return (
    <footer
      className="border-t pt-14 pb-6"
      style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
    >
      <div className="container px-5 md:px-6">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <span
              className="font-display font-extrabold text-xl tracking-tight cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span style={{ color: "var(--pink)" }}>vidyas</span>
              <span style={{ color: "var(--purple)" }}>official</span>
            </span>
            <p className="text-xs font-mono mt-2 mb-4" style={{ color: "var(--text3)" }}>
              Dream. Draw. Develop.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
              MERN stack developer, freelancer, artist & guitarist from Pune, India.
              Building at the intersection of code and creativity.
            </p>

            {/* Available badge */}
            <div
              className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full border text-xs font-mono"
              style={{ background: "rgba(38,222,129,0.08)", borderColor: "rgba(38,222,129,0.25)", color: "var(--green)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--green)" }} />
              Open to opportunities
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold font-display mb-4" style={{ color: "var(--text)" }}>
              Navigate
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-sm transition-colors duration-200 hover:text-[var(--purple)]"
                    style={{ color: "var(--text2)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-sm font-bold font-display mb-4" style={{ color: "var(--text)" }}>
              Projects
            </h4>
            <ul className="flex flex-col gap-2.5">
              {projects.map(({ label, url }) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm no-underline
                      transition-colors duration-200 hover:text-[var(--purple)]"
                    style={{ color: "var(--text2)" }}
                  >
                    <ExternalLink size={11} strokeWidth={2} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-bold font-display mb-4" style={{ color: "var(--text)" }}>
              Connect
            </h4>
            <div className="flex flex-col gap-2.5">
              {socials.map(({ Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm no-underline
                    transition-colors duration-200 hover:text-[var(--purple)] group"
                  style={{ color: "var(--text2)" }}
                >
                  <Icon size={14} strokeWidth={1.8} className="group-hover:text-[var(--purple)] transition-colors" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-6" style={{ borderColor: "var(--border)" }} />

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <p className="text-xs font-mono flex items-center gap-1.5 text-center" style={{ color: "var(--text3)" }}>
              © 2026 vidyasofficial. Built with
              <Heart size={11} strokeWidth={2} style={{ color: "var(--pink)" }} />
              React & Node.js
            </p>
            <div className="flex items-center gap-4"><a
              
                href="https://www.linkedin.com/in/vidya333/"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono no-underline transition-colors duration-200 hover:text-[var(--purple)]"
                style={{ color: "var(--text3)" }}
              >
                Let's get connected! ↗
              </a><a
              
                href="/admin"
                className="text-xs font-mono no-underline transition-colors duration-200 hover:text-[var(--text2)]"
                style={{ color: "var(--text3)" }}
              >
                Admin
              </a>
            </div>
          </div>
      </div>
    </footer>
  );
}