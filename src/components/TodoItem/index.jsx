import React from "react";

// Styles
import { ListItem } from "./TodoItem.styles";

const TodoItem = ({ toDo, toggleToDo }) => {
  const { id, task, completed } = toDo

  const handleToDoClick = () => {
    toggleToDo(id)
  }

  return(
    <ListItem key={id} completed={completed}>
      <input type="checkbox" onChange={handleToDoClick}/>
      {task}
    </ListItem>
  )
}

export default TodoItem