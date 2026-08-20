import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Camera,
  Share2,
  Pin,
  ZoomIn,
  X
} from "lucide-react";

const pinterestPhotos = [
  {
    id: 1,
    pinUrl: "https://pin.it/2w7hIZafG",
    image: "/click1.jpg",
    title: "Latte Art & Warm Tones",
    caption: "Top-down view of a handcrafted rosette latte art inside a cozy cafe setting.",
    tag: "Coffee / Lifestyle"
  },
  {
    id: 2,
    pinUrl: "https://pin.it/1VZsfAZX7",
    image: "/click2.jpg",
    title: "Monsoon Drive Motion Blur",
    caption: "Moody, motion-blurred night drive past neon signs and iced drinks in the rain.",
    tag: "Street / Night Vibe"
  },
  {
    id: 3,
    pinUrl: "https://pin.it/5eUMlyhxk",
    image: "/click3.jpg",
    title: "Architectural Spire",
    caption: "Low-angle shot of historical stone architecture and terracotta roofs against a clear sky.",
    tag: "Architecture / History"
  },
  {
    id: 4,
    pinUrl: "https://pin.it/5eUMlyhxk",
    image: "/click4.jpg",
    title: "Heritage Market Structure",
    caption: "Wide perspective of classic wooden roofs and central architectural tower in an urban market.",
    tag: "Heritage / City"
  },
  {
    id: 5,
    pinUrl: "https://pin.it/q9V30FXmB",
    image: "/click5.jpg",
    title: "Sleeping Siamese Cat",
    caption: "A quiet, cozy moment of a curled-up cat resting on a teal couch.",
    tag: "Cozy / Pet Photography"
  },
  {
    id: 6,
    pinUrl: "https://pin.it/18Hu5Adhd",
    image: "/click6.jpg",
    title: "Serene Shoreline",
    caption: "Misty coastal morning featuring dark volcanic rocks scattered along a quiet sandy beach.",
    tag: "Nature / Ocean"
  },
  {
    id: 7,
    pinUrl: "https://pin.it/BGQT2RlJG",
    image: "/click7.jpg",
    title: "Diwali Rangoli & Diyas",
    caption: "Warm glow of oil lamps surrounding a colorful traditional rangoli pattern on a balcony floor.",
    tag: "Festive / Culture"
  },
  {
    id: 8,
    pinUrl: "https://pin.it/28EEJz15t",
    image: "/click8.jpg",
    title: "Artistic Illustrated Shirt Display",
    caption: "Intricate mythological and celestial print apparel on display through a glass storefront.",
    tag: "Fashion / Art"
  },
  {
    id: 9,
    pinUrl: "https://pin.it/6YrCo6fmU",
    image: "/click9.jpg",
    title: "Lush Rainy Ferns",
    caption: "Deep green wild ferns drenched in monsoon rain, creating an organic botanical wallpaper texture.",
    tag: "Nature / Botanical"
  },
  {
    id: 10,
    pinUrl: "https://pin.it/61NfRHrTJ",
    image: "/click10.jpg",
    title: "Monsoon Flower Garden",
    caption: "Layered field of colorful wildflowers and wet pavement framing a lush green treeline.",
    tag: "Landscape / Flora"
  },
  {
    id: 11,
    pinUrl: "https://pin.it/6kMqBV4xI",
    image: "/click11.jpg",
    title: "Campus Morning Horizon",
    caption: "Golden hour sun hitting stone architecture, solar roofs, and manicured garden grounds.",
    tag: "Architecture / Campus"
  },
  {
    id: 12,
    pinUrl: "https://pin.it/2YiHLiLIA",
    image: "/click12.jpg",
    title: "Overgrown Stone Wall",
    caption: "Delicate white blossoms and lush ivy climbing along a minimal concrete pillars.",
    tag: "Minimal / Nature"
  },
  {
    id: 13,
    pinUrl: "https://pin.it/3mHKSZmep",
    image: "/click13.jpg",
    title: "Eco Park Greenery",
    caption: "Simple snapshot of vibrant green foliage breaking up the beams of sunlight.",
    tag: "Urban / Minimal"
  }
];

