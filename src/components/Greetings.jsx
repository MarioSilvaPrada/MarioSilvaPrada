import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import img from '../img/laptop.jpg';
import { Link } from 'react-scroll'


import { white, RED } from '../styles/styles';
import StyledButton from './button/button'

const Wrapper = styled.div`
    background-image: url(${img});
    background-size: cover;
    height: 100vh;

    
`

const ColorLayer = styled.div`
    background-color: ${white(0.4)};
    height:100%;
    width: 100%;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
    color: ${RED};
    
`

const Greetings = () => (
    <Wrapper>
        <ColorLayer>
            <Typed
                strings={[
                    `Hi my name is Mário Prada.`,
                    `I'm a Front-end Developer.`
                ]}
                typeSpeed={40}
                backSpeed={30}
                loop
            />
            <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={700}>
                <StyledButton red>Check my work</StyledButton>
            </Link>
        </ColorLayer>
    </Wrapper>
)

export default Greetings