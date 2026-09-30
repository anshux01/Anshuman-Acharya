const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const gh = "https://github.com/anshux01/";
const projects = [
  {
    t: "Car Showroom Sales Analytics",
    c: "data",
    img: "img/car-showroom-sales.png",
    d: "Exploratory analysis of 10 years of car sales using CRISP-ML(Q), with cleaning, charts and business takeaways.",
    tags: ["Python", "Pandas", "Seaborn"],
    code: gh + "Car_Sales_EDA",
  },
  {
    t: "AI Invoice Automation",
    c: "ai",
    img: "img/invoice-automation.jpg",
    d: "Reads invoices with Tesseract OCR and logs fields to Google Sheets with no manual typing.",
    tags: ["Python", "Tesseract OCR", "Sheets API"],
    code: gh + "AI-Invoice-Automation",
  },
  {
    t: "AI Face Detection System",
    c: "ai",
    img: "img/face detection system project.png",
    d: "Detects faces in images and live video using computer-vision models.",
    tags: ["Python", "OpenCV", "TensorFlow"],
    code: gh + "Face-Detection-System",
  },
  {
    t: "N Drive File Manager",
    c: "web",
    img: "img/portfolio_ndrive.jpg",
    d: "An offline Google Drive-style file organizer built with HTML, CSS and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: gh + "N-Drive",
    live: "https://anshux01.github.io/N-Drive/",
  },
  {
    t: "Real-time Chat Application",
    c: "web",
    img: "img/Chat Application project.png",
    d: "Instant messaging with rooms and live delivery over WebSockets.",
    tags: ["React", "Node.js", "Socket.IO", "MongoDB"],
    code: gh + "Chat-Application",
  },
  {
    t: "Bus Ticket Booking System",
    c: "web",
    img: "img/Bus Ticket Booking System project.png",
    d: "Desktop booking system with seat management and database-backed booking records.",
    tags: ["Java", "MySQL", "Swing"],
    code: gh + "Bus-Ticket-Booking",
  },
  {
    t: "Interactive Quiz Platform",
    c: "web",
    img: "img/quiz website project.png",
    d: "Timed quizzes with score tracking and progress saved in local storage.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: gh + "Quiz-Website",
    live: "https://anshux01.github.io/Quiz-Website/",
  },
  {
    t: "Online Exam System",
    c: "web",
    img: "img/online exam system project.png",
    d: "Browser-based exam workflow with questions, answers and result handling.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: gh + "Online-Exam-System",
  },
  {
    t: "Data Analysis & Reporting",
    c: "data",
    img: "img/data-analysis.png",
    d: "Data cleaning, exploratory analysis and reporting focused on useful business insights.",
    tags: ["Python", "Pandas", "Matplotlib"],
    code: gh,
  },
];
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
const certs = [
  [
    "SQL · MySQL · MS SQL Server",
    "360DigiTMG, Jul 2025",
    "Certificate (1).pdf",
  ],
  ["OOP · Jupyter · Python", "360DigiTMG, Jun 2025", "Certificate.pdf"],
  ["Python Programming", "HackerRank, Jul 2025", "python-basic-hackerrank.pdf"],
  ["SQL Fundamentals", "HackerRank, Jul 2025", "sql-basic-hackerrank.pdf"],
  ["SQL · Relational DB · Python", "IBM, Jan 2025", "db-sql-ibm.pdf"],
  ["HTML · CSS · JavaScript", "Meta, Jan 2025", "frontend-meta.pdf"],
  ["Neural Nets · Deep Learning", "AWS, Jul 2024", "nn-dl-coursera.pdf"],
  ["Data Science · Python", "IBM · NPTEL, May 2024", "ds-python-nptel.pdf"],
  [
    "Google Cloud Platform",
    "NPTEL, 2024",
    "Google Cloud Computing Foundations.pdf",
  ],
  [
    "Machine Learning · AI Design",
    "Coursera, Jan 2024",
    "ml-foundations-coursera.pdf",
  ],
];

