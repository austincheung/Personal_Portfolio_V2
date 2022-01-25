import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer,NavLogo, MobileIcon, NavMenu, NavItems, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import { PopupItems, PopupTitle } from '../Popup/PopupElement';
import {animateScroll as scroll} from 'react-scroll';
import Popup from '../Popup/Popup.js';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';


function Header({toggle}) {
const [contactOpen, setContactOpen] = useState(false);

const togglePopup = () => {
    setContactOpen(!contactOpen);
}

const toggleHome = () =>{
    scroll.scrollToTop();


}

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Austin Cheung</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                            <NavLinks to ="home" smooth = {true} duration={500} spy={true} exact='true' offset={-80}> Home </NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to ="projects" smooth = {true} duration={500} spy={true} exact='true' offset={-80}> Projects </NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to ="about" smooth = {true} duration={500} spy={true} exact='true' offset={-80}> About </NavLinks>
                        </NavItems>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="contact" onClick={togglePopup}> Contacts Info </NavBtnLink>

                        <div onClick={togglePopup}>
                        {contactOpen && <Popup
                        content={<>
                        <PopupTitle> <PersonIcon style={{fontSize:'inherit'}}/> Contact Info</PopupTitle>
                        
                        <PopupItems> <MailOutlineIcon /> austincheung001@gmail.com</PopupItems>
                        <PopupItems> <PhoneIcon /> (647) 234-6312</PopupItems>
                                </>}
                        handleClose={togglePopup}
                        />}
                        </div>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>


    )
}

export default Header
