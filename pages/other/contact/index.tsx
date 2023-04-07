import Link from "next/link"
// import ContactForm from "../components/contact-component";

export default function Contact() {
    return (
        <>
            <main>
                <header>
                    <nav>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/portfolios">Portfolios</Link></li>
                            <li><Link href="/experience">Experiences</Link></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <section>
                        <form action="">
                            <input type="text" />
                            <input type="email" />
                            <textarea name="message" cols="30" rows="10"></textarea>
                        </form>
                    </section>
                </main>
                {/* <ContactForm /> */}
            </main>
        </>
    )
}