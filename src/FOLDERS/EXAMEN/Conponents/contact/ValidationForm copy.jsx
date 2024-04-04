// import { useState } from "react";

// const ValidationForm = () => {
  
//   const [formData, setFormData] = useState({
//     yourName: "",
//     yourEmail: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});

  
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

  
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const newErrors = {};
//     if (!formData.yourName.trim()) {
//       newErrors.yourName = "Name is required";
//     }
//     if (!formData.yourEmail.trim()) {
//       newErrors.yourEmail = "Email is required";
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.yourEmail)) {
//       newErrors.yourEmail = "Invalid email format";
//     }
//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     }
//     setErrors(newErrors);

  
//     if (Object.keys(newErrors).length === 0) {
    
//       console.log("Form submitted:", formData);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name :</label>
//           <input
//             type="text"
//             name="yourName"
//             value={formData.yourName}
//             onChange={handleInputChange}
//             placeholder="Enter your name"
//           />
//           {errors.yourName && <span className="error">{errors.yourName}</span>}
//         </div>
//         <div>
//           <label>Email :</label>
//           <input
//             type="email"
//             name="yourEmail"
//             value={formData.yourEmail}
//             onChange={handleInputChange}
//             placeholder="Enter your email"
//           />
//           {errors.yourEmail && (
//             <span className="error">{errors.yourEmail}</span>
//           )}
//         </div>
//         <div>
//           <label>Message :</label>
//           <input
//             type="text"
//             name="message"
//             value={formData.message}
//             onChange={handleInputChange}
//             placeholder="Enter your message"
//           />
//           {errors.message && <span className="error">{errors.message}</span>}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default ValidationForm;
import { useState } from "react";

const ValidationForm = () => {
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.yourName.trim() || !formData.yourEmail.trim() || !formData.message.trim()) {
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
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name :</label>
          <input
            type="text"
            name="yourName"
            value={formData.yourName}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="yourEmail"
            value={formData.yourEmail}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>Message :</label>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ValidationForm;
