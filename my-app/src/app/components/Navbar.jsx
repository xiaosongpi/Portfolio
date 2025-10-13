'use client'
import { useState } from "react";
import Image from "next/image";

export default function Navbar () {
    const [openMenu, setMenuOpen] = useState(true)

    return (
        <nav className="max-w-7xl mx-auto px-12 pt-5 w-auto sticky top-0">
            <div className="relative flex">
                <div className="h-12 px-5 bg-gradient-to-tl from-[#00000080] via-[#56565640] to-[#d0d0d080] flex flex-row items-center justify-center gap-2 border rounded-full cursor-pointer hover:shadow-[0_0_15px_#ffffff] transition duration-500">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    <p className="">Anonymous</p>
                </div>
                <div className="absolute right-0 grid grid-rows-[repeat(2, auto)] border rounded-full">
                    <button 
                        className="w-12 h-12 bg-linear-to-tl from-[#00000080] via-[#56565640] to-[#d0d0d080] flex items-center justify-center border rounded-full cursor-pointer hover:shadow-[0_0_15px_#ffffff] transition duration-500"
                        onClick={() => setMenuOpen(!openMenu)}
                    >
                        <Image 
                            className="w-6 h-6 invert"
                            src="/menu.svg" 
                            alt="menu" 
                            width={24} 
                            height={24} 
                        />
                    </button>
                    {openMenu && 
                        <div className="pb-3 w-12 h-auto flex flex-col items-center justify-center">
                            <a className="my-2 flex items-center justify-center cursor-pointer">
                                <Image 
                                    className="w-6 h-6 invert" 
                                    src="/about.svg" 
                                    alt="" 
                                    width={24}
                                    height={24}
                                    />
                            </a>
                            <a className="my-2 flex items-center justify-center cursor-pointer">
                                <Image 
                                    className="w-6 h-6 invert" 
                                    src="/project.svg" 
                                    alt="" 
                                    width={24}
                                    height={24}
                                    />
                            </a>
                            <a className="my-2 flex items-center justify-center cursor-pointer">
                                <Image 
                                    className="w-6 h-6 invert" 
                                    src="/skill.svg" 
                                    alt="" 
                                    width={24}
                                    height={24}
                                    />
                            </a>
                            <a className="my-2 flex items-center justify-center cursor-pointer">
                                <Image 
                                    className="w-6 h-6 invert" 
                                    src="/download.svg" 
                                    alt="" 
                                    width={24}
                                    height={24}
                                    />
                            </a>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}