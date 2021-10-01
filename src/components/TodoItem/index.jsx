import React, { useEffect, useRef, useState } from "react";
import swal from "sweetalert";

// Components
import ListItemButton from "../ListItemButton";

// Styles
import { ListItem } from "./TodoItem.styles";

// Images
import checkIcon from '../../images/checkIcon.png'
import xIcon from '../../images/xIcon.png'
import cogIcon from '../../images/cogIcon.png'
import skullIcon from '../../images/skullIcon.png'

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
        <div className='taskContainer'>
          <p>{task}</p>
        </div>
        <div className='buttonContainer'>
          <ListItemButton className='completeTask' onClick={handleToDoClick} completed={completed}>
            <img src={completed ? checkIcon : xIcon} alt="complete-task-switch" />
          </ListItemButton>
          <ListItemButton className='deleteTask' onClick={handleDeleteClick}>
            <img src={skullIcon} alt="delete-task-button" />
          </ListItemButton>
          <ListItemButton className='editTask' onClick={handleEditClick}>
            <img src={cogIcon} alt="settings-button" />
          </ListItemButton>
        </div>
        </>
      : 
        <>
        <input ref={inputRef} type='text' placeholder={prevTask.current} onChange={e => setNewTask(e.target.value)} onKeyUp={keyPress}/>
        <div className='buttonContainer'>
          <ListItemButton className='applyChanges' onClick={sendChanges}>
            <img src={checkIcon} alt="Apply-changes" />
          </ListItemButton>
          <ListItemButton className='discardChanges' onClick={discardChanges}>
            <img src={skullIcon} alt="Discard-changes" />
          </ListItemButton>
        </div>
        </>
      }
    </ListItem>
  )
}

export default TodoItem