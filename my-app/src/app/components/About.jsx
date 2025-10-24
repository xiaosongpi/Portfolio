export default function About() {
    return (
        <div className="w-full max-w-[1440] h-screen mx-auto px-12 flex items-center justify-center">
            <div className="w-[90%] grid grid-cols-[auto_1fr] items-center justify-center gap-3">
                <p className="text-9xl">Hello, </p>
                <div className="flex flex-col gap-2">
                    <p className="text-6xl text-[#000000]">Undergraduate IT</p>
                    <p className="text-2xl">Highly motivated to keep learning, face new challenges, and committed to giving my best effort by applying my knowledge and skills to achieve optimal results.</p>
                    <div className="px-4 mb-2.5 h-14 w-fit rounded-full shadow-2xl flex items-center gap-2.5 bg-[#e6e6e6]">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                        <p>CGPA: 3.95 / 4.00</p>
                    </div>
                </div>
            </div>
        </div>      
    );
}