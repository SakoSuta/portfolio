import { FC } from 'react';

const ContactForm: FC = () => {
    return (
        <>
            <div className='w-full h-full px-6'>
                <h2 className='my-4 font-medium text-xl'>Need more informations about me or else ?</h2>
                <form className='px-6 h-full'>
                    <input className='my-2 p-2 py-4 w-11/12 border-solid border-2 rounded-lg border-MyColor' type="text" id="name" name="name" placeholder='Name'/><br />
                    <input className='my-2 p-2 py-4 w-11/12 border-solid border-2 rounded-lg border-MyColor' type="email" id="email" name="email" placeholder='Email'/><br />
                    <textarea className='my-2 p-2 py-6 w-11/12 border-solid border-2 rounded-lg border-MyColor' id="message" name="message" placeholder='Message'/><br />
                    <button className='w-11/12 p-4 bg-TransColor rounded-md border-2 border-MyColor text-MyColor' type="submit">Send Message</button>
                </form>
            </div>
        </>
    )
}

export default ContactForm;