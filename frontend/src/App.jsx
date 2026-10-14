import { useState } from "react";
import "./App.css";

import { Link, Routes, Route } from "react-router-dom";

import OpportunityDetails from "./OpportunityDetails";
import Apply from "./Apply";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Track from "./Track";
import Internships from "./Internships";
import Jobs from "./Jobs";
import About from "./About";

// Sample opportunities displayed on the home page
const opportunities = [
  {
    id: 1,
    title: "Java Developer Intern",
    company: "Tech Solutions Pvt. Ltd.",
    location: "Chennai",
    skills: ["Java", "Spring Boot", "MySQL"],
    type: "Internship",
    stipend: "₹15,000/month",
    vacancies: 5,
    icon: "J",
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    company: "Digital Works Pvt. Ltd.",
    location: "Bangalore",
    skills: ["React", "JavaScript", "CSS"],
    type: "Internship",
    stipend: "₹12,000/month",
    vacancies: 3,
    icon: "D",
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "DataTech Solutions",
    location: "Remote",
    skills: ["Python", "SQL", "Excel"],
    type: "Full-Time",
    stipend: "₹4 LPA",
    vacancies: 4,
    icon: "A",
  },
  {
    id: 4,
    title: "Software Developer",
    company: "NextGen Technologies",
    location: "Chennai",
    skills: ["Java", "SQL", "Git"],
    type: "Full-Time",
    stipend: "₹5 LPA",
    vacancies: 6,
    icon: "N",
  },
  {
    id: 5,
    title: "Web Developer Intern",
    company: "Creative Digital",
    location: "Coimbatore",
    skills: ["HTML", "CSS", "React"],
    type: "Internship",
    stipend: "₹10,000/month",
    vacancies: 2,
    icon: "C",
  },
  {
    id: 6,
    title: "Python Developer",
    company: "Innovate Systems",
    location: "Bangalore",
    skills: ["Python", "Django", "MySQL"],
    type: "Full-Time",
    stipend: "₹6 LPA",
    vacancies: 3,
    icon: "I",
  },
];

