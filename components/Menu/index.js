
import {LanguageComponent,Header, LinksComponent, SearchComponent, SubmenuComponent} from "./styles"
const Menu = () => {
    return(
        <>
        <Header>
  
        <LanguageComponent />
        <LinksComponent style={Style}/>
        <SearchComponent />
      
        
 
        </Header>
        <SubmenuComponent style={Style} />
        </>
    )
}


const Style= {
    width: "100%"
}
export default Menu