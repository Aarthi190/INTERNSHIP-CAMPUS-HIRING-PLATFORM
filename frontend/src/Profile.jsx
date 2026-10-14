import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");
  const [resume, setResume] = useState(null);

  const handleProfile = (e) => {
    e.preventDefault();

    if (!name || !education || !skills || !location) {
      alert("Please complete all profile details.");
      return;
    }

    if (!resume) {
      alert("Please upload your resume.");
      return;
    }

    alert("Profile and resume saved successfully!");
    navigate("/apply");
  };

  return (
    <div className="profile-page">
      <h1>Create Your Profile</h1>

      <p>
        Add your education, skills and career details to find better
        opportunities.
      </p>

      <form className="profile-form" onSubmit={handleProfile}>

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Education</label>
        <input
          type="text"
          placeholder="Example: B.Tech Information Technology"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />

        <label>Skills</label>
        <input
          type="text"
          placeholder="Example: Java, SQL, HTML, CSS"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <label>Location</label>
        <input
          type="text"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label>Upload Resume</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResume(e.target.files[0])}
        />

        <button type="submit">
          Save Profile
        </button>

      </form>
    </div>
  );
}

export default Profile;