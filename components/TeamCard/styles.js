import CardsTeam from "https://framer.com/m/cards-team-6yvf.js@A7mS426N6dwuXms2DlHZ"

import styled from "styled-components"

export const Card = styled(CardsTeam)`
    width: 100%;
`


export const Grid = styled.section`
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 16px; 
`
