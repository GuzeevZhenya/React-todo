import React, { useContext } from "react";
import modalContext from "./Context";

export default function TaskList(props) {
    
  const { tasks, taskText,filterCountries } = useContext(modalContext);

  

  const user = filterCountries.map((element) => {
    return (
      <li key={element.id}>
        {element.task} <button onClick={()=>props.removeElement(element.id)}>Remove Element</button>
      </li>
    );
  });
  return (
    <div>
      <ul>{user}</ul>
      <div>Количество задач {tasks.length}</div>
    </div>
  );
}
