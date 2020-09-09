import React, { useState } from "react";

import Task from "./Task";

export default function Tasklist() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  function handleAddTask() {
    const task = title;

    setTasks(...tasks, task);
    setTitle("");
  }

  return (
    <>
      <div className="InputContainer">
        <input
          type="text"
          id="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="text" />
      </div>

      <button type="button" onClick={handleAddTask}>
        Adicionar
      </button>

      <ul>
        {tasks.map((tasks) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </>
  );
}
