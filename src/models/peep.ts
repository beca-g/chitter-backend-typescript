export class Peep {
	body: string;
	date: string;

	constructor(body: string, date: number = Date.now()) {
		this.body = body;
		this.date = new Date(date).toLocaleString()
	}

	getBody(): string {
		return this.body
	}

	getTimeStamp(): string {
		return this.date
	}
}