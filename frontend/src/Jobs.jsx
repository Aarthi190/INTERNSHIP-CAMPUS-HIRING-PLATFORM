import { useEffect, useState } from "react";
import "./Jobs.css";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All Jobs");

  useEffect(() => {
    fetch("http://localhost:8080/jobs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        return response.json();
      })
      .then((data) => {
        setJobs(Array.isArray(data) ? data : []);
        setError("");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Jobs load error:", error);
        setError("Unable to load jobs. Please try again.");
        setLoading(false);
      });
  }, []);

  const filteredJobs =
    filter === "All Jobs"
      ? jobs
      : jobs.filter(
          (job) =>
            job.jobType?.toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="jobs-container">
      {/* Background Section */}
      <section className="jobs-hero">
        <h1>Your Career Starts Here</h1>

        <p>
          Discover opportunities and take the next step
          in your career.
        </p>
      </section>

      {/* Job Filters */}
      <div className="jobs-filters">
        {["All Jobs", "Full-time", "Part-time", "Internship"].map(
          (type) => (
            <button
              key={type}
              className={filter === type ? "active-filter" : ""}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          )
        )}
      </div>

      {/* Loading Message */}
      {loading && <p className="jobs-message">Loading jobs...</p>}

      {/* Error Message */}
      {!loading && error && (
        <p className="jobs-error">{error}</p>
      )}

      {/* Empty Jobs Message */}
      {!loading && !error && filteredJobs.length === 0 && (
        <p className="jobs-message">
          No jobs available in this category.
        </p>
      )}

      {/* Jobs List */}
      {!loading && !error && filteredJobs.length > 0 && (
        <div className="jobs-list">
          {filteredJobs.map((job) => (
            <div
              className="job-card"
              key={job.id ?? job.jobId}
            >
              <h2>{job.title ?? "Job Opportunity"}</h2>

              <p>
                <strong>Company:</strong>{" "}
                {job.companyName ?? "Not specified"}
              </p>

              <p>
                <strong>Location:</strong>{" "}
                {job.location ?? "Not specified"}
              </p>

              <p>
                <strong>Job Type:</strong>{" "}
                {job.jobType ?? "Not specified"}
              </p>

              <p>
                <strong>Description:</strong>{" "}
                {job.description ?? "No description available"}
              </p>

              <button
                onClick={() =>
                  alert("Job application feature will be connected next.")
                }
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Jobs;