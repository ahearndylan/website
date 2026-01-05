import { useEffect, useRef, useState } from "react";

const terminalText = [
  "Hi, I'm Dylan Ahearn — a Computer Science graduate from Clark University.",
  "I build customer-facing software solutions that bridge technology and business needs.",
  "My work spans enterprise CX teams, nonprofit platforms, and real-world deployments.",
  "I enjoy translating complex systems into tools that are clear, usable, and impactful.",
];

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [showMatrixOnly, setShowMatrixOnly] = useState(false);

  const matrixContainerRef = useRef(null);

  useEffect(() => {
    const welcomeTimer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(welcomeTimer);
  }, []);

  useEffect(() => {
    if (!showWelcome && lineIndex < terminalText.length) {
      if (charIndex < terminalText[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + terminalText[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 45);
        return () => clearTimeout(timeout);
      }

      setDisplayedText((prev) => prev + "\n");
      setLineIndex((prev) => prev + 1);
      setCharIndex(0);
    }
    

    if (!showWelcome && lineIndex === terminalText.length && !isFinished) {
      setIsFinished(true);
    }
  }, [charIndex, isFinished, lineIndex, showWelcome]);

  useEffect(() => {
    if (!isFinished) return;

    const matrixDelay = setTimeout(() => {
      setShowMatrix(true);
      setShowMatrixOnly(true);
    }, 6000);

    return () => clearTimeout(matrixDelay);
  }, [isFinished]);

  useEffect(() => {
    if (!showMatrix || !matrixContainerRef.current) return;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()";

    const createMatrixLine = () => {
      const matrixLine = document.createElement("div");
      matrixLine.classList.add("matrix-line");

      const containerWidth = matrixContainerRef.current.offsetWidth;
      matrixLine.style.left = Math.random() * containerWidth + "px";
      matrixLine.style.top = "0px";
      matrixLine.textContent = chars.charAt(Math.floor(Math.random() * chars.length));

      matrixContainerRef.current.appendChild(matrixLine);

      matrixLine.addEventListener("animationend", () => matrixLine.remove());
    };

    const interval = setInterval(createMatrixLine, 30);
    return () => clearInterval(interval);
  }, [showMatrix]);

  return (
    <section id="hero" className="section">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Dylan Ahearn
            </h1>

            {/* Hero subheading */}
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Building clear, thoughtful software for real-world use.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary"
              >
                Explore Projects
              </button>

              <button
                type="button"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-secondary"
              >
                Get in Touch
              </button>
            </div>


            
          </div>

          <div className="card overflow-hidden">
            <div className="flex items-center gap-2 border-b border-slate-200/70 bg-white/60 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs font-medium text-slate-600">intro.terminal</span>
            </div>

            <div className="relative bg-[#0a0f1e]">
              <div
                className="p-4 font-mono text-sm text-[#00ff00] sm:text-base"
                style={{ minHeight: "14rem" }}
              >
                {showWelcome ? (
                  <div className="flex min-h-[10rem] items-center justify-center text-3xl font-bold tracking-wider text-[#00ff00] sm:text-4xl">
                    WELCOME
                  </div>
                ) : showMatrixOnly ? (
                  <></>
                ) : (
                  <pre className="whitespace-pre-wrap">{displayedText}</pre>
                )}

                <div
                  ref={matrixContainerRef}
                  className="pointer-events-none absolute inset-0 overflow-hidden"
                  style={{ zIndex: 5 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .matrix-line {
            position: absolute;
            color: #00ff00;
            font-family: monospace;
            font-size: 14px;
            animation: matrixDrop 1.4s linear forwards;
            opacity: 0.9;
            text-shadow: 0 0 8px rgba(0, 255, 0, 0.6);
          }

          @keyframes matrixDrop {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
