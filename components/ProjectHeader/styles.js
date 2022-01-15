import styled from 'styled-components'

import ProjectCover from "https://framer.com/m/ProjectCover-d55D.js@9yfN0gyWGLhH3fUjc6lH"
import ProjectBrief from "https://framer.com/m/ProjectBrief-NBa7.js@jnEyK0eWPl5hIF8HhQ7m"

import {H2, H3,P} from '../../styles/global'



export const Cover = styled(ProjectCover)`
margin-bottom: 32px; 
`

export const Brief = styled(ProjectBrief)`
max-width: 1200px;
margin: 0 auto; 
padding: 0 32px; 
`

export const Objects = styled.section`
max-width: 1200px;
margin: 0 auto; 
padding: 0 32px; 
margin-bottom: 48px; 
`

export const Heading2 = styled.h2`
text-transform: uppercase; 
font-size: 1.5rem;
text-align: center; 
`

export const Heading3 = styled.h3`
  ${H3}
`

export const Text = styled.p`
 ${P}
    color: #404040;


`
