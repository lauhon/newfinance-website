interface ButtonProps {
  text?: any;
  onClick?: () => void;
}

const ButtonStandard = ({ text = "Text", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="cursor-default w-80 h-12 border-1 rounded border-[#DBDDE0] focus:outline-none focus:shadow-none hover:border-[#C5C6C9] hover:bg-[#f4f5f8] drop-shadow-sm duration-100 font-manrope font-semibold text-sm text-[#282a30] placeholder:text-sm placeholder:text-[#979AA1] py-1.5 px-3"
    >
      {text}
    </button>
  );
};

export default ButtonStandard;
