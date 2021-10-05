import React from "react";

// Styles
import { Wrapper, Content } from "./Title.styles";

const Title = ({ name }) => (
  <Wrapper>
    <Content>
      <h1>{name}'s To-dos</h1>
    </Content>
  </Wrapper>
)

export default Title