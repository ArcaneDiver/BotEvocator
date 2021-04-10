import { Client, Message } from 'discord.js';
import { inject, injectable } from 'inversify';

import { TYPES } from './types';
import { MessageHandler } from './services/message-handler';

@injectable()
export class Bot {
	constructor(
		@inject(TYPES.Client) private readonly client: Client,
		@inject(TYPES.Token) private readonly token: string,
		@inject(TYPES.MessageHandler) private readonly messageHandler: MessageHandler,
	) {}

	public listen(): Promise<string> {
		this.client.on('message', this.handleMessage.bind(this));
		return this.client.login(this.token);
	}

	private handleMessage(message: Message) {
		if (message.author.bot) {
			return;
		}

		this.messageHandler.handle(message);
	}
}
