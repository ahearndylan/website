const Resume = () => {
  return (
    <section id="resume" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">Resume</h2>
          <p className="section-subtitle">
            View or download my latest resume to learn more about my background and experience.
          </p>
          <div className="mt-6">
            <a
              href="/DylanAhearnResume.pdf"
              download="DylanAhearnResume.pdf"
              className="btn-primary"
            >
              Download PDF
            </a>
          </div>
        </div>

        <div className="mt-10 card overflow-hidden">
          <iframe
            src="/DylanAhearnResume.pdf"
            title="Resume PDF"
            className="h-[80vh] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
