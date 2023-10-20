interface InputProps {
  placeholder: string;
  value: any;
  onInput: any;
  name?: string;
  type?: string;
  id?: string;
  autocomplete?: string;
}

const StandardInput = ({
  type = "email",
  id = "email",
  name = "email",
  autocomplete = "email",
  placeholder,
  value,
  onInput,
}: InputProps) => {
  return (
    <input
      name={name}
      autoComplete={autocomplete}
      id={id}
      type={type}
      value={value}
      onInput={onInput}
      placeholder={placeholder}
      className="w-80 bg-transparent h-12 border-1 rounded border-[#DBDDE0] outline-none focus:shadow-none hover:border-[#C5C6C9] focus:border-[#392ad5] duration-100 font-inter text-sm text-[#282a30] placeholder:text-sm placeholder:text-[#979AA1] py-1.5 px-3"
    />
  );
};

export default StandardInput;
