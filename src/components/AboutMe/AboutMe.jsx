import React from 'react';
import styled from 'styled-components';

import TiltImage from './TiltImage';
import TextContent from './TextContent';
import Title from '../Title';

import code from '../../img/web-programming.png';
import design from '../../img/sketch.png';
import responsive from '../../img/responsive.png';
import foto from '../../img/foto.jpg';

import { Element } from 'react-scroll'



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
    
    .content{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin-bottom: 50px;
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
    
    img {
        width:150px;
    }

    .profile_foto{
        width: 300px;
        border-radius: 50%;
    }
    
`

const AboutMe = () => (
    <div>
        <Element name="about"  className="element">
            <Title  title={'About Me'} description={'Always excited to learn, design and build new things.'} />
        </Element>

        <StyledAboutMe>
            <div className='aside'>
                <img className='profile_foto' alt='foto' src={foto} />
                <h1>Who am I?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam sit amet nisl. Feugiat pretium nibh ipsum consequat nisl vel. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Elementum nibh tellus molestie nunc non blandit massa enim nec. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Auctor elit sed vulputate mi sit amet mauris commodo quis. Quis lectus nulla at volutpat diam ut. Ornare massa eget egestas purus viverra accumsan. A diam maecenas sed enim ut. Consequat mauris nunc congue nisi vitae suscipit tellus. Scelerisque fermentum dui faucibus in ornare quam viverra. Duis ut diam quam nulla porttitor.</p>
            </div>
            <div className='contents'>
                <div className='content'>
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
                </div>

            </div>
        </StyledAboutMe>
    </div>

);

export default AboutMe;