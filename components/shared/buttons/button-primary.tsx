interface ButtonProps {
  text?: any;
  onClick?: () => void;
}

const ButtonPrimary = ({ text = "Text", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-[#3A3C3A] to-[#040504] border-1 border-[#3A3C3A] px-5 md:px-5 py-3 md:py-3 rounded-full shadow-mdBlack hover:shadow-innerBlack transition-all text-white text-base font-manrope font-semibold"
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
