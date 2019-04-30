import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import { DARK_RED, RED, BOX_SHADOW } from '../../styles/styles';


const FloatingButtonStyled = styled.button`
    height: 60px;
    width:60px;
    border-radius: 100%;
    border: 1px solid ${DARK_RED};
    background: ${DARK_RED};
    position: fixed;
    ${BOX_SHADOW}
    top: 85%;
    left: 92%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2.5rem;

    :hover {
        cursor: pointer;
    }
`

const FloatingButton = () => (

    <FloatingButtonStyled className="top-btn">

        <Link activeClass="active" to="navbar" spy={true} smooth={true} duration={700}>
            <i class="fas fa-chevron-up"></i>
        </Link>

    </FloatingButtonStyled>



)

export default FloatingButton