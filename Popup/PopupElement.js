import styled from 'styled-components';

export const PopupContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: #000000b2;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    overflow: hidden;
    `

export const PopupBox = styled.div`
    display:flex;
    width: 70%;
    margin: 0 auto;
    height: 300px;
    max-height: 70vh;
    background: #010606;
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #68A7DA;
    z-index:3;
    max-width:500px;
    position:absolute;
    padding:8px 24px;
    display:flex;
    flex-direction:column;
    align-items:center;

    @media screen and (max-width:480px){
        height: 300px;
    }
    `;

    export const PopupTitle = styled.b`
        color:#fff;
        display:flex;
        
        font-size: 45px;
        margin-top:50px;
        align-items:center;

        @media screen and (max-width:768px){
            font-size:40px;
        }
        @media screen and (max-width:480px){
            font-size:32px;
        }
    `;

    export const PopupItems = styled.p`
    margin-top:24px;
    color:#fff;
    font-size:24px;
    text-align: center;
    max-width: 600px;
    display:flex;
    flex-direction:column;
    align-items:center;
    
    @media screen and (max-width:768px){
        font-size:24px;
    }
    @media screen and (max-width:480px){
        font-size:18px;
    }
    `;

  
        