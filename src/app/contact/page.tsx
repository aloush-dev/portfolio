import { ContactForm } from "@/components/contact/ContactForm";
import { FunctionComponent } from "react";

const Contact: FunctionComponent = () => {
  return (
    <section>
      <div className="p-8">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
