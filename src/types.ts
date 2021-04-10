export const TYPES = {
	Bot: Symbol('Bot'),
	Client: Symbol('Client'),
	Token: Symbol('Token'),
	Evocation: Symbol('Evocation'),
	MessageHandler: Symbol('MessageHandler'),
};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			TOKEN: string;
		}
	}
}
