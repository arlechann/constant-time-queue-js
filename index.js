export default class Queue {
	constructor() {
		this.front = [];
		this.back = [];
	}

	isEmpty() {
		return this.front.length == 0 && this.back.length == 0;
	}
}
