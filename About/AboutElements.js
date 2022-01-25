import styled from 'styled-components';

export const InfoContainer = styled.div`
color: #fff;
background : ${({lightBg}) => lightBg ? '#f9f9f9' : '#010606'};

@media screen and (max-width:768px ){
    padding:100px 0;
    overflow: hidden;
}
`;

export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 800px;
width: 100%;
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding: 0 24px;
justify-content:center;

`;

export const InfoRow = styled.div`
display:grid;
grid-auto-columns: minmax(auto, 1fr);
align-items:center;
grid-template-areas: ${({imgStart})=> (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px){

    grid-template-areas:${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`;

export const Column1 = styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col1;
`;

export const Column2 = styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col2;
`;

export const TextWrapper = styled.div`
max-width:540px;
padding-top:0;
padding-bottom:60px;

`;

export const TopLine = styled.p`
color:#68A7DA;
font-size: 30px;
line-height:16px;
font-weight:700;
letter-spacing:1.4px;
text-transform:uppercase;
margin-bottom:16px

`;

export const Subtitle = styled.p`
max-width:440px;
font-size:18px;
line-height:24px;
color:${({lightText}) => (lightText) ? '#fff' : '#010606'};
text-indent:20px;

@media screen and (max-width:480px){
    max-width:300px;
    
}
`;

export const ImgWrap = styled.div`
max-width:555px;
height:100%;
@media screen and (max-width:768px){
    padding-right:45px;
    margin-bottom:500px;
    
}
`;


export const Img = styled.img`
width:100%;
margin: 0 0 10px 0;
padding-right:0;
`;
