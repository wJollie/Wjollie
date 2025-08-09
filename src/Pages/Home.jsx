// App.jsx - Main App with Navigation and Landing Page

import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import "./Home.css";
import Contact from "./Contact";

function HomePage() {
  return (
    <main className="home">
      <section className="hero">
        <div className="container">
          <h1>William Jollie</h1>
          <p className="tagline">Aspiring Computer Engineer • Builder • Problem Solver</p>
          <p className="intro">
            I’m a self-taught aspiring engineer with hands-on experience in systems design,
            electronics, and full-stack development. This portfolio showcases real-world
            projects built with creativity, discipline, and minimal resources.
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
    <span className="brand-slot">
      <img src="/Assets/WJBULL-Cutout.png" alt="WJ bull logo" className="brand-icon" />
    </span>
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
        <Route path="/projects" element={<p>Projects Page (coming soon)</p>} />
        <Route path="/resume" element={<p>Resume Page (coming soon)</p>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<p style={{ padding: 24 }}>Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}
