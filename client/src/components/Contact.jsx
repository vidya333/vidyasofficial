import React, { useState } from "react";
import axios from "axios";
import { Mail, Link, AtSign, Camera, GitBranch, Send, CheckCircle, AlertCircle } from "lucide-react";
const socials = [
  { label: "Email", Icon: Mail, value: "vidya.nk07@gmail.com", url: "mailto:vidya.nk07@gmail.com", color: "var(--pink)" },
  { label: "LinkedIn", Icon: Link, value: "linkedin.com/in/vidya333/", url: "https://linkedin.com/in/vidya333", color: "var(--cyan)" },
  { label: "Twitter", Icon: AtSign, value: "@vidya_tandel", url: "https://twitter.com/vidyasofficiall", color: "var(--purple)" },
  { label: "Instagram", Icon: Camera, value: "@vidyasofficiall", url: "https://instagram.com/vidyasofficiall", color: "var(--orange)" },
  { label: "GitHub", Icon: GitBranch, value: "github.com/vidya333", url: "https://github.com/vidya333", color: "var(--green)" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      await axios.post(`${BASE}/api/contact`, form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[var(--bg2)]">
      <div className="container">
        <div className="section-label">get in touch</div>
        <h2 className="section-title">Let's Connect</h2>
        <p className="text-[var(--text2)] text-base max-w-md mb-14 leading-relaxed">
          Whether it's a project, an opportunity, or just a hello - my inbox is always open.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* Socials */}
          <div className="flex flex-col gap-3">
            {socials.map(({ label, Icon, value, url, color }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 px-4 py-3.5 rounded-xl no-underline
                  bg-[var(--bg)] border border-[var(--border)]
                  hover:border-[var(--border2)] hover:-translate-y-0.5
                  transition-all duration-200 group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                >
                  <Icon size={18} strokeWidth={1.8} style={{ color }} />
                </div>
                <div>
                  <div
                    className="text-xs font-mono font-bold mb-0.5 tracking-wide"
                    style={{ color }}
                  >
                    {label}
                  </div>
                  <div className="text-sm text-[var(--text2)]">{value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text2)] font-display">
                Your Name
              </label>
              <input
                className="bg-[var(--bg)] border border-[var(--border2)] rounded-lg px-4 py-3
                  text-[var(--text)] text-sm outline-none
                  focus:border-[var(--purple)] transition-colors duration-200
                  placeholder:text-[var(--text3)]"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Vidya Tandel"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text2)] font-display">
                Your Email
              </label>
              <input
                type="email"
                className="bg-[var(--bg)] border border-[var(--border2)] rounded-lg px-4 py-3
                  text-[var(--text)] text-sm outline-none
                  focus:border-[var(--purple)] transition-colors duration-200
                  placeholder:text-[var(--text3)]"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="hello@example.com"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--text2)] font-display">
                Message
              </label>
              <textarea
                className="bg-[var(--bg)] border border-[var(--border2)] rounded-lg px-4 py-3
                  text-[var(--text)] text-sm outline-none resize-y min-h-[120px]
                  focus:border-[var(--purple)] transition-colors duration-200
                  placeholder:text-[var(--text3)]"
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                placeholder="Tell me about your project or just say hi..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full
                text-white font-bold text-sm font-display
                bg-gradient-to-br from-[var(--purple)] to-[var(--pink)]
                hover:opacity-90 hover:-translate-y-0.5
                disabled:opacity-60 disabled:cursor-not-allowed
                transition-all duration-200"
            >
              <Send size={15} strokeWidth={2} />
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <div className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm
                bg-[rgba(38,222,129,0.1)] border border-[rgba(38,222,129,0.3)] text-[var(--green)]">
                <CheckCircle size={16} strokeWidth={2} />
                Message sent! I'll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm
                bg-[rgba(255,107,157,0.1)] border border-[rgba(255,107,157,0.3)] text-[var(--pink)]">
                <AlertCircle size={16} strokeWidth={2} />
                Something went wrong. Email me at vidya.nk07@gmail.com
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}