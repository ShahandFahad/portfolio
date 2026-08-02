import { CenteredContentWrapper } from "@/layouts/CenteredContentWrapper";
import { TypographyH1 } from "./ui/TypographyH1";
import { TypographyP } from "./ui/TypographyP";
//import { Button } from "./ui/button";
import { ContactForm } from "./ContactForm";
import { ContactData } from "@/data/portfolioData";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Globe } from "lucide-react";

const SOCIAL_ICONS: Record<string, typeof Github> = {
    github: Github,
    linkedin: Linkedin,
    email: Mail,
    mail: Mail,
    twitter: Twitter,
    x: Twitter,
};

const socialIconFor = (label: string) => SOCIAL_ICONS[label.toLowerCase()] ?? Globe;

/**
 * ContactSection Component
 * Displays a contact form.
 * Content is passed in via the `data` prop (resolved in `page.tsx` from Sanity,
 * falling back to `portfolioData.contact`).
 */
export const ContactSection = ({ data: contact }: { data: ContactData }) => {
    return (
        <CenteredContentWrapper>
            <section
                id="contact"
                className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center items-center"
            >
                <p className="text-center font-mono text-accent" >
                    {contact.sectionNumber} {contact.subtitle}
                </p>
                <TypographyH1
                    text={contact.title}
                    styles="text-5xl mt-2 text-center text-foreground"
                />
                {/* Although I’m not currently looking for  */}
                <TypographyP
                    text={contact.description}
                    styles="mx-auto text-balance text-center"
                />

                {contact.socials && contact.socials.length > 0 && (
                    <div className="flex items-center gap-4 mt-6">
                        {contact.socials.map((social, index) => {
                            const Icon = socialIconFor(social.label);
                            return (
                                <Link
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    aria-label={social.label}
                                    className="text-foreground/80 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded p-1"
                                >
                                    <Icon />
                                </Link>
                            );
                        })}
                    </div>
                )}

                {/* Input From */}
                <ContactForm />

            </section>
        </CenteredContentWrapper>
    );
};
