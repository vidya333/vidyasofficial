import React, { useState } from "react";
import { Sparkles } from "lucide-react";

// Updated Skill Data mapped with explicit expertise levels
const treeData = [
  {
    id: "frontend",
    title: "FRONTEND ",
    skills: [
      { name: "React.js", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "JavaScript (ES6+)", level: "expert" },
      { name: "Redux Toolkit", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "HTML5 / CSS3", level: "expert" },
      { name: "Bootstrap", level: "expert" },
      { name: "WordPress", level: "intermediate" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "Express.js", level: "expert" },
      { name: "REST API", level: "expert" },
      { name: "Socket.IO", level: "intermediate" },
      { name: "JWT / OAuth 2.0", level: "expert" },
      { name: "2FA Auth", level: "expert" },
      { name: "Nodemailer", level: "intermediate" },
      { name: "Python", level: "beginner" },
      { name: "Django", level: "beginner" },
    ],
  },
  {
    id: "database",
    title: "Databases",
    skills: [
      { name: "MongoDB", level: "intermediate" },
      { name: "Mongoose ODM", level: "intermediate" },
      { name: "MongoDB Atlas", level: "intermediate" },
      { name: "MySQL", level: "beginner" },
    ],
  },
  {
    id: "ai_algo",
    title: "AI & Algorithms",
    skills: [
      { name: "Groq (Llama 3.1)", level: "beginner" },
      { name: "Gemini / Claude API", level: "beginner" },
      { name: "Hugging Face", level: "beginner" },
      { name: "Cosine Similarity", level: "beginner" },
      { name: "Haversine Algo", level: "beginner" },
    ],
  },
  {
    id: "cloud_tools",
    title: "Cloud & Tools",
    skills: [
      { name: "Git / GitHub", level: "expert" },
      { name: "Render", level: "intermediate" },
      { name: "Vercel", level: "intermediate" },
      { name: "Postman", level: "intermediate" },
      { name: "Razorpay Escrow", level: "intermediate" },
      { name: "Cloudinary", level: "intermediate" },
      { name: "Figma", level: "intermediate" },
    ],
  },
];

// Style helper based on skill proficiency
const getExpertiseStyle = (level) => {
  switch (level) {
    case "expert":
      return {
        background: "rgba(147, 51, 234, 0.14)", // Solid, clear purple tint
        borderColor: "rgba(147, 51, 234, 0.45)",
        color: "#6b21a8",
        fontWeight: "600",
      };
    case "intermediate":
      return {
        background: "rgba(147, 51, 234, 0.06)", // Soft medium tint
        borderColor: "rgba(147, 51, 234, 0.25)",
        color: "#7e22ce",
        fontWeight: "500",
      };
    case "beginner":
    default:
      return {
        background: "rgba(147, 51, 234, 0.02)", // Very light faint tint
        borderColor: "rgba(147, 51, 234, 0.12)",
        color: "#a855f7",
        fontWeight: "400",
      };
  }
};

