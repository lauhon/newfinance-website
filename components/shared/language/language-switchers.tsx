import LanguageSwitchLink from "./language-switch";

const LanguageSwitchers = () => {
  return (
    <div className="flex-row font-thin space-x-16 text-lg hidden sm:flex">
      <LanguageSwitchLink locale="de" />
      <LanguageSwitchLink locale="en" />
    </div>
  );
};

export default LanguageSwitchers;
