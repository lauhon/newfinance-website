interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

const ButtonBlack = ({ text = "Text", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-black px-3 md:px-4 py-2 md:py-3 font-regular rounded-full shadow-mdBlack hover:shadow-innerBlack transition-all text-white text-sm"
    >
      {text}
    </button>
  );
};

export default ButtonBlack;
