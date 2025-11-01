export default function Closing() {
    return (
        <div className="mx-auto my-40 hw-[90%] max-w-[1440px] bg-[#000000] shadow-[inset_0_0_10px_#ffffff80] aspect-video relative rounded-4xl flex flex-col items-center justify-center gap-5">
            <p className="text-6xl text-white">Connect With Me</p>
            <p className="w-[600px] text-white text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa iste error quaerat soluta, mollitia unde aliquid provident. Perferendis, commodi placeat sint ipsum iste nihil ipsam quam omnis natus laudantium non!</p>
            <div className="flex gap-5 absolute bottom-5 right-5">
                <button className="w-14 h-14 rounded-2xl cursor-pointer border border-[#ffffff]"></button>
                <button className="w-14 h-14 rounded-2xl cursor-pointer border border-[#ffffff]"></button>
                <button className="w-14 h-14 rounded-2xl cursor-pointer border border-[#ffffff]"></button>
                <button className="w-14 h-14 rounded-2xl cursor-pointer border border-[#ffffff]"></button>
            </div>
            <div className="p-1.5 w-fit rounded-xl bg-[#e6e6e6]">
                <button className="px-4 h-14 w-fit rounded-xl bg-[#000000] shadow-2xs flex items-center gap-2.5 cursor-pointer">
                    <div className="h-10 w-10 rounded-full bg-[#e6e6e6]">

                    </div>
                    <p className="text-white">Download my CV</p>
                </button>
            </div>
        </div>
    )
}   