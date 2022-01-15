import {Wrapper, Heading2,Heading3,  Intro, Text , Link} from './styles'
import Image from "next/image"


const TextComponent = () => {
    return(
        <>
     <Wrapper>
         
        <Heading2>Headline zum Projekt</Heading2>

        <Intro>Maecenas faucibus mollis interdum. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. <Link>Link</Link> Curabitur blandit tempus porttitor.Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Intro>
        <Text>Maecenas faucibus mollis interdum. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Maecenas faucibus mollis interdum. </Text>
            
            <Text>orem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas faucibus mollis interdum. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor <Link>mauris condimentum </Link> nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        
        
        <Image src="/images/projects/bergheim.jpg" width={1200} height={800} objectFit="cover"></Image>

        <Text>Maecenas faucibus mollis interdum. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo. </Text>
        <Heading3>Zwischenheadline zum Projekt </Heading3>
        
        <Text> tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Maecenas faucibus mollis interdum. </Text>
     

        </Wrapper>

        </>
    )
}

export default TextComponent