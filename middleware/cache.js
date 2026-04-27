const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 300 }); // cache for 5 minutes

function cacheMiddleware(req, res, next) {
  const key = req.originalUrl;
  const cached = cache.get(key);

  if (cached) {
    console.log(`Cache hit for ${key}`);
    return res.json(cached);
  }

  res.sendResponse = res.json;
  res.json = (body) => {
    cache.set(key, body);
    res.sendResponse(body);
  };

  next();
}

module.exports = { cacheMiddleware };