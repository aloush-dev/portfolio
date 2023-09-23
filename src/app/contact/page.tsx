import { ContactForm } from "@/components/contact/ContactForm";
import { FunctionComponent } from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: `Ali Abdallah | Contact`,
  description:
    "Explore my portfolio showcasing creative web development and design",
};

const Contact: FunctionComponent = () => {
  return (
    <section>
      <div className="p-8 lg:px-80">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
