import React from 'react';
import styled from 'styled-components';

import { Element } from 'react-scroll';

import Title from './Title';

import TiltImage from './TiltImage';
import TextContent from './TextContent';

import code from '../img/web-programming.png';
import design from '../img/sketch.png';
import responsive from '../img/responsive.png';



const StyledImages = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;

    img {
        height: 150px;
        margin: 40px;
    }

    .content{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin-bottom: 50px;
    }

`

const Technologies = () => (
    <div>
        <Element name="technologies" className="element">
            <Title id='technologies' title='Technologies' description='My technologies' />
        </Element>

        <StyledImages>
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
        </StyledImages>
    </div>
)

export default Technologies;