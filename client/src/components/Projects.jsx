import React, { useEffect, useState } from "react";
import {
  X,
  ExternalLink,
  Calendar,
  FolderGit2,
  Clock,
  Briefcase,
} from "lucide-react";

// ─── Project data ───────────────────────────────────────────────
const PROJECTS = [
  {
    id: 0,
    title: "SJ Coatings",
    description:
      "A full website for SJ Coatings - an industrial surface protection company. Built from scratch: branding, layout, product catalogue, project gallery, client testimonials, and a free-quote enquiry form. Demo is live on Render; going live once client data and assets are confirmed.",
    image: "/sjcoatings.png",
    tags: ["React", "Node.js", "Tailwind", "MERN"],
    link: "https://sjcoatings.onrender.com/",
    github: null,
    date: "In progress",
    type: "client",
    inProgress: true,
    progressNote: "Demo live · Launching soon",
  },
  {
    id: 1,
    title: "VM Prosperity Group",
    description:
      "A full-stack real estate platform built for a freelance client using the MERN stack. Independently handled requirement gathering, business understanding, UI design, development, database structure, admin functionality, deployment, and production delivery. Features property listings, filtering, detailed property pages, enquiry integration via WhatsApp/Email, brochure downloads, and an admin panel.",
    image: "/vmprosperity.png",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "MERN"],
    link: "https://www.vmprosperitygroup.com",
    github: "https://github.com/vidya333/vmprosperitygroup",
    date: "June 2025",
    type: "client",
  },
  {
    id: 2,
    title: "DevPulse",
    description:
      "A full-stack developer analytics dashboard with real-time GitHub profile insights and AI-powered personality analysis. Visualizes commit heatmaps, language analytics, streak tracking, top repositories, and intelligent personality verdicts (roast/praise mode). Built with React, Node.js/Express, GitHub API, and Groq AI.",
    image: "/devpulse.png",
    tags: ["React", "Node.js", "Express", "GitHub API", "Groq AI", "MERN"],
    link: "https://devpulse-y0w9.onrender.com/",
    github: "https://github.com/vidya333/devpulse",
    date: "April 2026",
    type: "personal",
  },
  {
    id: 3,
    title: "PrepWise",
    description:
      "An AI-powered interview preparation platform. Users upload PDFs or enter any topic to generate personalized interview questions, learning roadmaps, mindmaps, MCQ tests, and hands-on tasks. Multi-service architecture: React + TypeScript frontend, Node.js/Express backend, Python FastAPI for PDF parsing, Go for a high-performance MCQ engine, and Groq AI for content generation.",
    image: "/prepwise.png",
    tags: ["React", "TypeScript", "Node.js", "Python", "FastAPI", "Go", "Groq AI", "MongoDB"],
    link: "https://prepwise-six-omega.vercel.app",
    github: "https://github.com/vidya333/prepwise",
    date: "May 2026",
    type: "personal",
  },
  {
    id: 4,
    title: "Green Corner Advisory",
    description:
      "An advisory portal to evaluate, track, and optimize financial investments in renewable and sustainable energy sectors. Built completely from scratch using HTML, Bootstrap, CSS, and JavaScript as my first frontend project - developed tag-by-tag without templates to strengthen core fundamentals.",
    image: "/greencorner.png",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://vidya333.github.io/GreenCornerAdvisory/",
    github: "https://github.com/vidya333/GreenCornerAdvisory",
    date: "Sept 2023",
    type: "personal",
  },
  {
    id: 5,
    title: "Ketan Kids School Website",
    description:
      "A responsive school website built completely from scratch using HTML, Bootstrap, CSS, and JavaScript. Developed section-by-section without frameworks or AI tools. Strengthened understanding of component-based UI thinking, responsive web design, Bootstrap grid, and interactive frontend behavior.",
    image: "/ketan.png",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://vidya333.github.io/ProjectKetanKidsSchool/",
    github: "https://github.com/vidya333/ProjectKetanKidsSchool",
    date: "Dec 2023",
    type: "personal",
  },
  {
    id: 6,
    title: "BCSA Website",
    description:
      "A responsive frontend website for BCSA, built from scratch with HTML, Bootstrap, CSS, and JavaScript. Focused on structured layouts, responsive design, clean UI sections, and interactive frontend behavior.",
    image: "/bcsa.png",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://vidya333.github.io/BCSA_WebSite/",
    github: "https://github.com/vidya333/BCSA_WebSite",
    date: "April 2024",
    type: "personal",
  },
  {
    id: 7,
    title: "Scrolling Page Animation",
    description:
      "Smooth, interactive scroll-triggered animations built with HTML, CSS, and vanilla JavaScript - no external libraries. Completed within 24 hours as an ATG World internship assignment. Challenged problem-solving, DOM manipulation, animation logic, SVG, and rapid execution under deadlines.",
    image: "/scrollingPage.png",
    tags: ["HTML", "CSS", "JavaScript", "Animations"],
    link: "https://vidya333.github.io/ScrollingPageAnimation/",
    github: "https://github.com/vidya333/ScrollingPageAnimation",
    date: "June 2024",
    type: "personal",
  },
];

const TABS = ["All", "Client Work", "Personal"];

