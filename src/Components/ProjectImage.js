import React from 'react';
import styled, {css} from 'styled-components';

const ImageContainer = styled.div`
    height: 224px;
    width: 350px;
    /* background: gray; */
    position: relative;
    left: -610px; 
    transition: all 0.3s;
    ${props => props.isHovered && css`
        left: -75px;
    `}
`

const StyledImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`

const ProjectImage = ({isHovered}) => {
    return (
        <ImageContainer className="imgcontainer" isHovered={isHovered}>
            <StyledImage src="runeblade.png" alt="alt" />
        </ImageContainer>
    )
}

export default ProjectImage;