function chips(box, labels, onPick) {
  if (!box) return;
  box.innerHTML = labels
    .map(
      (l, i) =>
        `<button type="button" class="chip${i ? "" : " on"}">${l}</button>`,
    )
    .join("");
  box.addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    $$(".chip", box).forEach((x) => x.classList.toggle("on", x === b));
    onPick(b.textContent);
  });
}

const names = { data: "Data", ai: "AI / ML", web: "Web apps" };
const pBox = $("#projects");
function showProjects(filter = "All") {
  const key = Object.keys(names).find((k) => names[k] === filter);
  pBox.innerHTML = projects
    .filter((p) => !key || p.c === key)
    .map(
      (p) => `<article class="card rv">
  <img loading="lazy" src="${p.img}" alt="${p.t}" onerror="this.style.opacity='.35'">
  <div><small>${names[p.c]}</small><h4>${p.t}</h4><p>${p.d}</p>
  <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
  <p class="links"><a href="${p.code}" target="_blank" rel="noopener">Code</a>${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">Live demo</a>` : ""}</p></div>
 </article>`,
    )
    .join("");
  reveal();
}
chips($("#pfilter"), ["All", ...Object.values(names)], showProjects);
showProjects();

const sBox = $("#skills-list");
function showSkills(group = "All") {
  const list = group === "All" ? Object.values(skills).flat() : skills[group];
  sBox.innerHTML = list.map((s) => `<span>${s}</span>`).join("");
}
chips($("#sfilter"), ["All", ...Object.keys(skills)], showSkills);
showSkills();

$("#certs").innerHTML = certs
  .map(
    ([t, m, f]) =>
      `<li><a href="img/certificates/${f}" target="_blank" rel="noopener"><b>${t}</b><small>${m}</small></a></li>`,
  )
  .join("");

const roles = [
  "useful solutions",
  "data insights",
  "working software",
  "smarter workflows",
];
let ri = 0;
const role = $("#role");
setInterval(() => {
  role.style.opacity = 0;
  setTimeout(() => {
    role.textContent = roles[++ri % roles.length];
    role.style.opacity = 1;
  }, 300);
}, 2600);

const statObserver = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      statObserver.unobserve(e.target);
      const end = +e.target.dataset.count;
      let n = 0;
      const id = setInterval(() => {
        e.target.textContent = ++n + "+";
        if (n >= end) clearInterval(id);
      }, 700 / end);
    }),
  { threshold: 0.7 },
);
$$("[data-count]").forEach((x) => statObserver.observe(x));

const revealObserver = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        revealObserver.unobserve(e.target);
      }
    }),
  { threshold: 0.08 },
);
function reveal() {
  $$(".rv:not(.in)").forEach((x) => revealObserver.observe(x));
}
$$(
  ".section-head,.featured-project,.experience-card,.education-card,.topic-card,.about-copy,.services,.contact-grid",
).forEach((x) => x.classList.add("rv"));
reveal();

addEventListener(
  "scroll",
  () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    $("#progress").style.width =
      (max ? Math.min(100, (h.scrollTop / max) * 100) : 0) + "%";
  },
  { passive: true },
);

const navObserver = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting)
        $$("#nav a").forEach((a) =>
          a.classList.toggle(
            "on",
            a.getAttribute("href") === "#" + e.target.id,
          ),
        );
    }),
  { rootMargin: "-42% 0px -52% 0px" },
);
$$("main section[id]").forEach((s) => navObserver.observe(s));

function themeIcon() {
  $("#theme i").className =
    "bx " +
    (document.documentElement.dataset.theme === "dark" ? "bx-sun" : "bx-moon");
}
themeIcon();
$("#theme").onclick = () => {
  const t =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  localStorage.setItem("theme", t);
  themeIcon();
};
$("#burger").onclick = () => $("#nav").classList.toggle("open");
$("#nav").onclick = (e) => {
  if (e.target.closest("a")) $("#nav").classList.remove("open");
};
