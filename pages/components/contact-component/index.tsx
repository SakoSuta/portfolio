import { FC } from 'react';
import Image from 'next/image'

const ContactForm: FC = () => {
    return (
        <>
            <main>
                <form>
                    <input type="text" id="name" name="name" />
                    <input type="email" id="email" name="email" />
                    <textarea id="message" name="message" />
                    <button type="submit">Send Message</button>
                </form>
                <div>
                    <div>
                        <Image alt="Icon" width={30} height={30} src="/icon/pin.svg" />
                        <div>
                            <span>Address</span>
                            <p>3424 Layman Avenue, Fayetteville, NC</p>
                        </div>
                    </div>
                    <div>
                        <Image alt="Icon" width={30} height={30} src="/icon/phone_call.svg" />
                        <div>
                            <span>Phone</span>
                            <p>(501) 414-1541</p>
                        </div>
                    </div>
                    <div>
                        <Image alt="Icon" width={30} height={30} src="/icon/mail.svg" />
                        <div>
                            <span>E-Mail</span>
                            <p>devchapter@gmail.com</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ContactForm;