import { ContactForm } from "@/components/contact/ContactForm";
import { FunctionComponent } from "react";

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
