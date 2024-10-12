import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
    return (
        <nav className="md:w-24 lg:w-64 flex flex-row md:flex-col justify-between md:justify-start p-4 bg-black " >
            <div className="text-sm font-bold mb-8 hidden md:block">YRDN LTRYL</div>
            <ul className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-8 justify-evenly">
                <li className=""><Link href="/">Home</Link></li>
                <li className=""><Link href="/skill">Skills</Link></li>
                <li className=""><Link href="/projects">Projects</Link></li>
            </ul>
            <div className="hidden md:flex flex-col space-y-4 mt-auto">
                <Link href="https://github.com/yordanluturyalii" target="_blank" rel="noopener noreferrer"><Github className="w-6 h-6" /></Link>
                <Link href="https://www.instagram.com/yordanluturyali_/" target="_blank" rel="noopener noreferrer"><Instagram className="w-6 h-6" /></Link>
                <Link href="https://www.linkedin.com/in/yordan-aserama-luturyali/" target="_blank" rel="noopener noreferrer"><Linkedin className="w-6 h-6" /></Link>
            </div>
        </nav>
    )
}