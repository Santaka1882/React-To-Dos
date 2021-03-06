import React from "react";

// Styles
import { Wrapper, Content } from "./Title.styles";
import turtle from '../../images/turtle.png'

const Title = ({ name }) => (
  <Wrapper>
    <Content name={name}>
      {name === 'Luna' ? 
        <>
        <img src={turtle} alt="tortuga EE"/>
        <h1>{name}'s To-dos</h1>
        <img src={turtle} alt="tortuga EE"/>
        </>
       : <h1>{name}'s To-dos</h1>
      }
    </Content>
  </Wrapper>
)

export default Title