import React, { useState } from "react";
import "./styles.css";
//
export default function App() {
  const data = [
    { name: "Afrae", id: "12" },
    { name: "Moussab", id: "13" },
    { name: "Soufiane", id: "14" },
    { name: "Youssef", id: "15" },
    { name: "Zaynab", id: "16" }
  ];
  const [users, setUsers] = useState(data);
  const handleClck = () => {
    setUsers(data);
  };

  const handleClick = (id) => {
    setUsers(users.filter((item) => item.id !== id));
    console.log("Hello");
  };
  return (
    <div className="App">
      <h1>Hello Thank youuu for fixing me</h1>

      {users.map((item, index) => (
        <div className="item" key={index} onClick={() => handleClick(item.id)}>
          {item.name}
        </div>
      ))}
      <button onClick={handleClck}>Refresh</button>
      <button onClick={() => setUsers(users.sort())}>Sort</button>
    </div>
  );
}
