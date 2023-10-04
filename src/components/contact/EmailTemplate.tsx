import { FunctionComponent } from "react";

interface EmailTemplateProps {
  parsedData: {
    name: string;
    email: string;
    message: string;
  };
}

export const EmailTemplate: FunctionComponent<Readonly<EmailTemplateProps>> = ({
  parsedData,
}) => {
  console.log("here", parsedData);
  return (
    <div>
      <h1>Email From, {parsedData.name}!</h1>
      <h2>{parsedData.email}</h2>
      <p>{parsedData.message}</p>
    </div>
  );
};
