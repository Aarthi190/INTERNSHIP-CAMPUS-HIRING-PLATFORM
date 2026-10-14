import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Internships.css";

function Internships() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/internships")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch internships");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Internship data:", data);
        setInternships(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching internships:", error);
        setError(
          "Unable to load internships. Please check whether the backend is running."
        );
        setLoading(false);
      });
  }, []);

  return (
    <div className="internship-page">
      {/* Page Header */}
      <section className="internship-header">
        <span className="internship-tag">
          CAREER DEVELOPMENT & INDUSTRY EXPERIENCE
        </span>

        <h1>
          Explore Internship <span>Opportunities</span>
        </h1>

        <p>
          Discover exciting opportunities, develop your skills, and take
          the next step towards your dream career.
        </p>
      </section>

      {/* Internship List */}
      <section className="internship-section">
        <div className="internship-section-heading">
          <div>
            <h2>Available Internships</h2>
            <p>Find the right opportunity to grow your career.</p>
          </div>

          {!loading && !error && (
            <span className="internship-count">
              {internships.length} Opportunities
            </span>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <div className="internship-message">
            <div className="internship-loader"></div>
            <p>Loading internship opportunities...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="internship-message error-message">
            <h3>Unable to load internships</h3>
            <p>{error}</p>
            <button
              className="internship-retry-btn"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        )}

        {/* No Data */}
        {!loading && !error && internships.length === 0 && (
          <div className="internship-message">
            <div className="empty-icon">📂</div>
            <h3>No internships available</h3>
            <p>New internship opportunities will appear here.</p>
          </div>
        )}

        {/* Internship Cards */}
        {!loading && !error && internships.length > 0 && (
          <div className="internship-grid">
            {internships.map((internship) => (
              <article
                className="internship-card"
                key={internship.internship_id}
              >
                <div className="internship-card-top">
                  <div className="company-icon">I</div>

                  <span className="internship-badge">
                    Internship
                  </span>
                </div>

                <h3 className="internship-title">
                  {internship.title}
                </h3>

                <p className="company-name">
                  Company ID: {internship.company_id}
                </p>

                <div className="internship-divider"></div>

                <div className="internship-details">
                  <div className="detail-item">
                    <span className="detail-icon">📍</span>
                    <div>
                      <small>Location</small>
                      <strong>{internship.location || "Not specified"}</strong>
                    </div>
                  </div>

                  <div className="detail-item">
                    <span className="detail-icon">🕒</span>
                    <div>
                      <small>Duration</small>
                      <strong>{internship.duration || "Not specified"}</strong>
                    </div>
                  </div>
                </div>

                <div className="internship-card-bottom">
                  <div className="stipend-info">
                    <small>Monthly Stipend</small>
                    <strong>
                      {internship.stipend != null
                        ? `₹${Number(internship.stipend).toLocaleString("en-IN")}`
                        : "Not specified"}
                    </strong>
                  </div>

                  <Link
                    to="/opportunity"
                    className="internship-btn"
                  >
                    View Details <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Internships;