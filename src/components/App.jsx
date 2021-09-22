import React, {useState, useRef, useEffect} from "react";
import {v4 as uuid} from 'uuid';

// Styles
import { GlobalStyle } from "../GlobalStyle";

// Alerts
import swal from "sweetalert";

// Components
import Title from "./Title";
import TodoList from "./TodoList";
import AddTaskBar from "./AddTaskBar";
import ClearCompletedButton from "./ClearCompletedButton";
import InfoSection from "./InfoSection";

const KEY = 'todoApp.todos'

const App = () => {
  const [toDos, setToDos] = useState([])

  const toDoTaskRef = useRef()

  useEffect(() => {
    const storedToDos = JSON.parse(localStorage.getItem(KEY))
    if(storedToDos) {
      setToDos(storedToDos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(toDos))
  }, [toDos])

  const toggleToDo = id => {
    const newToDos = [...toDos]
    const todo = newToDos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setToDos(newToDos)
  }

  const handleAddToDo = () => {
    const task = toDoTaskRef.current.value;
    if(task === '') return;

    setToDos(prevToDo => {
      return [...prevToDo, {id: uuid(), task: task, completed: false}]
    })

    toDoTaskRef.current.value = null;
  }

  const handleClearCompleted = () => {
    const newToDos = toDos.filter(todo => !todo.completed)
    setToDos(newToDos) 
  }

  return(
    <>
    <GlobalStyle/>
    <Title />
    <TodoList toDos={toDos} toggleToDo={toggleToDo}/>
    <AddTaskBar onClick={handleAddToDo}/>
    <ClearCompletedButton onClick={handleClearCompleted}>✖</ClearCompletedButton>
    <InfoSection tasks={toDos.filter(todo => !todo.completed).length}/>
    </>
  )
}

export default App