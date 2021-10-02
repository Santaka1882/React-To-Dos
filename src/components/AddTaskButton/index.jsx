import React from "react";

// Styles
import { TaskButton } from "./AddTaskButton.styles";

// Image
import addIcon from '../../images/addIcon.png'

const AddTaskButton = ({ onClick }) => (
  <TaskButton onClick={onClick}>
    <img src={addIcon} alt="addTaskButton" />
  </TaskButton>
)

export default AddTaskButton