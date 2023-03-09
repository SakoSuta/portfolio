import Reseaux from "../Reseaux";

function Navigation() {
    return (
        <>
            <nav className="flex justify-between px-1 py-4">
                <a href="/"><img src="/Logo.svg" /></a>
                <ul className="flex">
                    <li><a href="/services">Services</a></li>
                    <li><a href="/portfolios">Portfolios</a></li>
                    <li><a href="/experience">Experiences</a></li>
                    <li><a href="/skills">Skills</a></li>
                </ul>
                <div className="flex justify-between">
                    <a href="/"><img src="/moon.svg" /></a>
                    <a href="/CV.pdf">Resume</a>
                    <a href="/contact">Contact Me</a>
                </div>
            </nav>
        </>
    )
}

function Footer() {
    return (
        <>
            <header>
                <nav>
                    <Reseaux/>
                    <p>© 2022  -  DevChapter</p>
                </nav>
            </header>
        </>
    )
}

export { Navigation, Footer}