"use client";

import { FormEvent, FunctionComponent, useState } from "react";
import { TbSend } from "react-icons/tb";
import { Resend } from "resend";

export const ContactForm: FunctionComponent = () => {
  const inputStyle =
    "p-4 my-4 text-black focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent text-base border-accent border-2";
  const labelStyle =
    "text-primary-text flex flex-col justify-center m-4 text-xl";

  const buttonStyle = {
    default: `bg-accent text-accent-text font-bold flex justify-center items-center p-4 m-4 transition-color duration-300 ease-in-out`,
    success: `bg-on-success text-accent-text font-bold flex justify-center items-center p-4 m-4 transition-color duration-300 ease-in-out`,
    error: `bg-on-error text-accent-text font-bold flex justify-center items-center p-4 m-4 transition-color duration-300 ease-in-out`,
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonState, setButtonState] = useState("default");
  const [errorMsg, setErrorMsg] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const onSuccess = () => {
    setButtonState("success");
    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setButtonState("default");
    }, 3000);
  };

  const onError = () => {
    setButtonState("error");
    setErrorMsg("Could not send please try again later");

    setTimeout(() => {
      setButtonState("default");
      setErrorMsg("");
    }, 3000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setButtonState("error");
      setErrorMsg("Please enter a valid email address");

      setTimeout(() => {
        setButtonState("default");
        setErrorMsg("");
      }, 3000);
    } else {
      const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
      resend.emails
        .send({
          from: email,
          to: "contactform@aloush.dev",
          subject: "Email from portfolio contact form",
          html: message,
        })
        .then(() => {
          onSuccess();
        })
        .catch((err) => {
          console.log(err);
          onError();
        });
    }
  };

  return (
    <>
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

        <button
          className={buttonStyle[buttonState as keyof typeof buttonStyle]}
        >
          {errorMsg ? (
            <p className="duration-300 ease-in-out">{`${errorMsg}`}</p>
          ) : (
            <div className="flex justify-center items-center text-transition">
              SEND <TbSend className="pl-2 text-2xl" />
            </div>
          )}
        </button>
      </form>
    </>
  );
};
