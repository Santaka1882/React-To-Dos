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
    .completeTask {
      background: ${({completed}) => (
        completed ? 'var(--green)' : 'var(--red)'
      )};
    }
    .deleteTask {
      background: var(--black);
    }

    .editTask {
      background: var(--blue);
    }

    .applyChanges {
      background: var(--green);
    }

    .discardChanges {
      background: var(--black);
    }
  }

  .buttonContainer > div:active {
    transform: scale(0.9);
  }
`