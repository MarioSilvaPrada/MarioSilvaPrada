import React from 'react';
import styled from 'styled-components';


const StyledContactForm = styled.div`
    form{
        display: flex;
        flex-direction: column;
        width: 20%;
        margin: 0 auto;
    }
`


const ContactForm = () => (
    <StyledContactForm>
        <form class="form" method="POST" action="https://docs.google.com/forms/d/e/1FAIpQLSd3CfXUC74QwBziYACiTKQUKl94L7tJq16gMIqrFJgs86JgtQ/formResponse" target="hidden_iframe" onsubmit="submitted=true">
            <label>Name</label>
            <input name="entry.43873526" type="text" required />

            <label>Email</label>
            <input name="emailAddress" type="email" required />

            <label>Message</label>
            <textarea name="entry.382634451" required></textarea>
            <input type="submit" value="Send" />
        </form>
    </StyledContactForm>
)

export default ContactForm;