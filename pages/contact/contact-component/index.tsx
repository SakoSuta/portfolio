import { FC } from 'react';

const ContactForm: FC = () => {
    return (
        <>
            <form>
                <input type="text" id="name" name="name" />
                <input type="email" id="email" name="email" />
                <textarea id="message" name="message" />
                <button type="submit">Send Message</button>
            </form>
        </>
    )
}

export default ContactForm;