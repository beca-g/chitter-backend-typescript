export class Peep {
	body: string;
	date: string;
	id: number;

	constructor(body: string, date: number = Date.now(), id: number = Date.now()) {
		this.body = body;
		this.date = new Date(date).toLocaleString()
		this.id = id;
	}

	getBody(): string {
		return this.body
	}

	getTimeStamp(): string {
		return this.date
	}

	getId(): number {
		return this.id
	}
}