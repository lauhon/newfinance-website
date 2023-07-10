import { useTranslation } from "next-i18next";

const QualitiesNewFinance = () => {
  const { t } = useTranslation("common");

  return (
    <div className="flex justify-center items-center bg-[#343C45] rounded-2xl w-[1000px] max-w-full min-h-[500px]">
      <div className="h-5 w-5"></div>
    </div>
  );
};

export default QualitiesNewFinance;
