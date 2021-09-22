import React from "react";

// Styles
import { Wrapper, Content } from "./InfoSection.styles";

const InfoSection = (props) => {
  return (
    <Wrapper>
      <Content>
        <p>Te quedan {props.tasks} tareas por terminar</p>
      </Content>
    </Wrapper>
  )
}

export default InfoSection
