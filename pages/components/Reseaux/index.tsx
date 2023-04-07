import Link from "next/link";
import Image from "next/image";

export default function Reseaux() {
    return (
        <>
            <ul className="flex justify-between md:w-48">
                <li><Link href="/"><Image alt="Icon Reseaux" width={27} height={27} src="/Logo_Reseaux/Instagram.svg" className="fill-black"/></Link></li>
                <li><Link href="https://github.com/SakoSuta"><Image alt="Icon Reseaux" width={27} height={27} src="/Logo_Reseaux/Github.svg" /></Link></li>
                <li><Link href="/"><Image alt="Icon Reseaux" width={27} height={27} src="/Logo_Reseaux/Twitter.svg" /></Link></li>
                <li><Link href="https://www.linkedin.com/in/emilie-montpre-65b102237/"><Image alt="Icon Reseaux" width={27} height={27} src="/Logo_Reseaux/Linkedin.svg" /></Link></li>
            </ul>
        </>
    )
}