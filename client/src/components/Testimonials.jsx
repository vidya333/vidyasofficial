import React from "react";
import { Building2, GraduationCap, Users } from "lucide-react";

const testimonials = [
  {
    Icon: Building2,
    name: "VM Prosperity Group",
    role: "Freelance Client",
    text: "Vidya built our business website with professionalism and creativity. The result exceeded our expectations - modern, fast, and exactly what we envisioned.",
    color: "var(--cyan)",
  },
  {
    Icon: GraduationCap,
    name: "Tansark Student",
    role: "Mentee",
    text: "Vidya's mentoring style is patient and practical. She explains concepts in a way that actually makes sense and always goes the extra mile to help debug.",
    color: "var(--purple)",
  },
  {
    Icon: Users,
    name: "Dev Community",
    role: "LinkedIn Follower",
    text: "Love following Vidya's journey - authentic posts, real projects, and a genuine passion for learning. DevPulse is one of the coolest portfolio projects I've seen.",
    color: "var(--pink)",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container px-5 md:px-6">
        <div className="section-label">kind words</div>
        <h2 className="section-title">Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map(({ Icon, name, role, text, color }) => (
            <div
              key={name}
              className="relative rounded-2xl border px-6 pt-6 pb-7 overflow-hidden
                transition-all duration-200 hover:-translate-y-1"
              style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
            >
              {/* Big quote mark */}
              <div
                className="text-5xl font-serif leading-none mb-3 opacity-20"
                style={{ color: "var(--purple)" }}
              >
                "
              </div>

              {/* Text */}
              <p className="text-sm leading-relaxed italic mb-6" style={{ color: "var(--text2)" }}>
                {text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 border"
                  style={{ background: `${color}18`, borderColor: `${color}35` }}
                >
                  <Icon size={18} strokeWidth={1.8} style={{ color }} />
                </div>
                <div>
                  <div className="text-sm font-bold font-display" style={{ color }}>
                    {name}
                  </div>
                  <div className="text-xs font-mono" style={{ color: "var(--text3)" }}>
                    {role}
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px]"
                style={{ background: color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}