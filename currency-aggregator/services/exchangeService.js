const axios = require("axios");
require("dotenv").config();

const BASE_URL = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}`;

async function getLatestRates(baseCurrency = "USD") {
  try {
    const response = await axios.get(`${BASE_URL}/latest/${baseCurrency}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch rates: ${error.message}`);
  }
}

async function convertCurrency(from, to, amount) {
  try {
    const response = await axios.get(`${BASE_URL}/pair/${from}/${to}/${amount}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to convert currency: ${error.message}`);
  }
}

module.exports = { getLatestRates, convertCurrency };