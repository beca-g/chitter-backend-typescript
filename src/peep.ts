export class Peep {
	body: string;
	date: Date;

	constructor(body: string, date?: Date) {
		this.body = body;
		this.date = Date.now;
	}

	getBody() {
		return this.body
	}

	getTimeStamp() {
		return new Date(this.date);
	}
}