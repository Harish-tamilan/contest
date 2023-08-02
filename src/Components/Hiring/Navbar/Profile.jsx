import React, { useState } from "react";

const ProfileSection = () => {
  const [recruiterName, setRecruiterName] = useState("John Doe");
  const [recruiterTitle, setRecruiterTitle] = useState("Senior Recruiter");
  const [recruiterBio, setRecruiterBio] = useState("Experienced recruiter with a passion for finding top talent.");
  const [emailAddress, setEmailAddress] = useState("johndoe@example.com");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [linkedinProfile, setLinkedinProfile] = useState("linkedin.com/in/johndoe");
  const [companyName, setCompanyName] = useState("ABC Company");
  const [companyWebsite, setCompanyWebsite] = useState("www.abccompany.com");

  const handleUpdateProfile = () => {
    // Perform update logic here with dummy data
    const updatedProfile = {
      recruiterName,
      recruiterTitle,
      recruiterBio,
      emailAddress,
      phoneNumber,
      linkedinProfile,
      companyName,
      companyWebsite,
    };

    console.log("Updated Profile:", updatedProfile);
  };

  const handleDeleteProfile = () => {
    // Perform delete logic here with dummy data
    console.log("Profile deleted successfully!");

    // Reset the state values
    setRecruiterName("");
    setRecruiterTitle("");
    setRecruiterBio("");
    setEmailAddress("");
    setPhoneNumber("");
    setLinkedinProfile("");
    setCompanyName("");
    setCompanyWebsite("");
  };

  return (
    <div>
      <h2>Recruiter Profile</h2>
      <form>
        <label>
          Recruiter Name:
          <input
            type="text"
            value={recruiterName}
            onChange={(e) => setRecruiterName(e.target.value)}
          />
        </label>
        <label>
          Recruiter Title:
          <input
            type="text"
            value={recruiterTitle}
            onChange={(e) => setRecruiterTitle(e.target.value)}
          />
        </label>
        <label>
          Recruiter Bio:
          <textarea
            value={recruiterBio}
            onChange={(e) => setRecruiterBio(e.target.value)}
          />
        </label>
        <label>
          Email Address:
          <input
            type="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <label>
          LinkedIn Profile:
          <input
            type="text"
            value={linkedinProfile}
            onChange={(e) => setLinkedinProfile(e.target.value)}
          />
        </label>
        <label>
          Company Name:
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <label>
          Company Website URL:
          <input
            type="text"
            value={companyWebsite}
            onChange={(e) => setCompanyWebsite(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleUpdateProfile}>
          Update
        </button>
        <button type="button" onClick={handleDeleteProfile}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default ProfileSection;
