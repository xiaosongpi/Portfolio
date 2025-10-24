export default function Hero() {
    return(
        <section className="mx-auto h-screen flex items-center justify-center">
            <div className="flex flex-col">
                <div className="flex items-center gap-5">
                    <p className="text-6xl text-[#a5a5a5]">Welcome To</p>
                    <div className="px-4 h-14 border border-[#a5a5a5] rounded-full shadow-2xl flex items-center gap-2.5 bg-[#e6e6e6]">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                        <p>Active looking for a job</p>
                    </div>
                </div>
                <p className="mb-2.5 text-8xl">My Own Portfolio Webiste</p>
                <p className="mb-2.5">Embracing new challenges with adaptability. Because nothing is too difficult when you're ready to grow.</p>
                <div className="p-1.5 w-fit rounded-full bg-[#e6e6e6]">
                    <button className="px-4 h-14 w-fit rounded-full bg-[#000000] shadow-2xs flex items-center gap-2 cursor-pointer">
                        <div className="h-10 w-10 rounded-full bg-[#e6e6e6]">

                        </div>
                        <p className="text-white">Download my CV</p>
                    </button>
                </div>
            </div>
        </section>
    )
}