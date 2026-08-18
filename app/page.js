import Image from "next/image";
import fs from "fs";
import path from "path";
import BottomDock from "../components/BottomDock";

const techCatalog = {
  "Node.js": { icon: "devicon-nodejs-plain colored", bg: "rgba(51, 153, 51, 0.14)" },
  Express: { icon: "devicon-express-original colored", bg: "rgba(255, 255, 255, 0.07)" },
  Django: { icon: "devicon-django-plain colored", bg: "rgba(8, 75, 55, 0.22)" },
  JavaScript: { icon: "devicon-javascript-plain colored", bg: "rgba(247, 223, 30, 0.12)" },
  Python: { custom: "python", bg: "rgba(55, 118, 171, 0.16)" },
  HTML: { icon: "devicon-html5-plain colored", bg: "rgba(227, 79, 38, 0.14)" },
  CSS: { icon: "devicon-css3-plain colored", bg: "rgba(38, 77, 228, 0.14)" },
  React: { icon: "devicon-react-original colored", bg: "rgba(97, 218, 251, 0.12)" },
  Redux: { icon: "devicon-redux-original colored", bg: "rgba(118, 74, 188, 0.14)" },
  "Next.js": { icon: "devicon-nextjs-plain", bg: "rgba(255, 255, 255, 0.07)" },
  Tailwind: { icon: "devicon-tailwindcss-original colored", bg: "rgba(56, 189, 248, 0.12)" },
  MongoDB: { icon: "devicon-mongodb-plain colored", bg: "rgba(71, 162, 72, 0.14)" },
  PostgreSQL: { icon: "devicon-postgresql-plain colored", bg: "rgba(65, 105, 225, 0.14)" },
  MySQL: { icon: "devicon-mysql-plain colored", bg: "rgba(0, 117, 143, 0.16)" },
  Docker: { icon: "devicon-docker-plain colored", bg: "rgba(36, 150, 237, 0.14)" },
  AWS: { icon: "devicon-amazonwebservices-plain-wordmark colored", bg: "rgba(255, 153, 0, 0.12)", wide: true },
  Linux: { custom: "linux", bg: "rgba(255, 255, 255, 0.06)" },
  Nginx: { icon: "devicon-nginx-original colored", bg: "rgba(0, 150, 57, 0.14)" },
  "GitHub Actions": { icon: "devicon-githubactions-plain colored", bg: "rgba(59, 130, 246, 0.12)", wide: true },
  LangChain: { custom: "langchain", bg: "rgba(124, 194, 227, 0.18)" },
  FAISS: { custom: "faiss", bg: "rgba(8, 102, 255, 0.14)" },
  "Vector DBs": { custom: "vector", bg: "rgba(139, 92, 246, 0.14)", wide: true },
  Playwright: { icon: "devicon-playwright-plain colored", bg: "rgba(45, 45, 45, 0.35)" },
  "Socket.io": { icon: "devicon-socketio-original", bg: "rgba(255, 255, 255, 0.07)" },
  Stripe: { custom: "stripe", bg: "rgba(99, 91, 255, 0.18)" },
};

const stack = {
  Languages: ["HTML", "CSS", "JavaScript", "Python"],
  Backend: ["Node.js", "Express", "Django"],
  Frontend: ["React", "Redux", "Next.js", "Tailwind"],
  Database: ["MongoDB", "PostgreSQL", "MySQL"],
  DevOps: ["Docker", "AWS", "Linux", "Nginx", "GitHub Actions"],
  AI: ["LangChain", "FAISS"],
};

const socials = [
  {
    label: "Email",
    href: "mailto:syedhaseebnaqvi51214@gmail.com",
    customIcon: "email",
  },
  {
    label: "GitHub",
    href: "https://github.com/theH4Sh",
    icon: "devicon-github-original",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/theh4sh/",
    icon: "devicon-linkedin-plain colored",
  },
  // {
  //   label: "Résumé",
  //   href: "https://willputlater.lol",
  //   customIcon: "file",
  // },
];

