import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Clock,
  Sparkles,
  X,
  Share2,
  Bookmark
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Quiet Coder",
    url: "https://medium.com/@vidyatandel/the-quiet-coder-4d6030e19167",
    date: "Aug 2024",
    readTime: "4 min read",
    category: "Software Philosophy",
    preview:
      "In a world where loud noise and constant self-promotion often steal the spotlight, quiet coders quietly build the world's most resilient infrastructure. Silent focus isn't an absence of voice; it's the concentration of creative energy...",
    fullContent: `In a world where loud noise and constant self-promotion often steal the spotlight, quiet coders quietly build the world's most resilient infrastructure. Silent focus isn't an absence of voice; it's the concentration of creative energy.

When you observe someone who codes quietly, you witness a distinct rhythm of problem-solving. They don't rush to post every small win on social feeds or broadcast their daily grind. Instead, they spend hours deep in thought, dissecting complex logic, tracing edge cases, and refining their architecture until it feels weightless.

There is a deep mastery in quiet execution. It allows you to build clean systems without the distraction of external validation. True quality speaks through functional code, minimal bug counts, and intuitive design—it rarely needs a megaphone.`
  },
  {
    id: 2,
    title: "Freedom Is Living a Boring Life Without Getting Bored",
    url: "https://medium.com/@vidyatandel/freedom-is-living-a-boring-life-without-getting-bored-5cea822727c5",
    date: "Sep 2024",
    readTime: "5 min read",
    category: "Mindset & Life",
    preview:
      "We have been conditioned to chase constant novelty, high-adrenaline moments, and dramatic shifts. But true freedom is the rare ability to sit comfortably with routine, quiet mornings, and simple repetition...",
    fullContent: `We have been conditioned to chase constant novelty, high-adrenaline moments, and dramatic shifts. But true freedom is the rare ability to sit comfortably with routine, quiet mornings, and simple repetition without feeling an urge to escape.

When you lose the need to be constantly entertained, you reclaim control over your mind. A 'boring' life is often just a peaceful life stripped of artificial chaos and unnecessary drama.

Finding joy in daily rituals—a morning cup of coffee, lines of code running smoothly, or a quiet evening walk—is where genuine stability lives. When peace no longer feels boring, you become genuinely unstoppable.`
  },
  {
    id: 3,
    title: "The Myth of Perfection: Focus on Strengths, Forget the Weaknesses",
    url: "https://medium.com/@vidyatandel/the-myth-of-perfection-focus-on-strengths-forget-the-weaknesses-c7ab694235cb",
    date: "Oct 2024",
    readTime: "4 min read",
    category: "Personal Growth",
    preview:
      "We spend years trying to patch up our minor flaws and fix weak areas, striving for a well-rounded perfection that doesn't exist. Exceptional impact comes from double-downing on what you are naturally built for...",
    fullContent: `We spend years trying to patch up our minor flaws and fix weak areas, striving for a well-rounded perfection that doesn't exist. Exceptional impact comes from double-downing on what you are naturally built for.

Perfection is an illusion that leads to friction and creative burnout. When you spend all your energy trying to turn your C-grade skills into B-grade skills, you rob yourself of the chance to take your A-grade strengths and turn them into world-class superpowers.

Identify your core strengths—whether it’s artistic vision, sharp analytical thinking, or empathy—and double down on them. Outsource or make peace with the rest.`
  },
  {
    id: 4,
    title: "Missing Someone Is the Most Beautiful Feeling",
    url: "https://medium.com/@vidyatandel/missing-someone-is-the-most-beautiful-feeling-7b8520426f7c",
    date: "Nov 2024",
    readTime: "3 min read",
    category: "Reflections",
    preview:
      "Missing someone is usually labeled as sadness or pain, but look closer: it is living proof that a connection was deep enough to leave a permanent mark on your soul. Longing is just love extending through space...",
    fullContent: `Missing someone is usually labeled as sadness or pain, but look closer: it is living proof that a connection was deep enough to leave a permanent mark on your soul. Longing is just love extending through space.

It reminds us that we are capable of genuine human warmth. To feel an empty space where someone used to stand means that space was filled with something truly valuable.

Instead of fighting the ache of distance, appreciate what created it. It’s a quiet privilege to hold memories so vivid that they color your present moment.`
  },
  {
    id: 5,
    title: "Waiting Is Easy",
    url: "https://medium.com/@vidyatandel/waiting-is-easy-426d8600910e",
    date: "Dec 2024",
    readTime: "4 min read",
    category: "Perspective",
    preview:
      "People talk about waiting as if it's an agonizing punishment. But waiting is only hard when you resist the current moment. When you accept the passage of time, waiting becomes a peaceful harbor...",
    fullContent: `People talk about waiting as if it's an agonizing punishment. But waiting is only hard when you resist the current moment. When you accept the passage of time, waiting becomes a peaceful harbor.

Impatience stems from the belief that happiness only exists at the destination. We rush through line queues, code builds, life milestones, and personal goals, missing the subtle beauty happening right now.

Waiting is easy when you stop trying to force the future to arrive early. Trust the process, take a deep breath, and let time do its work.`
  },
  {
    id: 6,
    title: "The Power of Detachment",
    url: "https://medium.com/@vidyatandel/the-power-of-detachment-9254bc299a94",
    date: "Jan 2025",
    readTime: "5 min read",
    category: "Inner Strength",
    preview:
      "Detachment is not cold indifference or caring less; it is loving and creating without gripping so tightly that you crush what you hold. It gives you the space to act cleanly without fear of outcomes...",
    fullContent: `Detachment is not cold indifference or caring less; it is loving and creating without gripping so tightly that you crush what you hold. It gives you the space to act cleanly without fear of outcomes.

When you detach from the final result, your work gains clarity and grace. You code without panic, write without self-censorship, and build relationships without possessiveness.

True freedom is giving your absolute best effort to every task, then stepping back and allowing the universe to handle the rest.`
  }
];

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleShare = (e, url) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({ url });
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  return (
    <main className="min-h-screen py-16 px-4 md:px-10 container max-w-6xl mx-auto">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 mt-10 text-sm font-mono mb-10 no-underline transition-opacity hover:opacity-75"
        style={{ color: "var(--pink)" }}
      >
        <ArrowLeft size={16} /> Back to Main Portfolio
      </Link>

      {/* Header Section */}
      <div className="mb-2">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4 border"
          style={{ background: "var(--bg2)", borderColor: "var(--border)", color: "var(--pink)" }}
        >
          <BookOpen size={14} /> Thought Stream
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-display" style={{ color: "var(--text)" }}>
          Blogs & <span className="gradient-text">Reflections</span>
        </h1>
        <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: "var(--text2)" }}>
          Essays on software philosophy, inner growth, life observations, and finding quiet clarity in a noisy world.Writing is how I defragment my mind. Code fixes logical architecture, but writing fixes personal clarity. Here is a curated selection of thoughts originally published on Medium.
        </p>
      </div>


      {/* Blog Grid */}
      <section className="mb-20 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedBlog(post)}
              className="group relative cursor-pointer rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
            >
              <div>
                {/* Meta info */}
                <div className="flex items-center justify-between text-xs font-mono mb-4" style={{ color: "var(--text2)" }}>
                  <span className="px-2.5 py-0.5 rounded-full border text-xs" style={{ borderColor: "var(--border)", color: "var(--pink)" }}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 font-display transition-colors group-hover:text-[var(--pink)]" style={{ color: "var(--text)" }}>
                  {post.title}
                </h3>

                {/* ~50% Preview Text with Gradient Fade */}
                <div className="relative overflow-hidden mb-6">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                    {post.preview}
                  </p>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none bg-gradient-to-t"
                    style={{
                      backgroundImage: `linear-gradient(to top, var(--bg2), transparent)`
                    }}
                  />
                </div>
              </div>

              {/* Action area */}
              <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
                <span className="text-xs font-mono font-semibold flex items-center gap-1" style={{ color: "var(--pink)" }}>
                  Read Essay →
                </span>
                <button
                  onClick={(e) => handleShare(e, post.url)}
                  className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
                  style={{ color: "var(--text2)" }}
                  title="Share Link"
                >
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expanded Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className="relative w-full max-w-3xl max-h-[85vh] rounded-3xl border overflow-hidden flex flex-col shadow-2xl"
            style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
          >
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b flex items-start justify-between relative" style={{ borderColor: "var(--border)" }}>
              <div>
                <div className="flex items-center gap-3 text-xs font-mono mb-2" style={{ color: "var(--pink)" }}>
                  <span>{selectedBlog.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {selectedBlog.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-display" style={{ color: "var(--text)" }}>
                  {selectedBlog.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedBlog(null)}
                className="p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body - Full Content */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-4 text-base leading-relaxed" style={{ color: "var(--text2)" }}>
              {selectedBlog.fullContent.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Modal Footer with Medium Link */}
            <div className="p-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
              <div className="text-xs font-mono" style={{ color: "var(--text2)" }}>
                Originally published on Medium
              </div>
              <a
                href={selectedBlog.url}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 shadow-md"
                style={{ background: "linear-gradient(135deg, #00ab6c, #000000)" }}
              >
                <ExternalLink size={16} /> Read Original Article on Medium
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <footer
        className="rounded-3xl border p-8 md:p-12 text-center flex flex-col items-center justify-center"
        style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
      >
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border"
          style={{ background: "rgba(236, 72, 153, 0.1)", borderColor: "rgba(236, 72, 153, 0.2)" }}
        >
          <Bookmark size={24} className="text-pink-500" />
        </div>
        <h3 className="text-2xl font-bold mb-2 font-display" style={{ color: "var(--text)" }}>
          Follow along on Medium
        </h3>
        <p className="text-sm max-w-md mb-6" style={{ color: "var(--text2)" }}>
          I regularly post fresh perspectives on engineering mindsets, creative habits, and technical life.
        </p>

        <a
          href="https://medium.com/@vidyatandel"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 shadow-lg"
          style={{ background: "linear-gradient(135deg, #00ab6c, #121212)" }}
        >
          <ExternalLink size={16} /> Visit Medium Profile (@vidyatandel)
        </a>
      </footer>
    </main>
  );
}