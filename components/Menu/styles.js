import Links from "https://framer.com/m/Links-Qpmn.js@RgGdOgBaiZ0aGuvd7yPR"
import Language from "https://framer.com/m/Language-eJ6k.js@iVdsdSFevlIOIrlRsSE0"
import Submenu from "https://framer.com/m/Submenu-Azbc.js@ObaTorgwGBzQ83cY2tNG"
import Search from "https://framer.com/m/Search-wl2Q.js@8hKeAQLLap6QsyjsXEBU"

import styled from 'styled-components'

export const Header = styled.header`
width: 100%; 
    display: flex; 
    align-items: center;
    padding: 16px 32px; 
    justify-content: space-between; 

`
export const LanguageComponent = styled(Language)`
margin-right: 16px; 

`

export const SearchComponent = styled(Search)`
margin-left: 16px; 
`

export const LinksComponent = styled(Links)`
    max-width: 1232px;
`

export const SubmenuComponent = styled(Submenu)`
// max-width: 1232px;
`