const projects = [
  {
    name: "Shopz",
    tagline: "E-commerce platform with Stripe payments, JWT auth, and admin dashboard.",
    imageFilename: "Shopz.png",
    altText: "Shopz - Fullstack E-commerce Platform interface preview showing product catalog and Stripe integration",
    tech: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
    live: "https://ecom-alpha-sepia.vercel.app/",
    repo: "https://github.com/theH4Sh/ECOM",
  },
  {
    name: "AI Legal Advisor",
    tagline: "RAG pipeline over legal documents with LangChain, FAISS vector search, and a Django API.",
    imageFilename: "ai_legal_advisor.png",
    altText: "AI Legal Advisor - RAG document search pipeline and vector database web interface preview",
    tech: ["Python", "Django", "React", "LangChain", "FAISS", "PostgreSQL", "Docker", "AWS"],
    live: "https://legal-advisor.duckdns.org/",
    repo: "https://github.com/theH4Sh/AI-Legal_Advisor",
  },
  {
    name: "InstaReach",
    tagline: "Instagram outreach automation with Playwright, live dashboard, and socket updates.",
    imageFilename: "Insta-Reach.png",
    altText: "InstaReach - Instagram automated outreach system with real-time analytics dashboard preview",
    tech: ["React", "Node.js", "MongoDB", "Playwright", "Socket.io", "Docker", "Nginx", "AWS"],
    live: "https://instareach.duckdns.org/",
    repo: "https://github.com/theH4Sh/Outreach_Automation_System",
  },
];

const navLinks = [
  ["#about", "About"],
  ["#stack", "Tech stack"],
  ["#work", "Work"],
];

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function FileTextIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function SocialLink({ href, label, icon, customIcon }) {
  const isMail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      className="social-link"
      title={isMail ? "syedhaseebnaqvi51214@gmail.com" : undefined}
    >
      {customIcon === "email" ? (
        <MailIcon />
      ) : customIcon === "file" ? (
        <FileTextIcon />
      ) : icon ? (
        <i className={`${icon} social-link-icon`} aria-hidden />
      ) : null}
      {label}
    </a>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectLinks({ live, repo, className = "" }) {
  return (
    <div className={`project-actions ${className}`.trim()}>
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
      >
        <ExternalLinkIcon />
        Live demo
      </a>
      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
      >
        <i className="devicon-github-original tech-icon" />
        Source
      </a>
    </div>
  );
}

function StackCustomIcon({ type, size = 24 }) {
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true };

  if (type === "langchain") {
    return (
      <img
        src="/images/langchain-avatar.png"
        alt=""
        width={size}
        height={size}
        aria-hidden="true"
        style={{ borderRadius: "4px", objectFit: "contain" }}
      />
    );
  }

  if (type === "python") {
    return (
      <img
        src="/python.svg"
        alt=""
        width={size}
        height={size}
        aria-hidden="true"
        style={{ objectFit: "contain" }}
      />
    );
  }

  if (type === "linux") {
    return (
      <img
        src="/linux.svg"
        alt=""
        width={size}
        height={size}
        aria-hidden="true"
        style={{ objectFit: "contain" }}
      />
    );
  }

  if (type === "faiss") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {/* Official Meta / FAISS Vector Similarity Search Graph Icon */}
        <rect x="3" y="3" width="18" height="18" rx="3" fill="#1877F2" fillOpacity="0.15" stroke="#1877F2" strokeWidth="1.5" />
        <path d="M7.5 7.5L16.5 16.5M7.5 7.5L16.5 7.5M7.5 7.5L7.5 16.5M16.5 7.5L16.5 16.5" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.6" strokeDasharray="2 2" />
        <circle cx="7.5" cy="7.5" r="2.2" fill="#1877F2" />
        <circle cx="16.5" cy="7.5" r="1.8" fill="#38BDF8" />
        <circle cx="7.5" cy="16.5" r="1.8" fill="#38BDF8" />
        <circle cx="16.5" cy="16.5" r="2.2" fill="#60A5FA" />
        <circle cx="12" cy="12" r="2.5" fill="#00C6FF" />
        <circle cx="12" cy="12" r="1" fill="#FFFFFF" />
      </svg>
    );
  }

  if (type === "stripe") {
    return (
      <svg {...props}>
        <path
          d="M12 5.5c-2.8 0-4.5 1.4-4.5 3.4 0 1.5 1.1 2.3 3 2.9 1.4.5 1.8.8 1.8 1.4 0 .8-.7 1.3-1.9 1.3-1.2 0-2.1-.4-2.7-1.1l-1.5 1.8c.9 1 2.2 1.5 4.2 1.5 2.9 0 4.7-1.4 4.7-3.6 0-1.5-1-2.4-3.1-3-1.4-.4-1.8-.8-1.8-1.4 0-.7.7-1.2 1.8-1.2 1 0 1.8.3 2.4.9l1.4-1.7c-.8-.9-2-1.3-3.6-1.3z"
          fill="#b8b2ff"
        />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <ellipse cx="12" cy="7" rx="7" ry="2.5" stroke="#a78bfa" strokeWidth="1.75" />
      <ellipse cx="12" cy="12" rx="7" ry="2.5" stroke="#a78bfa" strokeWidth="1.75" />
      <ellipse cx="12" cy="17" rx="7" ry="2.5" stroke="#a78bfa" strokeWidth="1.75" />
      <path d="M5 7v10M19 7v10" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
    </svg>
  );
}

