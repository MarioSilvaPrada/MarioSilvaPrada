import React from 'react';


const ContactForm = () => (
    <div>
        <form>
            <label for="fname">Name</label>
            {/* <input type="text" id="fname" name="firstname" placeholder="Your name.."> */}

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

                {/* <input type="submit" value="Send Message"> */}

        </form>
    </div>
            )
        
export default ContactForm;