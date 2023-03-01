import CustomInput from "../../components/CustomInput";
import React, { useState } from "react";
import Entry from "../../components/Entry";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTaskValue = (val) => {
    setNewTask(val);
  };

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <CustomInput
        value={newTask}
        buttonText="Add Task"
        onClick={addTask}
        onChange={handleTaskValue}
      />
      <ul>
        {tasks.map((item, index) => (
          <li>
            <Entry 
            entryText={item} 
            entryButton="delete" 
            key={index}
            onClick={deleteTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
