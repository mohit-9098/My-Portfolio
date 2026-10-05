import { useEffect, useRef, useState } from "react";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  details: string[];
  visual: "alumni" | "voting" | "weather";
};

const email = "mohit.pathode0@gmail.com";
const phone = "+91-9894321032";
const heroPhoto =
  "https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const heroPhotoLarge =
  "https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1600&w=2400";

const projects: Project[] = [
  {
    number: "01",
    title: "Alumni Networking Portal",
    category: "Full-stack web application",
    description:
      "A space for students and alumni to connect, communicate, and build meaningful mentorship relationships.",
    technologies: ["React.js", "MySQL", "REST API"],
    details: [
      "Developed a full-stack networking platform connecting students and alumni through mentorship and communication.",
      "Implemented role-based access control (RBAC) with secure authentication and database integration.",
    ],
    visual: "alumni",
  },
  {
    number: "02",
    title: "Classroom Voting System",
    category: "Interactive web application",
    description:
      "A real-time polling experience that makes it easier for teachers and students to participate in the classroom.",
    technologies: ["React.js", "Tailwind CSS"],
    details: [
      "Created a real-time polling application with dedicated authentication workflows for teachers and students.",
      "Implemented live voting, reusable React components, and a mobile-first interface using Tailwind CSS.",
    ],
    visual: "voting",
  },
  {
    number: "03",
    title: "Weather Forecast App",
    category: "API-powered application",
    description:
      "A clear, responsive way to check the weather, with live conditions and thoughtful handling of every search.",
    technologies: ["JavaScript", "OpenWeatherMap API", "CSS3"],
    details: [
      "Built a responsive weather application using real-time data from the OpenWeatherMap REST API.",
      "Implemented dynamic weather displays, user input validation, and error handling for API failures.",
    ],
    visual: "weather",
  },
];

function ArrowUpRight({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 19 19 5M7 5h12v12" />
    </svg>
  );
}

function ArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12h16m-7-7 7 7-7 7" />
    </svg>
  );
}

