import { FunctionComponent } from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: FunctionComponent<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);
