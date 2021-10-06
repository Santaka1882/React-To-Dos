import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px auto;
  padding-left: 0;

  .taskContainer {
    p {
      word-wrap: break-word;
      overflow: hidden;
    }
  }

  .buttonContainer {
    min-width: 120px;
    .completeTask {
      background: ${({completed}) => (
        completed ? 'var(--green)' : 'var(--red)'
      )};
      cursor: pointer;
    }
    .deleteTask {
      background: var(--black);
      cursor: pointer;
    }

    .editTask {
      background: var(--blue);
      cursor: pointer;
    }

    .applyChanges {
      background: var(--green);
      cursor: pointer;
    }

    .discardChanges {
      background: var(--red);
      cursor: pointer;
    }
  }

  .buttonContainer > div:active {
    transform: scale(0.9);
  }

  @media screen and (min-width: 720px) {
    .taskContainer{
      min-width: 500px;
      p {
        min-width: 500px;
        word-wrap: normal;
        overflow: initial;
      }
    }
  }
`