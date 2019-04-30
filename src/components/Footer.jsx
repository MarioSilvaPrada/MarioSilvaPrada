import React from 'react';
import styled from 'styled-components';

import { BLUE } from '../styles/styles';


const StyledFooter = styled.div`
    width: 100%;
    height: 400px;
    background: ${BLUE}
    margin-top: 50px;
`

const Footer = () => (
    <StyledFooter></StyledFooter>
)

export default Footer;