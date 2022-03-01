import { Container, Heading_year, Heading_month } from "./styles";

const EventHeading = ({year, month, visible}) => {
    return(
        <Container>
         <Heading_year visible={visible}> {year}</Heading_year>
            <Heading_month >{month}</Heading_month>
        </Container>
    )
}

export default EventHeading