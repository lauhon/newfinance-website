import { createAuthBasic } from "~/lib/api/auth";
import { AddContactResponse } from "~/lib/api/types/mailjet/contact";
import { MailjetError } from "./mailjet";

export const addContact = async (email: string, name: string): Promise<AddContactResponse> => {
  const response = await fetch(mailApi + contactEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${createAuthBasic()}`,
    },
    body: JSON.stringify({
      name,
      email,
    }),
  });

  if (!response.ok) {
    return evaluateMailjetError(await response.json());
  }

  return {
    status: 200,
    message: email,
  };
};

const evaluateMailjetError = (error: MailjetError): AddContactResponse => {
  if (error.ErrorMessage.includes("MJ18 A Contact resource with value ")) {
    return {
      status: 409,
      message: "You are already in the waitlist!",
    };
  }

  return {
    status: 500,
    message: "Unknown Mailjet Error occured",
  };
};

const mailApi = "https://api.mailjet.com/v3/REST";
const contactEndpoint = "/contact ";
