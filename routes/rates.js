const express = require("express");
const router = express.Router();
const { getLatestRates, convertCurrency } = require("../services/exchangeService");
const { cacheMiddleware } = require("../middleware/cache");

// GET /rates?base=USD
router.get("/", cacheMiddleware, async (req, res) => {
  try {
    const base = req.query.base || "USD";
    const data = await getLatestRates(base);
    res.json({
      success: true,
      base: data.base_code,
      rates: data.conversion_rates,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /rates/convert?from=USD&to=NGN&amount=100
router.get("/convert", cacheMiddleware, async (req, res) => {
  try {
    const { from = "USD", to = "NGN", amount = 1 } = req.query;
    const data = await convertCurrency(from, to, amount);
    res.json({
      success: true,
      from,
      to,
      amount,
      result: data.conversion_result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;