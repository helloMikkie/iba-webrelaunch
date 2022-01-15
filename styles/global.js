import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100vw; 
    background: hsl(55,100%,50%);
  }
`
export const GridLayout = css`
padding: 0 16px; 
display: grid; 
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
grid-gap: 16px; 
`

export const SectionLayout = css`
  padding: 16px;
  max-width: 1200px; 
  margin: 0 auto; 
`

export const H2 = css`
  text-transform: uppercase; 
  color: #404040;
  text-align: center;
  font-size: 2rem; 
  letter-spacing: 0.06em;
  line-height: 1.2; 
  font-family: Euclid Circular A semibold;
`
export const H3 = css`
text-transform: uppercase; 
font-size: 1.125rem; 
color: #404040;
text-align: center;
letter-spacing: 0.06em;
line-height: 1.25; 
font-family: Euclid Circular A semibold;
`

export const P = css`
font-family: Euclid Circular A Regular;
font-weight: 400;
letter-spacing: 0.02em;
font-size: 1.375rem;
line-height: 1.6; 
color: #404040;
`