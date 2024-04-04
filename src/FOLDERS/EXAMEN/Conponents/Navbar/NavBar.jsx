import { NavLink } from "react-router-dom";
import img from "../IMAGES/LOGO.svg";
import "./navBar.css"
const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <img src={img} alt={img} />
        <ul>
          <NavLink to="/">
            {" "}
            <li>Home</li>
          </NavLink>
          <NavLink to="/students">
            {" "}
            <li>Students</li>
          </NavLink>
          <NavLink to="/exercices">
            {" "}
            <li>Exercices</li>
          </NavLink>
          <NavLink to="/constact">
            {" "}
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
