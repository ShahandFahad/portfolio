import { useData } from "../hooks/useData";

export const Hero = () => {
    const data = useData();

    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(/hero-bg-2.jpg)`,
            }}>

            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hi, I&apos;m {data.header.title.split(" ")[1].toUpperCase()} </h1>
                    <h1 className="text-2xl font-black text-red-400">
                        {data.header.subtitle}
                    </h1>
                    <p className="mb-5">
                        {data.header.description}
                    </p>
                    <a href="#contact" className="btn hover:bg-red-900">Let&apos;s Talk!</a>
                </div>
            </div>
        </div>
    );
};