// ─── Modal ───────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, []);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-3xl border overflow-hidden max-h-[90vh] overflow-y-auto"
        style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full border flex items-center justify-center transition-all"
          style={{ background: "var(--bg3)", borderColor: "var(--border)", color: "var(--text)" }}
        >
          <X size={18} />
        </button>

        {/* Image */}
        <div className="h-72 overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* In-progress overlay on modal image */}
          {project.inProgress && (
            <div
              className="absolute inset-0 flex items-end p-4"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }}
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold"
                style={{ background: "rgba(234,179,8,0.15)", border: "1px solid rgba(234,179,8,0.4)", color: "#EAB308" }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#EAB308" }} />
                {project.progressNote}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 flex-wrap mb-4">
            {/* Date badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-mono"
              style={{ borderColor: "var(--border)", color: "var(--text3)" }}
            >
              <Calendar size={13} />
              {project.date}
            </div>
            {/* Client badge */}
            {project.type === "client" && !project.inProgress && (
              <div
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono font-bold"
                style={{ background: "rgba(155,89,255,0.12)", border: "1px solid rgba(155,89,255,0.3)", color: "var(--purple)" }}
              >
                <Briefcase size={11} />
                Client project
              </div>
            )}
          </div>

          <h2 className="text-3xl font-bold font-display mb-4" style={{ color: "var(--text)" }}>
            {project.title}
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text2)" }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full border text-xs font-mono"
                style={{ borderColor: "var(--border)", color: "var(--text3)" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, var(--purple), var(--pink))", color: "#fff" }}
            >
              {project.inProgress ? "View Demo" : "View Project"}
              <ExternalLink size={16} />
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border font-semibold transition-all hover:scale-[1.02]"
                style={{ borderColor: "var(--border)", color: "var(--text)" }}
              >
                GitHub Repo
                <FolderGit2 size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── In-Progress Card ────────────────────────────────────────────
function InProgressCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 flex flex-col h-full cursor-pointer relative"
      style={{
        background: "var(--bg2)",
        borderColor: "rgba(234,179,8,0.35)",
        boxShadow: "0 0 0 1px rgba(234,179,8,0.1)",
      }}
    >
      {/* Image with dim overlay */}
      <div className="overflow-hidden h-32 flex-shrink-0 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ opacity: 0.75 }}
        />
        {/* Amber "In Progress" pill over image */}
        <div className="absolute top-3 left-3">
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold"
            style={{
              background: "rgba(0,0,0,0.65)",
              border: "1px solid rgba(234,179,8,0.5)",
              color: "#EAB308",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#EAB308" }} />
            In Progress
          </span>
        </div>
        {/* Client badge */}
        <div className="absolute top-3 right-3">
          <span
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold"
            style={{
              background: "rgba(0,0,0,0.65)",
              border: "1px solid rgba(155,89,255,0.4)",
              color: "var(--purple)",
            }}
          >
            <Briefcase size={9} />
            Client
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        <h3
          className="text-[15px] font-bold font-display mb-1 leading-snug"
          style={{ color: "var(--text)" }}
        >
          {project.title}
        </h3>

        {/* Progress note */}
        <p className="text-[11px] font-mono mb-2" style={{ color: "#EAB308" }}>
          <Clock size={10} className="inline mr-1" />
          {project.progressNote}
        </p>

        <p
          className="text-[12px] leading-relaxed mb-2"
          style={{
            color: "var(--text2)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-[10px] border font-mono"
              style={{ borderColor: "rgba(234,179,8,0.3)", color: "#EAB308" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <button
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: "rgba(234,179,8,0.12)",
              border: "1px solid rgba(234,179,8,0.35)",
              color: "#EAB308",
            }}
          >
            View Demo
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Regular Card ────────────────────────────────────────────────
function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
      style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
    >
      <div className="overflow-hidden h-32 flex-shrink-0 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.type === "client" && (
          <div className="absolute top-3 right-3">
            <span
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold"
              style={{
                background: "rgba(0,0,0,0.65)",
                border: "1px solid rgba(155,89,255,0.4)",
                color: "var(--purple)",
              }}
            >
              <Briefcase size={9} />
              Client
            </span>
          </div>
        )}
      </div>

      <div className="p-3 flex flex-col flex-1">
        <h3
          className="text-[15px] font-bold font-display mb-1 leading-snug"
          style={{ color: "var(--text)" }}
        >
          {project.title}
        </h3>
        <p
          className="text-[12px] leading-relaxed mb-2"
          style={{
            color: "var(--text2)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-[10px] border font-mono"
              style={{ borderColor: "var(--border)", color: "var(--text3)" }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <button
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, var(--purple), var(--pink))",
              color: "#fff",
            }}
          >
            View
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main ────────────────────────────────────────────────────────
export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = PROJECTS.filter((p) => {
    if (activeTab === "Client Work") return p.type === "client";
    if (activeTab === "Personal") return p.type === "personal";
    return true;
  });

  const visibleProjects = showAll ? filtered : filtered.slice(0, 4);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-5 md:px-6">
        <div className="section-label">featured work</div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
          <div>
            <h2 className="section-title mb-3">Projects I've Built</h2>
            <p className="text-base" style={{ color: "var(--text2)" }}>
              Client sites, full-stack apps, and personal builds.
            </p>
          </div>

          {/* Filter tabs */}
          <div
            className="inline-flex rounded-full border p-1 gap-1 self-start sm:self-auto"
            style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
          >
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setShowAll(false); }}
                className="px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all duration-200"
                style={
                  activeTab === tab
                    ? {
                        background: "linear-gradient(135deg, var(--purple), var(--pink))",
                        color: "#fff",
                      }
                    : { color: "var(--text2)" }
                }
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
          {visibleProjects.map((project) =>
            project.inProgress ? (
              <InProgressCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ) : (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            )
          )}
        </div>

        {/* View All / Less */}
        {filtered.length > 4 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-full border font-semibold transition-all duration-300 hover:scale-105"
              style={{ background: "var(--bg2)", borderColor: "var(--border)", color: "var(--text)" }}
            >
              {showAll ? "View Less" : "View All Projects"}
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}