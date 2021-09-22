import React from "react";
import TodoItem from "../TodoItem";

// Styles
import { Wrapper, Content } from "./TodoList.styles";

const TodoList = ({ toDos, toggleToDo }) => (
  <Wrapper>
    <Content>
    <h3>List:</h3>
    <ul>
    {
      toDos.map(toDo => (
        <TodoItem key={toDo.id} toDo={toDo} toggleToDo={toggleToDo}/>
      )) 
    }
    </ul>
    </Content>
  </Wrapper>

)

export default TodoList