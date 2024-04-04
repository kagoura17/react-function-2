import { useState } from "react";
import "./vaidationForm.css";
const ValidationForm = () => {
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.yourName.trim() ||
      !formData.yourEmail.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill out all fields");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.yourEmail)) {
      alert("Invalid email format");
      return;
    }
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="main-contact">
        <h1>Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label>Name :</label> <br />
            <input
              type="text"
              name="yourName"
              value={formData.yourName}
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label>Email :</label> <br />
            <input
              type="email"
              name="yourEmail"
              value={formData.yourEmail}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label>Message :</label> <br />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message"
              style={{ resize: "vertical", minHeight: "100px" }}
            />
          </div>
          <button className="contact-btn" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ValidationForm;
