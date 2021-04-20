export class Peep {
	body: string;
	date: number;

	constructor(body: string, date: number = Date.now()) {
		this.body = body;
		this.date = date;
	}

	getBody() {
		return this.body
	}

	getTimeStamp() {
		return new Date(this.date).toLocaleString();
	}
}