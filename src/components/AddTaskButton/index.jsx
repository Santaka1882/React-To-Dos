import React from "react";

// Styles
import { TaskButton } from "./AddTaskButton.styles";

const AddTaskButton = ( props ) => (
  <TaskButton onClick={props.onClick}>{props.value}</TaskButton>
)

export default AddTaskButton