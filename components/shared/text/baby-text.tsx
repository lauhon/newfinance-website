interface InputProps {
  text: string;
  color?: string;
}

const BabyText = ({ text, color = "#4C3EF7" }: InputProps) => {
  return (
    <span
      style={{ color: color }}
      className=" font-manrope font-semibold text-xs tracking-wider"
    >
      {" "}
      {text}{" "}
    </span>
  );
};

export default BabyText;
