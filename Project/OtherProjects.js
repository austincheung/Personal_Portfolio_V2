import React from 'react'
import { ProjectCard,ProjectContainer, ProjectWrapper,ProjectH1, ProjectH2, ProjectP, ProjectIcon,ProjectLink} from './OtherProjectsElements'


const OtherProjects = () => {
    
    return (
        <div>
            <ProjectContainer id ="projects">
                <ProjectH1> Other Projects</ProjectH1>
                <ProjectWrapper>
                    <ProjectLink href = "https://github.com/austincheung/Twitter-Bot" target="_blank">
                    <ProjectCard>
                        <ProjectIcon src = {"https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg"}/>
                        <ProjectH2>Twitter Bot</ProjectH2>
                        <ProjectP>Developed a bot for twitter using java to ask followers random questions throughout the day. Questions are randomly pulled from a text document. Using the Twitter API the bot will automatically favourite every tweet that responds to the question. </ProjectP>
                    </ProjectCard>
                    </ProjectLink>
                    <ProjectLink href = "https://github.com/austincheung/Personal-Firewall" target="_blank">
                    <ProjectCard>
                        <ProjectIcon src = {"https://i.imgur.com/5pjzD2v.png"}/>
                        <ProjectH2>Personal Firewall</ProjectH2>
                        <ProjectP>Using LKM and Netfilter implemented a packet filtering module. This module fetches the firewall policies from a data structure, and use the policies to decide whether packets should be blocked or not. The policies were hardcoded to block a specific website.</ProjectP>
                    </ProjectCard>
                    </ProjectLink>
                    <ProjectLink href = "https://github.com/austincheung/Word-Filler" target="_blank">
                    <ProjectCard>
                        <ProjectIcon src = {"https://i.imgur.com/y8uTzM5.png"}/>
                        <ProjectH2>Word Filler</ProjectH2>
                        <ProjectP>Given a string of letters and asterisks, We had to replace every asterisk with a letter. The asterisk was replaced with a common vowel or consonant in order for a word to be formed. The goal was to find as many words as we can within the string in as little time as possible.</ProjectP>
                    </ProjectCard>
                    </ProjectLink>
                    <ProjectLink href = "https://github.com/austincheung/Buy-Smart" target="_blank">
                    <ProjectCard>
                        <ProjectIcon src = {"https://i.imgur.com/V2mEmwY.png"}/>
                        <ProjectH2>GUI Design for Smartphone Purchasing software</ProjectH2>
                        <ProjectP>Collaberated with two other classmates to design a graphical user interface for a smartphone purchasing software for a software development class. Using java we were also able to create a dummy software where users are able to login and submit purchases.  </ProjectP>
                    </ProjectCard>
                    </ProjectLink>
                    <ProjectLink href = "https://github.com/austincheung/GCM110-Biography" target="_blank">
                    <ProjectCard>
                        <ProjectIcon src = {"https://i.imgur.com/XFqwe8S.png"}/>
                        <ProjectH2>HTML Biography</ProjectH2>
                        <ProjectP>Using HTML and CSS I created a biography of a famous manga artist Eiichiro Oda. This was for graphic communication course, the purpose was to create a biography of someone currently in the field of graphic communication and show how they impacted the field. </ProjectP>
                    </ProjectCard>
                    </ProjectLink>
                    {/* <ProjectLink href = "https://github.com/austincheung/Personal-Firewall" target="_blank">
                    <ProjectCard>
                        <ProjectIcon src = {"https://autobunny-docs.s3.ca-central-1.amazonaws.com/1004/web-content/site_slider2_filename.jpg"}/>
                        <ProjectH2>Project6</ProjectH2>
                        <ProjectP>Text text text</ProjectP>
                    </ProjectCard>
                    </ProjectLink> */}
                    
                </ProjectWrapper>
            </ProjectContainer>
        </div>
    )
}

export default OtherProjects


