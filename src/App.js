import React, { useState, useEffect } from "react";
import "./App.css";
import TaskList from "./TaskList";
import modalContext from "./Context";

function App() {
  const [tasks, setUsers] = useState([
    { task: "Create React App", id: 0 },
    { task: "Remove App", id: 1 },
  ]);
  const [taskText, setTaskText] = useState();
  const [value,setValue]= useState('')

  const filterCountries = tasks.filter(item=>{
    return item.task.toLowerCase().includes(value.toLowerCase())
  })

  const setTask = (e) => {
    const lastElement = tasks[tasks.length - 1].id;
    setUsers([...tasks, { task: taskText, id: lastElement + 1 }]);
    console.log(tasks);
  };

  const RemoveElement = (id) => {
    const removeElement = tasks.filter((item) => item.id !== id);
    
    setUsers(removeElement);
  };

  return (
    <modalContext.Provider value={{ tasks, taskText,filterCountries }}>
      <div className="App">
        <input
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Что нужно сделать?"
          value={tasks.task}
        ></input>
        <button onClick={() => setTask()}>Add task</button>
        <input onChange={(e)=>setValue(e.target.value)}/>
        <TaskList removeElement={RemoveElement} />
      </div>
    </modalContext.Provider>
  );
}

export default App;
