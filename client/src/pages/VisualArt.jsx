import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Palette,
  Heart,
  MessageCircle,
  Share2
} from "lucide-react";

const instagramArtworks = [
  {
    id: 1,
    url: "https://www.instagram.com/p/DcCTc3Lk31U/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "/art1.png",
    title: "Aesthetic Photo to Card",
    manualCaption: "An aesthetic reference photo from a friend's profile, translated into a detailed and warm colored-pencil sketched card.",
    likes: "48",
    comments: "6"
  },
  {
    id: 2,
    url: "https://www.instagram.com/p/DGzxGsNMBdK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "/art2.png",
    title: "Divine Harmony: Story of Purpose",
    manualCaption: "Volunteer illustrative piece narrating the story of a humble cup arriving at its rightful place to reveal its inherent value.",
    likes: "67",
    comments: "7"
  },
  {
    id: 3,
    url: "https://www.instagram.com/p/DFisy1dMv_e/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "/art3.png",
    title: "Divine Harmony: Satya, Nyay & Aparadh",
    manualCaption: "Volunteer story artwork for Divine Harmony themed around Truth, Justice, and Crime.",
    likes: "92",
    comments: "14"
  },
  {
    id: 4,
    url: "https://www.instagram.com/p/DFiptiIs5I3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "/art4.png",
    title: "Pencil Sketch on Paper",
    manualCaption: "Theme - Love is unconditional, Beyond needs, flaws, time and any kind of duality",
    likes: "71",
    comments: "9"
  },
  {
    id: 5,
    url: "https://www.instagram.com/p/DI4OaRRM-Mm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "/art5.png",
    title: "Semi-Abstract Acrylic Canvas",
    manualCaption: "Reinterpreting an intriguing reference photo into a semi-abstract acrylic artwork loaded with depth and contrast.",
    likes: "75",
    comments: "10"
  },
  {
    id: 6,
    url: "https://www.instagram.com/p/C_K03f9BpGd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "/art6.png",
    title: "Janmashtami Lotus Bloom",
    manualCaption: "Photo-to-watercolor study celebrating Janmashtami. Captures delicate lotus petals in full bloom.",
    likes: "105",
    comments: "16"

  },
  {
    id: 7,
    url: "https://www.instagram.com/p/DH3wDlBMfb9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "/art7.png",
    title: "Pencil & Color Study",
    manualCaption: "Exploring color harmonies and pencil sketching techniques inspired by Pinterest visual research.",
    likes: "52",
    comments: "4"
    
  },
  {
    id: 8,
    url: "https://www.instagram.com/p/C-gMgwRBPQC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "/art8.png",
    title: "Abstract City Street Canvas",
    manualCaption: "Acrylic on canvas inspired by an old sketchbook cover-a lively take on vibrant city streets and architectural light.",
    likes: "83",
    comments: "11"
  },
  {
    id: 9,
    url: "https://www.instagram.com/p/DKF8mu2snom/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "/art9.png",
    title: "'Disbalanced' Short Film Poster",
    manualCaption: "Custom official poster design crafted for the short film 'Disbalanced' directed by Ranveer R Rajput.",
    likes: "110",
    comments: "19"
  },
  {
    id: 10,
    url: "https://www.instagram.com/p/C8p90tzB5M7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "/art10.png",
    title: "Avian Watercolor Illustration",
    manualCaption: "Delicate watercolor study on paper, capturing fluid textures, gentle shading, and organic bird plumage.",
    likes: "64",
    comments: "8"
  }
];

