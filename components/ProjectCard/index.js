import {Card} from "./styles"

const ProjectCard = ({thumbnail, title, number, massstab, status}) => {
    return(
        <>
        <Card 
            style={Style}
            thumbnail={thumbnail}
            title={title}
            number={number}
            massstab={massstab}
            status={status}
        />

        </>
    )
}


const Style= {
    width: "100%"
}
export default ProjectCard