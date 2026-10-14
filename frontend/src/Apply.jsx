import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Apply.css";

function Apply() {
  const navigate = useNavigate();

  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("error");
  const [resume, setResume] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    graduation_year: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];

    setMessage("");

    if (!file) {
      setResume(null);
      return;
    }

    if (file.type !== "application/pdf") {
      setResume(null);
      e.target.value = "";
      setMessage("Please upload your resume in PDF format.");
      setMessageType("error");
      return;
    }

    // Maximum file size: 2 MB
    if (file.size > 2 * 1024 * 1024) {
      setResume(null);
      e.target.value = "";
      setMessage("Resume file size must not exceed 2 MB.");
      setMessageType("error");
      return;
    }

    setResume(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (formData.password.length < 8) {
      setMessage("Password must contain at least 8 characters.");
      setMessageType("error");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      setMessageType("error");
      return;
    }

    if (!resume) {
      setMessage("Please upload your resume in PDF format.");
      setMessageType("error");
      return;
    }

    if (role === "company") {
      setMessage(
        "Company registration is not connected yet. A separate company registration API is required."
      );
      setMessageType("error");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: formData.name.trim(),
         email: formData.email.trim(),
         phone: formData.phone.trim(),
         department: formData.department,
        graduation_year: Number(formData.graduation_year),
        password: formData.password,
    };
      /*
       * Current backend endpoint:
       * POST http://localhost:8080/students
       *
       * This request matches the student fields in your
       * existing frontend. Password and actual resume-file
       * storage need separate backend support.
       */

      const response = await fetch(
        "http://localhost:8080/students",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const responseText = await response.text();

      if (!response.ok) {
        throw new Error(
          responseText ||
            `Registration failed. Server returned ${response.status}.`
        );
      }

      setMessage(
        "Student details submitted successfully. Please log in if your backend has completed account registration."
      );

      setMessageType("success");

      // Navigate only after the backend returns a successful response.
      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } 

    catch (error) {
  console.error("Registration error:", error);

  setMessage(
    error.message ||
      "Registration failed. Please check the browser console."
  );

  setMessageType("error");
}
   finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      {/* LEFT SIDE */}
      <section className="register-left">
        <div className="left-overlay"></div>

        <div className="brand">
          <div className="brand-icon">C</div>

          <div>
            <h2>INTERNSHIP &</h2>
            <h2>CAMPUS HIRING</h2>
          </div>
        </div>

        <div className="hero-content">
          <span className="hero-tag">
            YOUR CAREER STARTS HERE
          </span>

          <h1>
            Build Your
            <br />
            <span>Career With Us</span>
          </h1>

          <div className="hero-line"></div>

          <p className="hero-description">
            Create your profile and discover internship
            and job opportunities from leading companies.
          </p>

          <div className="benefit-list">
            <div className="benefit-item">
              <div className="benefit-check">✓</div>

              <div>
                <h3>Find Opportunities</h3>
                <p>
                  Discover internships and jobs matching
                  your skills and career goals.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-check">✓</div>

              <div>
                <h3>Apply Easily</h3>
                <p>
                  Submit your details and resume to apply
                  for suitable opportunities.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-check">✓</div>

              <div>
                <h3>Track Applications</h3>
                <p>
                  Keep your recruitment journey organised
                  in one place.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="left-footer">
          <span>YOUR FUTURE. YOUR OPPORTUNITY.</span>
          <span>© 2026 Campus Hiring</span>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="register-right">
        <div className="register-card">
          <div className="mobile-brand">
            <div className="brand-icon">C</div>
            <span>INTERNSHIP & CAMPUS HIRING</span>
          </div>

          <div className="form-heading">
            <span className="form-tag">GET STARTED TODAY</span>

            <h2>Create Account</h2>

            <p>
              Join our community and take the next step
              in your professional journey.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <label className="field-label">
              I want to register as
            </label>

            <div className="role-selection">
              <button
                type="button"
                className={
                  role === "student"
                    ? "role-option active"
                    : "role-option"
                }
                onClick={() => {
                  setRole("student");
                  setMessage("");
                }}
              >
                <span className="role-icon">🎓</span>

                <span>
                  <strong>Student</strong>
                  <small>Find opportunities</small>
                </span>

                <span className="role-radio">
                  {role === "student" ? "✓" : ""}
                </span>
              </button>

              <button
                type="button"
                className={
                  role === "company"
                    ? "role-option active"
                    : "role-option"
                }
                onClick={() => {
                  setRole("company");
                  setMessage("");
                }}
              >
                <span className="role-icon">🏢</span>

                <span>
                  <strong>Company</strong>
                  <small>Hire talented students</small>
                </span>

                <span className="role-radio">
                  {role === "company" ? "✓" : ""}
                </span>
              </button>
            </div>

            <div className="form-grid">
              <div className="form-group full-width">
                <label htmlFor="name">Full Name *</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="email">Email Address *</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="phone">Phone Number *</label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your 10-digit phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  pattern="[0-9]{10}"
                  title="Enter a 10-digit phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="department">
                  Department *
                </label>

                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select department</option>
                  <option value="CSE">CSE</option>
                  <option value="IT">IT</option>
                  <option value="ECE">ECE</option>
                  <option value="EEE">EEE</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Civil">Civil</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="graduation_year">
                  Graduation Year *
                </label>

                <select
                  id="graduation_year"
                  name="graduation_year"
                  value={formData.graduation_year}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select year</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label htmlFor="resume">
                  Upload Resume (PDF) *
                </label>

                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,application/pdf"
                  onChange={handleResumeChange}
                  required
                />

                <small className="field-hint">
                  PDF format only. Maximum size: 2 MB.
                </small>

                {resume && (
                  <small className="field-hint">
                    Selected: {resume.name}
                  </small>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password *</label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Minimum 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">
                  Confirm Password *
                </label>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Re-enter password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
              </div>
            </div>

            {message && (
              <div
                className={
                  messageType === "success"
                    ? "form-message success"
                    : "form-message error"
                }
                role="status"
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              className="create-account-btn"
              disabled={loading}
            >
              {loading
                ? "Creating Account..."
                : `Create ${
                    role === "student" ? "Student" : "Company"
                  } Account`}

              {!loading && <span>→</span>}
            </button>
          </form>

          <div className="login-link">
            Already have an account?{" "}
            <Link to="/login">Log In</Link>
          </div>

          <Link to="/" className="back-home">
            <span>←</span> Back to Home
          </Link>

          <p className="security-note">
            Your career journey begins with one step.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Apply;