import React from 'react';
import styled from 'styled-components';
import { BLUE } from '../styles/styles';

import NavBar from './NavBar';

const StyledHeader = styled.div`
    height: 80px;
    width: 100%
    display: flex;
    justify-content: flex-end;
    background-color: ${BLUE};
`
const Header = () => (
    <StyledHeader>
        <NavBar/>
    </StyledHeader>
)

export default Header