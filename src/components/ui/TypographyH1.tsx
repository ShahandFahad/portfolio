type TypographyH1 = {
    text: string;
    styles: string;
}

export function TypographyH1({ text, styles }: TypographyH1) {
    return (
        <h1 className={`scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance ${styles}`}>
            {text}
        </h1>
    )
}

