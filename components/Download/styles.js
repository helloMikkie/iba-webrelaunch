import styled from "styled-components"
import CMPDownloadItem from "https://framer.com/m/CMP-Download-Item-5Y9S.js@RJI7H9c95isBNrleRKoq"

import { SectionLayout } from "../../styles/global"


export const Download = styled(CMPDownloadItem)`
   max-width: 1264px;
   padding: 0 16px; 
   margin-bottom: 12px; 
`

export const Container = styled.section`
    ${SectionLayout}
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
`

