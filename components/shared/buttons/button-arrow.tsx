import Link from "next/link";
import { ArrowRight } from "react-feather";

interface ButtonProps {
  text?: any;
  onClick?: () => void;
  href?: any;
}

const ButtonArrow = ({ text = "Text", onClick, href }: ButtonProps) => {
  return (
    <Link
      href={`/${href}`}
      className="flex align-middle bg-gradient-to-r from-[#212221] to-[#040504] pl-4 md:pl-5 hover:opacity-80 font-regular rounded-full items-center transition-all duration-200 cursor-default text-white text-sm font-manrope font-regular tracking-tight"
    >
      {text}
      <div className="bg-white rounded-full ml-2.5 w-8 h-8 my-1 mr-1 flex items-center justify-center">
        <ArrowRight size={20} className=" text-black" />
      </div>
    </Link>
  );
};

export default ButtonArrow;
