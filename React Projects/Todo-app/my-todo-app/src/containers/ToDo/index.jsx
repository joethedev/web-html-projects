import CustomInput from "../../components/CustomInput";
import Entry from "../../components/Entry";
import uuid from "react-uuid";
import "../ToDo/index.css";
import { useState } from "react";

const ToDo = () => {
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState("");
  const [clicked, setClicked] = useState(false)

  let taskKey;
  

  const onClick = (e) => {
    taskKey = e.target.id
    setClicked(true)
    
    console.log(taskKey)

  }

  const handleAdd = () => {
    if (!text) return ;
    setEntries([
      ...entries,
      { entryName: text, buttonText: "Delete", id: uuid() },
    ]);
    setText("");
  };

  const onChange = (text) => {
    setText(text);  
  }

  const handleDelete = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="todo">
      <h1>Todo List</h1>
      <CustomInput
        value={text}
        buttonText="Add Task"
        handleAdd={handleAdd}
        onChange={onChange}
      />
      <div className="tasksss">
        <ul>
          {entries.map((item) => (
            <li key={item.id}>
              <Entry
                id={item.id}
                taskKey={taskKey}
                clicked={clicked}
                entryName={item.entryName}
                buttonText={item.buttonText}
                handleDelete={handleDelete}
                onClick={onClick}
                onChange={onChange}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
