import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState("student");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    graduation_year: "",
    resume_url: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (role === "student") {
      try {
        const response = await fetch(
          "http://localhost:8080/students",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              department: formData.department,
              graduation_year: Number(formData.graduation_year),
              resume_url: formData.resume_url,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Registration failed");
        }

        setMessage("Registration successful!");

        setTimeout(() => {
          navigate("/login");
        }, 1200);

      } catch (error) {
        console.error(error);
        setMessage(
          "Registration failed. Email may already exist."
        );
      }
    }
  };

  return (
    <div className="register-page">

      {/* LEFT SIDE */}

      <div className="register-hero">

        <div className="register-hero-content">

          <p className="register-tag">
            INTERNSHIP & CAMPUS HIRING
          </p>

          <h1>
            Build Your
            <br />
            <span>Career With Us</span>
          </h1>

          <p className="register-description">
            Create your account and discover internship and
            job opportunities from leading companies.
          </p>

          <div className="register-features">

            <div className="register-feature">
              <div className="register-feature-icon">
                ✓
              </div>

              <div>
                <h3>Find Opportunities</h3>
                <p>
                  Discover internships and jobs matching your skills.
                </p>
              </div>
            </div>

            <div className="register-feature">
              <div className="register-feature-icon">
                ✓
              </div>

              <div>
                <h3>Apply Easily</h3>
                <p>
                  Apply to opportunities with your profile and resume.
                </p>
              </div>
            </div>

            <div className="register-feature">
              <div className="register-feature-icon">
                ✓
              </div>

              <div>
                <h3>Track Applications</h3>
                <p>
                  Follow your applications and interview progress.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>


      {/* RIGHT SIDE */}

      <div className="register-card">

        <div className="register-card-header">

          <h2>Create Account</h2>

          <p>
            Join our internship and campus hiring platform.
          </p>

        </div>


        {/* ROLE */}

        <div className="register-role">

          <button
            type="button"
            className={
              role === "student"
                ? "register-role-btn active"
                : "register-role-btn"
            }
            onClick={() => setRole("student")}
          >
            👤 Student
          </button>

          <button
            type="button"
            className={
              role === "company"
                ? "register-role-btn active"
                : "register-role-btn"
            }
            onClick={() => setRole("company")}
          >
            🏢 Company
          </button>

        </div>


        {/* STUDENT */}

        {role === "student" && (

          <form
            className="register-form"
            onSubmit={handleSubmit}
          >

            <label>Full Name *</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />


            <label>Email Address *</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />


            <div className="register-row">

              <div>

                <label>Phone Number *</label>

                <input
                  type="text"
                  name="phone"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>


              <div>

                <label>Department *</label>

                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select
                  </option>

                  <option value="CSE">
                    CSE
                  </option>

                  <option value="IT">
                    IT
                  </option>

                  <option value="ECE">
                    ECE
                  </option>

                  <option value="EEE">
                    EEE
                  </option>

                  <option value="Mechanical">
                    Mechanical
                  </option>

                  <option value="Civil">
                    Civil
                  </option>

                </select>

              </div>

            </div>


            <div className="register-row">

              <div>

                <label>Graduation Year *</label>

                <select
                  name="graduation_year"
                  value={formData.graduation_year}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select year
                  </option>

                  <option value="2025">
                    2025
                  </option>

                  <option value="2026">
                    2026
                  </option>

                  <option value="2027">
                    2027
                  </option>

                  <option value="2028">
                    2028
                  </option>

                </select>

              </div>


              <div>

                <label>Resume *</label>

                <input
                  type="text"
                  name="resume_url"
                  placeholder="resume.pdf"
                  value={formData.resume_url}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            <label>Password *</label>

            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />


            <button
              type="submit"
              className="register-submit"
            >
              Create Student Account →
            </button>

          </form>

        )}


        {/* COMPANY */}

        {role === "company" && (

          <div className="register-form">

            <label>Company Name *</label>

            <input
              type="text"
              placeholder="Enter company name"
            />


            <label>Company Email *</label>

            <input
              type="email"
              placeholder="company@example.com"
            />


            <label>Industry *</label>

            <input
              type="text"
              placeholder="IT Services"
            />


            <label>Website</label>

            <input
              type="text"
              placeholder="https://company.com"
            />


            <button
              type="button"
              className="register-submit"
            >
              Create Company Account →
            </button>

          </div>

        )}


        {message && (
          <p className="register-message">
            {message}
          </p>
        )}


        <p className="register-login">
          Already have an account?
          <Link to="/login">
            {" "}Login
          </Link>
        </p>


        <Link
          to="/"
          className="register-back"
        >
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Register;