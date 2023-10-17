import { useTranslation } from "next-i18next";

const WaitlistButton = () => {
  const { t } = useTranslation("common");
  const click = () => {
    const form = document.querySelector("#WaitlistForm");
    if (!form) return;

    form.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
    form.querySelector("input")?.focus();
  };

  return (
    <button
      onClick={click}
      className="bg-white text-black px-12 fw py-2 font-bold rounded-full"
    >
      {t("waitlist.button")}
    </button>
  );
};

export default WaitlistButton;
