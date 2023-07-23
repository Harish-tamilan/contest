import React, { useState } from "react";

const Signup = ({ updateUserCredentials }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [workStatus, setWorkStatus] = useState("");
  const [resume, setResume] = useState(null);
  const [whatsappUpdates, setWhatsappUpdates] = useState(false);

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    const user = {
      fullName,
      email,
      password,
      mobileNumber,
      workStatus,
      resume,
      whatsappUpdates,
    };
    updateUserCredentials(user);
    console.log("Registered:", user);
    setFullName("");
    setEmail("");
    setPassword("");
    setMobileNumber("");
    setWorkStatus("");
    setResume(null);
    setWhatsappUpdates(false);
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
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
          Work status:
          <select
            value={workStatus}
            onChange={(e) => setWorkStatus(e.target.value)}
          >
            <option value="">Select work status</option>
            <option value="experienced">I'm experienced</option>
            <option value="fresher">I'm a fresher</option>
          </select>
        </label>
        <br />
        <label>
          Resume:
          <input
            type="file"
            accept=".doc,.docx,.pdf,.rtf"
            onChange={handleResumeChange}
          />
        </label>
        <br />
        <label>
          Send me important updates on WhatsApp:
          <input
            type="checkbox"
            checked={whatsappUpdates}
            onChange={(e) => setWhatsappUpdates(e.target.checked)}
          />
        </label>
        <br />
        <button id="button_signup" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
