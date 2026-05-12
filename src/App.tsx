import portrait from "./assets/portrait.svg";

type Project = {
  title: string;
  type: string;
  summary: string;
  impact: string;
  tags: string[];
  links: { label: string; href: string; icon: string }[];
};

type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

const profile = {
  name: "Bill Wang",
  role: "Frontend / Full-stack Developer",
  location: "Taipei, Taiwan",
  email: "hello@example.com",
  github: "https://github.com/BillSavart",
  linkedin: "https://www.linkedin.com/",
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
};

const strengths = [
  "React + TypeScript 產品介面開發",
  "API 串接、資料流程與系統整合",
  "從需求拆解到可展示 Demo 的執行力",
  "重視使用者體驗、可維護性與交付品質",
];

const projects: Project[] = [
  {
    title: "Cloud Native Access Control",
    type: "Backend / Data Pipeline",
    summary:
      "設計門禁事件從 API、Kafka 到 PostgreSQL 報表資料庫的完整流程，並加入 Redis 離線緩衝與恢復機制。",
    impact: "強化系統在服務中斷時的資料完整性，讓 demo 可以用一鍵腳本穩定重現。",
    tags: ["Go", "Kafka", "Redis", "PostgreSQL", "Docker"],
    links: [
      { label: "GitHub", href: profile.github, icon: "bi-github" },
      { label: "Case", href: "#contact", icon: "bi-arrow-up-right" },
    ],
  },
  {
    title: "HMD Tracking Model Workflow",
    type: "ML / Unity Integration",
    summary:
      "整理姿態追蹤模型的重新訓練與 ONNX 替換流程，確認 Unity runtime 的 tensor contract 與資產引用方式。",
    impact: "降低模型替換造成 runtime 破壞的風險，讓研究實驗能安全進入互動專案。",
    tags: ["PyTorch", "ONNX", "Unity", "Sentis"],
    links: [
      { label: "GitHub", href: profile.github, icon: "bi-github" },
      { label: "Notes", href: "#experience", icon: "bi-journal-text" },
    ],
  },
  {
    title: "Raspberry Pi Motor Control",
    type: "Hardware / TCP Control",
    summary:
      "為 Unity 與 Raspberry Pi 的 TCP 控制流程補上連線穩定性、訊息解析與硬體驅動切換方案。",
    impact: "保留既有硬體路徑，同時新增可平行測試的新驅動版本，讓實驗現場更容易回復。",
    tags: ["Python", "Raspberry Pi", "TCP", "Unity"],
    links: [
      { label: "GitHub", href: profile.github, icon: "bi-github" },
      { label: "Demo", href: "#projects", icon: "bi-play-circle" },
    ],
  },
];

const timeline: TimelineItem[] = [
  {
    period: "Now",
    title: "Building Practical Software Projects",
    description:
      "把課程、研究與個人專案整理成可展示、可部署、可說明的作品集，聚焦在工程判斷與完整交付。",
  },
  {
    period: "2025 - 2026",
    title: "System Integration & Web Development",
    description:
      "累積 React、TypeScript、後端 API、資料庫、容器化與硬體串接經驗，習慣以 demo 驗證設計。",
  },
  {
    period: "Before",
    title: "Design-minded Engineering",
    description:
      "喜歡乾淨、安靜但有細節的介面，也重視程式碼在不同環境下能被理解、維護與接手。",
  },
];

function App() {
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
              <div className="col-lg-7">
                <p className="eyebrow mb-3">{profile.location}</p>
                <h1 className="hero-title">
                  {profile.name}
                  <span>{profile.role}</span>
                </h1>
                <p className="hero-copy">
                  我把想法整理成清楚、穩定、可以被展示的產品雛形。偏好簡潔的介面、
                  扎實的工程流程，以及能讓團隊放心接手的實作細節。
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
              <div className="col-lg-5">
                <div className="portrait-panel">
                  <img src={portrait} alt="Minimal editorial portrait illustration" />
                  <div className="availability">
                    <span>Open to internships and junior roles</span>
                    <strong>Frontend / Full-stack</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-band" id="skills">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Profile</p>
              <h2>安靜但有力的工程感</h2>
            </div>
            <div className="row g-4">
              {strengths.map((item) => (
                <div className="col-md-6 col-xl-3" key={item}>
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
              <h2>能被面試官快速理解的作品</h2>
              <p>
                每個專案都保留問題、策略、技術選擇與成果，方便在履歷或面試中延伸說明。
              </p>
            </div>
            <div className="project-list">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
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
                  <div className="project-actions">
                    {project.links.map((link) => (
                      <a className="btn btn-outline-dark icon-only" href={link.href} key={link.label}>
                        <i className={`bi ${link.icon}`} aria-hidden="true" />
                        <span className="visually-hidden">{link.label}</span>
                      </a>
                    ))}
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
                <div className="section-heading sticky-heading">
                  <p className="eyebrow">Experience</p>
                  <h2>從作品看見成長脈絡</h2>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="timeline">
                  {timeline.map((item) => (
                    <div className="timeline-item" key={item.title}>
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
              <h2>Let us build something quietly excellent.</h2>
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
