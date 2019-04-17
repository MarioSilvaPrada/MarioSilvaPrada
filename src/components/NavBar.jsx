import React from 'react';
import styled from 'styled-components';
import { BLUE, YELLOW } from '../styles/styles';


const NavBarStyled = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    width: 500px;
`

const Link = styled.a`
    font-weight: bold;
    transition: 0.4s;
    padding: 1.9rem 2.1rem;
    text-decoration: none;

    &:hover{
        cursor: pointer;
        background: ${YELLOW}
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