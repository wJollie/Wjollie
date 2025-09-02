// src/Pages/Resume.jsx
import "./Resume.css";

export default function Resume() {
  return (
    <main className="home">
      <section className="hero">
        <div className="container resume-wrap">
          <h1>Resume</h1>
          {/* <p className="intro">One-page resume. Download resume PDF with the button below.</p>

          <a
  href="/public/resume.pdf"
  download="William-Jollie-Resume.pdf"
  className="Btn-Container resume-download"
>
  <div className="text">Download PDF</div>
  <span className="dl-icon" aria-hidden="true">
    <svg className="dl-svg" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
    </svg>
    <span className="dl-bar" />
    <span className="dl-tooltip">Download</span>
  </span>
</a> */}




          {/* ======== The resume document ======== */}
          <article id="resume-doc" role="document" aria-label="Resume">
            <header className="r-head">
              <div>
                <h2>William Jollie</h2>
                <p className="r-sub">Computer Engineering Student • Systems • Full‑Stack</p>
              </div>
              <ul className="r-contact">
                <li><a href="mailto:william.jollie23@gmail.com">william.jollie23@gmail.com</a></li>
                <li><a href="tel:+15512060336">+1 (555) 206‑0336</a></li>
                <li><a href="https://github.com/wJollie" target="_blank" rel="noreferrer">Github</a></li>
                <li><a href="https://www.linkedin.com/in/william-jollie-68a4b7236/" target="_blank" rel="noreferrer">Linkedin</a></li>
                <li>Midland Park, NJ</li>
              </ul>
            </header>

            <section>
              <h3>Jobs</h3>
              <div className="r-item">
                <div className="r-item-head">
                  <strong>Quent Capital: Technology & Operations Assistant </strong>
                  <span>Jun 2024 - Present</span>
                </div>
                <ul>
                  <li>financial data processing, automation, and document management, specializing in streamlining workflows through Python scripts, Power Automate, and keyword-based sorting systems.</li>
                  <li>developing internal tools, generating analytical reports, and providing technical support for data-driven processes</li>
                  <li>investment research, financial modeling, and market analysis for small-cap stocks</li>
                </ul>
                <div className="r-tech">Python · Sharepoint · LLM · Power Automate · Excel</div>
              </div>

              <div className="r-item">
                <div className="r-item-head">
                  <strong>Kraftylab Inc: Intern</strong>
                  <span>Sep 2023 - Jul 2024</span>
                </div>
                <ul>
                  <li>Designed and deployed web applications using JavaScript, React.js, Node.js, and MongoDB.</li>
                  <li>Worked to build team building exercises inside unreal engine 4</li>
                </ul>
                <div className="r-tech">React.js · Javascript · Css · Html · Unreal Engine 4</div>
              </div>
            </section>

            <section>
              <h3>Projects</h3>
              <div className="r-item">
                <div className="r-item-head">
                  <strong>Home Server</strong>
                  <span>Aug 5 2025 - Aug 8 2025 </span>
                </div>
                <ul>
                  <li>Built a multi-purpose home server for media playback, file archiving, and game hosting.</li>
                  <li>Configured 32TB storage across multiple drives with cooling and a portable rolling terminal setup. Implemented remote monitoring and management from an Android device.</li>
                  <li>Modified server cart with a mounted desktop, raised drive holder using a wooden base, and secured components with cable ties.</li>
                </ul>
              </div>
            </section>

            <section className="r-grid">
              <div>
                <h3>Skills</h3>
                <p>Linux, TrueNas SCALE, Git, React, Node, Python, Javascript, HTML, CSS</p>
              </div>
              <div>
                <h3>Education</h3>
                <li>Upenn Web Development Bootcamp</li>
                <li>Udemy and Bergen Online Courses</li>
                <li>Homeschooled</li>
              </div>
            </section>
          </article>
          {/* ======== /resume ======== */}
        </div>
      </section>
    </main>
  );
}
