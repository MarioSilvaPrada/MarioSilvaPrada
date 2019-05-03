import React from 'react';
import styled from 'styled-components';

import { Element } from 'react-scroll';

import Title from './Title';

import TiltImage from './TiltImage';
import TextContent from './TextContent';

import code from '../img/web-programming.png';
import design from '../img/sketch.png';
import responsive from '../img/responsive.png';

const StyledDevelopment = styled.div`
    width: 80%;
    margin: 0 auto;
`

const StyledImages = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;

    img {
        height: 100px;
        margin: 40px;
    }

    .content{
        display: flex;
        width: 100%;
        margin-bottom: 50px;
    }

    .content-text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size:1.2em;
        line-height: 1.8;
        margin: 0 20px;
        width: 80%;
    }

    @media screen and (max-width: 830px) {
        .content {
            flex-direction: column;
            align-items: center;
        }

        .designImg {
            order: 1;
        }

        .designText {
            order: 2;
        }
    } 
`

const Development = () => (
    <div>
<Element name="development" className="element">
            <Title id='development' title='Development' description='The way I write code' />
        </Element>
        <StyledDevelopment>

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
                        className="designText"
                        title='Design'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed'
                    />
                    <TiltImage alt='design' src={design} className="designImg"/>

                </div>

                <div className='content'>
                    <TiltImage alt='responsive' src={responsive} />
                    <TextContent
                        title='Responsive'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed'
                    />
                </div>
        </StyledImages>
    </StyledDevelopment>
    </div>
        
)

export default Development;