import { useEffect } from "react";
import portrait from "./assets/portrait.svg";

type Project = {
  title: string;
  type: string;
  summary: string;
  impact: string;
  tags: string[];
  links?: {
    label: string;
    href: string;
    icon: string;
  }[];
};

type ProjectGroup = {
  title: string;
  description: string;
  projects: Project[];
};

type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

type SiteContent = {
  nav: {
    projects: string;
    skills: string;
    experience: string;
    contact: string;
  };
  profile: {
    role: string;
    location: string;
  };
  hero: {
    copy: string;
    viewWork: string;
    resume: string;
    portraitAlt: string;
    availability: string;
    focus: string;
  };
  profileSection: {
    eyebrow: string;
    title: string;
    nowrap: string;
  };
  strengths: string[];
  workSection: {
    eyebrow: string;
    title: string;
    copy: string;
  };
  projectGroups: ProjectGroup[];
  experienceSection: {
    eyebrow: string;
    title: string;
  };
  timeline: TimelineItem[];
  contactSection: {
    eyebrow: string;
    title: string;
    email: string;
  };
};

const profile = {
  name: "Kai-Hung (Bill) Wang",
  email: "billwang.tech@gmail.com",
  github: "https://github.com/BillSavart",
  linkedin: "https://www.linkedin.com/in/kai-hung-wang-4b25ba1a4/",
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
};

