import React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';

const StyledHeader = styled.div`
    height: 80px;
    width: 100%
    display:flex;
    flex-direction: flex-end;
    background-color: #49beb7


`
const Header = () => (
    <StyledHeader>
        <NavBar/>
    </StyledHeader>
)

export default Header