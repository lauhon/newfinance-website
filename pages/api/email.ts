import { NextApiRequest, NextApiResponse } from "next";
import { addContact } from "~/services/mailjet/email-service";

const postEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(400);
  }

  const language = cleanLanguage(req.query.lang);
  const { email } = req.body;
  const response = await addContact(email, language as "en" | "de");

  return res.status(response.status).json(response);
};

const cleanLanguage = (language?: string | string[]) => {
  if (typeof language !== "string") {
    return "en";
  }

  if (language !== "en" && language !== "de") {
    return "en";
  }

  return language;
};

export default postEmail;
