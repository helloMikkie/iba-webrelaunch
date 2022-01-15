
import {Download, Container} from "./styles"

const DownloadItem = ({title}) => {
    return(
        <>
        <Container>
        <Download style={{ width: "100%"}} 
            ikon="/images/ikons/download.svg"
            title="Sitzungsprotkoll" 
            description="Park Books, Zürich"
            />
        <Download style={{ width: "100%"}} 
            ikon="/images/ikons/file.svg"
            title="Die Geschichte der IBA Heidelberg"
            description="JPG, 3MB"
             />
        <Download style={{ width: "100%"}} />
        </Container>
        </>
    )
}


export default DownloadItem