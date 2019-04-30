import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll'


import { BLUE, RED } from '../styles/styles';


const StyledFooter = styled.div`
    width: 100%;
    height: 300px;
    background: ${BLUE}
    margin-top: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .footer-content {
        width: 400px;
        display: center;
        flex-direction: column;
        justify-content: space-between;

    }

    .footer-nav {
        margin-top: 20px;
    }

    .copyright {
        font-size: 1.2em;
    }

    .name {
        color: ${RED}
        font-weight: bold;
        margin-left: 5px;
    }

    .logos {
        display: flex;
        justify-content: space-evenly;
        font-size: 2.5em;
        text-decoration: none;
        margin-top: 20px;
        
    }

    .navbar_item {
        text-decoration: none;
        color: white;
        margin-left: 10px;
        margin-right: 10px;

    }

    .navbar_item:hover {
        text-decoration: underline;
    }

    .logos i {
        color: white;
        transition: 0.5s;
    }

    .logos i:hover {
        color: ${RED};
    }
`

const Footer = () => (
    <StyledFooter>
    <div className="footer-content">
        <div>
            <span className="copyright">
                © 2019
            <span className="name">Mário Prada</span>
            </span>
        </div>
        <div className="footer-nav">
            <Link className="navbar_item" href="#about" activeClass="active" to="about" spy={true} smooth={true} duration={700}>
                About
            </Link>
            <span>|</span>
            <Link className="navbar_item" href="#portfolio" activeClass="active" to="portfolio" spy={true} smooth={true} duration={700}>
                Portfolio
            </Link>
            <span>|</span>
            <Link className="navbar_item" href="#development" activeClass="active" to="development" spy={true} smooth={true} duration={700}>
                Development
            </Link>
            <span>|</span>
            <Link className="navbar_item" href="#contact" activeClass="active" to="contact" spy={true} smooth={true} duration={700}>
                Contact
            </Link>
        </div>
        <div className="logos">
            <a href="https://github.com/MarioSilvaPrada" target="blank">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/mario-prada/" target="blank">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/MarioSilvaPrada" target="blank">
                <i class="fab fa-twitter"></i>           
            </a>
        </div>
    </div>
    </StyledFooter>
)

export default Footer;