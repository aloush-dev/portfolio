"use client";

import { FormEvent, FunctionComponent, useState } from "react";
import { TbSend } from "react-icons/tb";
import { Resend } from "resend";

export const ContactForm: FunctionComponent = () => {
  const inputStyle =
    "p-4 my-4 text-black focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent text-base border-accent border-2";
  const labelStyle = "text-primary-text flex flex-col justify-center m-4 text-xl";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
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
        NAME / COMPANY
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={inputStyle}
          required
        />
      </label>
      <label className={labelStyle}>
        EMAIL
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={inputStyle}
          required
        />
      </label>
      <label className={labelStyle}>
        MESSAGE
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className={`${inputStyle} h-60`}
          required
        />
      </label>

      <button className="bg-accent text-accent-text font-bold flex justify-center items-center p-4 m-4">
        SEND <TbSend />
      </button>
    </form>
  );
};
