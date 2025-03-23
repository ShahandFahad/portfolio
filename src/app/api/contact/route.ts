import { EmailTemplate } from "@/app/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    body.to = process.env.TO; // add to field

    // Destrcture the client side request
    const { from, subject, message, to } = body;

    // validate fields
    if (!from || !subject || !message || !to) {
        return NextResponse.json(
            { error: "Provide all the fields: from, subject and message" },
            { status: 400 }
        );
    }

    // Get resend API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // send email via resend
    try {

        const { data, error } = await resend.emails.send({
            from: process.env.FROM,
            to: to,
            subject: subject,
            react: EmailTemplate({ from, message }),
        });

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
