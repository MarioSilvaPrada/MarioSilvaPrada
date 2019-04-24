import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import { Element } from 'react-scroll';

import { BLUE, RED, BOX_SHADOW2 } from '../styles/styles';



const projects = [
    {
        img: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Website',
        description: 'awesome website'
    },
    {
        img: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Website2',
        description: 'awesome website2'
    },
    {
        img: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Website',
        description: 'awesome website'
    },
    {
        img: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Website2',
        description: 'awesome website2'
    },
    {
        img: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Website',
        description: 'awesome website'
    },
    {
        img: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Website2',
        description: 'awesome website2'
    }
];

const StyledPortfolio = styled.div`
    display: flex;
    flex-direction: column;

    .my-work {
        display: flex;
        flex-wrap:wrap;
    }

    .project {
       width: 400px;
       margin: 20px;
       border: 1px solid #d0d0d0;
        ${BOX_SHADOW2}


    }

    .project img {
        width: 100%;
        height: 60%;
    }

    a {
        text-decoration: none;
    }
`

const Portfolio = () => (
    <div>
        <Element name="portfolio" className="element">
            <Title title='Portfolio' description='My development Projects' />
        </Element>
        <StyledPortfolio>

            <div className='my-work'>
                {projects.map(project => {
                    return <div className="project">
                        <a href={project.img}>
                            <img alt={project.title} src={project.img} />
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                        </a>
                    </div>
                })}
            </div>

        </StyledPortfolio>
    </div>


)

export default Portfolio;