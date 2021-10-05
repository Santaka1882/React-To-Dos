import React, {useState, useEffect} from "react";
import {v4 as uuid} from 'uuid';

// Styles
import { GlobalStyle } from "../GlobalStyle";

// Alerts
import swal from "@sweetalert/with-react";

// Components
import Title from "./Title";
import TodoList from "./TodoList";
import AddTaskBar from "./AddTaskBar";
import ExtraComands from "./ExtraComands";
import SwalInfo from "./SwalInfo";

const KEY = 'todoApp.todos'
const NAME_KEY= 'todoApp.name'

const App = () => {
  const [toDos, setToDos] = useState([])
  const [tasksLeft, setTasksLeft] = useState()
  const [name, setName] = useState('React')

  useEffect(() => {
    const storedName = JSON.parse(localStorage.getItem(NAME_KEY))
    if (!storedName) {
      swal({
        title: 'Enter your beautifull name!',
        content: 'input'
      })
      .then((value) => {
        setName(value)
      })
    }
  }, [])

  useEffect(() => {
    const storedToDos = JSON.parse(localStorage.getItem(KEY))
    const storedName = JSON.parse(localStorage.getItem(NAME_KEY))
    if(storedToDos) {
      setToDos(storedToDos)
    }
    if(storedName) {
      setName(storedName)
    }
  }, [])

  useEffect(() => {
    const newTasksLeft = toDos.filter(todo => !todo.completed).length
    setTasksLeft(newTasksLeft)
  }, [toDos])

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(toDos))
    localStorage.setItem(NAME_KEY, JSON.stringify(name))
  }, [toDos, name])

  const toggleToDo = id => {
    const newToDos = [...toDos]
    const todo = newToDos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setToDos(newToDos)
  }

  const deleteTask = id => {
    const newToDos = toDos.filter(item => item.id !== id)
    setToDos(newToDos)
  }

  const editTask = (id, newContent) => {
    const newToDos = [...toDos]
    const todo = newToDos.find(todo => todo.id === id)
    todo.task = newContent
    setToDos(newToDos)
  }

  const showInfo = () => {
    swal({
      title: 'This is your info:',
      content: (
        <SwalInfo name={name} tasks={tasksLeft}/>
      ),
      icon: 'info',
      buttons: {
        changeName: {
          text: 'Change Name',
          value: 'change'
        },
        awesome: true
      }
    })
    .then((value) => {
      if (value === 'change') {
        swal({
          title: 'Enter your beautifull name!',
          content: 'input'
        })
        .then((value) => {
          setName(value)
        })
      }
    })
  }

  const deleteAll = () => {
    const newToDos = []
    if (toDos.length > 0) {
      swal({
        title: 'Delete all?',
        text: 'The tasks will never return',
        icon: 'warning',
        buttons: ['No', 'Yes'],
        dangerMode: true,
        closeOnClickOutside: true
      })
      .then((willDelete) => {
        if(willDelete) {
          swal('Your tasks have been deleted!', {
            icon: 'success',
            closeOnClickOutside: true,
          })
          setToDos(newToDos)
        }
      })
    } else {
      swal({
        title: 'You don\'t have tasks to delete!', 
        icon: 'warning',
        closeOnClickOutside: true
      })
    }
  } 
    
  const handleAddToDo = (value) => {
    if(value === '') return;

    setToDos(prevToDo => {
      return [...prevToDo, {id: uuid(), task: value, completed: false}]
    })
  }

  const handleClearCompleted = () => {
    const newToDos = toDos.filter(todo => !todo.completed)
    if(newToDos.length > 0) {
      swal({
        title: 'No cheating!',
        text: 'Make sure the tasks are really completed!',
        icon: 'warning',
        buttons: ['im going to check!', 'delete them anyways'],
        dangerMode: true,
        closeOnClickOutside: true,
      })
      .then((willDelete) => {
        if(willDelete) {
          
          swal('Your completed tasks have been deleted!', {
            icon: 'success',
            closeOnClickOutside: true,
          })
          setToDos(newToDos)
        }
      })
    } else {
      swal({
        title: 'You don\'t have tasks to delete!',
        text: 'let\'s complete some tasks!',
        icon: 'warning',
        closeOnClickOutside: true
      })
    }
  }

  return(
    <>
    <GlobalStyle/>
    <Title name={name}/>
    <TodoList toDos={toDos} toggleToDo={toggleToDo} deleteTask={deleteTask} editTask={editTask}/>
    <AddTaskBar onClick={handleAddToDo} />
    <ExtraComands clearCompleted={handleClearCompleted} showInfo={showInfo} deleteAll={deleteAll}></ExtraComands>
    </>
  )
}

export default App