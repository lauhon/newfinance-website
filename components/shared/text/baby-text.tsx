interface InputProps {
  text: string;
}

const BabyText = ({ text }: InputProps) => {
  return (
    <span className=" font-manrope text-xs text-[#4C3EF7] tracking-wider">
      {" "}
      {text}{" "}
    </span>
  );
};

export default BabyText;
