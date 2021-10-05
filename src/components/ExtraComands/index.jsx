import React from "react";

// Components
import ListItemButton from "../ListItemButton";

// Styles 
import { Wrapper, Content } from "./ExtraCommands.styles";

// Images 
import eraserIcon from '../../images/eraserIcon.png'
import infoIcon from '../../images/infoIcon.png'
import skullIcon from '../../images/skullIcon.png'

const ExtraComands = ({ clearCompleted, showInfo, deleteAll }) => {
  return(
    <Wrapper>
      <Content>
        <ListItemButton className="clearCompleted" onClick={clearCompleted}>
          <img src={eraserIcon} alt="Clear-Completed" />
        </ListItemButton>
        <ListItemButton className="showInfo" onClick={showInfo}>
          <img src={infoIcon} alt="Show-Info" />
        </ListItemButton> 
        <ListItemButton className="deleteAll" onClick={deleteAll}>
          <img src={skullIcon} alt="Delete-All" />
        </ListItemButton>
        {/* <ClearCompleted onClick={props.onClick}>Clear Completed Tasks</ClearCompleted> */}
      </Content>
    </Wrapper>
  )
}

export default ExtraComands