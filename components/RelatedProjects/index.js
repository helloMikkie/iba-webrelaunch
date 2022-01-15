import {Heading2, Wrapper} from "./styles"
import ProjectCard from "../ProjectCard"

const RelatedProjectsComponent = ()=> {

    return(
        <>
        <Heading2>Related Projects</Heading2>
        <Wrapper >
        <ProjectCard
          thumbnail="/images/projects/academicum.jpg"
          title="B3 Gadamerplatz"
          number="1"
          massstab="Gebäude"
          status="/images/ikons/status_prozess.svg"
        />
        <ProjectCard
          thumbnail="/images/projects/andere_park.jpg"
          title="Der andere Park"
          number="15"
          massstab="Strategieraum"
          status="/images/ikons/status_planung.svg"
        />
         <ProjectCard
          thumbnail="/images/projects/energiespeicher.jpg"
          title="Energiespeicher"
          number="22"
          massstab="Gebäude"
          status="/images/ikons/status_gebaut.svg"
        />
        </Wrapper>
        </>
    )
}

export default RelatedProjectsComponent