import { useState } from "react";

const tabs = ["Background", "Work Experience", "Skills"];

const About = () => {
  const [activeTab, setActiveTab] = useState("Background");

const renderContent = () => {
    switch (activeTab) {
      case "Background":
        return (
          <p className="text-sm sm:text-base">
             I’m a Computer Science graduate from Clark University with experience delivering
             customer-facing software solutions across enterprise and nonprofit environments.
             My background centers on translating business needs into clear workflows, usable
             interfaces, and production-ready systems.
            <br></br>
            <br></br>
            I’ve worked closely with stakeholders, designers, and engineers throughout 
            the full software development lifecycle, participating in discovery, sprint planning, 
            backlog refinement, prototyping, and deployment to deliver practical and scalable
            solutions. Ensuring tools are focused on the end user.
          </p>
        );
      case "Work Experience":
        return (
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li>
              Supported <strong>Lincoln Financial Group’s CX & CI teams</strong> by translating
              business needs into user flows, Figma prototypes, and interactive demos across
              the GP, RPS, and Wellness Path customer portals.
            </li>
            <li>
              Partnered with <strong>CENTRO</strong> stakeholders to deliver a tailored Django
              platform, including admin workflows and cost-efficient infrastructure using
              PostgreSQL, NGINX, and DigitalOcean.
            </li>
            <li>
              Co-led development of a full software system for <strong>WeCan LLC</strong>,
              supporting scheduling, redemption tracking, and donations through a web and
              mobile-friendly platform.
            </li>
            <li>
              Built and deployed a custom Django site for <strong>Inner Voice Outer Change (IVOC)</strong>,
              enabling mobile access, donation integration, and non-technical staff content control.
            </li>
          </ul>

        );
      case "Skills":
        return (
          <div className="text-sm sm:text-base">
            <p className="mb-4">
              I’ve built a strong foundation in full-stack development, cloud deployment, and collaborative software design.
              My hands-on experience spans nonprofit systems, internal tools, and client-focused platforms that prioritize usability and scale.
            </p>
            <p>
              <strong>Core Skills:</strong> Python, Django, JavaScript, React, HTML/CSS, SQL, Git, Docker, Agile (Jira), DigitalOcean, AWS
            </p>
            <a
              href="#projects"
              className="inline-block mt-6 bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800 transition"
            >
              EXPLORE MY PROJECTS
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="section">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            <div className="card p-6 text-center">
              <img
                src="/headshot2.jpg"
                alt="Dylan Ahearn"
                className="mx-auto h-auto w-40 rounded-2xl object-cover shadow-sm"
              />
              <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
                Dylan Ahearn
              </h2>
              <p className="mt-1 text-sm font-medium text-slate-600">
                Computer Science Graduate from Clark University
              </p>
              <img
                src="/ClarkU.png"
                alt="Clark University"
                className="mx-auto mt-5 w-20 opacity-90"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="card p-6">
              <div className="flex flex-wrap gap-2 border-b border-slate-200/70 pb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={
                      activeTab === tab
                        ? "btn bg-slate-900 text-white hover:bg-slate-900/90"
                        : "btn border border-slate-200 bg-white/60 text-slate-700 hover:bg-white"
                    }
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="mt-4 max-h-96 overflow-y-auto pr-2 text-sm sm:text-base">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
