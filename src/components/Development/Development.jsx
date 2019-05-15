import React from "react";
import styled from "styled-components";

import { Element } from "react-scroll";

import Title from "../Title";

import TiltImage from "./TiltImage";
import TextContent from "./TextContent";

import code from "../../img/web-programming.png";
import design from "../../img/sketch.png";
import responsive from "../../img/responsive.png";
import idea from "../../img/idea.png";

const StyledDevelopment = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const StyledImages = styled.div`
  min-width: 20rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  place-items: center;
  gap: 2.5rem;

  img {
    height: 6rem;
    width: auto;
    margin: 5rem;
  }

  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 3rem;
  }

  .content-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.2rem;
    line-height: 1.8;
    margin: 0 3rem;
    width: 80%;
  }

`;

const Development = () => (
  <div>
    <Element name="development" className="element">
      <Title
        id="development"
        title="Development"
        description="The way I write code"
      />
    </Element>
    <StyledDevelopment>
      <StyledImages>
        <div className="content">
          <TiltImage alt="code" src={code} />
          <TextContent
            title="Code"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed"
          />
        </div>
        <div className="content">
          <TiltImage alt="design" src={design} className="designImg" />

          <TextContent
            className="designText"
            title="Design"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed"
          />
        </div>

        <div className="content">
          <TiltImage alt="responsive" src={responsive} />
          <TextContent
            title="Responsive"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed"
          />
        </div>
        <div className="content">
          <TiltImage alt="update" src={idea} />
          <TextContent
            title="Learning"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed"
          />
        </div>
      </StyledImages>
    </StyledDevelopment>
  </div>
);

export default Development;
