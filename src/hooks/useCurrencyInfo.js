import { useEffect, useState } from "react";
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json
// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json
// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/${currency}.json

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const date = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
