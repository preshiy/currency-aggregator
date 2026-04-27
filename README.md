# 💱 Currency Aggregator

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

> A real-time currency exchange rate aggregator and converter built with Node.js — featuring live data, intelligent caching, and a bold modern frontend.

---

## 🚀 Features

- 🌍 **150+ currencies** supported with live exchange rates
- ⚡ **Smart caching** — responses cached for 5 minutes to reduce API calls
- 💱 **Currency converter** — convert any amount between any two currencies
- 🛡️ **Error handling** — graceful error responses on every route
- 🔒 **Secure** — API keys stored safely in environment variables
- 🎨 **Modern UI** — bold, colorful frontend with real-time data display

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| HTTP Client | Axios |
| Caching | node-cache |
| Config | dotenv |
| Frontend | HTML, CSS, JavaScript |
| Data Source | ExchangeRate API |

---

## 📁 Project Structure

```
currency-aggregator/
├── public/
│   └── index.html
├── routes/
│   └── rates.js
├── services/
│   └── exchangeService.js
├── middleware/
│   └── cache.js
├── .env
└── index.js
```

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/preshiy/currency-aggregator.git
cd currency-aggregator
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root:
```
PORT=3000
API_KEY=your_exchangerate_api_key_here
```
> Get a free API key at [exchangerate-api.com](https://www.exchangerate-api.com)

### 4. Start the server
```bash
node index.js
```

### 5. Open in browser
```
http://localhost:3000
```

---

## 📡 API Endpoints

### Get all exchange rates
```
GET /rates?base=USD
```
**Response:**
```json
{
  "success": true,
  "base": "USD",
  "rates": {
    "NGN": 1355.07,
    "EUR": 0.854,
    "GBP": 0.74
  }
}
```

### Convert currency
```
GET /rates/convert?from=USD&to=NGN&amount=100
```
**Response:**
```json
{
  "success": true,
  "from": "USD",
  "to": "NGN",
  "amount": "100",
  "result": 135507.08
}
```

---

## 🎨 Frontend Preview

- Enter any amount and currency codes to convert instantly
- View live rates for 150+ currencies in a beautiful grid
- Fully responsive and mobile-friendly

---

## 👨‍💻 Author

**Preshiy**
- GitHub: [@preshiy](https://github.com/preshiy)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).