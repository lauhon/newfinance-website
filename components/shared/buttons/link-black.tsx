import Link from "next/link";

interface LinkProps {
  text?: any;
  href?: any;
}

const LinkBlack = ({ text = "Text", href }: LinkProps) => {
  return (
    <Link
      href={`/${href}`}
      className="bg-gradient-to-r from-[#3A3C3A] to-[#040504] border-1 border-[#3A3C3A] px-4 md:px-5 py-3 md:py-3 font-regular rounded-full shadow-mdBlack hover:shadow-innerBlack transition-all text-white text-sm font-manrope font-medium"
    >
      {text}
    </Link>
  );
};

export default LinkBlack;
