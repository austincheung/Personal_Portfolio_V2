import React from "react";
import { PopupContainer, PopupBox} from "./PopupElement";
 
const Popup = props => {
  return (
    <PopupContainer>
      <PopupBox>
        
        {props.content}
      </PopupBox>
    </PopupContainer>
  );
};

export default Popup;
