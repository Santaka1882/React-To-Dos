import React, { useEffect, useRef } from "react";

// Components
import AddTaskButton from "../AddTaskButton";

// Styles
import { Wrapper, Content } from "./AddTaskBar.styles";

const AddTaskBar = ( props ) => {
  const inputRef = useRef('')

  const sendTask = () => {
    const newTask = inputRef.current.value
    props.onClick(newTask)

    inputRef.current.value = null
  }

  useEffect(() => {
    inputRef.current.addEventListener('keyup', ({key}) => {
      if(key === "Enter") {
        sendTask()
      }
    })
  })

  return (
    <Wrapper>
      <Content>
        <input ref={inputRef} type='text' placeholder="New Task"/>
        <AddTaskButton onClick={sendTask}/>
      </Content>
    </Wrapper>
  )
}

export default AddTaskBar