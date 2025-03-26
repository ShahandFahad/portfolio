import { EmailTemplate } from "@/app/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { ReactNode } from "react";
import { Resend } from "resend";

interface ResendEmailProps {
    from: string;
    to: string;
    subject: string;
    react: ReactNode;
}

// POST request to 'Resend' for sending email
export const POST = async (req: NextRequest) => {
    const body = await req.json();

    // Destrcture the client side request
    const { from, subject, message } = body;

    // validate fields
    if (!from || !subject || !message) {
        return NextResponse.json(
            { error: "Provide all the fields: from, subject and message" },
            { status: 400 }
        );
    }

    // define 'Resend' email options
    const resendEmailOpt = <ResendEmailProps>{
        to: process.env.TO,
        from: process.env.FROM,
        subject: subject,
        react: EmailTemplate({ from, message }),
    }

    // check envs
    if (!resendEmailOpt.to || !resendEmailOpt.from || !process.env.RESEND_API_KEY) {
        return NextResponse.json(
            { error: "Undefined fields in your .env file or .env file is missing. Please define it or check fields in your .env" },
            { status: 400 }
        );
    }

    // Get resend API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // send email via resend
    try {
        const { data, error } = await resend.emails.send(resendEmailOpt);

        // error response
        if (error) {
            return NextResponse.json(
                { message: "Email sending failed!", error },
                { status: 400 }
            );
        }

        // success response
        return NextResponse.json(
            { message: "Email successfully sent!", data },
            { status: 200 }
        );

    } catch (error) {
        console.log(`Some Internal Error orccured while sending email: ${error} `);
        return NextResponse.json(
            { message: "Email failed to send", error },
            { status: 500 }
        );
    }
};
