import { EmailTemplate } from "../../../components/contact/EmailTemplate";
import { NextResponse } from "next/server";
import { ReactElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["contactform@aloush.dev"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }) as ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
