import { injectable } from 'inversify';

@injectable()
export class Evocation {
	public isCommand(content: string): boolean {
		return content.startsWith('/evocation');
	}

	public evoke(): string {
		return 'Kuchiyose no Jutsu';
	}
}
