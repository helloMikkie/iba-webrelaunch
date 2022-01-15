import Links from "https://framer.com/m/Links-Qpmn.js@ZzZRkfNfbrCGHPZx8kq4"
import Language from "https://framer.com/m/Language-eJ6k.js@6QwsGQZdhC5tShPvcnZi"
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

    max-width: 1200px;
`