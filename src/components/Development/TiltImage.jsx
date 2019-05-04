import React from 'react';
import Tilt from 'react-tilt';
import { RED } from '../../styles/styles';


const TiltImage = (props) => (
    <Tilt className="Tilt" options={{ max: 25 }} style={{ width: '12rem', height: '12rem', background: `${RED}`, borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <img alt={props.alt} src={props.src} />
    </Tilt>
)

export default TiltImage