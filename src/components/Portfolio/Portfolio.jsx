import React from 'react';
import styled from 'styled-components';

import Title from '../Title';
import { Element } from 'react-scroll';

import { RED, BOX_SHADOW2 } from '../../styles/styles';

import colorGame from '../../img/portfolio/color-game.PNG';
import robofriends from '../../img/portfolio/robot-friends.PNG';
import background from '../../img/portfolio/background.PNG';
import orbit from '../../img/portfolio/orbit.PNG';
import calculator from '../../img/portfolio/calculator.PNG';
import airbnb from '../../img/portfolio/airbnb.PNG';
import portfolio from '../../img/portfolio/portfolio.PNG';



const projects = [
    {
        img: `${colorGame}`,
        url:'https://colorgameproject1.netlify.com/',
        title: 'Color Game',
        description: 'Game to guess the color. Built with Vanilla Javascript.',
        github: 'https://github.com/MarioSilvaPrada/color_game'
    },
    {
        img: `${robofriends}`,
        url:'https://robot-friends-project.netlify.com/',
        title: 'Robot Friends',
        description: 'A React project built with Tachyons and RoboHash API.',
        github: 'https://github.com/MarioSilvaPrada/robofriends'
    },
    {
        img: `${background}`,
        url:'https://background-generator-project.netlify.com/',
        title: 'Background Generator',
        description: 'Project to help you choose your background gradient. Built with Vanilla Javascript.',
        github: 'https://github.com/MarioSilvaPrada/background-generator'
    },
    {
        img: `${orbit}`,
        url:'https://orbit-animation.netlify.com/',
        title: 'Orbit Animation',
        description: 'A simple animation just built with CSS3',
        github: 'https://github.com/MarioSilvaPrada/orbit-generator'
    },
    {
        img: `${calculator}`,
        url:'https://personal-calculator.netlify.com/',
        title: 'Personal Calculator',
        description: 'Calculator implemented with React and MathJS library.',
        github: 'https://github.com/MarioSilvaPrada/personal-calculator'
    },
    {
        img: 'https://i.cdn.turner.com/adultswim/big/img/2018/05/07/rick-and-morty.jpg',
        url:'https://rick-and-morty-wiki.netlify.com/',
        title: 'Rick and Morty Wikipedia',
        description: 'A funny website built with React, GraphQL and Styled Components',
        github: 'https://github.com/MarioSilvaPrada/rick-and-morty-wiki'
    },
    {
        img: `${airbnb}`,
        url:'https://github.com/MarioSilvaPrada/airbnb-project',
        title: 'Airbnb Clone',
        description: 'A Airbnb clone developed with MongoDB, Mongoose, NodeJs and EJS.',
        github: 'https://github.com/MarioSilvaPrada/airbnb-project'
    },
    {
        img: `${portfolio}`,
        url:'https://mariosilvaprada.com',
        title: 'My Portfolio',
        description: 'Built this site so I can share my skills and projects. Developed with React and deployed in AWS.',
        github: 'https://github.com/MarioSilvaPrada/my-portfolio'
    }
];

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
        text-decoration:underline;
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
        color: ${RED}
    }
`

const Portfolio = () => (
    <div>
        <Element name="portfolio" className="element">
            <Title title='Portfolio' description='Always excited to learn, design and build new things.' />
        </Element>
        <StyledPortfolio>
            
            <div className='my-work'>
                {projects.map((project, i) => {
                    return <div key={i} className="project">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <img alt={project.title} src={project.img} />
                        </a>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <h2>{project.title}</h2>
                        </a>
                        <p>{project.description}</p>
                        <a href={project.github} className="github" target="_blank" rel="noopener noreferrer">
                            <span>GitHub</span>
                            <i className="fab fa-github"></i>
                        </a>

                    </div>
                })}
            </div>

        </StyledPortfolio>
    </div>


)

export default Portfolio;