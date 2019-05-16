import React from 'react';
import styled from 'styled-components';

import { RED, DARK_RED, white } from '../styles/styles';


const StyledTitle = styled.div`
    height: 10rem;
    background-image: linear-gradient(147deg, ${RED} 10%, ${DARK_RED} 84%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${white(1)};
    margin-bottom: 3rem;

    h1 {
        font-size: 3rem;
        margin-bottom: 0;
    }

    p {
        font-size: 1.5em;
        color: ${white(0.8)};
    }
`;

const Title = (props) => (
    <StyledTitle id={props.id}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </StyledTitle>
)

export default Title;