function ProjectVisual({ visual }: { visual: Project["visual"] }) {
  if (visual === "alumni") {
    return (
      <div className="project-visual visual-alumni" aria-hidden="true">
        <div className="alumni-browser visual-inner">
          <div className="alumni-nav">
            <span className="alumni-logo">alumni<span>.</span></span>
            <div className="alumni-nav-links"><span>Community</span><span>Mentorship</span><span>Sign in</span></div>
          </div>
          <div className="alumni-content">
            <div className="alumni-message">
              <span className="preview-overline">A NETWORK FOR WHAT'S NEXT</span>
              <strong>Find your people.<br />Find your path.</strong>
              <span className="alumni-button">Explore network <ArrowUpRight size={12} /></span>
            </div>
            <div className="alumni-orbit">
              <div className="orbit-ring orbit-ring-one" />
              <div className="orbit-ring orbit-ring-two" />
              <span className="orbit-person orbit-person-one">M</span>
              <span className="orbit-person orbit-person-two">A</span>
              <span className="orbit-person orbit-person-three">S</span>
              <span className="orbit-person orbit-person-four">R</span>
              <span className="orbit-center">+</span>
            </div>
          </div>
          <div className="alumni-footer"><span>CONNECT / GROW / GIVE BACK</span><span>EST. 2026</span></div>
        </div>
      </div>
    );
  }

  if (visual === "voting") {
    return (
      <div className="project-visual visual-voting" aria-hidden="true">
        <div className="voting-browser visual-inner">
          <div className="voting-sidebar">
            <span className="voting-logo">classroom<span>.</span></span>
            <div className="voting-side-links"><span>Overview</span><span>My polls</span><span>Students</span></div>
            <span className="voting-side-bottom">YOUR CLASSROOM</span>
          </div>
          <div className="voting-content">
            <div className="voting-topline"><span>Poll overview</span><span className="live-indicator"><i /> LIVE</span></div>
            <span className="preview-overline">QUESTION 01 / 03</span>
            <strong>What should we<br />explore next?</strong>
            <div className="poll-option"><div><span>Web development</span><span>62%</span></div><i><b style={{ width: "62%" }} /></i></div>
            <div className="poll-option"><div><span>UI / UX design</span><span>28%</span></div><i><b style={{ width: "28%" }} /></i></div>
            <div className="poll-option"><div><span>Data basics</span><span>10%</span></div><i><b style={{ width: "10%" }} /></i></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual visual-weather" aria-hidden="true">
      <div className="weather-sun" />
      <div className="weather-interface visual-inner">
        <div className="weather-nav"><strong>weather<span>.</span></strong><span>FORECAST / TODAY</span></div>
        <div className="weather-main">
          <span className="preview-overline">A LITTLE LOOK OUTSIDE</span>
          <div className="weather-reading">24<sup>&deg;</sup></div>
          <div className="weather-condition"><strong>Clear skies</strong><span>Today in your city</span></div>
        </div>
        <div className="weather-footer"><span>HUMIDITY <b>48%</b></span><span>WIND <b>10 KM/H</b></span><span>FEELS LIKE <b>26&deg;</b></span></div>
      </div>
    </div>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 760) setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -35px 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedProject) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    } else {
      if (dialog.open) dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <>
      <header className={`site-header ${isScrolled || menuOpen ? "is-solid" : ""}`}>
        <div className="header-inner container">
          <a className="wordmark" href="#home" onClick={() => setMenuOpen(false)} aria-label="Mohit Pathode, back to top">
            mohit<span>pathode</span><i>.</i>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a className="nav-contact" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
          </nav>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span />
          </button>
        </div>
        <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work <ArrowUpRight size={22} /></a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About <ArrowUpRight size={22} /></a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience <ArrowUpRight size={22} /></a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact <ArrowUpRight size={22} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <img className="hero-image" src={heroPhoto} srcSet={`${heroPhoto} 1200w, ${heroPhotoLarge} 2400w`} sizes="100vw" alt="A warmly lit development workspace with code on computer screens" fetchPriority="high" />
          <div className="hero-shade" />
          <div className="hero-content container">
            <p className="hero-eyebrow">FRONT-END DEVELOPER <span className="eyebrow-line" /> REACT / WORDPRESS</p>
            <h1 id="hero-title" className="hero-name"><span className="hero-name-line">Mohit</span><span className="hero-name-line hero-name-last">Pathode<i>.</i></span></h1>
            <p className="hero-description">Building thoughtful, responsive web experiences with React, JavaScript, and WordPress.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={18} /></a>
              <a className="hero-text-link" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="hero-bottom-line" aria-hidden="true" />
        </section>

        <section className="about-section section-pad" id="about" aria-labelledby="about-title">
          <div className="container editorial-grid">
            <div className="section-index" data-reveal><span>01 / ABOUT</span><span className="index-rule" /></div>
            <div className="about-content" data-reveal>
              <h2 id="about-title">Making the web<br /><em>feel effortless.</em></h2>
              <div className="about-lower">
                <p>I'm Mohit, a Computer Science &amp; Engineering graduate focused on building useful, user-friendly digital experiences. I work across React.js, JavaScript, HTML, CSS, Tailwind CSS, and WordPress to turn ideas into responsive websites that feel as good as they function.</p>
                <p>From connecting interfaces to REST APIs to refining the small interactions, I care about making every part of a website work for the people using it.</p>
              </div>
              <a className="inline-link" href="#experience">A little more about my journey <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="work-section section-pad" id="work" aria-labelledby="work-title">
          <div className="container">
            <div className="section-heading-row" data-reveal>
              <div className="section-index"><span>02 / SELECTED WORK</span><span className="index-rule" /></div>
              <div className="section-heading-content">
                <h2 id="work-title">Selected <br className="mobile-only-break" />work<span className="accent-dot">.</span></h2>
                <p>Practical ideas, built into working experiences.</p>
              </div>
            </div>

            <div className="projects-list">
              {projects.map((project, index) => (
                <article className={`project-row ${index === 1 ? "project-row-reverse" : ""}`} key={project.number} data-reveal>
                  <button className="project-visual-button" type="button" onClick={() => setSelectedProject(project)} aria-label={`Read about ${project.title}`}>
                    <ProjectVisual visual={project.visual} />
                  </button>
                  <div className="project-info">
                    <div className="project-kicker"><span>{project.number} / PROJECT</span><span>{project.category}</span></div>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <p className="project-technologies">{project.technologies.join(" / ")}</p>
                    <button className="inline-link project-link" type="button" onClick={() => setSelectedProject(project)}>Explore project <ArrowUpRight size={17} /></button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section section-pad" id="experience" aria-labelledby="experience-title">
          <div className="container editorial-grid">
            <div className="section-index section-index-light" data-reveal><span>03 / EXPERIENCE</span><span className="index-rule" /></div>
            <div className="experience-content">
              <div className="experience-intro" data-reveal>
                <h2 id="experience-title">The path<br /><em>so far.</em></h2>
                <p>Learning by building, from the first layout to the final launch.</p>
              </div>
              <div className="timeline">
                <article className="timeline-item" data-reveal>
                  <div className="timeline-date">MAY 2026 - AUG 2026</div>
                  <div className="timeline-body">
                    <span className="timeline-type">PROFESSIONAL EXPERIENCE</span>
                    <h3>WordPress Development Intern</h3>
                    <p className="timeline-place">Connect Shiksha</p>
                    <ul>
                      <li>Developed and customized responsive WordPress websites using Elementor for live projects.</li>
                      <li>Managed themes, plugins, website settings, and custom functionality.</li>
                      <li>Worked on website development, debugging, customization, and deployment.</li>
                    </ul>
                  </div>
                </article>
                <article className="timeline-item" data-reveal>
                  <div className="timeline-date">MAY 2025 - JUL 2025</div>
                  <div className="timeline-body">
                    <span className="timeline-type">PROFESSIONAL TRAINING</span>
                    <h3>Web Development Training</h3>
                    <p className="timeline-place">Internshala</p>
                    <p>Built responsive web applications using HTML5, CSS3, Tailwind CSS, JavaScript, and MySQL.</p>
                  </div>
                </article>
                <article className="timeline-item" data-reveal>
                  <div className="timeline-date">APR 2025 - MAY 2025</div>
                  <div className="timeline-body">
                    <span className="timeline-type">PROFESSIONAL TRAINING</span>
                    <h3>WordPress Developer Training</h3>
                    <p className="timeline-place">Seldom Kaolim</p>
                    <p>Designed and deployed 2+ responsive WordPress websites using Elementor and customized themes and plugins.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section section-pad" id="skills" aria-labelledby="skills-title">
          <div className="container editorial-grid">
            <div className="section-index" data-reveal><span>04 / TOOLKIT</span><span className="index-rule" /></div>
            <div className="skills-content">
              <div className="skills-intro" data-reveal>
                <h2 id="skills-title">The right tools.<br /><em>The right details.</em></h2>
                <p>A practical toolkit for building responsive, reliable websites.</p>
              </div>
              <div className="skills-grid">
                <div className="skill-group" data-reveal><span>01 / LANGUAGES &amp; CORE</span><p>JavaScript (ES6+)<br />HTML5<br />CSS3<br />SQL</p></div>
                <div className="skill-group" data-reveal><span>02 / FRAMEWORKS</span><p>React.js<br />Tailwind CSS</p></div>
                <div className="skill-group" data-reveal><span>03 / CMS &amp; TOOLS</span><p>WordPress CMS<br />Elementor<br />Git &amp; GitHub<br />REST APIs</p></div>
                <div className="skill-group" data-reveal><span>04 / HOW I WORK</span><p>Responsive Web Design<br />DOM Manipulation<br />Form Validation<br />Cross-Browser Compatibility</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="education-section section-pad" id="education" aria-labelledby="education-title">
          <div className="container editorial-grid">
            <div className="section-index" data-reveal><span>05 / FOUNDATION</span><span className="index-rule" /></div>
            <div className="education-content">
              <h2 id="education-title" data-reveal>Education &amp;<br /><em>credentials.</em></h2>
              <div className="education-list">
                <div className="education-item" data-reveal><div><h3>B.Tech in Computer Science &amp; Engineering</h3><p>Sardar Patel University, Balaghat</p></div><div className="education-meta"><span>2022 - 2026</span><span>CGPA 7.52 / 10</span></div></div>
                <div className="education-item" data-reveal><div><h3>Senior Secondary Certificate (12th)</h3><p>Madhya Pradesh State Board</p></div><div className="education-meta"><span>2022</span><span>Score 68%</span></div></div>
                <div className="education-item" data-reveal><div><h3>Secondary School Certificate (10th)</h3><p>Madhya Pradesh State Board</p></div><div className="education-meta"><span>2020</span><span>Score 83%</span></div></div>
              </div>
              <div className="certification" data-reveal>
                <span className="certification-label">CERTIFICATION</span>
                <div><h3>Web Development Fundamentals</h3><p>IBM SkillsBuild / Credential verification via Credly</p></div>
                <span className="certification-date">JUL 2026</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-inner">
            <div className="contact-top" data-reveal><span>06 / GET IN TOUCH</span><span>HAVE A PROJECT OR OPPORTUNITY?</span></div>
            <h2 id="contact-title" data-reveal>Let's make<br /><em>something good.</em></h2>
            <div className="contact-actions" data-reveal>
              <a className="contact-email" href={`mailto:${email}`}><span>{email}</span><ArrowUpRight size={28} /></a>
              <button className="copy-button" type="button" onClick={copyEmail} aria-live="polite">{copied ? "Copied to clipboard" : "Copy email"}</button>
            </div>
            <div className="contact-bottom" data-reveal>
              <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone} <ArrowUpRight size={15} /></a>
              <div><a href="https://github.com/mohit-9098" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a><a href="https://www.linkedin.com/in/mohit-pathode-56717252/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="#home" className="footer-name">Mohit Pathode<span>.</span></a>
          <p>Thoughtfully built for the web.</p>
          <div className="footer-right"><a href="#home">Back to top <ArrowUpRight size={14} /></a><span>Photo: <a href="https://www.pexels.com/photo/computer-with-code-4218883/" target="_blank" rel="noreferrer">Paras Katwal / Pexels</a></span></div>
        </div>
      </footer>

      <dialog
        ref={dialogRef}
        className="project-dialog"
        aria-labelledby="dialog-title"
        onCancel={(event) => { event.preventDefault(); setSelectedProject(null); }}
        onClick={(event) => { if (event.target === event.currentTarget) setSelectedProject(null); }}
      >
        {selectedProject && (
          <div className="dialog-content">
            <div className="dialog-top"><span>{selectedProject.number} / PROJECT OVERVIEW</span><button ref={closeRef} type="button" className="dialog-close" onClick={() => setSelectedProject(null)} aria-label="Close project details"><span /><span /></button></div>
            <p className="dialog-category">{selectedProject.category}</p>
            <h2 id="dialog-title">{selectedProject.title}</h2>
            <p className="dialog-lead">{selectedProject.description}</p>
            <div className="dialog-divider" />
            <span className="dialog-label">WHAT I BUILT</span>
            <ul>{selectedProject.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            <div className="dialog-stack"><span>TECHNOLOGIES</span><p>{selectedProject.technologies.join(" / ")}</p></div>
            <button className="dialog-bottom-link" type="button" onClick={() => setSelectedProject(null)}>Back to selected work <ArrowRight size={18} /></button>
          </div>
        )}
      </dialog>
    </>
  );
}