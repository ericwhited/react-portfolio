import React from 'react';
import styled from 'styled-components';
import Project from './Project'

const ProjectsContainer = styled.div`
    padding: 0 10rem;
`

const ProjectsPageTitle = styled.h1`
    color: white;
    font-weight: 100;

`

const Projects = () => {
    return (
        <div>
            <ProjectsPageTitle>Projects Page</ProjectsPageTitle>
            <ProjectsContainer>
                <Project />
                <Project />
            </ProjectsContainer>
        </div>
    )
}

export default Projects;