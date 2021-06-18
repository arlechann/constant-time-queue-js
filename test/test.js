import { assert } from 'chai';
import Queue from '../index.js';

describe('Queue', function() {
	describe('constructor', function() {
		it('should be empty', function() {
			assert.deepEqual(
				new Queue(),
				{ front: [], back: [] }
			);
		});
	});

	describe('isEmpty', function() {
		context('when is empty', function() {
			const queue = new Queue();
			it('should be true', function() {
				assert.isOk(queue.isEmpty());
			});
		});

		context('when front has an element', function() {
			const queue = new Queue();
			queue.front = [0];
			it('should be false', function() {
				assert.isNotOk(queue.isEmpty());
			});
		});

		context('when back has an element', function() {
			const queue = new Queue();
			queue.back = [0];
			it('should be false', function() {
				assert.isNotOk(queue.isEmpty());
			});
		});
	});

	describe('push', function() {
		context('when front and back is empty', function() {
			it('should be pushed to back', function() {
				const queue = new Queue();
				queue.push(0);
				assert.deepEqual(
					queue,
					{ front: [], back: [0] }
				);
			});
		});

		context('when front is not empty', function() {
			it('should be pushed to back', function() {
				const queue = new Queue();
				queue.front = [1, 0];
				queue.push(2);
				assert.deepEqual(
					queue,
					{ front: [1, 0], back: [2] }
				);
			});
		});

		context('when back is not empty', function() {
			it('should be pushed to back', function() {
				const queue = new Queue();
				queue.back = [0, 1];
				queue.push(2);
				assert.deepEqual(
					queue,
					{ front: [], back: [0, 1, 2] }
				);
			});
		});
	});
});

