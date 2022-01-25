import React, {useState} from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from "./SidebarElements";
import Popup from '../Popup/Popup.js';
import { PopupItems, PopupTitle } from '../Popup/PopupElement';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';

function Sidebar({isOpen ,toggle}) {

 const [contactOpen, setContactOpen] = useState(false);

 const togglePopup = () => {
     setContactOpen(!contactOpen);
}
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="contact" onClick={togglePopup}>Contact Info</SidebarRoute>
                        <div onClick={togglePopup}>
                       {contactOpen && <Popup
                        content={<>
                        <PopupTitle> <PersonIcon style={{fontSize:'inherit'}}/>Contact Info</PopupTitle>
                        <PopupItems> <MailOutlineIcon /> austincheung001@gmail.com</PopupItems>
                        <PopupItems> <PhoneIcon /> (647) 234-6312</PopupItems>
                                </>}
                        handleClose={togglePopup}
                        />} 
                        </div>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
