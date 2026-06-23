import { useEffect, useState } from "react";
import portrait from "./assets/portrait.svg";

type Language = "en" | "zh";

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
    languageLabel: string;
    languageAria: string;
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

const content: Record<Language, SiteContent> = {
  en: {
    nav: {
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      languageLabel: "中文",
      languageAria: "Switch to Chinese",
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
  },
  zh: {
    nav: {
      projects: "作品",
      skills: "能力",
      experience: "經歷",
      contact: "聯絡",
      languageLabel: "EN",
      languageAria: "切換成英文",
    },
    profile: {
      role: "HCI / XR 研究者與沉浸式系統開發者",
      location: "台灣台北",
    },
    hero: {
      copy:
        "目前就讀國立臺灣大學網路與多媒體研究所碩士班。我的方向橫跨 HCI、XR、embodied interaction、Gaussian Splatting、Gaussian Avatar，以及結合 Raspberry Pi、STM32 的感測互動原型。",
      viewWork: "看作品",
      resume: "履歷",
      portraitAlt: "極簡風格個人插圖",
      availability: "開放研究與工程相關機會",
      focus: "HCI / XR / 沉浸式系統",
    },
    profileSection: {
      eyebrow: "Profile",
      title: "把沉浸式系統從研究概念做到",
      nowrap: "可互動原型",
    },
    strengths: [
      "人機互動與 embodied interaction 研究",
      "VR / AR / MR / XR 應用原型開發",
      "Gaussian Avatar、3D / 4D Gaussian Splatting 與 AI 生成沉浸式環境",
      "使用 Raspberry Pi、STM32 進行嵌入式互動原型實作",
      "中文與英文雙語溝通，TOEIC 960",
    ],
    workSection: {
      eyebrow: "Selected Work",
      title: "研究型專案與已上線的工程作品",
      copy: "作品橫跨 embodied XR interaction、沉浸式媒體、產品開發與 cloud-native systems。",
    },
    projectGroups: [
      {
        title: "Research / XR",
        description: "沉浸式互動研究、embodied systems，以及以原型驗證想法的研究實作。",
        projects: [
          {
            title: "Smileoyed",
            type: "XR / 情感互動",
            summary: "結合多感官與生理回饋互動的 embodied virtual pet system，用於探索 behavioral affective synchrony。",
            impact: "作為合作 XR 研究作品入選 SIGGRAPH 2026 Immersive Pavilion。",
            tags: ["VR", "HCI", "Biofeedback", "Emotion Detection", "Unity", "Raspberry Pi"],
          },
          {
            title: "Co-located VR Avatar Animation",
            type: "VR / Embodied Character Control",
            summary: "透過頭戴式裝置與 embodied character controller，探索多人同場域 VR 的同步全身 avatar animation。",
            impact: "研究共享沉浸式環境中的自然多人臨場感與身體表徵。",
            tags: ["VR", "Avatar Animation", "Gaussian Avatar", "Unity", "Embodied Interaction"],
          },
          {
            title: "Oriental Beauty",
            type: "XR 劇場 / 數位人文",
            summary: "結合臺灣文學、音樂與沉浸式互動的 XR 劇場專案，用技術支撐文化敘事體驗。",
            impact: "把技術原型、敘事體驗設計與跨域研究合作連接起來。",
            tags: ["XR", "VR", "Unity", "4D Gaussian Splatting"],
          },
          {
            title: "Relaxing World",
            type: "AI 生成 VR 環境",
            summary: "使用 3D Gaussian Splatting 與即時 voice conversion 建構 AI 生成的 VR 放鬆環境。",
            impact: "整合沉浸式場景重建、生成式媒體與即時互動，探索放鬆體驗設計。",
            tags: ["3D Gaussian Splatting", "VR", "Voice Conversion"],
          },
        ],
      },
      {
        title: "Product & Systems",
        description: "把具體領域問題轉成可部署、可被使用的獨立工程作品。",
        projects: [
          {
            title: "公股銀行新手村",
            type: "Side Project / 招考準備平台",
            summary:
              "自架的公股銀行招考準備平台，包含面試題目篩選、招考行事曆、筆試門檻地圖、答題重點、評分、留言與上榜經驗分享。",
            impact: "把第一線銀行工作經驗轉成公開可用工具，並以輕量 full-stack 架構部署在小型 VM 上。",
            tags: ["React", "TypeScript", "Node API", "Caddy", "Cloudflare", "GCP"],
            links: [
              {
                label: "正式網站",
                href: "https://bank-interview-advisor.com",
                icon: "bi-box-arrow-up-right",
              },
            ],
          },
          {
            title: "分散式實體門禁系統",
            type: "課堂專案 / Cloud Native Systems",
            summary: "為 9 萬名員工規模設計的分散式實體門禁系統，同時處理毫秒級開門決策與讀取量大的出勤審計報表。",
            impact:
              "實作 write-heavy 與 read-heavy 服務路徑，包含 Redis anti-passback、Kafka event streaming、FastAPI reporting、PostgreSQL、Docker Compose deployment 與 Grafana observability。",
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
      title: "學歷與研究經歷",
    },
    timeline: [
      {
        period: "2025 Sep - Present",
        title: "國立臺灣大學 Image and Vision Lab 碩士班",
        description:
          "就讀網路與多媒體研究所，指導教授為洪一平教授，研究方向包含 HCI、VR / AR / MR / XR 應用開發與 Gaussian Avatar。",
      },
      {
        period: "2016 Sep - 2020 Jun",
        title: "國立成功大學 學士",
        description: "資訊工程學系。大學專題研究智慧型消防指揮系統，結合影像處理與慣性導航。",
      },
      {
        period: "2022 Feb - 2024 Aug",
        title: "合作金庫銀行 櫃員",
        description: "負責第一線金融服務作業，累積專業溝通、壓力下精準處理，以及面對客戶的實務經驗。",
      },
    ],
    contactSection: {
      eyebrow: "Contact",
      title: "開放 R&D 與 SWE 相關機會。",
      email: "Email",
    },
  },
};

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const copy = content[language];

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
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "zh-Hant";
  }, [language]);

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
              <button
                className="btn btn-sm btn-outline-dark nav-cta lang-toggle"
                type="button"
                aria-label={copy.nav.languageAria}
                onClick={() => setLanguage((current) => (current === "en" ? "zh" : "en"))}
              >
                <i className="bi bi-translate" aria-hidden="true" />
                {copy.nav.languageLabel}
              </button>
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
