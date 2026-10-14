import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    // Backend currently supports Student login only
    if (role !== "Student") {
      setMessage(
        "Company and Placement Admin login are not connected yet."
      );
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8080/students/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(
          data.message || "Invalid email or password."
        );
        setLoading(false);
        return;
      }

      // Store basic login details
      localStorage.setItem("userId", String(data.id));
      localStorage.setItem("userName", data.name);
      localStorage.setItem("userEmail", data.email);
      localStorage.setItem("userRole", data.role);

      setMessage("Login successful!");

      // Navigate to the student dashboard
      navigate("/student-dashboard");
    } catch (error) {
      console.error("Login error:", error);

      setMessage(
        "Cannot connect to the backend. Please check whether Spring Boot is running on port 8080."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page">

      {/* Left Side - Existing Photo and Design */}
      <div className="login-left">
        <div className="login-overlay">
          <h1>CareerConnect</h1>

          <h2>Your Future Starts Here</h2>

          <p>
            Discover internships, explore job opportunities
            and take the next step in your career.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="login-right">
        <div className="login-box">

          <h2>Welcome Back!</h2>

          <p className="login-subtitle">
            Login to your account
          </p>

          <form onSubmit={handleLogin}>

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label>Login As</label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Student">Student</option>
              <option value="Company">Company</option>
              <option value="Admin">Placement Admin</option>
            </select>

            {message && (
              <p
                className="login-message"
                role="alert"
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <p className="register-text">
            Don't have an account?{" "}
            <Link to="/apply">Register Here</Link>
          </p>

          <Link to="/" className="back-home">
            ← Back to Home
          </Link>

        </div>
      </div>

    </div>
  );
}

export default Login;