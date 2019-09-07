import React from "react";
import styled from "styled-components";
import { BLUE } from "../../styles/styles";
import { Element } from "react-scroll";
import Developer from "../../img/programming.svg";
import NavBar from "./NavBar";

const StyledHeader = styled.div`
    height: 7rem;
    width: 100%
    display: flex;
    justify-content: space-between;
    background-color: ${BLUE};

    img{
        height: 80%;
        align-self: center;
        margin-left: 5rem;
    }

    @media screen and (max-width: 950px) {
        height: 5rem;   
        justify-content: center;

        img{
            display: none;
        }
    }
`;
const Header = () => (
  <Element name="navbar" className="element">
    <StyledHeader>
      <img alt="developer" src={Developer} />
      <NavBar />
    </StyledHeader>
  </Element>
);

export default Header;
