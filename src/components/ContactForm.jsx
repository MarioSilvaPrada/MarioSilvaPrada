import React from 'react';
import styled from 'styled-components';

import { RED, DARK_RED, BLUE, BOX_SHADOW, white } from '../styles/styles';



const StyledContactForm = styled.div`

    display: flex;
    width: 800px;
    margin: 0 auto;
    justify-content: space-between;
    border-radius: 6px;
    color: white;
    background: linear-gradient(90deg, ${RED} 35%, ${BLUE} 20%);
}

    .my-form{
        flex:1;
        align-self: center;
    }
    
    form{
        display: flex;
        flex-direction: column;
        margin-right: 90px;
    }

    .my-info{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 30px;
    }

    .user-submit {
        margin-top: 10px;
        display: none;
        color:green;
        background: ${white(0.4)}
    }

    .user-submit .fa-check-circle {
        position: static;
        font-size: 2em;
        color:#85ef47;
    }

    .submit-message {
        color: #85ef47;
        font-weight: bold;
        letter-spacing: 1.5px;
    }

    .submit-layout {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .fa-envelope {
        font-size: 3em;
    }

    .name-input, .email-input, .message-input {
        border-radius: 7px;
        height: 30px;
        font-size: 1.2em;
        padding-left: 40px;
        padding-top: 5px;
        margin-top: 30px;
        resize: none;
        width: 300px;
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
        font-size: 100%;
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

    .my-info-content {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .my-info-content .fa-envelope, .fa-map-marker-alt {
        position: static;
        font-size: 1.1em;
        color: white;
        margin-right: 8px;
    }



    
`

const userSubmit = () => {
    let p = document.querySelector('.user-submit');
    p.style.display = "block"
}


const ContactForm = () => (
    <StyledContactForm>
        <div className="my-info">
            <h3>Let's get in touch!</h3>
            <div className="my-info-content">
                <i class="fas fa-envelope"></i>
                <p>mariosilvaprada@gmail.com</p>
            </div>
            <div className="my-info-content">
            <i class="fas fa-map-marker-alt"></i>
                <p>Lisbon, Portugal</p>
            </div>
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

                <div className="user-submit">
                <div className="submit-layout">
                <p className='submit-message'>Your message was sent successfully!</p>
                    <i class="fas fa-check-circle"></i>
                </div>
                    
                </div>
                <input className="submit-btn" type="submit" value="Send Message" />
            </form>
        </div>

    </StyledContactForm>
)

export default ContactForm;