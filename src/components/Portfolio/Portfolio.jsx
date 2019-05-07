import React from 'react';
import styled from 'styled-components';

import Title from '../Title';
import { Element } from 'react-scroll';

import { RED, BOX_SHADOW2 } from '../../styles/styles';

import colorGame from '../../img/portfolio/color-game.PNG';
import robofriends from '../../img/portfolio/robot-friends.PNG';
import background from '../../img/portfolio/background.PNG';
import orbit from '../../img/portfolio/orbit.PNG';



const projects = [
    {
        img: `${colorGame}`,
        url:'https://colorgameproject1.netlify.com/',
        title: 'Color Game',
        description: 'awesome website',
        github: 'https://github.com/MarioSilvaPrada/color_game'
    },
    {
        img: `${robofriends}`,
        url:'https://robot-friends-project.netlify.com/',
        title: 'Robot Friends',
        description: 'awesome website2',
        github: 'https://github.com/MarioSilvaPrada/robofriends'
    },
    {
        img: `${background}`,
        url:'',
        title: 'Background Generator',
        description: 'awesome website3',
        github: 'https://github.com/MarioSilvaPrada/background-generator'
    },
    {
        img: `${orbit}`,
        url:'http://orbitgenerator.s3-website.eu-west-2.amazonaws.com/',
        title: 'Orbit Animation',
        description: 'awesome website4',
        github: 'https://github.com/MarioSilvaPrada/orbit-generator'
    },
    {
        img: 'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        url:'',
        title: 'Website5',
        description: 'awesome website5',
        github: 'https://github.com/MarioSilvaPrada/color_game'
    },
    {
        img: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        url:'',
        title: 'Website6',
        description: 'awesome website6',
        github: 'https://github.com/MarioSilvaPrada/color_game'
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

    .project h1 {
        font-size: 1.5rem;
    }

    .project h1:hover {
        text-decoration:underline;
    }

    .project i {
        font-size: 1.2rem;
        margin-left: 5px;
    }

    .project .github {
        color: #999999;
        transition: 0.5s;
    }

    .project .github:hover {
        color: ${RED}
    }
`

const Portfolio = () => (
    <div>
        <Element name="portfolio" className="element">
            <Title title='Portfolio' description='My development Projects' />
        </Element>
        <StyledPortfolio>
            
            <div className='my-work'>
                {projects.map((project, i) => {
                    return <div key={i} className="project">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <img alt={project.title} src={project.img} />
                        </a>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <h1>{project.title}</h1>
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