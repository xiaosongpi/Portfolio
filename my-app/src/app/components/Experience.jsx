export default function Experience() {
    return (
        <div className="h-auto w-[90%] max-w-[1440px] py-60 mx-auto flex flex-col items-center justify-center">
            <p className="text-8xl mb-10">What I Experience</p>
            <div className="h-auto w-[100%] rounded-3xl bg-[rgba(255,255,255,0.3)] backdrop-blur-2xl grid grid-cols-2 place-items-center -z-10">
                <div className="p-5 flex flex-col gap-2.5">
                    <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 bg-[#333333] rounded-full" />
                        <p>Mahkamah Mahasiswa</p>
                    </div>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolores atque, ea, distinctio iure nulla quidem dolorem cum possimus eveniet, dolorum accusantium suscipit pariatur illum doloremque vero incidunt repellendus officiis.</p>
                    <div className="flex items-center justify-between">
                        <p>Position: Anggota Muda (PSDM)</p>
                        <button className="text-blue-500 cursor-pointer">Know more</button>
                    </div>
                </div>
                <div className="p-5 flex flex-col gap-2.5">
                    <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 bg-[#333333] rounded-full" />
                        <p>Mahkamah Mahasiswa</p>
                    </div>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolores atque, ea, distinctio iure nulla quidem dolorem cum possimus eveniet, dolorum accusantium suscipit pariatur illum doloremque vero incidunt repellendus officiis.</p>
                    <div className="flex items-center justify-between">
                        <p>Position: Kepala Biro (Umum)</p>
                        <button className="text-blue-500 cursor-pointer">Know more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}