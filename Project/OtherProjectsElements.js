import styled from 'styled-components';

export const ProjectContainer = styled.div`
height:900px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background: #010606;
margin-top:-130px;


@media screen and (max-width:768px){

    height:2500px;
}

@media screen and (max-width:480px){
    height:2200px;
}

`;

export const ProjectWrapper = styled.div`
max-width:1920px;
margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr 1fr;
grid-gap:16px;
padding: 0 50px;



@media screen and (max-width:1000px){
    grid-template-columns:1fr 1fr;
}

@media screen and (max-width:768px){
    grid-template-columns:1fr;
    padding: 0 20px;
}
`;

export const ProjectCard = styled.div`
background: #fff;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:340px;
padding:30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2 ease-in-out;

&:hover{
    transform: scale(1.02);
    transition:all 0.2 ease-in-out;
    cursor:pointer;
}
`;

export const ProjectIcon = styled.img`
height:135px;
width:240px;
margin-bottom:10px;

`;

export const ProjectH1 = styled.h1`
color:#68A7DA;
display:flex;
justify-content:center;
font-size: 30px;
line-height:16px;
font-weight:700;
letter-spacing:1.4px;
text-transform:uppercase;
margin-bottom:64px;

`;

export const ProjectH2 = styled.h2`
font-size:1rem;
margin-bottom:10px;
`;

export const ProjectP = styled.p`
font-size:1rem;
text-algn:center;
`;

export const ProjectLink = styled.a`
color:black;
font-size:24px;
text-decoration:none;
`