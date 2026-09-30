/* =========================================================
   ANSHUMAN ACHARYA PORTFOLIO
   ========================================================= */

/* =========================
   HELPERS
========================= */

const $ = (selector, root = document) => root.querySelector(selector);

const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

/* =========================
   LINKS
========================= */

const gh = "https://github.com/anshux01/";

/* =========================
   PROJECT DATA
========================= */

const projects = [
  {
    title: "Car Showroom Sales Analytics",
    desc: "Interactive sales analytics solution for understanding showroom performance, customer trends, revenue and vehicle sales.",
    tech: ["Python", "Pandas", "NumPy", "Power BI", "SQL"],
    c: "Data",
    icon: "bx-bar-chart-alt-2",
    link: "#",
  },

  {
    title: "AI Invoice Automation",
    desc: "AI-powered invoice processing workflow using OCR and automation to extract and organize invoice information.",
    tech: ["Python", "Tesseract OCR", "n8n", "Google APIs"],
    c: "AI / ML",
    icon: "bx-receipt",
    link: "#",
  },

  {
    title: "AI Face Detection System",
    desc: "Computer vision project for detecting faces using deep learning and image-processing techniques.",
    tech: ["Python", "OpenCV", "TensorFlow", "Keras", "SQLite"],
    c: "AI / ML",
    icon: "bx-face",
    link: "#",
  },

  {
    title: "N Drive File Manager",
    desc: "Offline file-storage and management website developed during NALCO vocational training.",
    tech: ["HTML", "CSS", "JavaScript"],
    c: "Web apps",
    icon: "bx-folder-open",
    link: "#",
  },

  {
    title: "Real-time Chat Application",
    desc: "Real-time chat application with authentication and instant communication between users.",
    tech: ["React.js", "Node.js", "MongoDB", "Socket.IO"],
    c: "Web apps",
    icon: "bx-message-rounded-dots",
    link: "#",
  },

  {
    title: "Bus Ticket Booking System",
    desc: "Desktop-based bus ticket booking application with database integration.",
    tech: ["Java", "Swing", "MySQL", "NetBeans"],
    c: "Web apps",
    icon: "bx-bus",
    link: "#",
  },

  {
    title: "Interactive Quiz Platform",
    desc: "Online quiz platform for answering questions and displaying quiz results.",
    tech: ["HTML", "CSS", "JavaScript"],
    c: "Web apps",
    icon: "bx-question-mark",
    link: "#",
  },

  {
    title: "Online Exam System",
    desc: "Web-based examination system for conducting and managing online tests.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    c: "Web apps",
    icon: "bx-edit-alt",
    link: "#",
  },

  {
    title: "Data Analysis & Reporting",
    desc: "Data analysis and reporting workflows using Python, SQL, visualization and business intelligence tools.",
    tech: ["Python", "SQL", "Pandas", "Seaborn", "Power BI"],
    c: "Data",
    icon: "bx-data",
    link: "#",
  },
];

/* =========================
   SKILLS
========================= */

const skills = {
  Data: [
    "Python",
    "SQL",
    "MySQL",
    "Pandas",
    "NumPy",
    "Seaborn",
    "Matplotlib",
    "Power BI",
    "Statistics",
    "EDA",
  ],

  "AI / ML": [
    "Machine Learning",
    "Deep Learning",
    "YOLOv8",
    "OpenCV",
    "TensorFlow",
    "Keras",
    "Computer Vision",
  ],

  Development: [
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.IO",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ],

  Automation: [
    "Tesseract OCR",
    "Selenium",
    "n8n",
    "Google APIs",
    "REST APIs",
    "Git",
  ],
};

/* =========================
   CERTIFICATES
========================= */

const certs = [
  {
    title: "SQL · MySQL · MS SQL Server",
    issuer: "360DigiTMG",
    date: "Jul 2025",
    file: "Certificate (1).pdf",
  },

  {
    title: "OOP · Jupyter · Python",
    issuer: "360DigiTMG",
    date: "Jun 2025",
    file: "Certificate.pdf",
  },

  {
    title: "Python Programming",
    issuer: "HackerRank",
    date: "Jul 2025",
    file: "python-basic-hackerrank.pdf",
  },

  {
    title: "SQL Fundamentals",
    issuer: "HackerRank",
    date: "Jul 2025",
    file: "sql-basic-hackerrank.pdf",
  },

  {
    title: "SQL · Relational DB · Python",
    issuer: "IBM",
    date: "Jan 2025",
    file: "db-sql-ibm.pdf",
  },

  {
    title: "HTML · CSS · JavaScript",
    issuer: "Meta",
    date: "Jan 2025",
    file: "frontend-meta.pdf",
  },

  {
    title: "Neural Networks · Deep Learning",
    issuer: "AWS",
    date: "Jul 2024",
    file: "nn-dl-coursera.pdf",
  },

  {
    title: "Data Science · Python",
    issuer: "IBM · NPTEL",
    date: "May 2024",
    file: "ds-python-nptel.pdf",
  },

  {
    title: "Google Cloud Platform",
    issuer: "NPTEL",
    date: "2024",
    file: "Google Cloud Computing Foundations.pdf",
  },

  {
    title: "Machine Learning · AI Design",
    issuer: "Coursera",
    date: "Jan 2024",
    file: "ml-foundations-coursera.pdf",
  },
];

/* =========================================================
   REVEAL OBSERVER
   IMPORTANT:
   THIS MUST COME BEFORE showProjects()
========================================================= */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");

        revealObserver.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.08,
  },
);

