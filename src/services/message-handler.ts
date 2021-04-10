import { Message } from 'discord.js';
import { injectable, inject } from 'inversify';
import { TYPES } from '../types';
import { Evocation } from './evocation';

@injectable()
export class MessageHandler {
	constructor(@inject(TYPES.Evocation) private readonly evocation: Evocation) {}

	public async handle(message: Message): Promise<Message | Message[] | void> {
		if (!this.evocation.isCommand(message.content)) {
			return;
		}

		if (message.mentions.users.size < 1) {
			return;
		}

		const replies = message.mentions.users.map(user => `${user}`).join(' ');

		return message.channel.send(`${this.evocation.evoke()} ${replies}`);
	}
}
