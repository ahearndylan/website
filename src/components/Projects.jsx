import React from "react";

const projects = [
  {
    title: "CENTRO Inc. Non-Profit",
    description:
      "Upgrading Centro’s digital footprint with improved UI, enhanced functionality, and a mobile-friendly experience.",
    technologies: "Django, PostgreSQL, HTML, CSS, JavaScript, Bootstrap",
    image: "/CENTRO.jpg",
  },
  {
    title: "Court Kings HQ",
    description:
      "A fully automated NBA stats platform that delivers daily analytics through python bots and a dynamic website.",
    technologies: "Python, HTML, CSS, JavaScript, Supabase, Railway, Tweepy",
    image: "/logo5.png",
  },
  {
    title: "WeCan Mobile Redemption App",
    description:
      "Developed a mobile platform to streamline the redemption of beverage containers through tech-driven services.",
    technologies: "Django, PostgreSQL, HTML, CSS, Android Studio, Figma",
    image: "/WECANproject.png",
  },
  {
    title: "Digital Bar Card",
    description:
      "A Django-based project aiming to replace traditional paper-based Bar Cards for Massachusetts lawyers with digital versions.",
    technologies: "Django, Python, SQLite, HTML, CSS, JavaScript, Git",
    image: "/BARCARDproject.png",
  },
  {
    title: "Food Waste Reduction App",
    description:
      "Participated in a hackathon to develop a food waste tracking app for Clark Dining Services with actionable insights.",
    technologies: "ExpressJS, MongoDB, JavaScript, HTML, CSS",
    image: "/FOODWASTEproject.png",
  },
  {
    title: "IVOC Nonprofit",
    description:
      "Developed and maintained a Django-based nonprofit site to enhance engagement and streamline operations.",
    technologies: "Django, Python, HTML, CSS, JavaScript, NGINX, Docker, Git",
    image: "/IVOCproject.png",
  },
  {
    title: "Pac-Man Game",
    description:
      "Created a Pac-Man game using algorithms to simulate intelligent behavior and enhance gameplay.",
    technologies: "Python, Pygame, DFS, A* Algorithm, Game Development",
    image: "/PACMANgif.gif",
  },
  {
    title: "Game Platform Project",
    description:
      "Built a platform with multiple custom games like Plinko, Derby, and Memory Match to showcase GUI integration.",
    technologies: "Java, IntelliJ, GUI, Game Development",
    image: "/GAMEPLATFORMproject.png",
  },
  {
    title: "Clark Alumni App",
    description:
      "An app connecting Clark University alumni and students to foster networking and mentorship opportunities.",
    technologies: "Django, PostgreSQL, HTML, CSS, JavaScript, DigitalOcean",
    image: "/2.png",
  },
];

const PROJECT_ROUTE_BY_TITLE = {
  "CENTRO Inc. Non-Profit": "Centro",
  "Court Kings HQ": "CKHQ",
  "WeCan Mobile Redemption App": "Wecan",
  "Digital Bar Card": "Barcard",
  "Food Waste Reduction App": "Foodwaste",
  "IVOC Nonprofit": "IVOC",
  "Pac-Man Game": "Pacman",
  "Game Platform Project": "Game",
  "Clark Alumni App": "Alumni",
};

const toBadges = (technologies) =>
  technologies
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

const Projects = ({ onSelect }) => {
  return (
    <section id="projects" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">Portfolio</h2>
          <p className="section-subtitle">
            A selection of projects spanning enterprise CX, nonprofits, and engineering coursework.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const route = PROJECT_ROUTE_BY_TITLE[project.title];

            return (
              <article key={project.title} className="card card-hover overflow-hidden">
                <div className="relative aspect-[16/10] bg-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain p-6"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {toBadges(project.technologies).slice(0, 6).map((t) => (
                      <span key={t} className="badge">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      {toBadges(project.technologies).length} technologies
                    </span>
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => route && onSelect(route)}
                    >
                      View details
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
