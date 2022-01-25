import styled from 'styled-components';

export const FooterContainer = styled.footer`
background-color:#000;
overflow: hidden;
`

export const FooterWrap = styled.div`
padding:50px 24px;
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:center;
max-width: 1100px;
height:50px;
margin: 0 auto;

`;


export const SocialMedia = styled.section`
max-width:1000px;
width:100%
`;

export const SocialMediaWrap = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
max-width:1100px;
margin: 400px auto 0 auto;

@media screen and (max-width: 768px){
    flex-direction:column;
    }
`;


export const WebsiteRights = styled.small`
color:#fff;
margin-bottom:16px;

`;

export const SocialIcons = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
width:240px;
`;

export const SocialIconLink = styled.a`
color:#fff;
font-size:24px;
`

