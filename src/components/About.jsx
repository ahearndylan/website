import { useState } from "react";

const tabs = ["Background", "Work Experience", "Skills"];

const About = () => {
  const [activeTab, setActiveTab] = useState("Background");

const renderContent = () => {
    switch (activeTab) {
      case "Background":
        return (
          <p className="text-sm sm:text-base">
             I’m a Computer Science graduate from Clark University with experience building tools 
             and systems across enterprise and nonprofit environments. 
             My work focuses on translating business needs and complex processes into clear workflows, 
             usable interfaces, and production-ready solutions.

            <br></br>
            <br></br>
            I’ve collaborated closely with stakeholders, designers, and engineers throughout the software development lifecycle, participating in discovery, planning, prototyping, and deployment to deliver practical and scalable tools that support real-world operations while ensuring the tools remain focused on the end user.

          </p>
        );
      case "Work Experience":
        return (
          <div className="max-h-60 overflow-y-auto pr-2">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Lincoln Financial Group
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  Analyzed customer journeys and business workflows across enterprise CX portals, 
                  translating requirements into user flows, prototypes, and technical documentation 
                  to support product and automation initiatives.
                </p>
              </div>

              <div className="card p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  CENTRO Inc. 
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  Delivered a tailored Django platform with admin workflows and cost-efficient
                  infrastructure using PostgreSQL, NGINX, and DigitalOcean.
                </p>
              </div>

              <div className="card p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  WeCan Initiative
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  Co-led development of a scheduling, redemption tracking, and donations platform
                  supporting web and mobile-friendly workflows.
                </p>
              </div>

              <div className="card p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Inner Voice Outer Change
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  Built and deployed a custom Django site enabling mobile access, donation
                  integration, and non-technical staff content control.
                </p>
              </div>
            </div>
          </div>
        );


      case "Skills":
        return (
          <div className="text-sm sm:text-base">
            <p className="mb-4">
            I’ve built a strong foundation in full-stack development, system design, and cloud 
            deployment. My hands-on experience spans enterprise customer experience platforms, 
            nonprofit technology systems, and internal tools designed to improve workflows and 
            usability.  
            </p>
            <p>
              <strong>Core Skills:</strong> Python, Django, JavaScript, React, HTML/CSS, SQL, Git, Docker, DigitalOcean, AWS, Figma
            </p>
            <a
              href="#projects"
              className="btn-accent mt-6"
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

              <div className="mt-4 text-sm sm:text-base">
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
