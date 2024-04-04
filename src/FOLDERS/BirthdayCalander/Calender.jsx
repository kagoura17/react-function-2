

import "./calender.css"
import { useState } from "react";
import Data from "./Data";
import List from "./Liste";
const Calender = () => {
  const [people, setPeople] = useState(Data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
};
export default Calender;
