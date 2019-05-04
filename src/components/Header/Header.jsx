import React from 'react';
import styled from 'styled-components';
import { BLUE } from '../../styles/styles';
import { Element } from 'react-scroll';

import NavBar from './NavBar';

const StyledHeader = styled.div`
    height: 5rem;
    width: 100%
    display: flex;
    justify-content: flex-end;
    background-color: ${BLUE};

    @media screen and (max-width: 950px) {
        height: 4rem;   
        justify-content: center;

    }
`
const Header = () => (
    <Element name="navbar" className="element">
        <StyledHeader>
            <NavBar />
        </StyledHeader>
    </Element>

)

export default Header