import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-tilt'
import { RED } from '../styles/styles';


import Title from './Title';

import code from '../img/web-programming.png';
import design from '../img/sketch.png';
import responsive from '../img/responsive.png';

const StyledAboutMe = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    .content{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin-bottom: 50px;
    }

    .content-text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 50%;
    }
    
    img {
        width:150px;
    }
    
`

const AboutMe = () => (
    <div>
        <Title title={'About Me'} description={'Always excited to learn, design and build new things.'} />
        <StyledAboutMe>
            <div className='aside'>
                inserir aqui
            </div>
            <div className='contents'>
                <div className='content'>
                    <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 250, width: 250, background: `${RED}`, borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <img alt='code' src={code} />
                    </Tilt>
                    <div className='content-text'>
                        <h1>Code</h1>
                        <p>I enjoy hand coding things from scratch using clean, simple and maintainable code that is easy to read.</p>
                    </div>


                </div>
                <div className='content'>
                    <div className='content-text'>
                        <h1>Design</h1>
                        <p>I enjoy hand coding things from scratch using clean, simple and maintainable code that is easy to read.</p>
                    </div>

                    <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 250, width: 250, background: `${RED}`, borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <img alt='design' src={design} />
                    </Tilt>

                </div>

                <div className='content'>

                    <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 250, width: 250, background: `${RED}`, borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <img alt='responsive' src={responsive} />
                    </Tilt>
                    <div className='content-text'>
                        <h1>Responsive</h1>
                        <p>I enjoy hand coding things from scratch using clean, simple and maintainable code that is easy to read.</p>
                    </div>


                </div>
            </div>


        </StyledAboutMe>

    </div>
);

export default AboutMe;