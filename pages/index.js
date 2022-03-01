import Head from "next/head"

import Menu from "../components/Menu/"

import Footer from "../components/Footer"
import Download from "../components/Download"
import ProjectCard from "../components/ProjectCard"
import TeamCard from "../components/TeamCard"
import MediaCard from "../components/MediaCard"
import EventCard from "../components/EventCard"
import CalendarCard from "../components/CalendarCard"
import Filter from "../components/Project_filter"
import EventHeading from "../components/EventHeadings"

// A Smart Component from Framer
import Toggle from "https://framer.com/m/Toggle-B5iT.js@X94mtocAj5XithxLESme"

export default function Home() {
    return (
        <>
            <Head>
                <title>IBA Heidelberg</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <>
        
            <Menu></Menu>
            <Filter></Filter>
            <Download />
            <ProjectCard />
            <TeamCard />
            <MediaCard 
             image="/images/media/media-1.png"
             title="IBA Lab Nr.6"
             subtitle="Die Dokumentation zur Veranstaltung"
             description="Publikation, 300 Seiten"
            />
            <EventCard 
                image="/images/events/event-1.jpg"
                title="Erweiterung des Zentrums Deutscher Sinti und Roma"
                subtitle="Ein Zusammentreffen in zwei Teilen"
                label="Online Ausstellung"
                text="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna."/>
            <CalendarCard variant="Variant 2" />
            <CalendarCard variant="Variant 2" bgColor="yellow" />
            <EventHeading year="2022" month="April" visible></EventHeading>
            <CalendarCard variant="Variant 2" />
            <CalendarCard variant="Variant 2" />
            <EventHeading year="2021" month="Mai"></EventHeading>
            <CalendarCard variant="Variant 2" />
            <EventHeading year="2021" month="Januar" visible></EventHeading>
            <CalendarCard variant="Variant 2" />
          
            <Footer />
    

            </>
        </>
    )
}
