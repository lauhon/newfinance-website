const BitcoinTag = () => {
  return (
    <div className="flex justify-end">
      <div className="flex items-center">
        <p className="text-right mr-5 align-middle inline-block text-sm">
          Buy and use bitcoin.
          <br />
          Fully banking and lightning
          <br />
          compatible. Pay directly
          <br />
          from your wallet.{" "}
        </p>
      </div>
      <div className="bg-black rounded-3xl p-2">
        <div className="flex rounded-full border-white border aspect-square w-20 md:w-24 justify-center items-center">
          <h2 className="text-white text-5xl md:text-6xl font-manrope font-medium p-0 m-0">
            ₿
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BitcoinTag;
