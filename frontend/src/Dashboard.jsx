import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
return ( <div className="dashboard-page"> <nav className="dashboard-navbar"> <h2>CareerConnect</h2> <div className="dashboard-nav-links"> <Link to="/">Home</Link> <Link to="/internships">Internships</Link> <Link to="/jobs">Jobs</Link> <Link to="/track">Track Applications</Link> <Link to="/login">Logout</Link> </div> </nav>

  <section className="dashboard-welcome">
    <h1>Welcome to Your Dashboard!</h1>
    <p>
      Explore opportunities, apply for jobs and internships,
      and track your application status in one place.
    </p>
  </section>

  <section className="dashboard-cards">
    <div className="dashboard-card">
      <h3>👤 My Profile</h3>
      <p>View and manage your student profile.</p>
      <Link to="/profile">View Profile</Link>
    </div>

    <div className="dashboard-card">
      <h3>💼 Internships</h3>
      <p>Explore internship opportunities.</p>
      <Link to="/internships">Explore Internships</Link>
    </div>

    <div className="dashboard-card">
      <h3>🏢 Jobs</h3>
      <p>Find jobs that match your skills.</p>
      <Link to="/jobs">Explore Jobs</Link>
    </div>

    <div className="dashboard-card">
      <h3>📋 My Applications</h3>
      <p>Check your application progress.</p>
      <Link to="/track">Track Applications</Link>
    </div>
  </section>
</div>
);
}

export default Dashboard;
