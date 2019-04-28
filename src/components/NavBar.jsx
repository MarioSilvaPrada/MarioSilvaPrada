import React from 'react';
import styled from 'styled-components';
import { RED } from '../styles/styles';
import { Link } from 'react-scroll'


const StyledNavBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    width: 500px;
    margin-right: 30px;

    .navbar_item {
        text-decoration: none;
        font-weight: bold;
        transition: 0.5s;
        padding: 1.9rem 2.1rem;
        color: white;
    }

    .navbar_item:hover {
        cursor: pointer;
        background: ${RED}
    }
`


const NavBar = () => (
    <StyledNavBar>
        <Link className="navbar_item" href="#about" activeClass="active" to="about" spy={true} smooth={true} duration={700}>
            About
        </Link>

        <Link className="navbar_item" href="#portfolio" activeClass="active" to="portfolio" spy={true} smooth={true} duration={700}>
            Portfolio
        </Link>

        <Link className="navbar_item" href="#development" activeClass="active" to="development" spy={true} smooth={true} duration={700}>
            Development
        </Link>

        <Link className="navbar_item" href="#contact" activeClass="active" to="contact" spy={true} smooth={true} duration={700}>
            Contact
        </Link>

    </StyledNavBar>
);

export default NavBar;