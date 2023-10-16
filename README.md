# Telegram Bot Boilerplate

This is a TypeScript boilerplate project for creating Telegram bots. It provides a foundation for developing Telegram bots commands quickly and easily using ``node-telegram-bot-api`` under the hood.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)
  - [Bot Commands](#bot-commands)
- [License](#license)

## Features

- TypeScript support
- Ready-to-use Telegram bot framework
- Example commands and handlers (start, about)
- Easily extendable for custom functionality

## Getting Started

### Installation

```bash
git clone https://github.com/Sami-AlEsh/ts-telegram-bot-boilerplate.git
```

### Setting up bot

```bash
// Install dependencies
npm i

// Build
npm run build

// Run (Dev)
npm run start:dev

// Run (Prod)
npm run start
```

## Usage
To use this boilerplate for your Telegram bot project, follow these steps:

1. Create a Telegram bot using [Bot Father](URL) official bot and obtain a token.
2. Set up your bot token in .env file.
3. Create your custom bot commands and handlers in the bot service file.

### Bot Commands
This boilerplate includes a few example bot commands and handlers to get you started. You can find these commands in the bot service (start command, about command). 

In order to create your own custom commands, you should:

* add the command name and description to commands static array in ``BotService.ts``
```
static readonly commands: TelegramBot.BotCommand[] = [
    ...
    { command: "hi", description: "new command!" },
  ];
```

* write a public function with same **command name** that you added to commands array and it accepts message object as a parameter, and bot will automatically map the command handler function to the right command using name matching.
```
public async hi(msg: TelegramBot.Message): Promise<void> {
    this.bot.sendMessage(msg.chat.id, "This is a new command!");
  }
```


## License
This project is licensed under the MIT License - see the LICENSE file for details.
