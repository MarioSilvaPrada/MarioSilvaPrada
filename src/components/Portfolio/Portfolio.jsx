import React from "react";
import styled from "styled-components";
import Title from "../Title";
import { Element } from "react-scroll";
import { RED, BOX_SHADOW2 } from "../../styles/styles";
import { projects } from "./Projects";

const StyledPortfolio = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90rem;
  margin: 3rem auto;

  .my-work {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-template-rows: 25rem;
    gap: 2rem;
    place-items: center;
  }

  .project {
    width: 25rem;
    height: 25rem;
    border: 1px solid #d0d0d0;
    border-radius: 2rem;
    ${BOX_SHADOW2}
  }

  .project a {
    text-decoration: none;
    color: black;
  }

  .project img {
    width: 100%;
    height: 60%;
    border-radius: 2rem 2rem 0 0;
  }

  .project h2 {
    font-size: 1.3rem;
  }

  .project h2:hover {
    text-decoration: underline;
  }

  .project i {
    margin-left: 5px;
  }

  .project .github {
    color: #999999;
    transition: 0.5s;
    font-size: 1.2rem;
  }

  .project .github:hover {
    color: ${RED};
  }
`;

const Portfolio = () => (
  <div>
    <Element name="portfolio" className="element">
      <Title
        title="Portfolio"
        description="Always excited to learn, design and build new things."
      />
    </Element>
    <StyledPortfolio>
      <div className="my-work">
        {projects.map((project, i) => {
          return (
            <div key={i} className="project">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img alt={project.title} src={project.img} />
              </a>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h2>{project.title}</h2>
              </a>
              <p>{project.description}</p>
              <a
                href={project.github}
                className="github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
                <i className="fab fa-github" />
              </a>
            </div>
          );
        })}
      </div>
    </StyledPortfolio>
  </div>
);

export default Portfolio;