function reveal() {
  $$(".rv:not(.in)").forEach((element) => {
    revealObserver.observe(element);
  });
}

/* Static elements */

$$(
  ".section-head," +
    ".featured-project," +
    ".experience-card," +
    ".education-card," +
    ".topic-card," +
    ".about-copy," +
    ".services," +
    ".contact-grid",
).forEach((element) => {
  element.classList.add("rv");
});

/* Initial reveal */

reveal();

/* =========================
   FILTER CHIPS
========================= */

function chips(box, labels, onPick) {
  if (!box) return;

  box.innerHTML = labels
    .map(
      (label, index) => `

        <button
          type="button"
          class="filter-chip ${index === 0 ? "active" : ""}"
          data-value="${label}"
        >
          ${label}
        </button>

      `,
    )
    .join("");

  box.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-chip");

    if (!button) return;

    $$(".filter-chip", box).forEach((chip) => {
      chip.classList.remove("active");
    });

    button.classList.add("active");

    onPick(button.dataset.value);
  });
}

/* =========================
   PROJECTS
========================= */

const projectNames = {
  data: "Data",
  ai: "AI / ML",
  web: "Web apps",
};

const projectBox = $("#projects");

function showProjects(filter = "All") {
  if (!projectBox) return;

  const key = Object.keys(projectNames).find((k) => projectNames[k] === filter);

  const filteredProjects = projects.filter(
    (project) => !key || project.c === projectNames[key],
  );

  projectBox.innerHTML = filteredProjects
    .map(
      (project) => `

          <article class="project-card rv">

            <div class="project-icon">

              <i class="bx ${project.icon}"></i>

            </div>


            <div class="project-content">

              <span class="project-category">
                ${project.c}
              </span>


              <h3>
                ${project.title}
              </h3>


              <p>
                ${project.desc}
              </p>


              <div class="project-tech">

                ${project.tech.map((tech) => `<span>${tech}</span>`).join("")}

              </div>


              ${
                project.link && project.link !== "#"
                  ? `
                    <a
                      href="${project.link}"
                      target="_blank"
                      rel="noopener"
                      class="project-link"
                    >
                      View Project
                      <i class="bx bx-right-arrow-alt"></i>
                    </a>
                  `
                  : ""
              }

            </div>

          </article>

        `,
    )
    .join("");

  reveal();
}

/* Project filters */

chips(
  $("#pfilter"),

  ["All", ...Object.values(projectNames)],

  showProjects,
);

/* Load projects */

showProjects();

/* =========================
   SKILLS
========================= */

const skillsBox = $("#skills-list");

function showSkills(group = "All") {
  if (!skillsBox) return;

  const list =
    group === "All" ? Object.values(skills).flat() : skills[group] || [];

  skillsBox.innerHTML = list.map((skill) => `<span>${skill}</span>`).join("");
}

/* Skill filters */

chips(
  $("#sfilter"),

  ["All", ...Object.keys(skills)],

  showSkills,
);

/* Load skills */

showSkills();

/* =========================
   CERTIFICATES
========================= */

const certificateBox = $("#certs");

if (certificateBox) {
  certificateBox.innerHTML = certs
    .map(
      (cert) => `

          <article class="certificate-card">

            <div class="certificate-icon">

              <i class="bx bx-certification"></i>

            </div>


            <div class="certificate-info">

              <h3>
                ${cert.title}
              </h3>


              <p>

                ${cert.issuer}

                <span>•</span>

                ${cert.date}

              </p>


              ${
                cert.file
                  ? `
                    <a
                      href="${encodeURI(cert.file)}"
                      target="_blank"
                      rel="noopener"
                    >
                      View Certificate
                      <i class="bx bx-link-external"></i>
                    </a>
                  `
                  : ""
              }

            </div>

          </article>

        `,
    )
    .join("");
}

/* =========================
   THEME
========================= */

function themeIcon() {
  const themeButton = $("#theme");

  if (!themeButton) return;

  const icon = themeButton.querySelector("i");

  if (!icon) return;

  icon.className =
    "bx " +
    (document.documentElement.dataset.theme === "dark" ? "bx-sun" : "bx-moon");
}

/* Load saved theme */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || savedTheme === "light") {
  document.documentElement.dataset.theme = savedTheme;
}

themeIcon();

/* Theme toggle */

const themeButton = $("#theme");

if (themeButton) {
  themeButton.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme;

    const newTheme = current === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = newTheme;

    localStorage.setItem("theme", newTheme);

    themeIcon();
  });
}

/* =========================
   MOBILE MENU
========================= */

const burger = $("#burger");
const nav = $("#nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

if (nav) {
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("open");
    }
  });
}

/* =========================
   CURRENT YEAR
========================= */

const year = $("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}
