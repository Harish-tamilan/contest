import React, { useState, useEffect } from "react";

const Signup = (props) => {
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


  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name:fullName,
      email,
      password,
      mobile:mobileNumber,
      type: 'Manager'
    };
    console.log("Registered:", user);
    let response = await fetch('/api/user/update',{
      method:"POST",
      body: JSON.stringify(user)
    });
    response = await response.json();
    console.log('response is ', response);
    if(response.status=='success'){
      alert('Registration successfull');
    }else{
      alert(response.error);
    }
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
        <button id="button_signup" type="submit">
          Sign Up
        </button>
      </form>
      <button
        id="button_signup_back"
        onClick={props.handleButtonClicked}
      >
        Back
      </button>
    </div>
  );
};

export default Signup;
