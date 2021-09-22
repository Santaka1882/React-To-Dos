import React from "react";

// Styles 
import { ClearCompleted } from "./ClearCompletedButton.styles";

const ClearCompletedButton = (props) => {
  return(
    <ClearCompleted onClick={props.onClick}>Clear Completed Tasks</ClearCompleted>
  )
}

export default ClearCompletedButton