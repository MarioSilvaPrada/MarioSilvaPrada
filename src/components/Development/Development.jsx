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
  grid-template-columns: repeat(auto-fill, minmax(31rem, 1fr));
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
    font-size: 1.4rem;
    line-height: 1.8;
    margin: 0 3rem;
    width: 80%;

    p{
      text-align: left;
    }
  }
`;

const Development = () => (
  <div>
    <Element name="development" className="element">
      <Title
        id="development"
        title="Development"
        description="Development tends to be hard. Here are some things I'm good at, to make it smoother."
      />
    </Element>
    <StyledDevelopment>
      <StyledImages>
        <div className="content">
          <TiltImage alt="code" src={code} />
          <TextContent
            title="Code"
            description="I enjoy coding things from scratch using clean, simple and maintainable code that is easy to read."
          />
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <div className="content">
          <TiltImage alt="design" src={design} className="designImg" />

          <TextContent
            className="designText"
            title="Design"
            description="My focus is to craft beautifully designed websites, and as with my code, I value simple and clean design patterns."
          />
        </div>
        <div className="content">
          <TiltImage alt="responsive" src={responsive} />
          <TextContent
            title="Responsive"
            description="My projects will work and look good on any device, no matter the size of the screen."
          />
        </div>
        <div className="content">
          <TiltImage alt="problem-solving" src={idea} />
          <TextContent
            title="Problem Solving"
            description="Always break problems into steps, which allows me to organise my projects, in order to get best results."
          />
        </div>
      </StyledImages>
    </StyledDevelopment>
  </div>
);

export default Development;
