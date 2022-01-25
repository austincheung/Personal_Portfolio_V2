import React from 'react'
import Video from '../videos/video.mp4';
import {MainContainer, MainBg, VideoBg, MainContent, MainH1, MainP} from './MainElement';

const Main = () => {
    return (
        <MainContainer id='home'>
            <MainBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />

               
            </MainBg>
            <MainContent>
                <MainH1> Welcome </MainH1>
                <MainP>
                    I am a recent graduate of Ryerson University and currently looking for a Full-time Position.
                    
                </MainP>
            </MainContent>
        </MainContainer>
    )
}

export default Main