const content: SiteContent = {
  nav: {
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
  },
  profile: {
    role: "HCI / XR Researcher & Immersive Systems Developer",
    location: "Taipei, Taiwan",
  },
  hero: {
    copy:
      "Master Student in Graduate Institute of Networking and Multimedia, National Taiwan University. I build immersive systems across HCI, XR, embodied interaction, Gaussian Splatting, Gaussian Avatar, and sensor-integrated prototypes with Raspberry Pi and STM32.",
    viewWork: "View work",
    resume: "Resume",
    portraitAlt: "Minimal editorial portrait illustration",
    availability: "Open to research and engineering opportunities",
    focus: "HCI / XR / Immersive Systems",
  },
  profileSection: {
    eyebrow: "Profile",
    title: "Building immersive systems from research",
    nowrap: "to prototype",
  },
  strengths: [
    "Human-Computer Interaction and embodied interaction research",
    "VR / AR / MR / XR application prototyping and development",
    "Gaussian Avatar, 3D / 4D Gaussian Splatting, and AI-generated immersive environments",
    "Embedded interaction prototyping with Raspberry Pi and STM32",
    "Bilingual communication in Mandarin and English with TOEIC 960",
  ],
  workSection: {
    eyebrow: "Selected Work",
    title: "Research projects and shipped engineering work",
    copy:
      "Selected work across embodied XR interaction, immersive media, product development, and cloud-native systems.",
  },
  projectGroups: [
    {
      title: "Research / XR",
      description: "Immersive interaction research, embodied systems, and prototype-driven exploration.",
      projects: [
        {
          title: "Smileoyed",
          type: "XR / Affective Interaction",
          summary:
            "Embodied virtual pet system for behavioral affective synchrony with multisensory and biofeedback interaction.",
          impact: "Selected for SIGGRAPH 2026 Immersive Pavilion as a collaborative XR research work.",
          tags: ["VR", "HCI", "Biofeedback", "Emotion Detection", "Unity", "Raspberry Pi"],
        },
        {
          title: "Co-located VR Avatar Animation",
          type: "VR / Embodied Character Control",
          summary:
            "Headset-based multi-user co-located VR synchronous full-body avatar animation via embodied character controller.",
          impact: "Explores natural multi-user presence and body representation in shared immersive environments.",
          tags: ["VR", "Avatar Animation", "Gaussian Avatar", "Unity", "Embodied Interaction"],
        },
        {
          title: "Oriental Beauty",
          type: "XR Theatre / Digital Humanities",
          summary:
            "XR theatre project connecting Taiwan literature, music, and immersive interaction for cultural storytelling.",
          impact: "Bridges technical prototyping with narrative experience design in a collaborative research setting.",
          tags: ["XR", "VR", "Unity", "4D Gaussian Splatting"],
        },
        {
          title: "Relaxing World",
          type: "AI-generated VR Environment",
          summary:
            "AI-generated VR relaxation environments using 3D Gaussian Splatting and real-time voice conversion.",
          impact:
            "Combines immersive scene reconstruction, generative media, and real-time interaction for relaxation experiences.",
          tags: ["3D Gaussian Splatting", "VR", "Voice Conversion"],
        },
      ],
    },
    {
      title: "Product & Systems",
      description: "Independent engineering projects that turn domain problems into shipped, usable systems.",
      projects: [
        {
          title: "Bank Interview Advisor",
          type: "Side Project / Exam Prep Platform",
          summary:
            "Self-hosted preparation platform for public-bank exams with interview question filtering, an exam calendar, written-score threshold maps, answer guidance, ratings, comments, and experience posts.",
          impact:
            "Turns front-line banking experience into a public utility, deployed as a lightweight full-stack app on a small VM.",
          tags: ["React", "TypeScript", "Node API", "Caddy", "Cloudflare", "GCP"],
          links: [
            {
              label: "Live Site",
              href: "https://bank-interview-advisor.com",
              icon: "bi-box-arrow-up-right",
            },
          ],
        },
        {
          title: "Distributed Physical Access Control System",
          type: "Course Project / Cloud Native Systems",
          summary:
            "Distributed physical access-control system designed for 90,000 employees, balancing millisecond-level door decisions with read-heavy attendance and audit reporting.",
          impact:
            "Built write-heavy and read-heavy service paths with Redis anti-passback checks, Kafka event streaming, FastAPI reporting, PostgreSQL storage, Docker Compose deployment, and Grafana observability.",
          tags: ["Go", "Redis", "Kafka", "FastAPI", "PostgreSQL", "Docker Compose", "Grafana"],
          links: [
            {
              label: "GitHub",
              href: "https://github.com/BillSavart/NTU_CloudNative",
              icon: "bi-github",
            },
          ],
        },
      ],
    },
  ],
  experienceSection: {
    eyebrow: "Experience",
    title: "Education and research experience",
  },
  timeline: [
    {
      period: "Sep 2025 - Present",
      title: "M.S., Image and Vision Lab, National Taiwan University",
      description:
        "Graduate Institute of Networking and Multimedia. Advised by Prof. Yi-Ping Hung, focusing on HCI, VR / AR / MR / XR application development, and Gaussian Avatar research.",
    },
    {
      period: "Sep 2016 - Jun 2020",
      title: "B.S., National Cheng Kung University",
      description:
        "Computer Science and Information Engineering. Undergraduate research on an intelligent firefighting command system based on image processing and inertial navigation.",
    },
    {
      period: "Feb 2022 - Aug 2024",
      title: "Bank Teller, Taiwan Cooperative Bank",
      description:
        "Handled front-line financial service operations, building professional communication habits, accuracy under pressure, and client-facing responsibility.",
    },
  ],
  contactSection: {
    eyebrow: "Contact",
    title: "Available for R&D and SWE roles.",
    email: "Email",
  },
};

