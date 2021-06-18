export default class Queue {
	constructor() {
		this.front = [];
		this.back = [];
	}

	isEmpty() {
		return this.front.length == 0 && this.back.length == 0;
	}

	push(x) {
		this.back.push(x);
	}

	pop() {
		if(this.isEmpty()) { return undefined; }
		if(this.front.length == 0) {
			this.back.reverse();
			[this.front, this.back] = [this.back, this.front];
		}
		return this.front.pop();
	}
}
