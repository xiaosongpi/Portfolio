export default function Project() {
    return(
        <section className="mx-auto my-40 h-auto max-w-[1440px] flex items-center justify-center">
            <div className="w-[90%] grid grid-cols-3 gap-5">
                <div className="p-3.5 rounded-2xl bg-[#e6e6e6] flex flex-col gap-2.5 shadow-2xl">
                    <div className="w-full aspect-square bg-[#ffffff] rounded-xl" /> 
                    <div>
                        <p className="text-2xl">Project 1</p>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, cumque sapiente! Accusantium architecto officiis dolor ipsum exercitationem nostrum suscipit deleniti tenetur dolores debitis, cumque doloremque molestias repellendus minima porro quaerat?</p>
                    </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#e6e6e6] flex flex-col gap-2.5 shadow-2xl">
                    <div className="w-full aspect-square bg-[#ffffff] rounded-xl" /> 
                    <div>
                        <p className="text-2xl">Project 2</p>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, cumque sapiente! Accusantium architecto officiis dolor ipsum exercitationem nostrum suscipit deleniti tenetur dolores debitis, cumque doloremque molestias repellendus minima porro quaerat?</p>
                    </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#e6e6e6] flex flex-col gap-2.5 shadow-2xl">
                    <div className="w-full aspect-square bg-[#ffffff] rounded-xl" />  
                    <div>
                        <p className="text-2xl">Project 3</p>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, cumque sapiente! Accusantium architecto officiis dolor ipsum exercitationem nostrum suscipit deleniti tenetur dolores debitis, cumque doloremque molestias repellendus minima porro quaerat?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}