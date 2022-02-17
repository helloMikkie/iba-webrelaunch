import {Calendar, Container} from "./styles"

const CalendarCard = ({adresse, beschreibung, datum, format, institution, thumbnail, thumbnailVisible, titel, uhrzeit, variant, bgColor}) => {
    return(
        <>
        <Container bg={bgColor}>
        <Calendar 
            style={Style}
            adresse={ adresse}
            beschreibung={ beschreibung}
            datum={datum }
            format={ format}
            institution={institution }
            thumbnail = {thumbnail}
            thumbnailVisible={thumbnailVisible}
            titel={titel}
            uhrzeit={uhrzeit}
            variant={variant}
           
        />
    
    </Container>

        </>
    )
}


const Style= {
    // width: "100%"
    maxWidth: "1200px"
}
export default CalendarCard