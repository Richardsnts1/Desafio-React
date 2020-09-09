import React, { useState } from "react";

import Task from "./Task";

export default function Tasklist() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  function handleAddTask() {
    const task = { title: `${title}` };

    setTasks([...tasks, task]);
  }

  function handleDelete(taskId) {
    setTasks(tasks.filter((task) => task !== taskId));

    console.log(taskId, tasks);
  }

  return (
    <>
      <div className="InputContainer">
        <input
          type="text"
          id="text"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <button type="button" className="btn-primary" onClick={handleAddTask}>
        Adicionar
      </button>

      <ul>
        {tasks.map((task) => (
          <>
            <Task key={task} taskfield={task.title} />
            <button onClick={() => handleDelete(task)}>Deletar</button>
          </>
        ))}
      </ul>
    </>
  );
}
