import NewsletterCard from '../NewsletterCard'
import {Cover, Brief, Objects,Heading2, HeadingSpan, Text , NewsSection} from './styles'
import EventCard from '../EventCard'



const ProjectHeader = () => {
    return(
        <>
     
     
        <Cover style={Style}></Cover>
        <Brief style={Style}></Brief>
        <Objects>
            
            <Text><HeadingSpan>Herausforderungen</HeadingSpan>Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. </Text>
           
            <Text> <HeadingSpan>Ansatz </HeadingSpan>Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. </Text>
        </Objects>

        
        </>
    )
}


const Style= {
    width: "100%"
}
export default ProjectHeader