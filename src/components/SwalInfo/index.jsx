import React from "react";

// Styles
import { Wrapper } from "./SwalInfo.styles";

const SwalInfo = ({name, tasks}) => (
  <Wrapper>
    <ul>
      <li>Your name is: {name}. </li>
      <li>You have {tasks} left!</li>
    </ul>
  </Wrapper>
)

export default SwalInfo