import React, { useState } from "react";

import Task from "./Task";

export default function Tasklist(props) {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    const { data: task } = title;

    setTasks(...tasks, task);
  }
  return (
    <>
      <div className="inputContainer">
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </div>

      <button type="button" onClick={handleAddTask}>
        Adicionar
      </button>
      <ul>
        <Task>{title}</Task>
      </ul>
    </>
  );
}
