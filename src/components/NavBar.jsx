import React from 'react';
import styled from 'styled-components';
import { RED } from '../styles/styles';


const StyledNavBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    width: 500px;
    margin-right: 30px;
`

const Link = styled.a`
    font-weight: bold;
    transition: 0.5s;
    padding: 1.9rem 2.1rem;
    text-decoration: none;
    color: white;


    &:hover{
        cursor: pointer;
        background: ${RED}
    }
`

const NavBar = () => (
    <StyledNavBar>
        <Link>About</Link>
        <Link>Portfolio</Link>
        <Link>Education</Link>
        <Link>Contact</Link>
    </StyledNavBar>
);

export default NavBar;