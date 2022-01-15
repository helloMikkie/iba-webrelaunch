import {Card, Grid} from "./styles"

const MediaCard = ({image, title, subtitle, description}) => {
    return(
        <>
        <Card 
        style={Style}
        image={image}
        title={ title }
        subtitle={ subtitle }
        description={description }
        />
        
        </>
    )
}


const Style= {
    width: "100%"
}
export default MediaCard