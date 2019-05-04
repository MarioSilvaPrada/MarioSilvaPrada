import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import { Element } from 'react-scroll';

import { RED, BOX_SHADOW2 } from '../styles/styles';



const projects = [
    {
        img: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Website',
        description: 'awesome website',
        github: 'https://github.com/MarioSilvaPrada/color_game'
    },
    {
        img: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Website2',
        description: 'awesome website2',
        github: 'https://github.com/MarioSilvaPrada/color_game'
    },
    {
        img: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Website3',
        description: 'awesome website3',
        github: 'https://github.com/MarioSilvaPrada/color_game'
    },
    {
        img: 'https://images.pexels.com/photos/1266007/pexels-photo-1266007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Website4',
        description: 'awesome website4',
        github: 'https://github.com/MarioSilvaPrada/color_game'
    },
    {
        img: 'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Website5',
        description: 'awesome website5',
        github: 'https://github.com/MarioSilvaPrada/color_game'
    },
    {
        img: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Website6',
        description: 'awesome website6',
        github: 'https://github.com/MarioSilvaPrada/color_game'
    }
];

const StyledPortfolio = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 70rem;
    margin: 3rem auto;
    

    .my-work {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
        grid-template-rows: 25rem;
        gap: 5rem;
        place-items: center;
    }

    .project {
       width: 20rem; 
       height: 25rem;
       border: 1px solid #d0d0d0;
        ${BOX_SHADOW2}
    }

    .project a {
        text-decoration: none;
        color: black;
    }

    .project img {
        width: 100%;
        height: 60%;
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
                        <a href={project.img} target="_blank" rel="noopener noreferrer">
                            <img alt={project.title} src={project.img} />
                        </a>
                        <a href={project.img} target="_blank" rel="noopener noreferrer">
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