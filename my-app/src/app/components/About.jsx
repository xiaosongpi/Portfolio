export default function About() {
    return (
        <div className="w-full max-w-[1440] h-screen mx-auto px-12 flex items-center justify-center">
            <div className="w-[90%] grid grid-cols-[auto_1fr] place-self-center gap-3">
                <p className="text-9xl font-bold">Hello, </p>
                <div className="flex flex-col gap-2">
                    <p className="text-6xl text-[#a5a5a5]">Undergraduate IT</p>
                    <p>Highly motivated to keep learning, face new challenges, and committed to giving my best effort by applying my knowledge and skills to achieve optimal results.</p>
                </div>
            </div>
        </div>      
    );
}