export default function SkillsTreeDashboard() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTree =
    activeFilter === "all"
      ? treeData
      : treeData.filter((item) => item.id === activeFilter);

  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto font-sans">
      
      {/* SECTION HEADER */}
      <div className="text-center mb-10">
        <div
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border text-xs font-mono font-medium mb-3 shadow-2xs"
          style={{
            borderColor: "rgba(168, 85, 247, 0.3)",
            background: "var(--bg, #ffffff)",
            color: "#9333ea",
          }}
        >
          <Sparkles size={13} style={{ color: "#9333ea" }} />
          <span>Capabilities & Stack</span>
        </div>

        <h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-3"
          style={{ color: "var(--text, #0f172a)" }}
        >
          Technical{" "}
          <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        {/* EXPERTISE COLOR LEGEND */}
        <div className="flex items-center justify-center gap-4 mt-4 text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600/80 border border-purple-700" />
            <span style={{ color: "var(--text2, #64748b)" }}>Proficient / Expert</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400/40 border border-purple-400" />
            <span style={{ color: "var(--text2, #64748b)" }}>Intermediate (60-70%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-200/30 border border-purple-300" />
            <span style={{ color: "var(--text2, #64748b)" }}>Exploring / Learning</span>
          </div>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          onClick={() => setActiveFilter("all")}
          className="px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider transition-all border cursor-pointer"
          style={{
            background: activeFilter === "all" ? "#9333ea" : "var(--bg2, #f8fafc)",
            color: activeFilter === "all" ? "#ffffff" : "var(--text2, #475569)",
            borderColor: activeFilter === "all" ? "#9333ea" : "var(--border, #cbd5e1)"
          }}
        >
          ALL COMPETENCIES
        </button>
        {treeData.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className="px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider transition-all border cursor-pointer"
            style={{
              background: activeFilter === cat.id ? "#9333ea" : "var(--bg2, #f8fafc)",
              color: activeFilter === cat.id ? "#ffffff" : "var(--text2, #475569)",
              borderColor: activeFilter === cat.id ? "#9333ea" : "var(--border, #cbd5e1)"
            }}
          >
            {cat.title.toUpperCase()}
          </button>
        ))}
      </div>

      {/* TREE DIAGRAM AREA */}
      <div className="w-full flex flex-col items-center">
        
        {/* ROOT NODE */}
        <div className="relative z-10 mb-2">
          <div
            className="px-6 py-2.5 rounded-xl border-2 font-mono font-bold text-sm tracking-widest shadow-xs"
            style={{
              background: "var(--bg, #ffffff)",
              borderColor: "#9333ea",
              color: "#9333ea"
            }}
          >
            MY SKILLS
          </div>
        </div>

        {/* CONNECTING BRANCH LINES */}
        <div className="w-full h-10 relative hidden md:block">
          <svg className="w-full h-full" fill="none" strokeWidth="2" style={{ stroke: "var(--border, #cbd5e1)" }}>
            <line x1="50%" y1="0" x2="50%" y2="50%" />
            
            {activeFilter === "all" && (
              <>
                <line x1="10%" y1="50%" x2="90%" y2="50%" />
                <line x1="10%" y1="50%" x2="10%" y2="100%" />
                <line x1="30%" y1="50%" x2="30%" y2="100%" />
                <line x1="50%" y1="50%" x2="50%" y2="100%" />
                <line x1="70%" y1="50%" x2="70%" y2="100%" />
                <line x1="90%" y1="50%" x2="90%" y2="100%" />
              </>
            )}
            
            {activeFilter !== "all" && (
              <line x1="50%" y1="50%" x2="50%" y2="100%" />
            )}
          </svg>
        </div>

        {/* TREE BRANCHES & LEAF NODES */}
        <div
          className={`w-full grid gap-6 md:gap-4 mt-4 md:mt-0 ${
            activeFilter === "all"
              ? "grid-cols-1 md:grid-cols-3 lg:grid-cols-5"
              : "grid-cols-1 max-w-xl"
          }`}
        >
          {filteredTree.map((branch) => (
            <div key={branch.id} className="flex flex-col items-center">
              
              {/* Category Sub-Header */}
              <div
                className="px-3 py-2 mb-4 rounded-lg border text-xs font-mono font-bold tracking-wider text-center w-full shadow-2xs"
                style={{
                  background: "var(--bg2, #f1f5f9)",
                  borderColor: "rgba(168, 85, 247, 0.3)",
                  color: "#7e22ce"
                }}
              >
                {branch.title.toUpperCase()}
              </div>

              {/* Skill Badges with Dynamic Expertise Shading */}
              <div className="flex flex-wrap justify-center gap-2 w-full">
                {branch.skills.map((skill) => {
                  const style = getExpertiseStyle(skill.level);
                  return (
                    <div
                      key={skill.name}
                      className="px-3 py-1.5 rounded-lg border text-xs font-mono transition-all shadow-2xs cursor-default"
                      style={style}
                    >
                      {skill.name}
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}