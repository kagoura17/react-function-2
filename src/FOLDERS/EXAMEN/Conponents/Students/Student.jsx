import { useEffect, useState } from "react";
import NavBar from "../../Conponents/Navbar/NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";


const Student = () => {
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const [student, setStudent] = useState({});
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => console.log("Error", error));
  }, [url]);

  return (
    <>
      <NavBar />
      <div className="student-profile container">
        <img src={studentpic} alt="" />
        <h1>{student.name}</h1>
        <h1>{student.email}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quasi ipsum optio nisi
          eius et. Repellendus amet eum odit quia aliquam! Veritatis, dolore! Aliquam praesentium
          dignissimos fuga, modi quam itaque quam itaque itaque Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolor quasi ipsum optio nisi eius et. Repellendus amet eum
          odit quia aliquam! Veritatis, dolore! Aliquam praesentium dignissimos fuga, modi quam
          itaque itaque itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quasi
          ipsum optio nisi elus et. Repellendus amet eum odit quia aliquam! Veritatis, dolore!
          Aliquam praesentium dignissimos fuga, modi quam itaque quam itaque itaque Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Dolor quasi ipsum optio nisi eius et.
          Repellendus amet eum odit quia aliquam! Veritatis, dolore! Aliquam praesentium
          dignissimos fuga, modi quam itaque
        </p>
        {showMore && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A in tenetur id ullam tempora
            quidem rerum sint, repellat sit, aperiam quas voluptatum nisi maxime molestias quam ea
            minus quo sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A in
            tenetur id ullam tempora quidem rerum sint, repellat sit, aperiam quas voluptatum nisi
            maxime molestias quam ea minus quo sapiente. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. A in tenetur id ullam tempora quidem rerum sint, repellat sit,
            aperiam quas voluptatum nisi maxime molestias quam ea minus quo sapiente. torem ipsum
            dolor sit amet, consectetur adipisicing elit. A in tenetur id ullam tempora quidem
            rerum sint, repellat sit, aperiam quas voluptatum nisi maxime molestias quam ea minus
            quo sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A in tenetur
            id ullam tempora quidem rerum sint, repellat sit, aperiam
          </p>
        )}
        <button onClick={toggleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
};

export default Student;