function Home() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("All");

  const filteredOpportunities = opportunities.filter((item) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      item.title.toLowerCase().includes(searchText) ||
      item.company.toLowerCase().includes(searchText) ||
      item.skills.some((skill) =>
        skill.toLowerCase().includes(searchText)
      );

    const matchesLocation =
      !location ||
      item.location
        .toLowerCase()
        .includes(location.toLowerCase().trim());

    const matchesCategory =
      category === "All" || item.type === category;

    return matchesSearch && matchesLocation && matchesCategory;
  });

  return (
    <div className="career-app">
      {/* Navigation */}
      <nav className="navbar">
        <Link to="/" className="logo">
          <span className="logo-icon">C</span>
          <span>
            Career<span className="logo-highlight">Connect</span>
          </span>
        </Link>

        <div className="nav-links">
          <Link to="/" className="active-link">
            Home
          </Link>

          <Link to="/internships">Internships</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/about">About</Link>

          <Link to="/login" className="login-link">
            Login
          </Link>

          <Link to="/apply" className="nav-button">
            Get Started <span>→</span>
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <div className="hero-tag">
              <span className="tag-dot"></span>
              YOUR CAREER JOURNEY STARTS HERE
            </div>

            <h1>
              Discover Opportunities.
              <br />
              <span>Build Your Future.</span>
            </h1>

            <p className="hero-text">
              Find internships, explore job opportunities, connect with
              companies, and take the next step towards your dream career.
            </p>

            <div className="hero-buttons">
              <a href="#opportunities" className="primary-btn">
                Explore Opportunities <span>→</span>
              </a>

              <Link to="/apply" className="secondary-btn">
                Create Account
              </Link>
            </div>

            <div className="hero-trust">
              <span>✓ Student-friendly platform</span>
              <span>✓ Jobs & internships</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-icon">🚀</div>

            <div>
              <strong>Your next opportunity awaits!</strong>
              <p>Discover jobs that match your skills.</p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="stats">
          <div className="stat-box">
            <span className="stat-icon">💼</span>
            <div>
              <h3>Opportunities</h3>
              <p>Jobs & internships</p>
            </div>
          </div>

          <div className="stat-box">
            <span className="stat-icon">🏢</span>
            <div>
              <h3>Companies</h3>
              <p>Explore employers</p>
            </div>
          </div>

          <div className="stat-box">
            <span className="stat-icon">🎓</span>
            <div>
              <h3>Student Profiles</h3>
              <p>Showcase your skills</p>
            </div>
          </div>

          <div className="stat-box">
            <span className="stat-icon">📄</span>
            <div>
              <h3>Easy Applications</h3>
              <p>Track your progress</p>
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="opportunities" id="opportunities">
          <div className="section-heading">
            <p className="section-tag">FIND YOUR NEXT STEP</p>

            <h2>Explore Career Opportunities</h2>

            <p>
              Discover jobs and internships that match your interests and
              skills.
            </p>
          </div>

          {/* Search */}
          <div className="search-panel">
            <div className="search-field">
              <label htmlFor="job-search">Job title or skills</label>

              <input
                id="job-search"
                type="text"
                placeholder="e.g. Java, React, Data Analyst"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="search-field">
              <label htmlFor="job-location">Location</label>

              <input
                id="job-location"
                type="text"
                placeholder="e.g. Chennai, Remote"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="search-button"
              onClick={() =>
                document
                  .getElementById("job-results")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Search Jobs
            </button>
          </div>

          {/* Filters */}
          <div className="opportunity-toolbar" id="job-results">
            <div>
              <h3>Latest Opportunities</h3>
              <p>Explore available career options.</p>
            </div>

            <div className="category-filters">
              {["All", "Internship", "Full-Time"].map((item) => (
                <button
                  type="button"
                  key={item}
                  className={
                    category === item ? "filter active-filter" : "filter"
                  }
                  onClick={() => setCategory(item)}
                >
                  {item === "All" ? "All Opportunities" : item}
                </button>
              ))}
            </div>
          </div>

          {/* Opportunity Cards */}
          <div className="opportunity-cards">
            {filteredOpportunities.map((item) => (
              <article className="opportunity-card" key={item.id}>
                <div className="card-top">
                  <div className="company-icon">{item.icon}</div>

                  <span
                    className={
                      item.type === "Internship"
                        ? "badge internship"
                        : "badge job"
                    }
                  >
                    {item.type}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p className="company">{item.company}</p>

                <div className="card-info">
                  <span>📍 {item.location}</span>
                  <span>👥 {item.vacancies} vacancies</span>
                </div>

                <div className="skill-list">
                  {item.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="card-bottom">
                  <div className="salary">
                    <small>
                      {item.type === "Internship" ? "Stipend" : "Salary"}
                    </small>

                    <strong>{item.stipend}</strong>
                  </div>

                  <Link
                    to="/opportunity"
                    className="view-button"
                    state={{ opportunity: item }}
                  >
                    View Details →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredOpportunities.length === 0 && (
            <div className="no-results">
              <span>🔎</span>

              <h3>No matching opportunities found</h3>

              <p>Try a different job title, skill, or location.</p>

              <button
                type="button"
                className="search-button"
                onClick={() => {
                  setSearch("");
                  setLocation("");
                  setCategory("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}

          <div className="view-all">
            <Link to="/jobs" className="secondary-btn">
              View All Jobs & Internships →
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="career-cta">
          <div>
            <p className="section-tag">READY TO GET STARTED?</p>

            <h2>Your next opportunity is waiting for you.</h2>

            <p>
              Create your profile and take the first step towards your career.
            </p>
          </div>

          <Link to="/apply" className="primary-btn">
            Join CareerConnect →
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <Link to="/" className="logo footer-logo">
          <span className="logo-icon">C</span>

          <span>
            Career<span className="logo-highlight">Connect</span>
          </span>
        </Link>

        <p>Connecting students, companies, and career opportunities.</p>

        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/internships">Internships</Link>
          <Link to="/login">Login</Link>
        </div>

        <small>© 2026 CareerConnect. All rights reserved.</small>
      </footer>
    </div>
  );
}

// Application Routes
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/opportunity" element={<OpportunityDetails />} />

      <Route path="/apply" element={<Apply />} />

      <Route path="/login" element={<Login />} />

      <Route path="/student-dashboard"element={<Dashboard />}/>

      <Route path="/profile" element={<Profile />} />

      <Route path="/track" element={<Track />} />

      <Route path="/internships" element={<Internships />} />

      <Route path="/jobs" element={<Jobs />} />

      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;