document.addEventListener("DOMContentLoaded", () => {
  /* =====================================================
       HELPERS
       ===================================================== */

  const $ = (selector) => document.querySelector(selector);

  const $$ = (selector) => [...document.querySelectorAll(selector)];

  /* =====================================================
       PROJECT DATA
       ===================================================== */

  const github = "https://github.com/anshux01";

  const projects = [
    {
      title: "Car Showroom Sales Analytics",

      category: "data",

      icon: "bx-line-chart",

      image: "img/car-showroom-sales.png",

      description:
        "Exploratory analysis of car sales data using data cleaning, visualization and business-focused analysis.",

      tags: ["Python", "Pandas", "Seaborn", "EDA"],

      code: github,
    },

    {
      title: "AI Invoice Automation",

      category: "ai",

      icon: "bx-receipt",

      image: "img/invoice-automation.jpg",

      description:
        "OCR-based automation that extracts invoice information and records structured fields to reduce repetitive manual data entry.",

      tags: ["Python", "Tesseract OCR", "Google Sheets API"],

      code: github,
    },

    {
      title: "AI Face Detection System",

      category: "ai",

      icon: "bx-face",

      image: "img/face detection system project.png",

      description:
        "Computer-vision application for detecting faces in images and live video using Python, OpenCV and deep-learning tools.",

      tags: ["Python", "OpenCV", "TensorFlow", "Keras"],

      code: github,
    },

    {
      title: "N Drive File Manager",

      category: "web",

      icon: "bx-folder",

      image: "img/portfolio_ndrive.jpg",

      description:
        "Offline Google Drive-style file organizer developed during vocational training.",

      tags: ["HTML", "CSS", "JavaScript"],

      code: github,

      live: "https://anshux01.github.io/N-Drive/",
    },

    {
      title: "Real-time Chat Application",

      category: "web",

      icon: "bx-message-rounded-dots",

      image: "img/Chat Application project.png",

      description:
        "Real-time messaging application with live delivery, rooms and persistent data.",

      tags: ["React", "Node.js", "Socket.IO", "MongoDB"],

      code: github,
    },

    {
      title: "Bus Ticket Booking System",

      category: "web",

      icon: "bx-bus",

      image: "img/Bus Ticket Booking System project.png",

      description:
        "Desktop booking application with seat management, booking records and database integration.",

      tags: ["Java", "Swing", "MySQL"],

      code: github,
    },

    {
      title: "Interactive Quiz Platform",

      category: "web",

      icon: "bx-help-circle",

      image: "img/quiz website project.png",

      description:
        "Timed quiz platform with scoring, progress tracking and local-storage persistence.",

      tags: ["HTML", "CSS", "JavaScript"],

      code: github,

      live: "https://anshux01.github.io/Quiz-Website/",
    },

    {
      title: "Online Exam System",

      category: "web",

      icon: "bx-edit-alt",

      image: "img/online exam system project.png",

      description:
        "Web-based examination workflow designed around questions, answers, scoring and user interaction.",

      tags: ["HTML", "CSS", "JavaScript"],

      code: github,
    },

    {
      title: "Spotify UI Clone",

      category: "web",

      icon: "bx-music",

      image: "img/spotify clone project.png",

      description:
        "Responsive music-streaming interface created to practice front-end layouts and styling.",

      tags: ["HTML", "CSS", "JavaScript"],

      code: github,
    },

    {
      title: "Data Analysis & Reporting",

      category: "data",

      icon: "bx-bar-chart-alt-2",

      image: "img/car-showroom-sales.png",

      description:
        "Data-cleaning, EDA and visualization workflows for converting raw tabular data into useful reports and insights.",

      tags: ["Python", "Pandas", "NumPy", "Power BI"],

      code: github,
    },
  ];

  /* =====================================================
       PROJECT CATEGORIES
       ===================================================== */

  const categoryNames = {
    data: "Data Science",

    ai: "AI / ML",

    web: "Web Development",
  };

  /* =====================================================
       PROJECT FILTER
       ===================================================== */

  const projectFilter = $("#pfilter");

  const projectGrid = $("#project-grid");

  if (projectFilter) {
    const filters = ["All", ...Object.values(categoryNames)];

    projectFilter.innerHTML = filters
      .map(
        (filter, index) => `

                        <button
                            type="button"
                            class="chip ${index === 0 ? "on" : ""}"
                            data-filter="${filter}">

                            ${filter}

                        </button>

                    `,
      )
      .join("");

    $$(".chip", projectFilter).forEach((button) => {
      button.addEventListener("click", () => {
        $$(".chip", projectFilter).forEach((chip) =>
          chip.classList.remove("on"),
        );

        button.classList.add("on");

        renderProjects(button.dataset.filter);
      });
    });
  }

  /* =====================================================
       RENDER PROJECTS
       ===================================================== */

  function renderProjects(selected = "All") {
    if (!projectGrid) return;

    const categoryKey = Object.keys(categoryNames).find(
      (key) => categoryNames[key] === selected,
    );

    const filtered = projects.filter(
      (project) => !categoryKey || project.category === categoryKey,
    );

    projectGrid.innerHTML = filtered
      .map(
        (project) => `

                        <article class="card">

                            <div class="card-media">

                                <img
                                    src="${project.image}"
                                    alt="${project.title}"
                                    loading="lazy"
                                    onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=&quot;bx ${project.icon}&quot;></i>';"
                                >

                            </div>


                            <div class="card-body">


                                <span class="card-category">

                                    ${categoryNames[project.category]}

                                </span>


                                <h3>

                                    ${project.title}

                                </h3>


                                <p>

                                    ${project.description}

                                </p>


                                <div class="card-tags">

                                    ${project.tags
                                      .map((tag) => `<span>${tag}</span>`)
                                      .join("")}

                                </div>


                                <div class="card-links">


                                    <a
                                        href="${project.code}"
                                        target="_blank"
                                        rel="noopener">

                                        GitHub

                                        <i class="bx bx-link-external"></i>

                                    </a>


                                    ${
                                      project.live
                                        ? `

                                                <a
                                                    href="${project.live}"
                                                    target="_blank"
                                                    rel="noopener">

                                                    Live Demo

                                                    <i class="bx bx-right-arrow-alt"></i>

                                                </a>

                                            `
                                        : ""
                                    }


                                </div>


                            </div>

                        </article>

                    `,
      )
      .join("");
  }

  renderProjects();

  /* =====================================================
       SKILLS
       ===================================================== */

  const skills = {
    "Data Science": [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "MySQL",
      "EDA",
      "Data Cleaning",
      "Seaborn",
    ],

    "AI / ML": [
      "Machine Learning",
      "YOLO",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Computer Vision",
    ],

    "Web Development": [
      "Java",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "DaisyUI",
    ],

    Databases: ["MySQL", "MongoDB", "SQLite"],

    "Automation & BI": [
      "Power BI",
      "Tesseract OCR",
      "Selenium",
      "n8n",
      "Google APIs",
    ],

    Tools: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Figma"],
  };

  const skillFilter = $("#sfilter");

  const skillList = $("#skills-list");

  function renderSkills(selected = "All") {
    if (!skillList) return;

    let list;

    if (selected === "All") {
      list = [...new Set(Object.values(skills).flat())];
    } else {
      list = skills[selected] || [];
    }

    skillList.innerHTML = list.map((skill) => `<span>${skill}</span>`).join("");
  }

  if (skillFilter) {
    const filters = ["All", ...Object.keys(skills)];

    skillFilter.innerHTML = filters
      .map(
        (filter, index) => `

                        <button
                            type="button"
                            class="chip ${index === 0 ? "on" : ""}"
                            data-skill="${filter}">

                            ${filter}

                        </button>

                    `,
      )
      .join("");

    $$(".chip", skillFilter).forEach((button) => {
      button.addEventListener("click", () => {
        $$(".chip", skillFilter).forEach((chip) => chip.classList.remove("on"));

        button.classList.add("on");

        renderSkills(button.dataset.skill);
      });
    });
  }

  renderSkills();

  /* =====================================================
       CERTIFICATES
       ===================================================== */

  const certificates = [
    [
      "SQL · MySQL · MS SQL Server",
      "360DigiTMG · Jul 2025",
      "Certificate (1).pdf",
    ],

    ["OOP · Jupyter · Python", "360DigiTMG · Jun 2025", "Certificate.pdf"],

    [
      "Python Programming",
      "HackerRank · Jul 2025",
      "python-basic-hackerrank.pdf",
    ],

    ["SQL Fundamentals", "HackerRank · Jul 2025", "sql-basic-hackerrank.pdf"],

    ["SQL · Relational Database · Python", "IBM · Jan 2025", "db-sql-ibm.pdf"],

    ["HTML · CSS · JavaScript", "Meta · Jan 2025", "frontend-meta.pdf"],

    ["Neural Networks · Deep Learning", "AWS · Jul 2024", "nn-dl-coursera.pdf"],

    ["Data Science · Python", "IBM · NPTEL · May 2024", "ds-python-nptel.pdf"],

    [
      "Google Cloud Computing Foundations",
      "NPTEL · 2024",
      "Google Cloud Computing Foundations.pdf",
    ],

    [
      "Machine Learning · AI Design",
      "Coursera · Jan 2024",
      "ml-foundations-coursera.pdf",
    ],
  ];

  const certificateList = $("#certs");

  if (certificateList) {
    certificateList.innerHTML = certificates
      .map(
        (certificate) => `

                        <li>

                            <a
                                href="img/certificates/${certificate[2]}"
                                target="_blank"
                                rel="noopener">

                                <b>
                                    ${certificate[0]}
                                </b>

                                <small>
                                    ${certificate[1]}
                                </small>

                            </a>

                        </li>

                    `,
      )
      .join("");
  }

  /* =====================================================
       HERO ROTATING TEXT
       ===================================================== */

  const role = $("#role");

  const roles = [
    "useful solutions",

    "data insights",

    "AI/ML systems",

    "automation",

    "working software",
  ];

  let roleIndex = 0;

  if (role) {
    setInterval(() => {
      role.style.opacity = "0";

      setTimeout(() => {
        roleIndex = (roleIndex + 1) % roles.length;

        role.textContent = roles[roleIndex];

        role.style.opacity = "1";
      }, 250);
    }, 2800);
  }

  /* =====================================================
       COUNTERS
       ===================================================== */

  const counters = $$("[data-count]");

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;

        const target = Number(element.dataset.count);

        let current = 0;

        const interval = setInterval(() => {
          current++;

          element.textContent = current + "+";

          if (current >= target) {
            clearInterval(interval);
          }
        }, 50);

        counterObserver.unobserve(element);
      });
    },
    {
      threshold: 0.5,
    },
  );

  counters.forEach((counter) => counterObserver.observe(counter));

  /* =====================================================
       DARK / LIGHT MODE
       ===================================================== */

  const theme = $("#theme");

  function updateThemeIcon() {
    if (!theme) return;

    const icon = theme.querySelector("i");

    const dark = document.documentElement.dataset.theme === "dark";

    icon.className = dark ? "bx bx-sun" : "bx bx-moon";
  }

  updateThemeIcon();

  if (theme) {
    theme.addEventListener("click", () => {
      const current = document.documentElement.dataset.theme;

      const next = current === "dark" ? "light" : "dark";

      document.documentElement.dataset.theme = next;

      localStorage.setItem("theme", next);

      updateThemeIcon();
    });
  }

  /* =====================================================
       MOBILE MENU
       ===================================================== */

  const burger = $("#burger");

  const nav = $("#nav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    $$("#nav a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
  }

  /* =====================================================
       SCROLL PROGRESS
       ===================================================== */

  const progress = $("#progress");

  window.addEventListener(
    "scroll",
    () => {
      if (!progress) return;

      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage =
        pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0;

      progress.style.width = percentage + "%";
    },
    {
      passive: true,
    },
  );
});
