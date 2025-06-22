import { CenteredContentWrapper } from "@/layouts/CenteredContentWrapper";
import { TypographyH1 } from "./ui/TypographyH1";
import { TypographyP } from "./ui/TypographyP";
//import { Button } from "./ui/button";
import { Vortex } from "./ui/vortex";
import { ContactForm } from "./ContactForm";

export const ContactSection = () => {
    return (
        <CenteredContentWrapper>
            <Vortex>
                <section
                    id="contact"
                    className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center items-center"
                >
                    <p className="text-center text-orange-500 " >
                        {"04. What's Next?"}
                    </p>
                    <TypographyH1
                        text="Get In Touch"
                        styles="text-5xl mt-2 text-center text-slate-200"
                    />
                    {/* Although I’m not currently looking for  */}
                    <TypographyP
                        text="I gladly welcome any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!"
                        styles="mx-auto text-balance text-center"
                    />

                    {/* Input From */}
                    <ContactForm />

                </section>
            </Vortex>
        </CenteredContentWrapper>
    );
};
