import * as Icon from "react-feather";

export type IconName = keyof typeof Icon;

interface ButtonProps {
  iconName: IconName;
  onClick?: () => void;
}

const ButtonIcon = ({ iconName, onClick }: ButtonProps) => {
  const IconTag = Icon[iconName];
  return (
    <button
      onClick={onClick}
      className="font-regular rounded-full transition-all text-black text-xs md:text-sm"
    >
      <IconTag size="16" />
    </button>
  );
};

export default ButtonIcon;
