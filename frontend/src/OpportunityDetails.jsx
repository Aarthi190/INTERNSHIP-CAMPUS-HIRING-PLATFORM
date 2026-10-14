
import { Link } from "react-router-dom";

function OpportunityDetails() {
  return (
    <div className="opportunity-page">

      <div className="opportunity-container">

        {/* Header */}
        <div className="opportunity-header">
          <p className="opportunity-tag">
            INTERNSHIP OPPORTUNITY
          </p>

          <h1>Java Developer Intern</h1>

          <p>
            Start your career with practical industry experience
            and work on real-world software development projects.
          </p>
        </div>

        {/* Main Card */}
        <div className="opportunity-card">

          {/* Company + Badge */}
          <div className="opportunity-top">

            <div className="opportunity-company">

              <div className="opportunity-company-icon">
                T
              </div>

              <div>
                <h3>Tech Solutions Pvt. Ltd.</h3>
                <span>Software & Technology</span>
              </div>

            </div>

            <span className="opportunity-badge">
              INTERNSHIP
            </span>

          </div>

          {/* Title */}
          <h2 className="opportunity-title">
            Java Developer Intern
          </h2>

          {/* Details */}
          <div className="opportunity-details">

            <div className="opportunity-detail-box">
              <span>Location</span>
              <strong>📍 Chennai</strong>
            </div>

            <div className="opportunity-detail-box">
              <span>Duration</span>
              <strong>🕒 6 Months</strong>
            </div>

            <div className="opportunity-detail-box">
              <span>Technology</span>
              <strong>💻 Java</strong>
            </div>

          </div>

          {/* About */}
          <div className="opportunity-section">
            <h2>About the Opportunity</h2>

            <p>
              This internship provides an opportunity to work on
              real-world Java projects and gain practical experience
              in software development. Interns will work with
              development concepts and improve their technical
              and problem-solving skills.
            </p>
          </div>

          {/* Skills */}
          <div className="opportunity-section">
            <h2>Required Skills</h2>

            <p>
              Java, OOP, SQL, HTML, CSS and basic problem solving.
            </p>
          </div>

          {/* What you will learn */}
          <div className="opportunity-section">
            <h2>What You Will Learn</h2>

            <p>
              • Java application development<br />
              • Object-oriented programming<br />
              • Database and SQL concepts<br />
              • Web development fundamentals<br />
              • Real-world software development practices
            </p>
          </div>

          {/* Action Buttons */}
          <div className="opportunity-actions">

            <Link
              to="/internships"
              className="opportunity-back-btn"
            >
              ← Back to Internships
            </Link>

            <Link
              to="/apply"
              className="opportunity-apply-btn"
            >
              Apply for Internship →
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default OpportunityDetails;