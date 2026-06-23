import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe, Palette, Server, LayoutTemplate, Bot,
  ArrowRight, Phone, Mail, MapPin,
  Camera, FileText, MessageCircle, Zap, PackageCheck,
  Headphones, Star,RefreshCw
} from "lucide-react";

const FORM_EMBED =
  "https://docs.google.com/forms/d/e/1FAIpQLScQ53LKLqkZFzFLnpZ098f_DCBlkOHbnaHplPA5CKab8TeiBg/viewform?embedded=true";

const services = [
  {
    Icon: LayoutTemplate,
    title: "Landing Pages & Business Sites",
    desc: "Professional websites your customers can find, trust, and act on. Fast, mobile-first, built to rank.",
    color: "var(--orange)",
    from: "₹8,000",
  },
  {
    Icon: Globe,
    title: "Full-Stack Web Development",
    desc: "Custom web apps with login, dashboards, databases - built end to end for startups and growing businesses.",
    color: "var(--purple)",
    from: "₹20,000",
  },
  {
    Icon: Palette,
    title: "UI/UX Design & Development",
    desc: "Interfaces that look intentional and feel effortless. Clean, creative, and user-focused from the first screen.",
    color: "var(--pink)",
    from: "₹6,000",
  },
  {
    Icon: Bot,
    title: "AI-Integrated Applications",
    desc: "Add AI to your product - chatbots, content tools, smart dashboards powered by modern LLM APIs.",
    color: "var(--cyan)",
    from: "₹15,000",
  },
  {
    Icon: Server,
    title: "Hosting & Maintenance",
    desc: "Domain setup, deployment, SSL, and ongoing updates. Your site stays live and secure without you worrying.",
    color: "var(--green)",
    from: "₹1,500/mo",
  },
  {
  Icon: RefreshCw,
  title: "Website Redesign",
  desc: "Got an outdated website? I'll modernise it - same content, better design, faster performance, and mobile-ready.",
  color: "var(--yellow)",
  from: "₹5,000",
},
];

const steps = [
  { num: "01", title: "Fill the form", desc: "Share your business details and requirements in under 3 minutes." },
  { num: "02", title: "Free consultation", desc: "I'll review your needs and reach out within 24 hours to discuss." },
  { num: "03", title: "Design & Build", desc: "I design, develop, and test your site - with regular updates." },
  { num: "04", title: "Launch", desc: "Your site goes live. Domain, hosting, SSL - all handled." },
];

const whyPoints = [
  { Icon: Zap,          title: "Fast turnaround",      desc: "1–3 weeks, not months." },
  { Icon: Globe,        title: "All-in-one",            desc: "Design, build, and host - one person, no agency fees." },
  { Icon: PackageCheck, title: "You own it",            desc: "Code, domain, and full ownership handed over to you." },
  { Icon: Headphones,   title: "After-launch support",  desc: "Updates and fixes available after going live." },
];

const testimonials = [
  {
    name: "VM Prosperity Group",
    role: "Real Estate Client",
    text: "Vidya handled everything from design to deployment independently. Delivered a complete real estate platform that works exactly as we needed.",
    stars: 5,
  },
];

function BizNavbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ background: "var(--bg)", borderColor: "var(--border)" }}
    >
      <div className="container px-5 md:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, var(--purple), var(--pink))" }}
          >
            <Globe size={14} strokeWidth={2} color="#fff" />
          </div>
          <span className="font-display font-extrabold text-sm" style={{ color: "var(--text)" }}>
            Webs by Vidya
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs font-mono" style={{ color: "var(--text2)" }}>
          {["services", "process", "contact"].map(id => (
            <a
              key={id}
              href={`#biz-${id}`}
              className="capitalize hover:text-[var(--text)] transition-colors no-underline"
              style={{ color: "var(--text2)" }}
            >
              {id}
            </a>
          ))}
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono no-underline px-3 py-1.5 rounded-full border transition-all hover:border-[var(--purple)]"
          style={{ borderColor: "var(--border)", color: "var(--text2)" }}
        >
          ← Portfolio
        </Link>
      </div>
    </nav>
  );
}

