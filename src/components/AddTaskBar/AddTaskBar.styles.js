import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 30px auto;
`

export const Content = styled.div`
  width: 80%;
  input {
    width: 80%;
    height: 30px;
    border: 2px solid var(--black);
    padding-left: 10px;
    border-radius: 15px 0px 0px 15px;

    font-family: 'Roboto', sans-serif;
    font-style: italic;
  }

  @media screen and (min-width: 720px) {
    max-width: 1000px;
    input {
      padding-left: 15px;
      height: 40px;
      border-radius: 30px 0px 0px 30px;
      font-size: 1.3rem;
    }
  }
`