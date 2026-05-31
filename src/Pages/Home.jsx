// App.jsx - Main App with Navigation and Landing Page

import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import "./Home.css";
import Contact from "./Contact";
import Resume from "./Resume";
import Projects from "./Projects";

function HomePage() {
  return (
    <main className="home">
      <section className="hero">
        <div className="container">
          <h1>William Jollie</h1>
    <p className="tagline">Computer Engineering Student • Systems • Hardware • Full‑Stack</p>
    <p className="intro">
      Computer Engineering student at Lafayette College with hands‑on experience in systems design,
      embedded development, and full‑stack engineering. I build practical, resource‑efficient
      hardware and software projects that solve real problems and push my technical range.
    </p>
          <Link to="/projects" className="Btn-Container">
  <div className="text">View Projects</div>
  <div className="icon-Container">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <path d="M10 17l5-5-5-5v10z"/>
    </svg>
  </div>
</Link>

        </div>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
  <Link to="/" className="brand" aria-label="Home">
    <picture className="brand-slot">
      {/* On mobile, use the full-name PNG */}
      <source media="(max-width:700px)" srcSet="/Assets/WJBULL-Cutout-Name.png" />
      {/* Default (desktop): icon-only mark that overhangs */}
      <img
        src="/Assets/WJBULL-Cutout.png"
        alt="WJ bull logo"
        className="brand-icon"
      />
    </picture>
    <span className="brand-text">William Jollie</span>
  </Link>

  <nav>
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/resume">Resume</Link>
    <Link to="/contact">Contact</Link>
  </nav>
</header>



      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<p style={{ padding: 24 }}>Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}
