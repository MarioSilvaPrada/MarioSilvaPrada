import React from 'react';
import styled from 'styled-components';

import Title from './Title';

import express from '../img/techs/express.png';
import graphql from '../img/techs/graphql.png';
import jest from '../img/techs/jest.png';
import mongodb from '../img/techs/mongodb.png';
import node from '../img/techs/node.png';
import react from '../img/techs/react.png';
import redux from '../img/techs/redux.png';

const StyledImages = styled.div`
    display: flex;
    flex-direction:column;

    img {
        width:250px;
    }
`

const Technologies = () => (
    <div>
        <Title id='technologies' title='Technologies' description='My technologies' />
        <StyledImages>
            <img alt='express' src={express}/>
            <img alt='graphql' src={graphql}/>
            <img alt='jest' src={jest}/>
            <img alt='mongodb' src={mongodb}/>
            <img alt='node' src={node}/>
            <img alt='react' src={react}/>
            <img alt='redux' src={redux}/>
        </StyledImages>
    </div>
)

export default Technologies;