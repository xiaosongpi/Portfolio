'use client'
import { useState } from "react";
import Image from "next/image";

export default function Navbar () {
    const [openMenu, setMenuOpen] = useState(true)

    const menuItems = [
        { name: "about", icon: "/about.svg" },
        { name: "project", icon: "/project.svg" },
        { name: "skill", icon: "/skill.svg"},
        { name: "download", icon: "/download.svg" },
    ];

    return (
        <nav className="mx-auto mt-5 w-11/12 max-w-[1440px] fixed left-1/2 translate-x-[-50%]">
             <div className="h-full flex items-center justify-between">
                <div className="px-2.5 h-14 rounded-full backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer">
                    <div className="h-10 w-10 rounded-full bg-[#333333]" />
                    <p className="text-[1.2rem] font-semibold">My portfolio</p>
                </div>
                <div className="h-16 px-2.5 rounded-full backdrop-blur-sm flex items-center justify-center">
                    <ul className="flex items-center gap-5">
                        <li className="text-[1rem]">
                            <a href="">About</a>
                        </li>
                        <li className="text-[1rem]">
                            <a href="">Skill</a>
                        </li>
                        <li className="text-[1rem]">
                            <a href="">Experience</a>
                        </li>
                        <li className="text-[1rem]">
                            <a href="">Project</a>
                        </li>
                        <li className="text-[1rem]">
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
             </div>
        </nav>
    )
}