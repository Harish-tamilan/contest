import React, { useState } from "react";

const Signup = ({ updateUserCredentials, handleButtonClicked }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [whatsappUpdates, setWhatsappUpdates] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [professionalEmail, setProfessionalEmail] = useState("");
  const [professionalTitle, setProfessionalTitle] = useState("");
  const [preferredCommunication, setPreferredCommunication] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    const user = {
      fullName,
      email,
      password,
      mobileNumber,
      whatsappUpdates,
      companyName,
      professionalEmail,
      professionalTitle,
      preferredCommunication,
      termsAccepted,
    };
    updateUserCredentials(user);
    console.log("Registered:", user);
    setFullName("");
    setEmail("");
    setPassword("");
    setMobileNumber("");
    setCompanyName("");
    setProfessionalEmail("");
    setProfessionalTitle("");
    setPreferredCommunication("");
    setTermsAccepted(false);
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form className="form_signup" onSubmit={handleRegistrationSubmit}>
        <label>
          Full name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email ID:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mobile number:
          <input
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Company name:
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Professional email:
          <input
            type="email"
            value={professionalEmail}
            onChange={(e) => setProfessionalEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Professional title:
          <input
            type="text"
            value={professionalTitle}
            onChange={(e) => setProfessionalTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Preferred communication:
          <input
            type="text"
            value={preferredCommunication}
            onChange={(e) => setPreferredCommunication(e.target.value)}
          />
        </label>
        <br />
        <label>
          Terms and conditions:
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
        </label>
        <br />
        <button id="button_signup" onClick={() => handleButtonClicked("signup")} type="submit">
          Sign Up
        </button>
      </form>
      <button
        id="button_signup_back"
        onClick={() => handleButtonClicked("")}
      >
        Back
      </button>
    </div>
  );
};

export default Signup;
