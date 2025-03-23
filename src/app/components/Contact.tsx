import { CircleUser } from "lucide-react";
import { useState } from "react";

interface InfoBadgeProps {
    style: string;
    info: string;
}

const InfoBadge = ({ style, info }: InfoBadgeProps) => {
    return (
        <div className={`badge badge-${style}`}>{info}</div>
    );
};

interface EmailProps {
    from: string;
    subject: string;
    message: string;
};

export const Contact = () => {
    const [contact, setContact] = useState<EmailProps>({
        from: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [badge, setBadge] = useState({
        style: "",
        message: "Contact Form",
    });

    const formHandler = (e) => {
        e.preventDefault();

        setContact((prev: EmailProps) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const isValid = () => {
        if (!contact.from || !contact.subject || !contact.message) {
            return true;
        }

        return false;

    }

    const emailHandler = async () => {
        try {
            setLoading(true);
            // check is empty
            if (isValid()) {
                setBadge({
                    style: "error",
                    message: "Fill the fields",
                });
                setLoading(false)
                console.log("Empty Fields Checkt: ", contact);
                return;
            }

            // send email
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contact),

            });

            if (res.ok) {
                console.log(`Email Successfully Sent`);

                // reset fields
                setContact({
                    from: "",
                    subject: "",
                    message: ""
                });
                setLoading(false);
                setBadge({
                    style: "success",
                    message: "Email Sent",
                });
            } else {
                setBadge({
                    style: "error",
                    message: "Email Sending Failed! Please try again.",
                });
            }
        } catch (error) {
            console.log("Error email sending: ", error);
            setBadge({
                style: "error",
                message: "Some problem occured while sending email. Please try again!",
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="contact" className="footer footer-horizontal footer-center bg-primary text-primary-content p-10 rounded">
            <aside>
                <CircleUser size={46} color="red" />
                <p className="font-bold">
                    Summon the Code Ronin
                    <br />
                    Let's Talk, Send me an email. An I will reach out to you.
                </p>
            </aside>
            <fieldset className="fieldset md:w-lg bg-base-200 border border-base-300 p-4 rounded-box">

                <InfoBadge style={badge.style} info={badge.message} />

                <input onChange={formHandler} value={contact.from} name="from" required type="email" className="input bg-gray-700 text-white" placeholder="Email" />
                <input onChange={formHandler} value={contact.subject} name="subject" required type="text" className="input bg-gray-700 text-white" placeholder="Subject" />
                <textarea onChange={formHandler} value={contact.message} name="message" required className="textarea bg-gray-700 text-white" placeholder="Message"></textarea>


                <button onClick={emailHandler} className="btn bg-green-500 mt-4">
                    {
                        !loading ? "Send" : "Sending..."
                    }
                </button>
            </fieldset>
        </section>
    );

};
