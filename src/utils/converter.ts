export const convert = (baseCurrency: any, targetCurrency: any, amount: any) => {

    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${baseCurrency}/${targetCurrency}.json`
    
    return fetch(url)
        .then(response => response.json())
        .then(data => data[targetCurrency] * amount)
}

export const getCurrencies = () => {

    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`

    return fetch(url)
        .then(response => response.json())
}