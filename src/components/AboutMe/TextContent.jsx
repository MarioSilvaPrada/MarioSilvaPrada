import React from 'react';


const TextContent = (props) => (
    <div className='content-text'>
        <h1>{props.title}</h1>
        <p>{props.description} </p>
    </div>
)

export default TextContent;