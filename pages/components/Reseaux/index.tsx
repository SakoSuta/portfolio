import Link from "next/link";

export default function Reseaux() {
    return (
        <>
            <ul className="flex justify-between md:w-48">
                <li><Link href="/"><img src="/Logo_Reseaux/Instagram.svg" className="fill-black"/></Link></li>
                <li><Link href="/"><img src="/Logo_Reseaux/Github.svg" /></Link></li>
                <li><Link href="/"><img src="/Logo_Reseaux/Twitter.svg" /></Link></li>
                <li><Link href="/"><img src="/Logo_Reseaux/Linkedin.svg" /></Link></li>
            </ul>
        </>
    )
}