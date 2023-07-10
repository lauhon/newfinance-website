import { useTranslation } from "next-i18next";

const QualitiesNewFinance = () => {
  const { t } = useTranslation("common");

  return (
    <div className="flex justify-center items-center w-full bg-[#343C45] rounded-2xl min-h-[500px]">
      <div className="h-5 w-5"></div>
    </div>
  );
};

export default QualitiesNewFinance;
