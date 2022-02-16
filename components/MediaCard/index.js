import {Card, Default_bg} from "./styles"

const MediaCard = ({image, title, subtitle, description}) => {
    return(
        <>
        {/* <Default_bg></Default_bg> */}
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