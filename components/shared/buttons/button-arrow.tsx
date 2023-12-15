import * as Icon from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  text?: any;
  onClick?: () => void;
  href?: any;
  color?: any;
  inverted?: any;
  icon?: any;
}

const ButtonArrow = ({
  text = "Text",
  onClick,
  href,
  color,
  inverted = false,
  icon = "ArrowRight",
}: ButtonProps) => {
  const IconTag = Icon[icon as keyof typeof Icon.icons];

  const handleLinkClick = (e: any) => {
    if (onClick) {
      e.preventDefault(); // Prevent the default behavior of the link
      onClick();
    }
  };

  return (
    <Link
      href={`/${href}`}
      className="flex space-x-6 align-middle bg-[#060606] py-3 pl-3 md:pl-3.5 pr-2.5 md:pr-3 hover:opacity-80 rounded-[5px] items-center transition-all duration-200   shadow-xl"
      style={{
        backgroundColor: color ? color : inverted ? "white" : "#060606",
      }}
      onClick={(e) => handleLinkClick(e)}
    >
      <span
        className="min-w-[40px] font-manrope font-semibold text-white text-base whitespace-nowrap"
        style={{ color: inverted ? "black" : "white" }}
      >
        {text}
      </span>
      <div className="flex items-center justify-center">
        <IconTag
          size={20}
          className=" text-white"
          style={{ color: inverted ? "black" : "white" }}
        />
      </div>
    </Link>
  );
};

export default ButtonArrow;
