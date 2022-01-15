import EventCard from "../EventCard"
import MediaCard from "../MediaCard"
import {Wrapper, Heading2} from "./styles"

const NewsProjects = () => {
    return (
        <>
        <Heading2>News und Veranstaltungen zum Projekt</Heading2>
        <Wrapper>
        <EventCard 
            image="/images/events/event-1.jpg"
            title="Erweiterung des Zentrums Deutscher Sinti und Roma"
            subtitle="Ein Zusammentreffen in zwei Teilen"
            label="Online Ausstellung"
            text="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna."
            />

            <MediaCard />
            <EventCard />
            </Wrapper>
        </>
    )
}

export default NewsProjects