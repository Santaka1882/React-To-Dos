import styled from "styled-components";

export const TaskButton = styled.button`
  position: relative;
  top: 7px;
  width: 15%;
  height: 30px;
  background: var(--blue);
  border: 2px solid var(--black);
  border-left: 0;
  border-radius: 0px 15px 15px 0px;
  font-family: 'Roboto', sans-serif;
  font-style: italic;

  @media screen and (min-width: 720px) {
    top: 3px;
    height: 40px;
    border-radius: 0px 30px 30px 0px;

    img {
      width: 25px;
    }
  }
`