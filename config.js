

const now = new Date(); // Lấy thời gian hiện tại
const nowTimestamp = Math.floor(now.getTime() / 1000); // Unix timestamp hiện tại
const from = Math.floor(nowTimestamp / 3600) * 3600; // Làm tròn về đầu giờ
const to = from; // Thời gian hiện tại



module.exports = {
    TELEGRAM_BOT_TOKEN: '8266107653:AAGgFyrheA9r-Dpm6tCMmQwNJZ4NnGMYXHw',
    // TELEGRAM_BOT_TOKEN: '7640879888:AAGG-YwTdCiAjimmnMZnAXDqYeNYmn78OsI',
     // 👇 đổi từ CHAT_ID sang CHAT_IDS
    TELEGRAM_CHAT_IDS: [
        '5710130520',
        '5956854458',
        // '-100xxxxxxxxxx', // group nếu có
    ],

    API_KEY: '237122a8-36cb-40f7-af97-5f12925e07cf',
    from,
    to
};


