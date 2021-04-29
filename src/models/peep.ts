export class Peep {
	body: string;
	date: number;

	constructor(body: string, date: number = Date.now()) {
		this.body = body;
		this.date = date;
	}

	getBody(): string {
		return this.body
	}

	getTimeStamp(): string {
		return new Date(this.date).toLocaleString();
	}
}