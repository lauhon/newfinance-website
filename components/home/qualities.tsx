import Image from "next/image";
import { useEffect, useState } from "react";
import * as Icon from "react-feather";
import Phone from "~/public/images/Phone.png";

const Qualities = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(offset);

  return (
    <section className="flex relative items-center px-5 md:px-5 pt-16 flex-col">
      <Image
        className="object-contain"
        src={Phone}
        alt={"Superlight App Demo"}
        width={400 + offset / 7}
      />
      <h3 className="font-manrope font-semibold text-lg mt-24 mb-16">
        Future-ready payment, inspired by cash{" "}
      </h3>
      <div className="flex flex-col md:flex-row gap-x-20 md:px-28 justify-evenly">
        <div className="flex flex-1 pb-6 md:pb-0">
          <Icon.Send size="16" color="#5EC269" className="w-14 pr-2 mt-1" />
          <p className="text-secondary">
            <span className="text-black">Borderless.</span> Move your money
            worldwide. Send to your friends, pay at shops or keep it save. With
            no additional fees.
          </p>
        </div>
        <div className="flex flex-1 pb-6 md:pb-0">
          <Icon.Send size="16" color="#5EC269" className="w-14 pr-2 mt-1" />
          <p className="text-secondary">
            <span className="text-black">Censorship resistant.</span> Like with
            cash, no one is able to restrict you or freeze your money based on
            their choice. It is fully self-custodian.
          </p>
        </div>
        <div className="flex flex-1">
          <Icon.Send size="16" color="#5EC269" className="w-14 pr-2 mt-1" />
          <p className="text-secondary">
            <span className="text-black">Less fees for locals.</span> By paying
            with Bitcoin, local shops save the fees for credit card networks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Qualities;
