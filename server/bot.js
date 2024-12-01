require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const webAppUrl = 'https://ya.ru';
// Проверяем, что токен доступен
const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
    console.error('Error: TELEGRAM_BOT_TOKEN is not set!');
    process.exit(1); // Завершаем выполнение, если токен отсутствует
}

// Создаем экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Обработка сообщений
bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        try {
            await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Заполнить форму', web_app: {url: webAppUrl} }]
                    ]
                }
            });
        } catch (error) {
            console.error('Ошибка при отправке сообщения:', error);
        }
    }
});
