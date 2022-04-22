import styled from 'styled-components'

const Nav = styled.nav`
background: #FEFEFE;
padding: 17px 0 ;
`
const NavbarItem = styled.div`
position:relative;
`
const Logo = styled.a`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;
`

export default function Navbar () {
    return (
        <Nav>
<div className='container'>
<NavbarItem>
<Logo>
    NEXT | BLOG
</Logo>
</NavbarItem>
</div>
        </Nav>
    )
}