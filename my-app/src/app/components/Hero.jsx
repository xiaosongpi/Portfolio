export default function Hero() {
    return(
        <section className="mx-auto h-screen max-w-[1440px] flex items-center justify-center relative">
            <div className="w-0 h-0 border-t-[100px] border-t-transparent border-b-[100px] border-b-transparent border-l-[1000px] border-l-[#ffffff] absolute top-0 left-[-500px] blur-[40px] -z-10 rotate-[60deg]"></div>
            <div className="w-0 h-0 border-t-[100px] border-t-transparent border-b-[100px] border-b-transparent border-l-[800px] border-l-[#ffffff] absolute top-0 left-[-100px] blur-[40px] -z-10 rotate-[60deg]"></div>
            <div className="w-0 h-0 border-t-[100px] border-t-transparent border-b-[100px] border-b-transparent border-l-[1200px] border-l-[#ffffff] absolute top-0 left-[100px] blur-[40px] -z-10 rotate-[60deg]"></div>
            <div className="w-[90%] flex flex-col items-center gap-6">
                <div className="px-4 mb-2.5 h-14 w-fit border border-[#a5a5a5] rounded-full shadow-2xl flex items-center gap-2.5 bg-[#e6e6e6]">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                    <p>Active looking for a job</p>
                </div>
                <p className="text-8xl text-[#000000] text-center">Welcome To <br /> My Own Portfolio Webiste</p>
                <p className="mb-2.5 text-2xl text-center">Embracing every new challenge with adaptability and determination, believing that no obstacle is too great when one is willing to grow, learn, and evolve beyond limits.</p>
                <div className="p-1.5 w-fit rounded-xl bg-[#e6e6e6]">
                    <button className="px-4 h-14 w-fit rounded-xl bg-[#000000] shadow-2xs flex items-center gap-2.5 cursor-pointer">
                        <div className="h-10 w-10 rounded-full bg-[#e6e6e6]">

                        </div>
                        <p className="text-white">Download my CV</p>
                    </button>
                </div>
            </div>
        </section>
    )
}