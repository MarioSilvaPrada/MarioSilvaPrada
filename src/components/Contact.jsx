import React from 'react';

import Title from './Title';
import { Element } from 'react-scroll';

import ContactForm from './ContactForm';


const Contact = () => (
    <div>
        <Element name="contact" className="element">
            <Title id='contact' title={'Contact'} description={'Lets work together'} />
        </Element>
        <ContactForm />
    </div>
)

export default Contact;