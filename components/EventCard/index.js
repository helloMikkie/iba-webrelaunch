import {Card, Grid} from "./styles"

const EventCard = ({image, title, subtitle, label, text}) => {
    return(
        <>
        <Card 
            style={Style}
            image={ image}
            title={ title}
            subtitle={subtitle }
            label={ label}
            text={text }
        />
    
        

        </>
    )
}


const Style= {
    width: "100%"
}
export default EventCard