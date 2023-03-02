
// import ContactForm from "../components/contact-component";

export default function Contact() {
    return (
        <>
            <main>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/portfolios">Portfolios</a></li>
                            <li><a href="/experience">Experiences</a></li>
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