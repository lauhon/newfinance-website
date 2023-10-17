import * as Icon from "react-feather";

export type IconName = keyof typeof Icon;

interface ButtonProps {
  iconName: IconName;
  lg?: Boolean;
  onClick?: () => void;
}

const ButtonIcon = ({ iconName, lg, onClick }: ButtonProps) => {
  const IconTag = Icon[iconName];
  return (
    <button
      onClick={onClick}
      className="font-regular rounded-full transition-all text-black"
    >
      <IconTag className="text-gray-400" size={lg ? "28" : "16"} />
    </button>
  );
};

export default ButtonIcon;
