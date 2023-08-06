import React, { useState, useEffect } from "react";

const ProfileSection = () => {
  const [recruiterName, setRecruiterName] = useState("John Doe");
  const [recruiterTitle, setRecruiterTitle] = useState("Senior Recruiter");
  const [recruiterBio, setRecruiterBio] = useState("Experienced recruiter with a passion for finding top talent.");
  const [emailAddress, setEmailAddress] = useState("johndoe@example.com");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [linkedinProfile, setLinkedinProfile] = useState("linkedin.com/in/johndoe");
  const [companyName, setCompanyName] = useState("ABC Company");
  const [companyWebsite, setCompanyWebsite] = useState("www.abccompany.com");

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleUpdateProfile = async () => {
    // Perform update logic here with dummy data
    const updatedProfile = {
      name:recruiterName,
      email: emailAddress,
      mobile: phoneNumber
    };
    let response = await fetch('/api/user/update',{
      method: 'POST',
      body: JSON.stringify(updatedProfile)
    });
    response = await response.json();
    if(response.status=='success'){
      alert('Updated successfully');
    }else{
      alert(response.error || 'Error while updating the profile');
    }
    console.log("Updated Profile:", updatedProfile);
  };

  const fetchUserDetails = async () => {
    let manager = JSON.parse(localStorage.getItem('manager'));
    console.log('manager, ', manager);
    let response = await fetch(`/api/user/${manager?._id}`, {
      method: 'GET'
    });
    response = await response.json();
    if (response.status == 'success') {
      setRecruiterName(response.result.name);
      setEmailAddress(response.result.email);
      setPhoneNumber(response.result.mobile);
    } else {
      alert(response.error);
    }
    console.log('response of fetchUserDetails, ', response);
  }

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
        <button type="button" onClick={handleUpdateProfile}>
          Update
        </button>
      </form>
    </div>
  );
};

export default ProfileSection;
