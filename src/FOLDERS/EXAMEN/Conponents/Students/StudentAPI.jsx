import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
const StudentAPI = ({students}) => {
      
  const [presence, setPresence] = useState({});

  const togglePresence = (email) => {
    setPresence((prevPresence) => ({
      ...prevPresence,
      [email]: !prevPresence[email]
    }));
  };

  return (
    <div className="container student-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Presence</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>
                <Link to={`/students/${student.id}`}>{student.name}</Link>
              </td>
              <td>{student.email}</td>
              <td className="buttons">
                <button
                  onClick={() => togglePresence(student.email)}
                  className={
                    presence[student.email] ? "checkButton activeButton" : "checkButton"
                  }
                >
                  <FaCheck />
                </button>
                <button
                  onClick={() => togglePresence(student.email)}
                  className={
                    presence[student.email] === false
                      ? "crossButton activeButton"
                      : "crossButton"
                  }
                >
                  <ImCross />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
    

export default StudentAPI;


