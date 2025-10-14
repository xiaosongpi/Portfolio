export default function Hero() {
    return(
        <div className="w-full max-w-[1440px] px-12 h-screen mx-auto flex items-center justify-center flex-col">
            <div className="w-[90%]">
                <p className="text-9xl text-[#a5a5a5]"><span className="font-bold text-white">My </span>Own</p>
                <p className="text-9xl text-[#a5a5a5]">Portfolio <span className="font-bold text-white">Website</span></p>
                <p className="mb-3 text-2xl">Know more about me, click here to download my CV</p>
                <div className="w-fit p-1 bg-linear-to-br from-[#ffffff] to-[#333333] rounded-full">
                    <button className="px-3 w-fit h-12 flex items-center justify-center bg-linear-to-br from-[#333333] to-[#000000] rounded-full gap-2.5 cursor-pointer">
                        <div className="w-[40] h-[40] bg-[#ffffff] rounded-full flex items-center justify-center">
                            <img 
                                className="w-6 h-6" 
                                src="/download.svg"
                                alt="download" 
                                width={24}
                                height={24}
                            />
                        </div>
                        <span>
                            Download
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}