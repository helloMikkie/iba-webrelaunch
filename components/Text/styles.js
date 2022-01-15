import styled from "styled-components"
import { SectionLayout, H2, H3, P } from "../../styles/global"



export const Heading2 = styled.h2`
    ${H2}
    margin-bottom: 48px; 

`

export const Heading3 = styled.h3`
    ${H3}
    margin-top: 48px; 
    margin-bottom: 48px; 

`

export const Intro = styled.p`
${P}
    font-family: Euclid Circular A semibold;
    font-weight: 700;
    letter-spacing: 0; 
    margin-bottom: 16px; 

`

export const Text = styled.p`
${P}
margin-bottom: 16px; 
`
export const Wrapper = styled.section`
${SectionLayout}
font-size: 1.125rem;
line-height: 1.5; 
margin-bottom: 48px; 


`

export const Link = styled.a`

display: inline-block; 
border-bottom: 2px solid #FFEA00; 
font-weight: 600;
transition: 0.2s ease-in;  
:hover{
    color: #8F8F8F; 
    cursor: pointer; 
}
`
