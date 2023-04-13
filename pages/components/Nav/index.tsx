import Reseaux from "../Reseaux";
import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
    return (
        <>
            <nav className="flex justify-between items-center px-1 py-4">
                <Link href="/"><Image width={120} height={120} alt="Logo" src="/Logo.svg"  /></Link>
                <ul className="flex justify-between w-1/3">
                    <li className="flex items-center"><Link href="">Services</Link></li>
                    <li className="flex items-center"><Link href="#portfolio">Portfolios</Link></li>
                    <li className="flex items-center"><Link href="">Experiences</Link></li>
                    <li className="flex items-center"><Link href="">Skills</Link></li>
                    <li className="flex items-center"><Link href="/admin">Admin</Link></li>
                </ul>
                <div className="flex justify-between items-center">
                    <Link href="/"><Image width={30} height={30} alt="Icon for darkMode" src="/moon.svg" /></Link>
                    <Link href="/CV.pdf" className="px-2.5 mx-12 text-sm">Resume</Link>
                    <Link href="/contact" className="px-6 py-4 border border-MyColor rounded-lg text-sm">Contact Me</Link>
                </div>
            </nav>
        </>
    )
}