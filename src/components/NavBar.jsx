import React from 'react';
import styled from 'styled-components';

const NavBarStyled = styled.div`
    display: flex;
    justify-content: space-evenly;
    ${'' /* align-items: stretch; */}
    width: 500px;
`

const Link = styled.a`
    font-weight: bold;
    transition: 0.4s;
    flex: 1;
    flex-direction: column; 
    text-align: center;

    &:hover{
        cursor: pointer;
        background: #facf5a
    }
`

const NavBar = () => (
    <NavBarStyled>
        <Link>About</Link>
        <Link>Portfolio</Link>
        <Link>Education</Link>
        <Link>Contact</Link>
    </NavBarStyled>
);

export default NavBar;