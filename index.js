// const fetchLongShortRatioData = require('./api/fetchLongShortRatioData');
// const fetchLiquidation = require('./api/fetchLiquidation');
// const escapeHtml = require('./utils/escapeHtml');
// const sendToTelegram = require('./telegram/sendMessage');
// const { createApiUrl, getCurrentTimestamps } = require('./api/createApiUrl');
// const filterBullishAbove10Percent = require('./utils/filterBullishAbove10Percent'); // hoặc '../filterBullishAbove10Percent' tùy cấu trúc thư mục
// const startScheduler = require('./scheduler/scheduler');
// const fetchAllData = require('./services/fetchAllData');

// const express = require("express");

// const axios = require('axios');

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// // ==== MAIN FUNCTION ====
// startScheduler();
// fetchAllData();

// // ==== KEEP ALIVE FOR RENDER ====
// const app = express();
// app.get("/", (req, res) => res.send("🤖 Telegram bot is running ✅"));
// const PORT = process.env.PORT || 3003;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const fetchLongShortRatioData = require('./api/fetchLongShortRatioData');
const fetchLiquidation = require('./api/fetchLiquidation');
const escapeHtml = require('./utils/escapeHtml');
const sendToTelegram = require('./telegram/sendMessage');
const { createApiUrl, getCurrentTimestamps } = require('./api/createApiUrl');
const filterBullishAbove10Percent = require('./utils/filterBullishAbove10Percent'); // hoặc '../filterBullishAbove10Percent' tùy cấu trúc thư mục
const startScheduler = require('./scheduler/scheduler');
const fetchAllData = require('./services/fetchAllData');

const axios = require('axios');



// ==== WAIT ====
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ==== MAIN FUNCTION ====

startScheduler();

fetchAllData();



