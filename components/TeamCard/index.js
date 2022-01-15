import {Card, Grid} from "./styles"

const TeamCard = () => {
    return(
        <>
        <Grid>
        <Card 
        style={Style}
        portrait="/images/team/michael_braum.jpg"
        name="Michael Braum"
        position="Geschäftsführer"
        />
        <Card 
        style={Style}
        portrait="/images/team/angela_kratz.jpg"
        name="Angela Kratz"
        position="Öffentlichkeitsarbeit"
        />
         <Card 
        style={Style}
        portrait="/images/team/moritz_bellers.jpg"
        name="Moritz Bellers"
        position="Projektleitung"
        />
        </Grid>
        </>
    )
}


const Style= {
    width: "100%"
}
export default TeamCard