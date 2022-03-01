import styled from "styled-components";

export const Container = styled.section`
    max-width: 1200px;
    margin: 0 auto; 
    color: #404040; 
    padding-left: 240px; 
`

export const Heading_year = styled.h2`

    margin-bottom: 0; 
    padding-bottom: 1rem; 
    font-size: 48px; 
    border-bottom: 3px solid #FFEA00; 
    ${props => props.visible ? "display: block" :" display: none" };
`

export const Heading_month = styled.h3`
// margin-left: 240px; 
    font-size: 22px; 
    margin-top: 1rem; ; 
    text-transform: uppercase; 
    letter-spacing: 0.06em; 
    border-bottom: 1px solid #404040; 
    padding-bottom: 1rem; 
   
`