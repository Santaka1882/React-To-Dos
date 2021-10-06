import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

export const Content = styled.div`
  display: flex;
  justify-content: ${props => props.name === 'Luna' ? 'space-between' : 'center'};
  align-items: center;
  width: 90%;

  h1 {
    color: var(--blue);
  }
  
  img {
    width: 40px;
  }

  @media screen and (min-width: 720px) {
    h1 {
      font-size: 2.5rem;
    }

    img {
      width: 60px;
    }
  }
`