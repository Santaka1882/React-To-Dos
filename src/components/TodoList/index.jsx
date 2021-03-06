import React from "react";
import TodoItem from "../TodoItem";

// Styles
import { Wrapper, Content } from "./TodoList.styles";

const TodoList = ({ toDos, toggleToDo, deleteTask, editTask }) => (
  <Wrapper>
    <Content>
      <h3>List:</h3>
      <ul>
      {
        toDos.map(toDo => (
          <React.Fragment key={toDo.id + 'container'}>
            <hr />
          <TodoItem key={toDo.id} toDo={toDo} toggleToDo={toggleToDo} deleteTask={deleteTask} editTask={editTask}/>
          </React.Fragment>
        )) 
      }
      <hr />
      </ul>
    </Content>
  </Wrapper>

)

export default TodoList