export default function AestheticClicks() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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
      {/* Back Link */}
      <Link
        to="/"
        className="inline-flex items-center mt-10 gap-2 text-sm font-mono mb-10 no-underline transition-opacity hover:opacity-75"
        style={{ color: "var(--pink)" }}
      >
        <ArrowLeft size={16} /> Back to Main Portfolio
      </Link>

      {/* Header Banner */}
      <div className="mb-12">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4 border"
          style={{ background: "var(--bg2)", borderColor: "var(--border)", color: "var(--pink)" }}
        >
          <Camera size={14} /> Mobile Photography
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-display" style={{ color: "var(--text)" }}>
          Aesthetic Clicks & <span className="gradient-text">Visual Moods</span>
        </h1>
        <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: "var(--text2)" }}>
          Everyday perspective captured through a phone lens—finding art in light, shadows, and fleeting moments.
        </p>
      </div>

      {/* Intro Context Card */}
      <section
        className="rounded-3xl border p-6 md:p-10 mb-16 relative overflow-hidden"
        style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
      >
        <div
          className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none"
          style={{ background: "#E60023", filter: "blur(40px)" }}
        />

        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2" style={{ color: "var(--text)" }}>
          <Sparkles className="text-pink-500" size={20} /> Framing the Ordinary
        </h2>

        <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text2)" }}>
          You don't always need high-end gear to compose a story. These shots are unscripted, mobile-captured visual notes—curated on Pinterest and collected here as a gallery of moodboards, urban angles, and color studies.
        </p>
      </section>

      {/* Pinterest Masonry Gallery */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--text)" }}>
            The Photo Collection
          </h2>
          <p className="text-sm font-mono" style={{ color: "var(--text2)" }}>
            Click or tap any photo to zoom in and view details
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {pinterestPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden border-4 border-white shadow-xl shadow-black/60 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-black/90 hover:-translate-y-1 bg-[#121212]"
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto block object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Minimal Overlay - ONLY Zoom Button */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="p-3.5 rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/30 transition-transform duration-200 hover:scale-110 flex items-center justify-center shadow-lg border border-white/20">
                  <ZoomIn size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Zoom Modal Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#121212] rounded-3xl border-2 border-white shadow-2xl shadow-black/90 overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors border border-white/20"
              title="Close modal"
            >
              <X size={18} />
            </button>

            {/* Modal Image */}
            <div className="flex-1 bg-black flex items-center justify-center p-4 min-h-[300px]">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[75vh] w-auto object-contain rounded-xl"
              />
            </div>

            {/* Modal Info Sidebar */}
            <div className="p-6 md:w-80 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 bg-[#181818]">
              <div>
                <div className="flex items-center justify-start gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-white/10 text-pink-300 text-xs font-mono font-bold uppercase tracking-wider">
                    {selectedPhoto.tag}
                  </span>
                  
                  {/* Share Option */}
                  <button
                    onClick={(e) => handleShare(e, selectedPhoto.pinUrl)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title="Share pin link"
                  >
                    <Share2 size={16} />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-display">
                  {selectedPhoto.title}
                </h3>
                
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {selectedPhoto.caption}
                </p>
              </div>

              {/* Pinterest Link */}
              <a
                href={selectedPhoto.pinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold text-white transition-all duration-200 hover:opacity-90 shadow-md"
                style={{ background: "linear-gradient(45deg, #E60023, #ff4d4d)" }}
              >
                <Pin size={14} /> View Pin on Pinterest
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer Callout */}
      <footer
        className="rounded-3xl border p-8 md:p-12 text-center flex flex-col items-center justify-center"
        style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
      >
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border"
          style={{ background: "rgba(230, 0, 35, 0.1)", borderColor: "rgba(230, 0, 35, 0.2)" }}
        >
          <Pin size={24} className="text-red-500" />
        </div>
        <h3 className="text-2xl font-bold mb-2 font-display" style={{ color: "var(--text)" }}>
          Explore the Full Pinterest Board
        </h3>
        <p className="text-sm max-w-md mb-6" style={{ color: "var(--text2)" }}>
          Check out my raw moodboards, aesthetic saves, and fresh clicks updated continuously on Pinterest.
        </p>

        <a
          href="https://in.pinterest.com/vidya333_/_created/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 shadow-lg"
          style={{ background: "linear-gradient(45deg, #E60023, #ff4d4d)" }}
        >
          <ExternalLink size={16} /> Visit Pinterest Profile
        </a>
      </footer>
    </main>
  );
}