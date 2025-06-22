type TypographyH2 = {
    text: string;
    styles: string;
}

export function TypographyH2({ text, styles }: TypographyH2) {
    return (
        <h2 className={`scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${styles}`}>
            {text}
        </h2>
    )
}
