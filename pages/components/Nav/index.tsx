import Reseaux from "../Reseaux";
import Link from "next/link"

function Navigation() {
    return (
        <>
            <nav className="flex justify-between items-center px-1 py-4">
                <Link href="/"><img src="/Logo.svg" /></Link>
                <ul className="flex justify-between w-1/3">
                    <li className="flex items-center"><Link href="">Services</Link></li>
                    <li className="flex items-center"><Link href="#portfolio">Portfolios</Link></li>
                    <li className="flex items-center"><Link href="">Experiences</Link></li>
                    <li className="flex items-center"><Link href="">Skills</Link></li>
                    <li className="flex items-center"><Link href="/api/auth/signin/credentials">Admin</Link></li>
                </ul>
                <div className="flex justify-between items-center">
                    <Link href="/"><img src="/moon.svg" /></Link>
                    <Link href="/CV.pdf" className="px-2.5 mx-12 text-sm">Resume</Link>
                    <Link href="/contact" className="px-6 py-4 border border-MyColor rounded-lg text-sm">Contact Me</Link>
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
                    <p className="mt-6">© 2022  -  Emilie Montpre alias SakoSuta</p>
                </footer>
            </header>
        </>
    )
}

export { Navigation, Footer}