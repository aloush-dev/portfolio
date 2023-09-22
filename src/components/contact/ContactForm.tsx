"use client";

import { FormEvent, FunctionComponent, useState } from "react";
import { TbSend } from "react-icons/tb";
import { Resend } from "resend";

export const ContactForm: FunctionComponent = () => {
  const inputStyle = "p-4 my-4 text-black";
  const labelStyle = "text-white flex flex-col justify-center m-4";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resend.emails
      .send({
        from: email,
        to: "itsaliabdallah@gmail.com",
        subject: "Email from portfolio",
        html: message,
      })
      .then(() => {});
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="flex flex-col"
    >
      <label className={labelStyle}>
        Your Name
        <input className={inputStyle} />
      </label>
      <label className={labelStyle}>
        Your Email
        <input className={inputStyle} />
      </label>
      <label className={labelStyle}>
        Message Content
        <textarea className={`${inputStyle} h-60`} />
      </label>

      <button className="bg-accent text-white font-bold flex justify-center items-center p-4 m-4">
        send <TbSend />
      </button>
    </form>
  );
};
