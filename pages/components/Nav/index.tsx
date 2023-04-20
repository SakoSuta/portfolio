import Reseaux from "../Reseaux";
import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
    return (
        <>
            <nav className="flex justify-between items-center px-1 py-4">
                <Link href="/"><Image width={120} height={120} alt="Logo" src="/Logo.svg"  /></Link>
                <ul className="hidden lg:flex justify-between w-1/3 ">
                    <li className="flex items-center px-4"><Link href="">Services</Link></li>
                    <li className="flex items-center px-4"><Link href="#portfolio">Portfolios</Link></li>
                    <li className="flex items-center px-4"><Link href="">Experiences</Link></li>
                    <li className="flex items-center px-4"><Link href="">Skills</Link></li>
                    <li className="flex items-center px-4"><Link href="/admin">Admin</Link></li>
                </ul>
                <div className="hidden lg:flex justify-between w-1/5 items-center">
                    <Link href="/"><Image width={30} height={30} alt="Icon for darkMode" src="/moon.svg" /></Link>
                    <Link href="/CV.pdf" className="px-2.5 mx-4 text-sm">Resume</Link>
                    <Link href="/contact" className="px-6 py-4 border border-MyColor rounded-lg text-sm">Contact Me</Link>
                </div>
                <button className="flex lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    </svg>
                </button>
            </nav>
        </>
    )
}