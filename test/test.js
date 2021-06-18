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
});

