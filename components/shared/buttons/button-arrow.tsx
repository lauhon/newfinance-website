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
      className="flex space-x-6 align-middle bg-[#060606] py-3 pl-3 md:pl-3.5 pr-2.5 md:pr-3 hover:opacity-80 rounded-md items-center transition-all duration-200   shadow-xl"
    >
      <span className="md:min-w-[100px] font-manrope font-semibold text-white text-base">
        {text}
      </span>
      <div className="flex items-center justify-center">
        <ArrowRight size={20} className=" text-white" />
      </div>
    </Link>
  );
};

export default ButtonArrow;
