import React from 'react';
import styled from 'styled-components';

import { RED, DARK_RED, BLUE, BOX_SHADOW } from '../styles/styles';



const StyledContactForm = styled.div`

    display: flex;
    width: 70%;
    margin: 0 auto;
    justify-content: center;
    border-radius: 5px;
    margin: 0 auto;
    height: auto;
    align-items: stretch;
    color: white;

    form{
        flex:2;
        display: flex;
        flex-direction: column;
        background-color: ${BLUE}

    }

    .my-info{
        flex:1;
        align-self: stretch;
        background-color: ${RED}
        width: 100%;
    }

    .submit-message {
        display: none;
        color:green;
    }

    .fa-envelope {
        font-size: 3em;
    }

    .name-input, .email-input, .message-input {
        border-radius: 7px;
        width: 80%;
        margin: 0 auto;
        height: 30px;
    }

    .message-input{
        height: 80px; 
    }


    .submit-btn {
        align-self: flex-end;
        border-radius: 7px;
        border: 1px solid ${RED};
        margin: 20px auto;
        height: 50px;
        width: 50%;
        background: ${RED};
        ${BOX_SHADOW}
        color:white;
        font-size: 1.5em;
        font-weight: bold;
    }

    .submit-btn:hover{
        cursor: pointer;
        background: ${DARK_RED};
        border: 1px solid ${DARK_RED};


    }

    label {
        margin-top: 30px;
    }
`

const userSubmit = () => {
    let p = document.querySelector('.submit-message');
    p.style.display="block"
}


const ContactForm = () => (
    <StyledContactForm>
        <div className="my-info">
            <h3>Let's get in touch!</h3>
            <p>mariosilvaprada@gmail.com</p>
            <i className="far fa-envelope"></i>
        </div>
        <form className="form" method="POST" action="https://docs.google.com/forms/d/e/1FAIpQLSd3CfXUC74QwBziYACiTKQUKl94L7tJq16gMIqrFJgs86JgtQ/formResponse"  target="hidden_iframe" onSubmit={userSubmit}  >
            <label>Name</label>
            <input className="name-input" name="entry.43873526" type="text" required />

            <label>Email</label>
            <input className="email-input" name="emailAddress" type="email" required />

            <label>Message</label>
            <textarea className="message-input" name="entry.382634451" required></textarea>
            <p className='submit-message'>Your message was sent successfully!</p>
            <input className="submit-btn" type="submit" value="Send Message" />
        </form>
    </StyledContactForm>
)

export default ContactForm;