function TechBadgeIcon({ name, size = 24 }) {
  const meta = techCatalog[name];
  if (!meta) return null;

  if (meta.custom) {
    return <StackCustomIcon type={meta.custom} size={size} />;
  }

  return (
    <i
      className={meta.icon}
      style={{ fontSize: size }}
    />
  );
}

function ProjectTechBadge({ name }) {
  const meta = techCatalog[name];

  if (!meta) {
    return <span className="project-tech-fallback">{name}</span>;
  }

  return (
    <span className="project-tech-badge" title={name}>
      <span className="project-tech-icon" style={{ background: meta.bg }}>
        <TechBadgeIcon name={name} size={18} />
      </span>
      <span className="project-tech-label">{name}</span>
    </span>
  );
}

function TechChips({ tech }) {
  return (
    <div className="project-tech-row">
      {tech.map((t) => (
        <ProjectTechBadge key={t} name={t} />
      ))}
    </div>
  );
}

function TechStackItem({ name }) {
  const meta = techCatalog[name];
  if (!meta) return null;

  return (
    <span className={`stack-item${meta.wide ? " stack-item-wide" : ""}`}>
      <TechBadgeIcon name={name} size={meta.wide ? 22 : 26} />
      <span className="stack-item-label">{name}</span>
    </span>
  );
}

function resolveImage(filename) {
  const imgPath = path.join(process.cwd(), "public", "images", filename);
  return fs.existsSync(imgPath) ? `/images/${filename}` : null;
}

