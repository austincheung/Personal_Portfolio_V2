import React from 'react'
import { InfoContainer,InfoRow,InfoWrapper, Column1,Column2, TextWrapper, TopLine, Subtitle, Img, ImgWrap } from './AboutElements'

const About = ({lightBg, imgStart,topLine,darkText,description,img,alt,id}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart = {imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            </TextWrapper>
                            </Column1>
                            <Column2>
                            <ImgWrap>
                            <Img src={img} alt={alt}/>
                            </ImgWrap>
                            </Column2>
                                </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    
     
    )
}

export default About
