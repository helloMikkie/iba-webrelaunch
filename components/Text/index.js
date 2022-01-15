import {Wrapper, Heading2, Intro, Text } from './styles'
import Image from "next/image"


const TextComponent = () => {
    return(
        <>
     <Wrapper>
         
        <Heading2>Headline zum Projekt</Heading2>

        <Intro>Maecenas faucibus mollis interdum. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor.Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Intro>
        <Text>Maecenas faucibus mollis interdum. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas faucibus mollis interdum. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        
        <Image src="/images/projects/bergheim.jpg" width={1200} height={800} objectFit="cover"></Image>
     

        </Wrapper>

        </>
    )
}

export default TextComponent