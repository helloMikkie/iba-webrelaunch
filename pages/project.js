import Head from "next/head"

import Menu from "../components/Menu/"
import Footer from "../components/Footer"
import ProjectHeader from "../components/ProjectHeader"
import NewsProjects from "../components/NewsProjects"
import Download from "../components/Download"
import TextComponent from "../components/Text"
import ProcessSlider from "../components/ProcessSlider"
import RelatedProjects from "../components/RelatedProjects"
import NewsletterCard from "../components/NewsletterCard"



export default function Project() {
    return (
        <>
            <Head>
                <title>Projekt</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <>
        
            <Menu></Menu>
            <ProjectHeader />
            <NewsProjects />
            <Download />
            <TextComponent />
            <ProcessSlider />
            <RelatedProjects />
            <Footer />
    

            </>
        </>
    )
}
