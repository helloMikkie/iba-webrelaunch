import CardsKalender from "https://framer.com/m/cards-Kalender-jDDC.js@rWrtKnGAvGHgYHLgrgkV"


import styled from "styled-components"

const bgColor = {
    yellow: "#FFEA00",
    white: "#FFFFFF"
}
export const Calendar = styled(CardsKalender)`
    width: 100%;
    margin: 0 auto; 
`


export const Container = styled.section`
    width: 100%; 
    padding: 2rem; 
    background-color:
    ${props => bgColor[props.bg] ? bgColor[props.bg] : bgColor["white"] }
    ; 
`