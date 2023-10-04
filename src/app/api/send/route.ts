import { EmailTemplate } from "../../../components/contact/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { ReactElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

type reqProps = {
  body: {
    name: string;
    email: string;
    message: string;
  };
};

export async function POST(req: any) {
  const readData = async () => {
    let decodedData = "";
    const textDecoder = new TextDecoder("utf-8");
    const stream = await req.body.getReader();

    return new Promise<string>((resolve, reject) => {
      const onDataRead = ({
        done,
        value,
      }: {
        done: boolean;
        value: ArrayBuffer;
      }) => {
        if (done) {
          resolve(decodedData);
          return;
        }

        const decodedChunk = textDecoder.decode(value);
        decodedData += decodedChunk;

        stream.read().then(onDataRead).catch(reject);
      };

      stream.read().then(onDataRead).catch(reject);
    });
  };

  try {
    const decodedData = await readData();
    const parsedData = JSON.parse(decodedData);

    const data = await resend.emails.send({
      from: "ContactForm <contactform@aloush.dev>",
      to: ["contactform@aloush.dev"],
      subject: "Aloush.dev - Contact Form Response",
      react: EmailTemplate({ parsedData }) as ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
