import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

export const Content = styled.div`
  h3 {
    margin: 0;
    color: var(--blue);
  }

  ul {
    margin-top: 10px;
    padding: 0;
  }

  p {
    margin: 5px;
    max-width: 220px;
  }

  @media screen and (min-width: 720px) {
    margin: 0 auto;
    max-width: 1500px;
    h3 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.3rem;
    }
  }
`