export default function Home() {
  const avatarSrc = resolveImage("my_img.jpg") ?? "/images/default-avatar.svg";

  const resolvedProjects = projects.map((p) => ({
    ...p,
    imageSrc: resolveImage(p.imageFilename) ?? "/images/default-project.svg",
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Haseeb Shah",
    url: "https://haseebshah.dev",
    jobTitle: "Backend & Fullstack Developer",
    sameAs: [
      "https://github.com/theH4Sh",
      "https://www.linkedin.com/in/theh4sh/",
    ],
    knowsAbout: [
      "Node.js",
      "Express",
      "Django",
      "Python",
      "JavaScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "LangChain",
    ],
    email: "syedhaseebnaqvi51214@gmail.com",
  };

  return (
    <div className="min-h-screen page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BottomDock />

      <div className="page-container mx-auto max-w-[1080px] px-5 sm:px-10 py-8 sm:py-16 lg:px-16 lg:py-20">
        <div className="md:grid md:grid-cols-[180px_minmax(0,1fr)] md:gap-x-12 lg:gap-x-20 xl:gap-x-28">
          <aside className="hidden md:block md:sticky md:top-16 md:self-start" aria-label="Sidebar navigation">
            <nav className="flex flex-col gap-3 text-[14px]" aria-label="Desktop main menu">
              {navLinks.map(([href, label]) => (
                <a key={href} href={href} className="nav-item">
                  {label}
                </a>
              ))}
            </nav>

            <ul className="mt-8 space-y-2.5" aria-label="Social links">
              {socials.map((s) => (
                <li key={s.label}>
                  <SocialLink {...s} />
                </li>
              ))}
            </ul>
          </aside>

          <main className="min-w-0">
            <section id="about" className="section-block">
              <div className="hero-block">
                <div className="hero-photo">
                  <Image
                    src={avatarSrc}
                    alt="Haseeb Shah — Backend & Fullstack Developer Profile Picture"
                    width={136}
                    height={170}
                    sizes="(max-width: 639px) 108px, (max-width: 767px) 120px, 136px"
                    className="object-cover w-full h-full grayscale-[10%] contrast-[1.05]"
                    priority
                  />
                </div>
                <div className="hero-text pb-0.5 min-w-0">
                  <h1 className="font-serif hero-name text-[var(--foreground)]">
                    Haseeb
                    <br />
                    Shah
                  </h1>
                  <p className="mt-2 sm:mt-4 text-[14px] sm:text-[15px] text-[var(--secondary)] leading-snug">
                    Fullstack Developer
                  </p>
                </div>
              </div>

              <p className="mt-7 sm:mt-9 lg:mt-10 max-w-[560px] text-[16px] sm:text-[17px] leading-[1.75] text-[var(--body)]">
                I build web applications end to end — APIs, databases, frontends,
                deployment. I'm mostly focused on the backend development
                and especially drawn to parts that sit behind the
                scenes such as automation, scalability and infrastructure.
              </p>

              <ul className="mobile-socials md:hidden" aria-label="Mobile social contact links">
                {socials.map((s) => (
                  <li key={s.label}>
                    <SocialLink {...s} />
                  </li>
                ))}
              </ul>
            </section>

            <section id="stack" className="section-block">
              <h2 className="section-title mb-6 sm:mb-8">Tech stack</h2>

              <div className="stack-categories">
                {Object.entries(stack).map(([category, items]) => (
                  <div key={category} className="stack-category">
                    <h3 className="category-title">{category}</h3>
                    <div className="stack-row">
                      {items.map((name) => (
                        <TechStackItem key={name} name={name} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="work" className="section-block">
              <h2 className="section-title mb-6 sm:mb-8">Work</h2>

              <div>
                {[...resolvedProjects].reverse().map((p, i) => (
                  <article
                    key={p.name}
                    className={`project-row group ${i > 0 ? "divide-line pt-8 sm:pt-10" : ""} ${i < resolvedProjects.length - 1 ? "pb-8 sm:pb-10" : ""}`}
                  >
                    <div className="project-media mb-4 sm:mb-5 aspect-[16/9] rounded-lg sm:rounded-none overflow-hidden">
                      <Image
                        src={p.imageSrc}
                        alt={p.altText}
                        width={720}
                        height={405}
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 600px, 720px"
                        className="w-full h-full object-cover object-top"
                        priority={i === 0}
                        loading={i === 0 ? undefined : "lazy"}
                      />
                      <div className="project-overlay">
                        <span className="project-overlay-title">{p.name}</span>
                        <ProjectLinks live={p.live} repo={p.repo} />
                      </div>
                    </div>

                    <div className="project-body">
                      <div className="min-w-0 flex-1">
                        <h3 className="project-title text-[17px] sm:text-[18px] font-medium tracking-[-0.01em] text-[var(--foreground)]">
                          {p.name}
                        </h3>
                        <p className="mt-2 text-[15px] text-[var(--body)] leading-relaxed">
                          {p.tagline}
                        </p>
                        <div className="mt-4">
                          <TechChips tech={p.tech} />
                        </div>
                        <ProjectLinks live={p.live} repo={p.repo} className="mt-4 sm:mt-5" />
                      </div>
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${p.name}`}
                        className="project-arrow hidden sm:flex shrink-0 mt-1"
                      >
                        <ExternalLinkIcon />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="contact" className="section-block divide-line pt-10 sm:pt-12">
              <h2 className="section-title mb-4 sm:mb-6">Get in touch</h2>
              <p className="max-w-[560px] text-[16px] sm:text-[17px] leading-[1.75] text-[var(--body)]">
                I would be glad to further discuss my experience with you — just shoot me an email or DM me on LinkedIn.
              </p>

              <div className="contact-cta-row mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-[560px]">
                <a
                  href="mailto:syedhaseebnaqvi51214@gmail.com"
                  className="contact-cta-btn primary-cta"
                >
                  <MailIcon />
                  Send an Email
                </a>
                <a
                  href="https://www.linkedin.com/in/theh4sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-cta-btn secondary-cta"
                >
                  <i className="devicon-linkedin-plain colored text-[18px]" aria-hidden="true" />
                  DM on LinkedIn
                </a>
              </div>
            </section>

            <footer className="site-footer divide-line pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 text-[13px] text-[var(--secondary)]">
              <p>© {new Date().getFullYear()} Haseeb Shah</p>
              <a
                href="mailto:syedhaseebnaqvi51214@gmail.com"
                className="hover:text-[var(--foreground)] transition-colors inline-flex items-center gap-1.5"
              >
                <MailIcon />
                syedhaseebnaqvi51214@gmail.com
              </a>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
