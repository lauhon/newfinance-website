import { useTranslation } from "next-i18next";
const Subheader = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <div
        id="page-subheader"
        className="z-20 sticky top-[63px] flex justify-end bg-transparent px-5 md:px-6 my-2"
      >
        <span className="font-manrope text-2xl font-bold">v1.1</span>
        <div className="flex items-center bg-white border-black border-1 border-r-0 ml-2 pl-2 pr-4">
          {t("subheader.bitcoin")}
        </div>
        <div className="flex items-center bg-white border-black border-1 md:border-r-0 pl-2 pr-4">
          {t("subheader.wallet")}
        </div>
        <div className="hidden md:flex items-center bg-white border-black border-1 border-r-0 pl-2 pr-4"></div>
        <div className="hidden md:flex items-center bg-white border-black border-1 pl-2 pr-2">
          {t("subheader.link")}
        </div>
      </div>
    </>
  );
};

export default Subheader;
