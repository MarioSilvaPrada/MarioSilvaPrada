import React from 'react';
import styled from 'styled-components';

import { RED, DARK_RED, BLUE, BOX_SHADOW } from '../styles/styles';



const StyledContactForm = styled.div`

    display: flex;
    width: 50%;
    margin: 0 auto;
    justify-content: center;
    border-radius: 6px;
    color: white;
    background: linear-gradient(90deg, ${RED} 35%, ${BLUE} 20%);
}

    .my-form{
        flex:2;
        margin: 0 60px;
    }
    
    form{
        display: flex;
        flex-direction: column;
        margin-left: 60px;

    }

    .my-info{
        flex:1;
        align-self: stretch;
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
        
        height: 30px;
        font-size: 20px;
        padding-left: 40px;
        padding-top: 5px;
        margin-top: 30px;

    }

    .message-input{
        height: 80px; 
        position: relative;
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

    .field-input{
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .fas{
        position:absolute;
        top: 2.4rem;
        left:0.5rem;
        color:#404040;
        font-size: 1.6rem;
    }

    
`

const userSubmit = () => {
    let p = document.querySelector('.submit-message');
    p.style.display = "block"
}


const ContactForm = () => (
    <StyledContactForm>
        <div className="my-info">
            <h3>Let's get in touch!</h3>
            <p>mariosilvaprada@gmail.com</p>
        </div>
        <div className="my-form">
            <form className="form" method="POST" action="https://docs.google.com/forms/d/e/1FAIpQLSd3CfXUC74QwBziYACiTKQUKl94L7tJq16gMIqrFJgs86JgtQ/formResponse" target="hidden_iframe" onSubmit={userSubmit}  >

                <div className="field-input">
                    <input className="name-input" name="entry.43873526" type="text" placeholder="Name" required />
                    <i class="fas fa-user"></i>
                </div>
                <div className="field-input">
                    <input className="email-input" name="emailAddress" type="email" placeholder="E-mail" required />
                    <i class="fas fa-at"></i>
                </div>
                <div className="field-input">
                    <textarea className="message-input" name="entry.382634451" placeholder="Message" required></textarea>
                    <i class="fas fa-envelope-open-text"></i>

                </div>


                <p className='submit-message'>Your message was sent successfully!</p>
                <input className="submit-btn" type="submit" value="Send Message" />
            </form>
        </div>

    </StyledContactForm>
)

export default ContactForm;