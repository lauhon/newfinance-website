import { useTranslation } from "next-i18next";

const QualitiesSecurity = () => {
  const { t } = useTranslation("common");

  return (
    <div className="flex justify-center items-center w-full bg-gradient-to-tr from-[#111318] via-[#14151B] to-[#24262A] rounded-2xl min-h-[500px]">
      <div className="h-5 w-5"></div>
    </div>
  );
};

export default QualitiesSecurity;
