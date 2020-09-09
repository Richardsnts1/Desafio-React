import React, { useState } from "react";

import Task from "./Task";

export default function Tasklist(props) {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    const { data: task } = title;

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
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </>
  );
}
