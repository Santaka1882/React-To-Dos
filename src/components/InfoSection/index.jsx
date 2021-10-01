import React from "react";

// Styles
import { Wrapper, Content } from "./InfoSection.styles";

const InfoSection = ({ tasks }) => {
  return (
    <Wrapper>
      <Content>
        <p>You have {tasks} {tasks === 1 ? 'task' : 'tasks'} unfinished</p>
      </Content>
    </Wrapper>
  )
}

export default InfoSection