export default function WebsByVidya() {
  const [formLoaded, setFormLoaded] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", paddingTop: "60px" }}>
      <BizNavbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center pt-14 overflow-hidden">
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.10] pointer-events-none"
          style={{ background: "var(--purple)", top: "5%", left: "-5%" }} />
        <div className="absolute w-[350px] h-[350px] rounded-full blur-[120px] opacity-[0.10] pointer-events-none"
          style={{ background: "var(--pink)", bottom: "10%", right: "0%" }} />

        <div className="container px-5 md:px-6 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left - text */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border font-mono text-[13px] mb-6"
                style={{ background: "rgba(155,89,255,0.1)", borderColor: "rgba(155,89,255,0.3)", color: "var(--purple)" }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--green)" }} />
                Free consultation · No commitment
              </div>

              <h1
                className="font-display font-extrabold leading-none mb-5"
                style={{ fontSize: "clamp(36px, 6vw, 72px)", letterSpacing: "-2px" }}
              >
                <span className="block font-mono font-normal text-[0.3em] mb-2" style={{ color: "var(--text2)" }}>
                  professional websites for
                </span>
                <span className="gradient-text">Local Businesses</span>
              </h1>

              <p className="text-base md:text-lg leading-relaxed mb-8 max-w-lg" style={{ color: "var(--text2)" }}>
                Based in Pune · I design, build, and host websites that help your business get found online -
                fast, affordable, and with zero technical headache for you.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#biz-contact" className="btn-primary inline-flex items-center gap-2 no-underline">
                  Get a free consultation
                  <ArrowRight size={15} />
                </a>
                <a href="#biz-services" className="btn-outline inline-flex items-center gap-2 no-underline">
                  View services
                </a>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-mono" style={{ color: "var(--text3)" }}>
                <span>✦ 2+ years experience</span>
                <span>✦ 2+ client projects delivered</span>
                <span>✦ Design → Build → Host</span>
                <span>✦ Reviews on Google</span>
              </div>
            </div>

            {/* Right - banner image */}
            <div className="hidden lg:flex items-center justify-center">
              <img
                src="/pamphlete.png"
                alt="Webs by Vidya - Professional Websites for Local Businesses"
                className="w-full max-w-xl rounded-2xl"
                style={{ objectFit: "contain" ,maxHeight:"600px"}}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="biz-services" className="py-24" style={{ background: "var(--bg2)" }}>
        <div className="container px-5 md:px-6">
          <div className="section-label">what I offer</div>
          <h2 className="section-title mb-3">Services</h2>
          <p className="text-base max-w-md mb-12 leading-relaxed" style={{ color: "var(--text2)" }}>
            Everything your business needs online - design, development, and hosting under one roof.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ Icon, title, desc, color, from }) => (
              <div
                key={title}
                className="relative rounded-2xl border p-6 overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1"
                style={{ background: "var(--bg)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border"
                  style={{ background: `${color}15`, borderColor: `${color}30` }}
                >
                  <Icon size={22} strokeWidth={1.8} style={{ color }} />
                </div>
                <h3 className="text-base font-bold font-display mb-2" style={{ color: "var(--text)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text2)" }}>
                  {desc}
                </p>
                <p className="text-[11px] font-mono" style={{ color: "var(--text3)" }}>
                  starting from <span className="font-bold" style={{ color }}>{from}</span>
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WORK WITH ME ── */}
      <section className="py-20">
        <div className="container px-5 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="section-label">why choose me</div>
              <h2 className="section-title mb-4">One person.<br />Full service.</h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--text2)" }}>
                No agency overhead, no project managers in the middle. You work directly with the
                developer - which means faster decisions, cleaner communication, and a site that
                actually reflects your business.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {whyPoints.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border p-4"
                  style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center border mb-3"
                    style={{ background: "rgba(155,89,255,0.1)", borderColor: "rgba(155,89,255,0.25)" }}
                  >
                    <Icon size={16} strokeWidth={1.8} style={{ color: "var(--purple)" }} />
                  </div>
                  <p className="text-sm font-bold font-display mb-1" style={{ color: "var(--text)" }}>{title}</p>
                  <p className="text-[12px] leading-relaxed" style={{ color: "var(--text2)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="biz-process" className="py-24" style={{ background: "var(--bg2)" }}>
        <div className="container px-5 md:px-6">
          <div className="section-label">how it works</div>
          <h2 className="section-title mb-12">From enquiry to live site</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(({ num, title, desc }, i) => (
              <div key={num} className="relative flex flex-col">
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-6 left-[calc(100%-12px)] w-[calc(100%-32px)] h-px"
                    style={{ background: "var(--border)" }}
                  />
                )}
                <div className="rounded-2xl border p-5" style={{ background: "var(--bg)", borderColor: "var(--border)" }}>
                  <span
                    className="text-3xl font-extrabold font-display block mb-3 leading-none"
                    style={{
                      background: "linear-gradient(135deg, var(--purple), var(--pink))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {num}
                  </span>
                  <h3 className="text-sm font-bold font-display mb-1.5" style={{ color: "var(--text)" }}>{title}</h3>
                  <p className="text-[12px] leading-relaxed" style={{ color: "var(--text2)" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      {testimonials.length > 0 && (
        <section className="py-20">
          <div className="container px-5 md:px-6">
            <div className="section-label">client feedback</div>
            <h2 className="section-title mb-10">What clients say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {testimonials.map(({ name, role, text, stars }) => (
                <div key={name} className="rounded-2xl border p-6" style={{ background: "var(--bg2)", borderColor: "var(--border)" }}>
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: stars }).map((_, i) => (
                      <Star key={i} size={13} fill="var(--yellow)" strokeWidth={0} style={{ color: "var(--yellow)" }} />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-4 italic" style={{ color: "var(--text2)" }}>"{text}"</p>
                  <p className="text-sm font-bold font-display" style={{ color: "var(--text)" }}>{name}</p>
                  <p className="text-xs font-mono" style={{ color: "var(--text3)" }}>{role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BROCHURE + INSTAGRAM ── */}
      <section className="py-10" style={{ background: "var(--bg2)" }}>
        <div className="container px-5 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Pamphlet - real image + download */}
            <div
              className="rounded-2xl border overflow-hidden flex flex-col"
              style={{ background: "var(--bg)", borderColor: "var(--border)" }}
            >
              <img
                src="/header.png"
                alt="Webs by Vidya Service Brochure"
                className="w-full object-cover"
                style={{ maxHeight: "320px", objectPosition: "top" }}
              />
              <div className="p-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold font-display" style={{ color: "var(--text)" }}>
                    Service Brochure
                  </p>
                  <p className="text-[11px] font-mono" style={{ color: "var(--text3)" }}>
                    Webs by Vidya · Professional Websites
                  </p>
                </div>
                <a
                  href="/Untitled_design.png"
                  download="WebsByVidya-Brochure.png"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold no-underline transition-all hover:opacity-85 flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, var(--purple), var(--pink))",
                    color: "#fff",
                  }}
                >
                  <FileText size={13} strokeWidth={2} />
                  Download
                </a>
              </div>
            </div>

            {/* Instagram placeholder */}
            <div
              className="rounded-2xl border p-6 flex flex-col items-center justify-center text-center gap-3 min-h-[160px]"
              style={{ background: "var(--bg)", borderColor: "var(--border)", borderStyle: "dashed" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border"
                style={{ background: "rgba(236,72,153,0.1)", borderColor: "rgba(236,72,153,0.25)" }}
              >
                <Camera size={18} strokeWidth={1.8} style={{ color: "var(--pink)" }} />
              </div>
              <div>
                <p className="text-sm font-bold font-display mb-1" style={{ color: "var(--text)" }}>
                  @websby.vidya
                </p>
                <p className="text-[12px] mb-2" style={{ color: "var(--text3)" }}>
                  Business page - launching soon
                </p>
                <a
                  href="https://www.instagram.com/vidyasofficiall"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-mono no-underline hover:opacity-75 transition-opacity"
                  style={{ color: "var(--pink)" }}
                >
                  Follow personal page for now →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CONTACT / FORM ── */}
      <section id="biz-contact" className="py-24">
        <div className="container px-5 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left - contact info */}
            <div>
              <div className="section-label">get in touch</div>
              <h2 className="section-title mb-4">
                Free Website<br />
                <span className="gradient-text">Consultation</span>
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text2)" }}>
                Fill out the form and I'll get back to you within 24 hours with a recommendation
                tailored to your business. No commitment, no pressure.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                {[
                  { Icon: Phone,  label: "+91 99201 55441",      href: "tel:+919920155441" },
                  { Icon: Mail,   label: "vidya.nk07@gmail.com", href: "mailto:vidya.nk07@gmail.com" },
                  { Icon: MapPin, label: "Pune, Maharashtra",    href: null },
                  { Icon: Globe,  label: "vidyasofficial.world", href: "https://www.vidyasofficial.world" },
                ].map(({ Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center border flex-shrink-0"
                      style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
                    >
                      <Icon size={14} strokeWidth={1.8} style={{ color: "var(--purple)" }} />
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-sm font-mono no-underline hover:text-[var(--text)] transition-colors"
                        style={{ color: "var(--text2)" }}
                      >
                        {label}
                      </a>
                    ) : (
                      <span className="text-sm font-mono" style={{ color: "var(--text2)" }}>{label}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919920155441?text=Hi%20Vidya%2C%20I%27m%20interested%20in%20getting%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold no-underline transition-all hover:opacity-85"
                style={{
                  background: "rgba(37,211,102,0.12)",
                  border: "1px solid rgba(37,211,102,0.35)",
                  color: "#25D366",
                }}
              >
                <MessageCircle size={16} strokeWidth={2} />
                Chat on WhatsApp
              </a>

              {/* QR code - scan to open consultation form */}
              {/* QR code - clickable, opens modal */}
              <div
                className="flex items-center gap-4 mt-6 pt-6 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <button
                  onClick={() => setQrOpen(true)}
                  className="flex-shrink-0 rounded-xl border overflow-hidden transition-all hover:scale-105 hover:shadow-lg"
                  style={{ background: "#fff", padding: "4px", borderColor: "var(--border)" }}
                >
                  <img
                    src="/websbyvidya.png"
                    alt="Scan to fill consultation form"
                    className="w-20 h-20 block"
                  />
                </button>
                <div>
                  <p className="text-sm font-bold font-display mb-0.5" style={{ color: "var(--text)" }}>
                    Scan to get started
                  </p>
                  <p className="text-[12px] leading-relaxed mb-1" style={{ color: "var(--text3)" }}>
                    Opens the free consultation form directly on your phone
                  </p>
                  <button
                    onClick={() => setQrOpen(true)}
                    className="text-[11px] font-mono transition-opacity hover:opacity-70"
                    style={{ color: "var(--purple)" }}
                  >
                    Click to enlarge →
                  </button>
                </div>
              </div>

              {/* QR Modal */}
              {qrOpen && (
                <div
                  className="fixed inset-0 z-[300] flex items-center justify-center p-4"
                  style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
                  onClick={() => setQrOpen(false)}
                >
                  <div
                    className="rounded-3xl border p-6 flex flex-col items-center gap-4 max-w-xs w-full"
                    style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
                    onClick={e => e.stopPropagation()}
                  >
                    <p className="text-sm font-bold font-display" style={{ color: "var(--text)" }}>
                      Scan to fill the form
                    </p>
                    <img
                      src="/websbyvidya.png"
                      alt="Consultation form QR code"
                      className="w-64 h-64 rounded-2xl"
                      style={{ background: "#fff", padding: "12px" }}
                    />
                    <p className="text-[12px] font-mono text-center" style={{ color: "var(--text3)" }}>
                      Point your camera at the QR code to open the free consultation form
                    </p>
                    <button
                      onClick={() => setQrOpen(false)}
                      className="px-5 py-2 rounded-full border text-xs font-mono transition-all hover:border-[var(--purple)]"
                      style={{ borderColor: "var(--border)", color: "var(--text2)" }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right - Google Form iframe */}
            <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
              {!formLoaded && (
                <div
                  className="flex items-center justify-center h-[600px] text-sm font-mono"
                  style={{ background: "var(--bg2)", color: "var(--text3)" }}
                >
                  Loading form…
                </div>
              )}
              <iframe
                src={FORM_EMBED}
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                onLoad={() => setFormLoaded(true)}
                style={{ display: formLoaded ? "block" : "none", background: "var(--bg2)" }}
                title="Webs by Vidya - Free Website Consultation"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t py-8" style={{ borderColor: "var(--border)", background: "var(--bg2)" }}>
        <div className="container px-5 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, var(--purple), var(--pink))" }}
            >
              <Globe size={12} strokeWidth={2} color="#fff" />
            </div>
            <span className="text-sm font-display font-bold" style={{ color: "var(--text)" }}>
              Webs by Vidya
            </span>
            <span className="text-xs font-mono" style={{ color: "var(--text3)" }}>
              · Professional Websites for Local Businesses
            </span>
          </div>
          <Link
            to="/"
            className="text-xs font-mono no-underline hover:text-[var(--text)] transition-colors"
            style={{ color: "var(--text3)" }}
          >
            ← Back to portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}