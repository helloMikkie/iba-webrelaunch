import styled from 'styled-components'

import ProjectCover from "https://framer.com/m/ProjectCover-d55D.js@9yfN0gyWGLhH3fUjc6lH"
import ProjectBrief from "https://framer.com/m/ProjectBrief-NBa7.js@O7ZhqgXfT2w7Jx39wMOQ"

import {H2, H3,P} from '../../styles/global'



export const Cover = styled(ProjectCover)`
margin-bottom: 32px;

`

export const Brief = styled(ProjectBrief)`
max-width: 1200px;
margin: 48px auto; 
padding: 0 32px; 
`

export const Objects = styled.section`
max-width: 1200px;
margin: 0 auto; 
padding: 48px 32px; 
margin-bottom: 48px; 

`

export const Heading2 = styled.h2`
${H2}
`

export const HeadingSpan = styled.span`
${H3}
margin-right: 16px; 
color: #404040; 




`

export const Text = styled.p`
 ${P}
    color: #404040;
`
