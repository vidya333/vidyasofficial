import React, { useEffect, useState } from "react";
import {
  X,
  ExternalLink,
  Calendar,
  FolderGit2,
} from "lucide-react";

const PROJECTS = [
  {
        id: 1,
        title: "Green Corner Advisory",
        description:
            "An advisory portal designed to evaluate, track, and optimize financial investments in renewable and sustainable energy sectors. Built completely from scratch using HTML, Bootstrap, CSS, and JavaScript as my first frontend project. Developed tag-by-tag without templates to strengthen core frontend fundamentals, responsive layouts, and UI structuring skills.",
        image: "/greencorner.png",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        link: "https://vidya333.github.io/GreenCornerAdvisory/",
        github: "https://github.com/vidya333/GreenCornerAdvisory",
        date: "Sept 2023",
        },

  {
    id: 2,
    title: "Ketan Kids School Website",
    description:
      "A responsive school website built completely from scratch using HTML, Bootstrap, CSS, and JavaScript. Developed section-by-section without frameworks or AI tools to strengthen frontend fundamentals, responsive layouts, and UI structuring skills. This project helped improve my understanding of component-based UI thinking, responsive web design, Bootstrap grid system, and interactive frontend behavior using vanilla JavaScript.",
    image: "/ketan.png",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://vidya333.github.io/ProjectKetanKidsSchool/",
    github: "https://github.com/vidya333/ProjectKetanKidsSchool",
    date: "Dec 2023",
  },

  {
  id: 3,
  title: "BCSA Website",
  description:
    "A responsive frontend website developed from scratch using HTML, Bootstrap, CSS, and JavaScript for BCSA. Built with a focus on structured layouts, responsive design, clean UI sections, and interactive frontend behavior. This project strengthened my practical frontend development skills and improved my understanding of building complete websites section-by-section.",
  image: "/bcsa.png",
  tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  link: "https://vidya333.github.io/BCSA_WebSite/",
  github: "https://github.com/vidya333/BCSA_WebSite",
  date: "April 2024",
},

  {
  id: 4,
  title: "Scrolling Page Animation",
  description:
    "A lightweight frontend project featuring smooth, interactive scroll-triggered animations built entirely using HTML, CSS, and vanilla JavaScript without any external libraries. Developed as a second-round internship assignment for ATG World and completed within 24 hours. Challenged  my problem-solving, DOM manipulation, animation logic, SVG and rapid execution under deadlines.",
  image: "/scrollingPage.png",
  tags: ["HTML", "CSS", "JavaScript", "Animations"],
  link: "https://vidya333.github.io/ScrollingPageAnimation/",
  github: "https://github.com/vidya333/ScrollingPageAnimation",
  date: "June 2024",
},

  {
  id: 5,
  title: "VM Prosperity Group",
  description:
    "A full-stack real estate platform built for a freelance client using the MERN stack. This was my first paid project where I independently handled everything from requirement gathering, business understanding, UI design, development, database structure, admin functionality, deployment, and production delivery. Features include property listings, filtering, detailed property pages, enquiry integration via WhatsApp/Email, brochure downloads, and an admin panel for property management.",
  image: "/vmprosperity.png",
  tags: ["MongoDB", "Express.js", "React", "Node.js", "MERN"],
  link: "https://www.vmprosperitygroup.com",
  github: "https://github.com/vidya333/vmprosperitygroup",
  date: "June 2025",
},

  {
  id: 6,
  title: "DevPulse",
  description:
    "A full-stack developer analytics dashboard that provides real-time GitHub profile insights with AI-powered personality analysis. Built using React, Node.js/Express, GitHub API, and Groq AI, DevPulse visualizes developer activity through commit heatmaps, language analytics, streak tracking, top repositories, and intelligent personality verdicts (roast/praise mode). Features live GitHub data fetching, analytics visualization, and production deployment on Render.",
  image: "/devpulse.png",
  tags: [
    "React",
    "Node.js",
    "Express",
    "GitHub API",
    "Groq AI",
    "MERN"
  ],
  link: "https://devpulse-y0w9.onrender.com/",
  github: "https://github.com/vidya333/devpulse",
  date: "April 2026",
},
{
  id: 7,
  title: "PrepWise",
  description:
    "An AI-powered interview preparation platform that helps users prepare smarter by uploading PDFs or entering any topic to generate personalized interview questions, learning roadmaps, mindmaps, MCQ tests, and hands-on tasks. Built using a multi-service architecture with React + TypeScript frontend, Node.js/Express backend, Python FastAPI for PDF parsing and AI processing, and Go for a high-performance MCQ engine. Integrated Groq AI for intelligent content generation and deployed using free cloud infrastructure across Vercel and Render.",
  image: "/prepwise.png",
  tags: [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "FastAPI",
    "Go",
    "Groq AI",
    "MongoDB"
  ],
  link: "https://prepwise-six-omega.vercel.app",
  github: "https://github.com/vidya333/prepwise",
  date: "May 2026",
}
];

// ───────────────── Modal ─────────────────
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(8px)",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-3xl border overflow-hidden max-h-[90vh] overflow-y-auto"
        style={{
          background: "var(--bg2)",
          borderColor: "var(--border)",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full border flex items-center justify-center transition-all"
          style={{
            background: "var(--bg3)",
            borderColor: "var(--border)",
            color: "var(--text)",
          }}
        >
          <X size={18} />
        </button>

        {/* Image */}
        <div className="h-72 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Date */}
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-mono mb-4"
            style={{
              borderColor: "var(--border)",
              color: "var(--text3)",
            }}
          >
            <Calendar size={13} />
            {project.date}
          </div>

          {/* Title */}
          <h2
            className="text-3xl font-bold font-display mb-4"
            style={{ color: "var(--text)" }}
          >
            {project.title}
          </h2>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "var(--text2)" }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-7">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full border text-xs font-mono"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text3)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(135deg, var(--purple), var(--pink))",
                color: "#fff",
              }}
            >
              View Project
              <ExternalLink size={16} />
            </a>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border font-semibold transition-all hover:scale-[1.02]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
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

// ───────────────── Main ─────────────────
export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const visibleProjects = showAll
    ? PROJECTS
    : PROJECTS.slice(0, 4);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-5 md:px-6">
        <div className="section-label">
          featured work
        </div>

        <h2 className="section-title mb-3">
          Projects I’ve Built
        </h2>

        <p
          className="text-base mb-12"
          style={{ color: "var(--text2)" }}
        >
          A collection of projects showcasing my
          development journey and frontend/backend skills.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              onClick={() =>
                setSelectedProject(project)
              }
              className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
              style={{
                background: "var(--bg2)",
                borderColor: "var(--border)",
              }}
            >
              {/* Image */}
              <div className="overflow-hidden h-44 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3
                  className="text-[16px] font-bold font-display mb-2 leading-snug"
                  style={{ color: "var(--text)" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-[13px] leading-relaxed mb-3"
                  style={{
                    color: "var(--text2)",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-[10px] border font-mono"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--text3)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Button */}
                <div className="mt-auto">
                  <button
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-300 hover:scale-[1.03]"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--purple), var(--pink))",
                      color: "#fff",
                    }}
                  >
                    View
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Less */}
        {PROJECTS.length > 4 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() =>
                setShowAll(!showAll)
              }
              className="px-6 py-3 rounded-full border font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: "var(--bg2)",
                borderColor: "var(--border)",
                color: "var(--text)",
              }}
            >
              {showAll
                ? "View Less"
                : "View All Projects"}
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() =>
            setSelectedProject(null)
          }
        />
      )}
    </section>
  );
}