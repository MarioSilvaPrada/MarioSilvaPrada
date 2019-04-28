import React from 'react';
import styled from 'styled-components';


const Overlay = styled.div`
    margin: 40px;

    img {
        height: 150px;
        margin-bottom: 20px;
    }

    div {
        font-weight: bold;
    }
   
`

const ImageTec = (props) => (
    <Overlay>
        <img alt={props.name} src={props.src} />
        <div>{props.name}</div>
    </Overlay>
)

export default ImageTec