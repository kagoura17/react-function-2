import { useState } from "react";
import Data from "./Data";
import Menu from "./Menu";
import "./menu.css";

const Restaurant = () => {
  const [menu, setMenu] = useState(Data);
  const [setCategory] = useState("all");

  const filterItems = (category) => {
    if (category === "all") {
      setMenu(Data);
    } else {
      const filteredItems = Data.filter((item) => item.category === category);
      setMenu(filteredItems);
    }

    setCategory(category);
  };

  return (
    <>
      <div className="top">
        <h1>Our Menu</h1>
        <div className="btn">
          <button onClick={() => filterItems("all")}>All</button>
          <button onClick={() => filterItems("breakfast")}>Breakfast</button>
          <button onClick={() => filterItems("lunch")}>Lunch</button>
          <button onClick={() => filterItems("shakes")}>Shakes</button>
        </div>
      </div>
      <Menu data={menu} />
    </>
  );
};

export default Restaurant;
