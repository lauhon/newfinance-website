import { TFunction } from "i18next";
import { AddContactStatus } from "~/lib/api/types/mailjet/contact";

export const errorToMessage = (status: AddContactStatus, t: TFunction<string, any>): string => {
  if (status === 409) {
    return t("waitlist.already-exists-error");
  }

  return t("other");
};
