// App.jsx - Main App with Navigation and Landing Page

import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import "./index.css";

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
          <Link to="/projects" className="btn">View My Projects</Link>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <div className="logo">William Jollie</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<p>Projects Page (coming soon)</p>} />
        <Route path="/about" element={<p>About Page (coming soon)</p>} />
        <Route path="/resume" element={<p>Resume Page (coming soon)</p>} />
        <Route path="/contact" element={<p>Contact Page (coming soon)</p>} />
        <Route path="*" element={<p style={{ padding: 24 }}>Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}
