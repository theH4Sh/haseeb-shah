"use client";

import { useState, useEffect } from "react";

const mobileNavLinks = [
  { href: "#stack", label: "Tech stack", icon: "stack" },
  { href: "#about", label: "About", icon: "user" },
  { href: "#work", label: "Work", icon: "work" },
];

function NavIcon({ type }) {
  if (type === "user") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    );
  }

  if (type === "stack") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    );
  }

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

export default function BottomDock() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["about", "stack", "work"];
      const scrollPosition = window.scrollY + 140;
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;

      if (isAtBottom) {
        setActiveSection("work");
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="mobile-bottom-nav md:hidden" aria-label="Page sections">
      {mobileNavLinks.map(({ href, label, icon }) => {
        const id = href.replace("#", "");
        const isActive = activeSection === id;
        return (
          <a
            key={href}
            href={href}
            className={`mobile-nav-item ${isActive ? "active" : ""}`}
            onClick={() => setActiveSection(id)}
          >
            {isActive && <span className="active-line" />}
            <NavIcon type={icon} />
            <span>{label}</span>
          </a>
        );
      })}
    </nav>
  );
}
