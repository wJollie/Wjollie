// src/Pages/Contact.jsx
import { useState } from "react";
import "./Contact.css"; // tiny page-specific tweaks (below)

function CopyChip({ value, label = "Copy", onCopied }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      onCopied?.();
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // Fallback: select text
      alert("Copy failed — you can manually copy: " + value);
    }
  };
  return (
    <button className="copy-chip" onClick={copy} title={`Copy ${value}`}>
      {copied ? "Copied!" : label}
    </button>
  );
}

function ContactButton({ href, icon, label, sublabel, external = true }) {
  return (
    <a
      className="contact-btn"
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="contact-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: icon }} />
      <span className="contact-labels">
        <span className="contact-label">{label}</span>
        {sublabel && <span className="contact-sublabel">{sublabel}</span>}
      </span>
      <span className="contact-arrow" aria-hidden="true">➜</span>
    </a>
  );
}

export default function Contact() {
  // TODO: replace with your real handles
  const email = "william.jollie23@gmail.com";
  const phone = "+1-551-206-0336";
  const links = [
    {
      href: "https://github.com/wJollie",
      label: "GitHub",
      sublabel: "@wJollie",
      icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.85 9.69.5.1.68-.22.68-.49 0-.24-.01-.86-.01-1.68-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.05 1.54 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .85-.28 2.78 1.05A9.32 9.32 0 0 1 12 6.84c.86.01 1.73.12 2.53.34 1.92-1.33 2.77-1.05 2.77-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>`
    },
    {
      href: "https://www.linkedin.com/in/william-jollie-68a4b7236/",
      label: "LinkedIn",
      sublabel: "Connect",
      icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8 8.5h3.8v2h.06c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.78 2.66 4.78 6.12V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.7-2.5 3.45V23H8V8.5z"/></svg>`
    },
    {
      href: "https://www.youtube.com/@WilliamJollie",
      label: "YouTube",
      sublabel: "Build logs & demos",
      icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.2 0 12 0 12s0 3.8.5 5.8a3 3 0 0 0 2.1 2.1c2 .6 9.4.6 9.4.6s7.4 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-2 .5-5.8.5-5.8s0-3.8-.5-5.8ZM9.5 15.5v-7l6 3.5-6 3.5Z"/></svg>`
    },
  ];

  return (
    <main className="home">
      <section className="hero">
        <div className="container contact-wrap">
          <h1>Contact</h1>
          <p className="intro">Reach out for internships, collaborations, or questions about my projects.</p>

          <div className="contact-grid">
            {/* Email */}
            <div className="contact-row">
              <ContactButton
                href={`mailto:${email}?subject=Portfolio Inquiry&body=Hi William,%0D%0A%0D%0A`}
                label="Email"
                sublabel={email}
                icon={`<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2 .5v.4l8 5.1 8-5.1v-.4H4Zm16 2.6-8 5.1-8-5.1V18h16V9.1Z"/></svg>`}
                external={false}
              />
              <CopyChip value={email} label="Copy email" />
            </div>

            {/* Phone */}
            <div className="contact-row">
              <ContactButton
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                label="Phone"
                sublabel={phone}
                icon={`<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.06-.24c1.16.39 2.42.6 3.54.6a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.3 21 3 12.7 3 2a1 1 0 0 1 1-1h3.4a1 1 0 0 1 1 1c0 1.12.21 2.38.6 3.54a1 1 0 0 1-.24 1.06L6.6 10.8Z"/></svg>`}
                external={false}
              />
              <CopyChip value={phone} label="Copy number" />
            </div>

            {/* Socials */}
            {links.map(link => (
              <ContactButton key={link.label} {...link} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
