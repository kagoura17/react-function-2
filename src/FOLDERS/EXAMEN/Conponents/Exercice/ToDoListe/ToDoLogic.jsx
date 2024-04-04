import { useState } from "react";
import Model from "../ExoModal/Model";

const ToDoLogic = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");


  return <>
<Model inputValue={newTodo} ></Model>



  </>;
};

export default ToDoLogic;
