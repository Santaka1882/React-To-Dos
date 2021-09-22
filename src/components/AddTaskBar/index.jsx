import React, { useRef }  from "react";

// Components
import AddTaskButton from "../AddTaskButton";

// Styles
import { Wrapper, Content } from "./AddTaskBar.styles";

const AddTaskBar = ( props ) => {
  const toDoTaskRef = useRef()

  return (
    <Wrapper>
      <Content>
        <input ref={toDoTaskRef} type='text' placeholder="New Task"/>
        <AddTaskButton onClick={props.onClick} value={'Add'}/>
      </Content>
    </Wrapper>
  )
}

export default AddTaskBar