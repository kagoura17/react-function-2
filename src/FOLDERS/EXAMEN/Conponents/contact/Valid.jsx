import { useState } from "react";

const Valid = () => {
    const[form, setForm]=useState("")
    const handleInputChange=()=>{



        
    }
  return (
    <>
      <form>
        <div>
          <label>Name :</label>
          <input type="text" placeholder="Enter your name"  onChange={(e) => handleInputChange(e.target.value)}/>
        </div>
        <div>
          <label>Email :</label>
          <input type="email" placeholder="Enter your email"/>
        </div>
        <div>
          <label>Message :</label>
          <input type="text" placeholder="Enter your message"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Valid;