export default function VisualArt() {
  const handleShare = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({ url });
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  return (
    <main className="min-h-screen py-16 px-4 md:px-10 container max-w-6xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center mt-10 gap-2 text-sm font-mono mb-10 no-underline transition-opacity hover:opacity-75"
        style={{ color: "var(--pink)" }}
      >
        <ArrowLeft size={16} /> Back to Main Portfolio
      </Link>

      <div className="mb-12">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4 border"
          style={{ background: "var(--bg2)", borderColor: "var(--border)", color: "var(--pink)" }}
        >
          <Palette size={14} /> Creative Identity
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-display" style={{ color: "var(--text)" }}>
          Visual Art & <span className="gradient-text">Illustrations</span>
        </h1>
        <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: "var(--text2)" }}>
          Drawing isn't just a hobby-it's how I think, process, and connect with the world around me.
        </p>
      </div>

      <section
        className="rounded-3xl border p-6 md:p-10 mb-16 relative overflow-hidden"
        style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
      >
        <div
          className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none"
          style={{ background: "var(--pink)", filter: "blur(40px)" }}
        />

        <h2 className="text-2xl font-bold mb-6 font-display flex items-center gap-2" style={{ color: "var(--text)" }}>
          <Sparkles className="text-pink-500" size={20} /> My Artistic Journey
        </h2>

        <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: "var(--text2)" }}>
          <p>
            I’ve been drawing since childhood and am completely self-taught. From school to my engineering college days,
            I almost always bagged a prize in every art competition I participated in. Back when I was a kid, watching{" "}
            <span className="font-semibold text-[var(--pink)]">M.A.D. by Harun Robert</span> was my ultimate obsession. If I started a craft project in the morning,
            by evening I’d be sitting in another corner of the hall surrounded by paper, colors, and raw creativity. It honestly feels like a gift I brought with me from a past life.
          </p>

          <p>
            I formally gave my <span className="font-semibold" style={{ color: "var(--text)" }}>Elementary Art Exam</span> in 8th grade. Over the years, I’ve explored nearly every art medium—from digital illustrations, watercolor portraits, and pencil sketches to designing the official movie poster for the short film <span className="font-semibold text-[var(--pink)]">'Disbalanced' by Ranveer Rajput</span>.
          </p>

          <p>
            My creative hands love tactile craft too: I do fabric painting (including upcycling a vintage metal trunk), hand embroidery, custom-painted tote bags, flat pouches, and expressive art journaling. On weekends, I also love conducting art classes for young students to share the joy of creation.
          </p>

          <p>
            Art is also my way of giving back. I volunteer as an artist at{" "}
            <span className="font-semibold text-[var(--pink)]">Divine Harmony</span> (a Pune-based spiritual wellbeing program by Shreekalp), where I design logos, suggest visual content, create theme illustrations, paint massive 6-foot backdrops, and frame visual stories for spiritual discourses.
          </p>

          <blockquote className="italic border-l-2 pl-4 py-1 my-4 border-[var(--pink)]" style={{ color: "var(--text)" }}>
            "I'm currently not aiming to make art a full-time profession, but it is something that keeps returning to me even when I forget it. It's an inner anchor."
          </blockquote>
        </div>
      </section>

      {/* Pinterest-Style Masonry Gallery */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--text)" }}>
            Here Are Some of My Best Artworks
          </h2>
          <p className="text-sm font-mono" style={{ color: "var(--text2)" }}>
            Hover or tap any piece to read captions and jump directly to Instagram
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {instagramArtworks.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden border-[6px] border-white bg-[#121212] shadow-xl shadow-black/60 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-black/90 hover:-translate-y-1"
            >
              {/* Natural Aspect Ratio Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto block object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Glassmorphism Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end backdrop-blur-[2px]">
                <div className="flex items-center justify-between text-white/90 text-xs font-mono mb-2">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1 font-semibold">
                      <Heart size={14} className="fill-pink-500 text-pink-500" /> {item.likes}
                    </span>
                    <span className="flex items-center gap-1 font-semibold">
                      <MessageCircle size={14} className="fill-white/80" /> {item.comments}
                    </span>
                  </div>
                  <button
                    onClick={(e) => handleShare(e, item.url)}
                    className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title="Share artwork link"
                  >
                    <Share2 size={14} />
                  </button>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 font-display leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-3 mb-4 leading-relaxed">
                  {item.manualCaption}
                </p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold text-white transition-all duration-200 hover:opacity-90 shadow-md"
                  style={{ background: "linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)" }}
                >
                  <ExternalLink size={14} /> View on Instagram
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer
        className="rounded-3xl border p-8 md:p-12 text-center flex flex-col items-center justify-center"
        style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
      >
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border"
          style={{ background: "rgba(236, 72, 153, 0.1)", borderColor: "rgba(236, 72, 153, 0.2)" }}
        >
          <Heart size={24} className="text-pink-500" />
        </div>
        <h3 className="text-2xl font-bold mb-2 font-display" style={{ color: "var(--text)" }}>
          Want to see more of my canvas?
        </h3>
        <p className="text-sm max-w-md mb-6" style={{ color: "var(--text2)" }}>
          I regularly post new sketches, process videos, mural projects, and art experiments on my official studio handle.
        </p>

        <a
          href="https://www.instagram.com/the.magic.palette.studio/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 shadow-lg"
          style={{ background: "linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)" }}
        >
          <ExternalLink size={16} /> Visit @the.magic.palette.studio
        </a>
      </footer>
    </main>
  );
}