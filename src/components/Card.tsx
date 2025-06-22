import Image from "next/image";

interface CardProps {
    title: string;
    type: string;
    link: string;
    description: string;
    technologies: Array<string>;
    image: string;
};

export const Card = ({ title, type, link, description, technologies, image }: CardProps) => {
    return (
        <div className="card bg-base-100 w-86 md:w-96 shadow-sm">
            <figure>
                <Image
                    className="rounded"
                    height={200}
                    width={1000}
                    src={`/${image}`}
                    alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-cyan-500 font-bold">{type}</p>
                <p className="text-justify">{description}</p>
                <div className="card-actions justify-center">
                    {
                        technologies && technologies.map((tech) => (<span key={tech} className="badge badge-success mb-1">{tech}</span>))
                    }
                </div>
                <button className="btn btn-primary hover:bg-sky-500">
                    <a target="_blank" href={link}>Visit</a>
                </button>
            </div>
        </div>
    );
};
