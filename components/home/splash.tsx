import { Trans } from "next-i18next";
import Image from "next/image";
import SocialBlock from "../shared/social/social-block";

const Splash = () => {
  return (
    <section className="flex mx-3 md:mx-5 border-1 border-black rounded-large mt-1 flex-col">
      <div className="w-full mt-16">
        <h1 className="text-6xl text-center font-manrope font-medium leading-snug">
          <Trans i18nKey="splash.headline" />
        </h1>
      </div>
      <div className="flex mt-12 gap-12">
        <div className="flex flex-col flex-1 text-right items-end justify-end mb-12">
          <SocialBlock />
          <p className="leading-relaxed mt-6 w-3/4">
            <Trans i18nKey="splash.tagline" />
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            alt="Image of a phone"
            src="/../public/images/Phone.png"
            className=""
            width="300"
            height="500"
          />
        </div>
        <div className="flex flex-1 flex-col text-right">
          <h2 className="text-3xl font-manrope font-regular mt-12 mr-3">
            Self custody
          </h2>
          <div className="border-b-1 border-black w-[calc(100%+100px)] ml-[-100px]" />
          <h2 className="text-3xl font-manrope font-regular mt-20 mr-3">
            Safety
          </h2>
          <div className="border-b-1 border-black w-[calc(100%+175px)] ml-[-175px]" />
          <h2 className="text-3xl font-manrope font-regular mt-20 mr-3">
            Banking compatible
          </h2>
          <div className="border-b-1 border-black w-[calc(100%+250px)] ml-[-250px]" />
        </div>
      </div>
      <div className="bg-black w-full rounded-b-large text-center py-12 cursor-pointer">
        <span className="text-white text-2xl ">Get an invitation</span>
      </div>
    </section>
  );
};

export default Splash;
