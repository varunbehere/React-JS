import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({}); // Initialize data with an empty object

    useEffect(() => {
        console.clear(); // Clear console
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((res) => {
                console.log(res[currency]);
                setData(res[currency]);
            })
            .catch((error) => {
                console.error('Error fetching currency info:', error);
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
