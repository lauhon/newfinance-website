import { useTranslation } from "next-i18next";
import BitcoinTag from "../shared/bitcoin/bitcoin-tag";
import ButtonBlack from "../shared/buttons/link-black";

const Action = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex flex-col md:flex-row mx-3 md:mx-5 mt-32 md:mt-48 border-b-1 border-black pb-1">
      <div className="flex-1 flex border-1 border-black rounded-3xl md:rounded-large aspect-[1.25/1] md:aspect-[1.375/1] bg-[url('../public/images/bitcoin_pre.png')] bg-center">
        <div className="bg-black mt-auto rounded-b-3xl md:rounded-b-large w-full">
          <h3 className="text-white p-8 md:p-12 text-2xl md:text-4xl font-manrope font-medium">
            Ready to dive in the ₿-rabithole?
          </h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col border-1 border-black rounded-3xl md:rounded-large aspect-[1.375/1] justify-between">
        <div className="p-5 md:p-12">
          <BitcoinTag />
        </div>
        <div className="p-8 md:p-12">
          <h3 className="text-2xl md:text-4xl font-manrope font-medium mb-4 md:mb-8">
            Experience your journey of independant money.
          </h3>
          <div>
            <ButtonBlack text="Start now" />
            <span className="text-xs md:text-sm text-black ml-3 md:ml-4">
              {t("header.allFree")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Action;
