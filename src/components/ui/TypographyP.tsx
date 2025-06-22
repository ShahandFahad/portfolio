type TypographyP = {
    text: string;
    styles: string;
}
export function TypographyP({ text, styles }: TypographyP) {
    return (
        <p className={`leading-7 [&:not(:first-child)]:mt-6 ${styles}`}>
            {text}
        </p>
    )
}

