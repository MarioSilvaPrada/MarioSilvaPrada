import React from 'react';
import styled from 'styled-components';

import { RED, DARK_RED, BLUE, BOX_SHADOW, white } from '../../styles/styles';



const StyledContactForm = styled.div`

    display: flex;
    width: 50rem;
    margin: 0 auto;
    border-radius: 6px;
    color: white;
    place-items: stretch center; 
}

    form{
        display: flex;
        flex-direction: column;
        place-items: center; 
        }

    .my-form{
        flex:2;
        align-self: center;
        background: ${BLUE};
        border-radius: 0 1rem 1rem 0;

    }
    
    .my-info{
        flex:1;
        display: flex;
        flex-direction: column;
        background: ${RED};
        border-radius: 1rem 0 0 1rem;
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

    .name-input, .email-input, .message-input {
        border-radius: 0.5rem;
        border: none;
        height: 2rem;
        font-size: 1.2em;
        padding-left: 3rem;
        padding-top: 0.5rem;
        margin-top: 2rem;
        resize: none;
    }

    .message-input{
        height: 5rem; 
        position: relative;
    }


    .submit-btn {
        align-self: flex-end;
        border-radius: 0.5rem;
        border: 1px solid ${RED};
        margin: 20px auto;
        height: 3rem;
        width: 50%;
        background: ${RED};
        ${BOX_SHADOW}
        color:white;
        font-size: 100%;
        font-weight: bold;
        transition: 1s;
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
        width:80%;
    }

    .fas{
        position:absolute;
        top: 2.4rem;
        left:0.5rem;
        color:#404040;
        font-size: 1.5rem;
    }

    .my-info-content {
        align-self: flex-start;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .my-info-content .fa-envelope, .my-info-content .fa-map-marker-alt {
        position: static;
        font-size: 1.1em;
        color: white;
        margin-right: 8px;
        margin-left: 1em;
    }

    @media screen and (max-width: 950px) {
        flex-direction: column;
        place-items: stretch center;
        width: 30rem;

        .my-info {
            border-radius:  1rem 1rem 0 0;
            font-size: 1.2rem; 
        }

        .my-form {
            border-radius: 0 0 1rem 1rem;
            width: 100%;
        }

        .fas {
            top: 2.8rem;
        }
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