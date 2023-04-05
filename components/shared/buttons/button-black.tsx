interface ButtonProps {
  text?: any;
  onClick?: () => void;
}

const ButtonBlack = ({ text = "Text", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-black px-5 py-3 font-regular rounded-full shadow-mdBlack hover:shadow-innerBlack transition-all text-white text-sm whitespace-nowrap"
    >
      {text}
    </button>
  );
};

export default ButtonBlack;
