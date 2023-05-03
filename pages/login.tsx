import ButtonStandard from "~/components/shared/buttons/button-standard";
import StandardInput from "~/components/shared/inputs/standard-input";
import LogoMark from "~/icons/logomark.svg";

//bg-gradient-to-t from-[#FAFAFA] via-[#FFFFFF] to-[#FFFFFF]

const Login = () => {
  return (
    <section className="flex items-center px-5 md:px-5 mt-48 flex-col ">
      <LogoMark className="mb-6" />

      <StandardInput placeholder="Enter your email address..." />
      <div className="pt-3.5" />
      <ButtonStandard text="Continue with email" />
      <p className="font-inter text-[#979AA1] text-sm w-96 text-center pt-6 leading-relaxed font-light">
        By signing up, you agree to the Terms of Service <br /> and Data
        Processing Agreement.
      </p>
    </section>
  );
};

export default Login;
