import { useState } from "react";
const FiltredList = () => {
  const items = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Pineapple"];
  const [filtredValue, setFiltreValue] = useState("");
  const handleOnchange = (e) => {
    setFiltreValue(e.target.value);
  };
  const filtredItems = items.filter((item) =>
    item.toLowerCase().includes(filtredValue.toLowerCase())
  );

  return (
    <>
      <h1>Filtred List</h1>
      <form>
        <input type="text" value={filtredValue} onChange={handleOnchange} />
      </form>
      <ul>
        {filtredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default FiltredList;
