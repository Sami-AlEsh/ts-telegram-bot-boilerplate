import TelegramBot from "node-telegram-bot-api";

export default class BotService {
  static readonly commands: TelegramBot.BotCommand[] = [
    { command: "start", description: "Restart the bot" },
    { command: "about", description: "Learn more about the bot" },
  ];

  constructor(private bot: TelegramBot) {}

  public async start(msg: TelegramBot.Message): Promise<void> {
    this.bot.sendMessage(msg.chat.id, "Thanks for using this bot!");
  }

  public async about(msg: TelegramBot.Message): Promise<void> {
    this.bot.sendMessage(msg.chat.id, "<< Made with ♥ by Sami >>");
  }
}
