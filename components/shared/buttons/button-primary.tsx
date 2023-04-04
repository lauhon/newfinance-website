interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

const ButtonPrimary = ({ text = "Text", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary px-3 md:px-4 py-2 md:py-3 font-regular rounded-full shadow-mdPrimary hover:shadow-innerPrimary transition-all text-black text-xs md:text-sm"
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
