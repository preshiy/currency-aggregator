const express = require("express");
const dotenv = require("dotenv");
const ratesRouter = require("./routes/rates");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

// Routes
app.use("/rates", ratesRouter);

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Currency Aggregator API is running!",
    endpoints: [
      "GET /rates?base=USD",
      "GET /rates/convert?from=USD&to=NGN&amount=100",
    ],
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  res.status(500).json({ success: false, message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});