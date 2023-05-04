interface ButtonProps {
  text?: any;
  onClick?: () => void;
}

const ButtonSecondary = ({ text = "Text", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className=" border-1 border-[#3A3C3A] px-5 md:px-5 py-3 md:py-3 rounded-full shadow-mdBlack hover:shadow-innerBlack transition-all text-white text-base font-manrope font-semibold"
    >
      {text}
    </button>
  );
};

export default ButtonSecondary;
