export const fetchBitcoinData = async (): Promise<any> => {
  const apiUrl = coinbaseApiBitcoin;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Bitcoin data:", error);
    throw error;
  }
};

const coinbaseApiBitcoin =
  "https://api.coinbase.com/v2/exchange-rates?currency=BTC";
