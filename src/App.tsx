import { useEffect } from "react";
import portrait from "./assets/portrait.svg";

type Project = {
  title: string;
  type: string;
  summary: string;
  impact: string;
  tags: string[];
};

type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

const profile = {
  name: "Kai-Hung (Bill) Wang",
  role: "HCI / XR Researcher & Creative Technologist",
  location: "Taipei, Taiwan",
  email: "billwang.tech@gmail.com",
  github: "https://github.com/BillSavart",
  linkedin: "https://www.linkedin.com/in/kai-hung-wang-4b25ba1a4/",
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
};

const strengths = [
  "Human-Computer Interaction and embodied interaction research",
  "VR / AR / MR / XR application prototyping and development",
  "3D / 4D Gaussian Splatting and AI-generated immersive environments",
  "Bilingual communication in Mandarin and English with TOEIC 960",
];

const projects: Project[] = [
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
    tags: ["VR", "Avatar Animation", "Unity", "Embodied Interaction", "Machine Learning"],
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
    impact: "Combines immersive scene reconstruction, generative media, and real-time interaction for relaxation experiences.",
    tags: ["3D Gaussian Splatting", "VR", "Voice Conversion"],
  },
];

const timeline: TimelineItem[] = [
  {
    period: "Sep 2025 - Present",
    title: "M.S., National Taiwan University",
    description:
      "Graduate Institute of Networking and Multimedia. Advised by Prof. Yi-Ping Hung, focusing on HCI and VR / AR / MR / XR application development.",
  },
  {
    period: "Mar 2025 - Present",
    title: "Graduate Research Assistant, Image and Vision Lab",
    description:
      "Researching embodied XR interaction, co-located VR avatar animation, XR theatre, affective virtual pets, and AI-generated VR environments.",
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
];

function App() {
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
                Projects
              </a>
              <a className="nav-link" href="#skills">
                Skills
              </a>
              <a className="nav-link" href="#experience">
                Experience
              </a>
              <a className="btn btn-sm btn-outline-dark nav-cta" href="#contact">
                <i className="bi bi-send" aria-hidden="true" />
                Contact
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
                <p className="eyebrow mb-3">{profile.location}</p>
                <h1 className="hero-title">
                  <span className="hero-name">{profile.name}</span>
                  <span className="hero-role">{profile.role}</span>
                </h1>
                <p className="hero-copy">
                  Master Student in Graduate Institute of Networking and Multimedia, National Taiwan University.
                  I build immersive systems across HCI, XR, embodied interaction,
                  Gaussian Splatting, and Raspberry Pi based physical computing.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <a className="btn btn-dark btn-lg icon-btn" href="#projects">
                    <i className="bi bi-grid-1x2" aria-hidden="true" />
                    View work
                  </a>
                  <a
                    className="btn btn-outline-dark btn-lg icon-btn"
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-file-earmark-text" aria-hidden="true" />
                    Resume
                  </a>
                </div>
              </div>
              <div className="col-lg-5 hero-visual-block">
                <div className="portrait-panel">
                  <img src={portrait} alt="Minimal editorial portrait illustration" />
                  <div className="availability">
                    <span>Open to research and engineering opportunities</span>
                    <strong>HCI / XR / Creative Technology</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-band" id="skills">
          <div className="container">
            <div className="section-heading profile-heading">
              <p className="eyebrow">Profile</p>
              <h2 className="profile-heading-title">
                Building immersive systems from research{" "}
                <span className="text-nowrap">to prototype</span>
              </h2>
            </div>
            <div className="row g-4">
              {strengths.map((item) => (
                <div className="col-md-6 col-xl-3" key={item} data-reveal>
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
              <p className="eyebrow">Selected Work</p>
              <h2>Research-driven projects with working prototypes</h2>
              <p className="selected-work-copy">
                Selected work across embodied XR interaction, immersive media,
                and real-time system integration.
              </p>
            </div>
            <div className="project-list">
              {projects.map((project, index) => (
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
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band" id="experience">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4">
                <div className="section-heading">
                  <p className="eyebrow">Experience</p>
                  <h2>Education and research experience</h2>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="timeline">
                  {timeline.map((item) => (
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
              <p className="eyebrow">Contact</p>
              <h2 className="contact-title">Available for R&D and SWE roles.</h2>
              <div className="contact-actions">
                <a className="btn btn-light btn-lg icon-btn" href={`mailto:${profile.email}`}>
                  <i className="bi bi-envelope" aria-hidden="true" />
                  Email
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
