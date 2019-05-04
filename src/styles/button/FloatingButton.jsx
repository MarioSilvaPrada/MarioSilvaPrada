import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import { DARK_RED, RED, BOX_SHADOW } from '../../styles/styles';


const FloatingButtonStyled = styled.button`
    height: 4rem;
    width: 4rem;
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

    @media screen and (max-width: 950px) {
        top: 85%;
        left: 88%;
    }

    @media screen and (max-width: 500px) {
        top: 90%;
        left: 85%;
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