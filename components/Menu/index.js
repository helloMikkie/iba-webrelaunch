
import {LanguageComponent,Header, LinksComponent, SearchComponent} from "./styles"
const Menu = () => {
    return(
        <Header>
  
        <LanguageComponent />
        <LinksComponent style={Style}/>
        <SearchComponent />
      
        
 
        </Header>
    )
}


const Style= {
    width: "100%"
}
export default Menu