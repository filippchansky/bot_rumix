const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

console.log(process.env.TOKENBOT);
const bot = new TelegramBot(process.env.TOKENBOT, { polling: true });

bot.onText(/\хуй/, (msg) => {
  const chatId = msg.chat.id;
  const entities = msg.chat
  console.log(msg)
  // bot.getChatMemberCount(chatId).then((result) => {
  //   console.log('Number of members in chat: ', result);
  // });
  bot.sendMessage(chatId, 'хуй', entities)
})

// async function getSubscribers(chatId) {
//   const subscribers = [];
//   let offset = 0;
//   const limit = 100;

//   while (true) {
//     const members = await bot.getChatMembers(chatId, { offset, limit });

//     if (members.length === 0) {
//       break;
//     }

//     members.forEach((member) => {
//       if (member.status === "member") {
//         subscribers.push(member.user);
//       }
//     });

//     offset += limit;
//   }

//   return subscribers;
// }

// function pickWinner(subscribers) {
//   const randomIndex = Math.floor(Math.random() * subscribers.length);
//   return subscribers[randomIndex];
// }

// bot.onText(/\/giveaway/, (msg) => {
//   const chatId = msg.chat.id;

//   getSubscribers(chatId)
//     .then((subscribers) => {
//       const winner = pickWinner(subscribers);
//       bot.sendMessage(chatId, `Победитель розыгрыша: @${winner.username}`);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });
