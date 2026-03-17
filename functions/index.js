const { onRequest } = require("firebase-functions/v2/https");

// Entry point for all /api/** requests (routed via firebase.json rewrites)
exports.api = onRequest((req, res) => {
  res.json({ status: "ok" });
});
