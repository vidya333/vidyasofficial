import React, { useEffect, useState } from "react";
import { GitBranch, Users, UserCheck, ExternalLink } from "lucide-react";

const username = "vidya333";

const statConfig = [
  { key: "public_repos", label: "Public Repos", Icon: GitBranch },
  { key: "followers",    label: "Followers",    Icon: Users },
  { key: "following",    label: "Following",    Icon: UserCheck },
];

export default function GitHubStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(r => r.json())
      .then(setStats)
      .catch(() => {});
  }, []);

  return (
    <section className="py-16" style={{ background: "var(--bg3)" }}>
      <div className="container px-5 md:px-6 text-center">

        <div className="section-label justify-center">github activity</div>
        <h3 className="text-2xl md:text-3xl font-extrabold font-display mb-8">
          Building in Public
        </h3>

        {/* Stat cards */}
        {stats && (
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
            {statConfig.map(({ key, label, Icon }) => (
              <div key={key} className="flex flex-col items-center gap-1.5">
                {/* <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-1 border"
                  style={{ background: "rgba(155,89,255,0.1)", borderColor: "rgba(155,89,255,0.2)" }}>
                  <Icon size={16} strokeWidth={1.8} style={{ color: "var(--purple)" }} />
                </div> */}
                <span
                  className="text-4xl font-extrabold font-display tracking-tight"
                  style={{
                    background: "linear-gradient(135deg, var(--purple), var(--pink))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stats[key]}
                </span>
                <span className="text-xs font-mono" style={{ color: "var(--text3)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* GitHub readme stats card */}
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=9b59ff&icon_color=ff6b9d&text_color=a0a0c0`}
          alt="GitHub Stats"
          className="max-w-[360px] w-full rounded-xl mx-auto mb-6"
          onError={e => (e.target.style.display = "none")}
        />

        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="btn-outline inline-flex items-center gap-2"
        >
          <ExternalLink size={14} strokeWidth={2} />
          View GitHub Profile
        </a>
      </div>
    </section>
  );
}