import { FC } from 'react';

const ContactForm: FC = () => {
    return (
        <>
            <div className='w-full px-6'>
                <h2 className='my-4 font-medium text-xl'>Need more informations about me or else ?</h2>
                <form>
                    <input className='my-2 p-2 border-solid border-2 rounded-lg border-MyColor' type="text" id="name" name="name" placeholder='Name'/><br />
                    <input className='my-2 p-2 border-solid border-2 rounded-lg border-MyColor' type="email" id="email" name="email" placeholder='Email'/><br />
                    <textarea className='my-2 p-2 border-solid border-2 rounded-lg border-MyColor' id="message" name="message" placeholder='Message'/><br />
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </>
    )
}

export default ContactForm;