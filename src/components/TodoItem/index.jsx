import React, { useEffect, useRef, useState } from "react";
import swal from "sweetalert";

// Components
import ListItemButton from "../ListItemButton";

// Styles
import { ListItem } from "./TodoItem.styles";

const TodoItem = ({ toDo, toggleToDo, deleteTask, editTask  }) => {
  const { id, task, completed } = toDo

  const [edit, setEdit] = useState(false)
  const [newTask, setNewTask] = useState('')
  const prevTask = useRef('')
  const inputRef = useRef()

  useEffect(() => { 
    prevTask.current = task
  }, [task])

  const handleToDoClick = () => {
    toggleToDo(id)
  }

  const handleDeleteClick = () => {
    deleteTask(id)


  }

  const handleEditClick = () => {
    setEdit(true)
  }

  const keyPress = (e) => {
    if (e.key === 'Enter') {
      editTask(id, newTask)
      setEdit(false)
    }
  }

  const sendChanges = () => {
    editTask(id, newTask)

    setEdit(false)
  }

  const discardChanges = () => {
    setEdit(false)
  }

  return(
    <ListItem key={id} completed={completed}>
      {!edit ? 
        <>
        {task}
        <ListItemButton onClick={handleToDoClick}>Complete</ListItemButton>
        <ListItemButton onClick={handleDeleteClick}>Delete</ListItemButton>
        <ListItemButton onClick={handleEditClick}>Edit</ListItemButton>
        </>
      : 
        <>
        <input ref={inputRef} type='text' placeholder={prevTask.current} onChange={e => setNewTask(e.target.value)} onKeyUp={keyPress}/>
        <ListItemButton onClick={sendChanges}/>
        <ListItemButton onClick={discardChanges}/>
        </>
      }
    </ListItem>
  )
}

export default TodoItem