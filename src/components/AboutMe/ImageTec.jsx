import React from 'react';
import styled from 'styled-components';


const Overlay = styled.div`
    margin: 2rem;
    

    img {
        height: 6rem;
        margin-bottom: 2rem;
    }

    div {
        font-weight: bold;
        font-size: 1.1rem;
    }
   
`

const ImageTec = (props) => (
    <Overlay>
        <img alt={props.name} src={props.src} />
        <div>{props.name}</div>
    </Overlay>
)

export default ImageTec