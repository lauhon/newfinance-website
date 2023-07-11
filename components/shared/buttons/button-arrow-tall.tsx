import Link from "next/link";
import { ArrowRight } from "react-feather";

interface ButtonProps {
  text?: any;
  onClick?: () => void;
  href?: any;
}

const ButtonArrowTall = ({ text = "Text", onClick, href }: ButtonProps) => {
  return (
    <Link
      href={`/${href}`}
      className="flex align-middle bg-gradient-to-r from-[#3A3C3A] to-[#040504] pl-7 hover:opacity-80 rounded-full items-center transition-all duration-200 cursor-default text-white text-lg font-manrope font-medium tracking-tight border-1 border-[#3A3C3A]"
    >
      {text}
      <div className="bg-white rounded-full ml-3.5 w-11 h-11 my-1.5 mr-1.5 flex items-center justify-center">
        <ArrowRight size={27} className=" text-black" />
      </div>
    </Link>
  );
};

export default ButtonArrowTall;
