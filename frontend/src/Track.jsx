import { Link } from "react-router-dom";

function Track() {
  return (
    <div className="track-page">

      <div className="track-container">

        {/* Header */}
        <div className="track-header">
          <p className="track-tag">APPLICATION TRACKING</p>

          <h1>Track Your Application</h1>

          <p>
            Monitor your application status and stay updated
            throughout the recruitment process.
          </p>
        </div>

        {/* Application Card */}
        <div className="application-card">

          <div className="application-top">

            <div>
              <span className="application-type">
                INTERNSHIP
              </span>

              <h2>Java Developer Intern</h2>

              <p className="application-company">
                Tech Solutions Pvt. Ltd.
              </p>
            </div>

            <div className="application-status">
              Application Submitted
            </div>

          </div>

          {/* Application Details */}
          <div className="application-details">

            <div>
              <span>Applied Date</span>
              <strong>20 Sep 2026</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Chennai</strong>
            </div>

            <div>
              <span>Duration</span>
              <strong>6 Months</strong>
            </div>

          </div>

          {/* Progress */}
          <div className="tracking-section">

            <h3>Application Progress</h3>

            <div className="tracking-steps">

              <div className="step completed">
                <div className="step-circle">✓</div>
                <div>
                  <strong>Applied</strong>
                  <p>Application submitted</p>
                </div>
              </div>

              <div className="step active">
                <div className="step-circle">2</div>
                <div>
                  <strong>Under Review</strong>
                  <p>Application is being reviewed</p>
                </div>
              </div>

              <div className="step">
                <div className="step-circle">3</div>
                <div>
                  <strong>Shortlisted</strong>
                  <p>Candidate selection</p>
                </div>
              </div>

              <div className="step">
                <div className="step-circle">4</div>
                <div>
                  <strong>Interview</strong>
                  <p>Interview process</p>
                </div>
              </div>

              <div className="step">
                <div className="step-circle">5</div>
                <div>
                  <strong>Final Result</strong>
                  <p>Selection result</p>
                </div>
              </div>

            </div>

          </div>

          {/* Interview Box */}
          <div className="interview-box">

            <div className="interview-icon">
              📅
            </div>

            <div>
              <h3>Interview Details</h3>
              <p>
                Your interview details will appear here once
                you are shortlisted.
              </p>
            </div>

          </div>

          {/* Bottom */}
          <div className="track-actions">

            <Link
              to="/internships"
              className="track-back-btn"
            >
              ← Browse Opportunities
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Track;