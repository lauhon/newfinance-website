import { Trans, useTranslation } from "next-i18next";
import { FormEvent, useCallback, useState } from "react";
import { errorToMessage } from "~/lib/ui/mailjet/utils";

type PopupContent = {
  status: "success" | "error" | "hidden";
  message: string;
};

const WaitlistForm = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [popupContent, setPopupContent] = useState<PopupContent>({
    status: "hidden",
    message: "",
  });

  const color = getBackColor(popupContent.status);

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: "Test Entry",
        }),
      });

      const content = await response.json();

      if (response.ok) {
        setPopupContent({ status: "success", message: t("waitlist.success") });
        return;
      }

      setPopupContent({
        status: "error",
        message: errorToMessage(content.status, t),
      });
    },
    [email, setPopupContent, t]
  );

  const closePopup = () => {
    setPopupContent({ status: "hidden", message: "" });
  };

  return (
    <div className="flex justify-center px-12 relative">
      <label htmlFor="WaitlistForm" className="text-xs sr-only">
        Sign up here to join the Waitlist and keep updated
      </label>
      <form
        id="WaitlistForm"
        onSubmit={handleSubmit}
        className="sm:bg-stone-900 flex flex-col sm:flex-row rounded-full"
      >
        <input
          className=" bg-stone-900 text-slate-300 px-8 fw py-4 rounded-full mb-4 sm:mb-0"
          autoComplete="email"
          placeholder="max.musterman@email.com"
          type="email"
          onChange={changeValue}
        />
        <button
          className="bg-white text-black px-12 fw py-4 font-bold rounded-full"
          type="submit"
        >
          <Trans i18nKey="waitlist.button"> Join the waitlist</Trans>
        </button>
      </form>
      {popupContent.status !== "hidden" && (
        <div
          aria-live="polite"
          className={`bg-${color}-600 rounded absolute -bottom-10 p-2`}
        >
          <span>{popupContent.message}</span>
          <button onClick={closePopup} className={`bg-${color}-700`}>
            OK
          </button>
        </div>
      )}
    </div>
  );
};

const getBackColor = (status: "error" | "success" | "hidden"): string => {
  if (status === "success") return "emerald";

  return "rose";
};

export default WaitlistForm;
