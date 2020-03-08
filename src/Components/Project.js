import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import ProjectImage from './ProjectImage';

const ProjectBorder = styled.div`
    display: flex;
    /* padding: 60px 0; */
    justify-content: space-between;
    align-items: center;
    /* border: 2px solid red;  */
    overflow: hidden;
`

const TitleImageContainer = styled.div`
    display: flex;
    align-items: center;
`

const Title = styled.p`
    color: white;
    -webkit-text-stroke: none;
    margin: 0;
    z-index: 10;
    ${ProjectBorder}:hover & { 
        color: black;
        -webkit-text-stroke: 0.5px white;
        }
`

const ProjectDescription = styled(Title)`
    font-size: 15px;
    font-family: montserrat;
`

const ProjectTitle = styled(Title)`
    font-size: 50px;
`

const ProjectNumber = styled(Title)`
    font-size: 50px;
`

const Project = () => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <ProjectBorder 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <TitleImageContainer className="title-image-contINER">
                <Title >
                    <ProjectDescription className="proj-desc">Personal Project</ProjectDescription>
                    <ProjectTitle className="proj-title">JODDY HARBOR</ProjectTitle>
                </Title>
                <ProjectImage isHovered={isHovered} />
            </TitleImageContainer>
            <ProjectNumber>01</ProjectNumber>
        </ProjectBorder>
        )
    }

export default Project;