import Image from "next/image";
import ArrowLink from "~/icons/arrow-link.svg";
import background from "~/public/images/home/background.jpg";
import iPhone from "~/public/images/home/iPhone.png";
import WaitlistForm from "../shared/waitlist-form";

const Splash = () => {
  return (
    <section className="relative h-full bg-black text-white">
      <div className="absolute inset-0 overflow-hidden h-screen w-full">
        <Image src={background} alt="" className="w-full h-full" />
        <div className="w-full bg-black h-64 -mt-32 blur-3xl"></div>
      </div>
      <div className="relative h-full flex flex-col items-center pt-52 flex-1 justify-start space-y-16 pb-32">
        <h2 className="text-center mx-2.5 text-8xl">
          {/* <Trans i18nKey="splash.headline">
            WIE EINE <span className="text-pink-400 font-thin font-serif">bank</span>
            <br></br>
            ABER BESSER IN
            <br></br>
            <span className="text-primary font-thin font-serif">jedem</span> ASPEKT
          </Trans> */}
        </h2>
        <div>
          <WaitlistForm />
        </div>
        <div className="mx-16">
          <Image src={iPhone} alt="iPhone 13 with Screenshot of the Superlight App" />
        </div>
      </div>
      <div className="wrapper text-black bg-primary flex">
        <a className="py-2 text-lg marquee flex" href="https://zmartup.com" target="_blank" rel="noreferrer">
          <span className="sr-only">Go to crowd Investing Page in new Tab</span>
          <p aria-hidden="true">
            <ArrowLink aria-hidden className="mx-6 h-6" />
            FINANZIERUNGSRUNDE IST AKTIV
            <ArrowLink aria-hidden className="mx-6 h-6" />
            SICHERE DIR DEINEN ANTEIL
            <ArrowLink aria-hidden className="mx-6 h-6" />
            INVESTIERE JETZT
            <ArrowLink aria-hidden className="mx-6 h-6" />
            FINANZIERUNGSRUNDE IST AKTIV
            <ArrowLink aria-hidden className="mx-6 h-6" />
            SICHERE DIR DEINEN ANTEIL
          </p>
          <p aria-hidden="true">
            <ArrowLink aria-hidden className="mx-6 h-6" />
            FINANZIERUNGSRUNDE IST AKTIV
            <ArrowLink aria-hidden className="mx-6 h-6" />
            SICHERE DIR DEINEN ANTEIL
            <ArrowLink aria-hidden className="mx-6 h-6" />
            INVESTIERE JETZT
            <ArrowLink aria-hidden className="mx-6 h-6" />
            FINANZIERUNGSRUNDE IST AKTIV
            <ArrowLink aria-hidden className="mx-6 h-6" />
            SICHERE DIR DEINEN ANTEIL
          </p>
        </a>
      </div>
      <style jsx>
        {`
          @media (prefers-reduced-motion) {
            .marquee {
              animation: none;
            }
          }

          .wrapper {
            max-width: 100%;
            overflow: hidden;
          }

          .marquee {
            white-space: nowrap;
            animation: marquee 10s linear infinite;
            display: flex;
            flex-direction: row;
          }

          .marquee p {
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Splash;