function App() {
  const copy = content;

  useEffect(() => {
    const nav = document.querySelector(".site-nav");
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const updateNav = () => {
      nav?.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    revealItems.forEach((item, index) => {
      const delayStep = item.classList.contains("quick-reveal") ? 25 : 45;
      const delayCap = item.classList.contains("quick-reveal") ? 100 : 180;
      item.style.setProperty("--reveal-delay", `${Math.min(index * delayStep, delayCap)}ms`);
      observer.observe(item);
    });

    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateNav);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top site-nav">
        <div className="container">
          <a className="navbar-brand" href="#top" aria-label="Back to top">
            BW
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              <a className="nav-link" href="#projects">
                {copy.nav.projects}
              </a>
              <a className="nav-link" href="#skills">
                {copy.nav.skills}
              </a>
              <a className="nav-link" href="#experience">
                {copy.nav.experience}
              </a>
              <a
                className="btn btn-sm btn-outline-dark nav-cta"
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-file-earmark-text" aria-hidden="true" />
                {copy.hero.resume}
              </a>
              <a className="btn btn-sm btn-outline-dark nav-cta" href="#contact">
                <i className="bi bi-send" aria-hidden="true" />
                {copy.nav.contact}
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main id="top">
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-7 hero-copy-block">
                <p className="eyebrow mb-3">{copy.profile.location}</p>
                <h1 className="hero-title">
                  <span className="hero-name">{profile.name}</span>
                  <span className="hero-role">{copy.profile.role}</span>
                </h1>
                <p className="hero-copy">{copy.hero.copy}</p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <a className="btn btn-dark btn-lg icon-btn" href="#projects">
                    <i className="bi bi-grid-1x2" aria-hidden="true" />
                    {copy.hero.viewWork}
                  </a>
                  <a
                    className="btn btn-outline-dark btn-lg icon-btn"
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-file-earmark-text" aria-hidden="true" />
                    {copy.hero.resume}
                  </a>
                </div>
              </div>
              <div className="col-lg-5 hero-visual-block">
                <div className="portrait-panel">
                  <img src={portrait} alt={copy.hero.portraitAlt} />
                  <div className="availability">
                    <span>{copy.hero.availability}</span>
                    <strong>{copy.hero.focus}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-band" id="skills">
          <div className="container">
            <div className="section-heading profile-heading">
              <p className="eyebrow">{copy.profileSection.eyebrow}</p>
              <h2 className="profile-heading-title">
                {copy.profileSection.title}{" "}
                <span className="text-nowrap">{copy.profileSection.nowrap}</span>
              </h2>
            </div>
            <div className="strength-grid">
              {copy.strengths.map((item) => (
                <div className="strength-item" key={item} data-reveal>
                  <div className="strength-card">
                    <i className="bi bi-check2-circle" aria-hidden="true" />
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band soft" id="projects">
          <div className="container">
            <div className="section-heading wide">
              <p className="eyebrow">{copy.workSection.eyebrow}</p>
              <h2>{copy.workSection.title}</h2>
              <p className="selected-work-copy">{copy.workSection.copy}</p>
            </div>
            <div className="project-groups">
              {copy.projectGroups.map((group) => (
                <section className="project-group" key={group.title}>
                  <div className="project-group-heading">
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                  <div className="project-list">
                    {group.projects.map((project, index) => (
                      <article className="project-card quick-reveal" key={project.title} data-reveal>
                        <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
                        <div>
                          <p className="project-type">{project.type}</p>
                          <h3>{project.title}</h3>
                          <p>{project.summary}</p>
                          <p className="impact">{project.impact}</p>
                          <div className="tag-row">
                            {project.tags.map((tag) => (
                              <span key={tag}>{tag}</span>
                            ))}
                          </div>
                          {project.links && (
                            <div className="project-actions">
                              {project.links.map((link) => (
                                <a
                                  className="project-link"
                                  href={link.href}
                                  key={link.href}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className={`bi ${link.icon}`} aria-hidden="true" />
                                  {link.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band" id="experience">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4">
                <div className="section-heading">
                  <p className="eyebrow">{copy.experienceSection.eyebrow}</p>
                  <h2>{copy.experienceSection.title}</h2>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="timeline">
                  {copy.timeline.map((item) => (
                    <div className="timeline-item quick-reveal" key={item.title} data-reveal>
                      <time>{item.period}</time>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <div className="contact-inner">
              <p className="eyebrow">{copy.contactSection.eyebrow}</p>
              <h2 className="contact-title">{copy.contactSection.title}</h2>
              <div className="contact-actions">
                <a className="btn btn-light btn-lg icon-btn" href={`mailto:${profile.email}`}>
                  <i className="bi bi-envelope" aria-hidden="true" />
                  {copy.contactSection.email}
                </a>
                <a className="btn btn-outline-light btn-lg icon-btn" href={profile.github}>
                  <i className="bi bi-github" aria-hidden="true" />
                  GitHub
                </a>
                <a className="btn btn-outline-light btn-lg icon-btn" href={profile.linkedin}>
                  <i className="bi bi-linkedin" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
