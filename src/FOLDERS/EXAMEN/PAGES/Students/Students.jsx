import NavBar from "../../Conponents/Navbar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import StudentAPI from "../../Conponents/Students/StudentAPI";
const Students = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <StudentAPI students={students}></StudentAPI>
    </>
  );
};

export default Students;
