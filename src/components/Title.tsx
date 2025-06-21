type TitleProps = {
    title: string;
    coloredText: string;
}

export const Title = ({ title, coloredText }: TitleProps) => {
    return (
        <h1 className="text-4xl font-black text-center mb-4">
            {title} 
            <span className="text-red-500"> {coloredText}</span>
        </h1>
    );
};
