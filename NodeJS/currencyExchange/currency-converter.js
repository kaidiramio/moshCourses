// Program will take in currency code we want to convert from and currency code we want to convert to, as well as the amount of money.

// will receive data from two asynchronous sources:

// Currency Layer — https://currencylayer.com — You’ll need to sign up for free so you can use the API Access Key. This API will provide us with data needed to calculate exchange rate between currencies.
// Rest Countries — http://restcountries.eu/ — This API will give us information about where can we use the currency we just converted our money to.

// First function is going to fetch data about currencies asynchronously // asynchronous function that is going to take in two arguments, fromCurrency and toCurrency // Fetch the data. With async/await, we can assign data directly to a variable

const axios = require('axios');

const getExchangeRate = async (fromCurrency, toCurrency) => { 
    try{
    // fetch data & assign variable 
    const response = await axios.get('http://data.fixer.io/api/latest?access_key=xETiX6lRpDC5NlJWERke9lmp4k7k7ROm&format=1');

    // data available under response.data.rates
    const rate = response.data.rates

    // converting to Euro 
    const euro = 1 / rate[fromCurrency]

    // get exchange rate
    const exchangeRate = euro * rate[toCurrency]
    return exchangeRate;

    // catch error 
    } catch (error) {
        throw new Error(`Unable to get currency ${fromCurrency} and ${toCurrency}`);
    }
};


// Second function - Recieving Country Data asychronously 

const getCountries = async (currencyCode) => {
    try{
    // fetch data & assign variable (found via api docs)
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);

    // use map method to map data over (map and filter are most often used w/async) & return country name for each (found via api docs)
    return response.data.map(country => country.name) 

    // catch error
    } catch (error) {
        throw new Error(`Unable to get countries that use ${currencyCode}`);
    }
}

// Third function - merge it all together for final result
const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    let exchangeRate;
    let countries;

    await Promise.all([getExchangeRate(fromCurrency, toCurrency), getCountries(toCurrency)])

    // get currency data & country data
    .then(([exchangeRateValue, countriesValue]) => {
      exchangeRate = exchangeRateValue;
      countries = countriesValue;
    });

    // save converted amount to variable
    const convertedAmount = (amount * exchangeRate).toFixed(2);

    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following countries: ${countries}`;
}

convertCurrency('USD', 'HRK', 20)
  .then((message) => {
    console.log(message);
  }).catch((error) => {
    console.log(error.message);
  });
