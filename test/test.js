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
});

