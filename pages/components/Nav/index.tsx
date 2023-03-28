import Reseaux from "../Reseaux";

function Navigation() {
    return (
        <>
            <nav className="flex justify-between items-center px-1 py-4">
                <a href="/"><img src="/Logo.svg" /></a>
                <ul className="flex justify-between w-1/3">
                    <li className="flex items-center"><a href="/services">Services</a></li>
                    <li className="flex items-center"><a href="/portfolios">Portfolios</a></li>
                    <li className="flex items-center"><a href="/experience">Experiences</a></li>
                    <li className="flex items-center"><a href="/skills">Skills</a></li>
                    <li className="flex items-center"><a href="/api/auth/signin/credentials">Admin</a></li>
                </ul>
                <div className="flex justify-between items-center">
                    <a href="/"><img src="/moon.svg" /></a>
                    <a href="/CV.pdf" className="px-2.5 mx-12">Resume</a>
                    <a href="/contact" className="px-6 py-4 border rounded-lg">Contact Me</a>
                </div>
            </nav>
        </>
    )
}

function Footer() {
    return (
        <>
            <header>
                <footer className="flex flex-col items-center py-20">
                    <Reseaux/>
                    <p className="mt-6">© 2022  -  DevChapter</p>
                </footer>
            </header>
        </>
    )
}

export { Navigation, Footer}