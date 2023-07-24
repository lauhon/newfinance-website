import Image from "next/image";
import ButtonStandard from "~/components/shared/buttons/button-standard";
import StandardInput from "~/components/shared/inputs/standard-input";
const logo_dark = require("~/icons/LogoNewFinance.png");

//bg-gradient-to-t from-[#FAFAFA] via-[#FFFFFF] to-[#FFFFFF]

const Login = () => {
  return (
    <section className="flex items-center px-5 md:px-5 mt-48 flex-col ">
      <Image
        className="h-[32px] w-auto mb-6"
        alt="NewFinance Logo"
        src={logo_dark}
      />

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
