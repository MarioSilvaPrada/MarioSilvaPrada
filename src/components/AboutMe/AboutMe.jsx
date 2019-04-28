import React from 'react';
import styled from 'styled-components';


import Title from '../Title';

import foto from '../../img/foto.jpg';

import { Element } from 'react-scroll';

import ImageTec from '../ImageTec'

import express from '../../img/techs/express.png';
import graphql from '../../img/techs/graphql.png';
import jest from '../../img/techs/jest.png';
import mongodb from '../../img/techs/mongodb.png';
import node from '../../img/techs/node.png';
import react from '../../img/techs/react.png';
import redux from '../../img/techs/redux.png';
import javascript from '../../img/techs/javascript.png';
import html from '../../img/techs/html.png';
import css from '../../img/techs/css.png';
import npm from '../../img/techs/npm.png';
import git from '../../img/techs/git.png';
import github from '../../img/techs/github.png';
import gitlab from '../../img/techs/gitlab.png';
import sass from '../../img/techs/sass.png';
import jquery from '../../img/techs/jquery.png';
import styledComponents from '../../img/techs/styled-components.png';



const StyledAboutMe = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .aside {
        flex:1;
    }

    .contents{
        flex: 2;
    }
    
    
    
    .aside p {
        margin: 20px 80px;
        font-size: 1.2em;
        text-align: justify;
        line-height: 1.8;
    }

    .content-text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 50%;
        font-size:1.2em;
        line-height: 1.8;
    }

    .profile_foto{
        width: 300px;
        height: auto;
        border-radius: 50%;
    }
    
`

const StyledTec = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;

    h1 {

    }

    .tecs {
        display: flex;
        flex-wrap: wrap;
    }
    
`


const AboutMe = () => (
    <div>
        <Element name="about" className="element">
            <Title id='about' title={'About Me'} description={'Always excited to learn, design and build new things.'} />
        </Element>

        <StyledAboutMe>
            <div className='aside'>
                <img className='profile_foto' alt='foto' src={foto} />
                <h1>Who am I?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam sit amet nisl. Feugiat pretium nibh ipsum consequat nisl vel. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Elementum nibh tellus molestie nunc non blandit massa enim nec. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Auctor elit sed vulputate mi sit amet mauris commodo quis. Quis lectus nulla at volutpat diam ut. Ornare massa eget egestas purus viverra accumsan. A diam maecenas sed enim ut. Consequat mauris nunc congue nisi vitae suscipit tellus. Scelerisque fermentum dui faucibus in ornare quam viverra. Duis ut diam quam nulla porttitor.</p>
            </div>

            <StyledTec>
                <h1>Technologies used:</h1>
                <div className="tecs">
                    <ImageTec name="HTML5" src={html} />
                    <ImageTec name="CSS3" src={css} />
                    <ImageTec name="Javascript" src={javascript} />
                    <ImageTec name="JQuery" src={jquery} />
                    <ImageTec name="NodeJS" src={node} />
                    <ImageTec name="ExpressJS" src={express} />
                    <ImageTec name="MongoDB" src={mongodb} />
                    <ImageTec name="React" src={react} />
                    <ImageTec name="Redux" src={redux} />
                    <ImageTec name="GraphQL" src={graphql} />
                    <ImageTec name="Jest" src={jest} />
                    <ImageTec name="SASS" src={sass} />
                    <ImageTec name="Styled-Components" src={styledComponents} />
                    <ImageTec name="NPM" src={npm} />
                    <ImageTec name="GIT" src={git} />
                    <ImageTec name="GitHub" src={github} />
                    <ImageTec name="GitLab" src={gitlab} />
                </div>
            </StyledTec>
            {/* <div className='content'>
                    <TiltImage alt='code' src={code} />
                    <TextContent
                        title='Code'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed'
                    />
                </div>
                <div className='content'>
                    <TextContent
                        title='Design'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed'
                    />
                    <TiltImage alt='design' src={design} />
                </div>

                <div className='content'>
                    <TiltImage alt='responsive' src={responsive} />
                    <TextContent
                        title='Responsive'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed'
                    />
                </div> */}


        </StyledAboutMe>
    </div>

);

export default AboutMe;