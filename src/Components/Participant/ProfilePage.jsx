import React, { useEffect, useState } from "react";
import "./ProfilePage.css";

const ProfileSection = ({ handleBack }) => {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    skills: "React, JavaScript, HTML, CSS",
    location: "New York, USA",
    experience: "5 years",
    education: "Bachelor's Degree in Computer Science",
    languages: "English, Spanish",
  });

  const [editMode, setEditMode] = useState(false);
  const [updatedProfileData, setUpdatedProfileData] = useState({ ...profileData });

  useEffect(()=>{
    fetchCustomerDetails();
  }, []);

  const fetchCustomerDetails = async ()=>{
    let user = JSON.parse(localStorage.getItem('user'));
    let response = await fetch(`/api/user/${user._id}`,{
      method: 'GET'
    });
    response = await response.json();
    setProfileData(response.result);
    setUpdatedProfileData(response.result);
    console.log('response of fetchCustomerDetails, ', response);
  }

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfileData({ ...updatedProfileData, [name]: value });
  };

  const handleSaveProfile = async() => {
    let response = await fetch('/api/user/update',{
      method: 'POST',
      body: JSON.stringify(updatedProfileData)
    });
    response = await response.json();
    if(response.status=='success'){
      alert('Profile updated successfully');
    }
    setProfileData(updatedProfileData);
    setEditMode(false);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setUpdatedProfileData({ ...profileData });
  };

  return (
    <div className="profile-section">
      <h2 className="profile-title">Participant Profileeee</h2>
      
      {editMode ? (
        <div className="profile-details">
          <div className="profile-item">
            <label className="profile-label">Name:</label>
            <input
              type="text"
              name="name"
              value={updatedProfileData.name}
              onChange={handleInputChange}
              className="profile-input"
            />
          </div>
          <div className="profile-item">
            <label className="profile-label">Email:</label>
            <input
              type="text"
              name="email"
              value={updatedProfileData.email}
              onChange={handleInputChange}
              className="profile-input"
            />
          </div>
          <div className="profile-item">
            <label className="profile-label">Skills:</label>
            <input
              type="text"
              name="skills"
              value={updatedProfileData.skills}
              onChange={handleInputChange}
              className="profile-input"
            />
          </div>
          <div className="profile-item">
            <label className="profile-label">Location:</label>
            <input
              type="text"
              name="location"
              value={updatedProfileData.location}
              onChange={handleInputChange}
              className="profile-input"
            />
          </div>
          <div className="profile-item">
            <label className="profile-label">Experience:</label>
            <input
              type="text"
              name="experience"
              value={updatedProfileData.experience}
              onChange={handleInputChange}
              className="profile-input"
            />
          </div>
          <div className="profile-item">
            <label className="profile-label">Education:</label>
            <input
              type="text"
              name="education"
              value={updatedProfileData.education}
              onChange={handleInputChange}
              className="profile-input"
            />
          </div>
          <div className="profile-item">
            <label className="profile-label">Languages:</label>
            <input
              type="text"
              name="languages"
              value={updatedProfileData.languages}
              onChange={handleInputChange}
              className="profile-input"
            />
          </div>
          <div className="profile-actions">
            <button className="profile-btn" onClick={handleSaveProfile}>
              Save
            </button>
            <button className="profile-btn" onClick={handleCancelEdit}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="profile-details">
          <div className="profile-item">
            <label className="profile-label">Name:</label>
            <span className="profile-value">{profileData.name}</span>
          </div>
          <div className="profile-item">
            <label className="profile-label">Email:</label>
            <span className="profile-value">{profileData.email}</span>
          </div>
          <div className="profile-item">
            <label className="profile-label">Skills:</label>
            <span className="profile-value">{profileData.skills}</span>
          </div>
          <div className="profile-item">
            <label className="profile-label">Location:</label>
            <span className="profile-value">{profileData.location}</span>
          </div>
          <div className="profile-item">
            <label className="profile-label">Experience:</label>
            <span className="profile-value">{profileData.experience}</span>
          </div>
          <div className="profile-item">
            <label className="profile-label">Education:</label>
            <span className="profile-value">{profileData.education}</span>
          </div>
          <div className="profile-item">
            <label className="profile-label">Languages:</label>
            <span className="profile-value">{profileData.languages}</span>
          </div>
          <div className="profile-actions">
            <button className="profile-btn" onClick={handleEditProfile}>
              Edit Profile
            </button>

            <button className="back-button" onClick={handleBack}>
        Back
      </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
