import { config } from "dotenv";

import { Bot } from "./Bot";

config();

const bot = new Bot();
bot.setup();
