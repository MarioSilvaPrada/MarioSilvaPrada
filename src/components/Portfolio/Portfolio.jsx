import React, { useState } from 'react';
import Title from '../Title';
import { Element } from 'react-scroll';
import { projects } from './Projects';
import { mobile } from './Projects';

import * as S from './Portfolio.styled';

const Portfolio = () => {
  const [ isWeb, setIsWeb ] = useState(true);
  return (
    <div>
      <Element name='portfolio' className='element'>
        <Title
          title='Portfolio'
          description='Always excited to learn, design and build new things.'
        />
      </Element>
      <S.Buttons>
        <S.Button onClick={() => setIsWeb(true)} isWeb={isWeb}>
          Web
        </S.Button>
        <S.Button onClick={() => setIsWeb(false)} isWeb={!isWeb}>
          Mobile
        </S.Button>
      </S.Buttons>

      <S.StyledPortfolio>
        <div className='my-work'>
          {isWeb ? (
            projects.map((project, i) => {
              return (
                <div key={i} className='project'>
                  <a href={project.url} target='_blank' rel='noopener noreferrer'>
                    <img alt={project.title} src={project.img} />
                  </a>
                  <a href={project.url} target='_blank' rel='noopener noreferrer'>
                    <h2>{project.title}</h2>
                  </a>
                  <p className='portfolio-description'>{project.description}</p>
                  <a
                    href={project.github}
                    className='github'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span>GitHub</span>
                    <i className='fab fa-github' />
                  </a>
                </div>
              );
            })
          ) : (
            mobile.map((app) => (
              <div>
                <h1>{app.title}</h1>
                <S.appImg alt='img' src={app.img} />
              </div>
            ))
          )}
        </div>
      </S.StyledPortfolio>
    </div>
  );
};

export default Portfolio;
