import React from 'react'
import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa'
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <WebsiteRights>© {new Date().getFullYear()} Austin Cheung</WebsiteRights>

                        <SocialIcons>
                            <SocialIconLink href="mailto:austincheung001@gmail.com? subject=subject text" target="_blank" rel="noreferrer" aria-label="Email">
                                <EmailIcon/>
                            </SocialIconLink>

                            <SocialIconLink href="https://www.facebook.com/austin.cheung.3" target="_blank" rel="noreferrer" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>

                            <SocialIconLink href="https://www.linkedin.com/in/austin-c-5684a2128/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>

                            <SocialIconLink href="https://github.com/austincheung" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <FaGithub/>
                            </SocialIconLink>

                            <SocialIconLink href="https://drive.google.com/file/d/19KF6wafeehi6bMnjDMFZLW5vY5l6sdsY/view?usp=sharing" target="_blank" aria-label="Resume">
                                <DescriptionIcon/>
                            </SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>



            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
