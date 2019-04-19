import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import img from '../img/laptop.jpg';

import { white, RED } from '../styles/styles';

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
    align-items: center;
    font-size: 4em;
    font-weight: bold;
    color: ${RED}
`

const Greetings = () => (
    <Wrapper>
        <ColorLayer>
            <Typed
                strings={[
                    'Hi my name is Mário Prada',
                    'and I\'m a Front-end Developer',
                    'I invite you to check out my work'
                ]}
                typeSpeed={40}
                backSpeed={30}
                loop
            />
        </ColorLayer>
    </Wrapper>
)

export default Greetings