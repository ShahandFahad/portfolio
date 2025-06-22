"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "./ui/input"
import { throws } from "assert"

const FormSchema = z.object({
    email: z.string()
        .min(2, {
            message: "Email must be provided.",
        })
        .email("This is not a valid email."),
    message: z
        .string()
        .min(10, {
            message: "Message must be at least 10 characters.",
        })
        .max(190, {
            message: "Message must not be longer than 50 characters.",
        }),
});

export function ContactForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            message: "",
        },
    })

    //from-black via-pink-950 to-pink-800
    async function onSubmit(data: z.infer<typeof FormSchema>) {

        // data

        const jsonPayload = JSON.stringify({
            from: data.email,
            subject: "Portfolio Mail",
            message: data.message,
        }, null, 2)

        // send email
        try {

            // next.js /api/
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: jsonPayload,

            });


            if (res.ok) {

                // Success Toast
                toast("Email Status", {
                    description: (
                        <pre className="mt-2 w-[320px] rounded-md bg-gradient-to-r from-black via-pink-950 to-pink-800 p-4">
                            <code className="text-white">Email Successfully Sent!</code>
                        </pre>
                    ),
                });

            } else {
                throw new Error("Email Sending Failed!");
            }


        } catch (error) {

            toast("Email Status", {
                description: (
                    <pre className="mt-2 w-[320px] rounded-md bg-gradient-to-r from-black via-pink-950 to-pink-800 p-4">
                        <code className="text-white">Email Sending Failed!</code>
                    </pre>
                ),
            });

        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 md:w-2/4 w-full space-y-4">

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            {/* <FormLabel>Username</FormLabel> */}
                            <FormControl>
                                <Input className="" type="email" placeholder="example@email.com" {...field} />
                            </FormControl>
                            {/*
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                                */}
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            {/* <FormLabel>Bio</FormLabel> */}
                            <FormControl>
                                <Textarea
                                    placeholder="Say, Hello!"
                                    className="resize-none focus-visible:red-500"
                                    {...field}
                                />
                            </FormControl>
                            {/*
                            <FormDescription>
                                You can <span>@mention</span> other users and organizations.
                            </FormDescription>
                                */}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    className="p-5 bg-orange-600 hover:cursor-pointer hover:bg-orange-800"
                    type="submit">
                    Say Hello
                </Button>
            </form>
        </Form>
    )
}

