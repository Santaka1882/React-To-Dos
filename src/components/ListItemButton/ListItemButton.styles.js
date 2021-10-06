import styled from "styled-components";

export const ListItemButton = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-left: 5px;
  border: 2px solid;

  img {
    width: 25px;
    height: 25px;
  }

  @media screen and (min-width: 720px) {
    width: 35px;
    height: 35px;

    img {
      width: 30px;
      height: 30px;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`