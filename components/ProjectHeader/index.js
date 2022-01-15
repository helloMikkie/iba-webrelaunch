import NewsletterCard from '../NewsletterCard'
import {Cover, Brief, Objects,Heading2, Heading3, Text , NewsSection} from './styles'
import EventCard from '../EventCard'



const ProjectHeader = () => {
    return(
        <>
     
     
        <Cover style={Style}></Cover>
        <Brief style={Style}></Brief>
        <Objects>
            <Heading3>Herausforderungen</Heading3>
            <Text>Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. </Text>
            <Heading3>
                Ansatz
            </Heading3>
            <Text>Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. </Text>
        </Objects>

        
        </>
    )
}


const Style= {
    width: "100%"
}
export default ProjectHeader