// File imports
import { getRandomInt } from 'utils';

const maxLimit = 10;

it('Generates a random number inside given max limit', () => {
	const randomInt = getRandomInt(maxLimit);

	expect(randomInt).toBeLessThanOrEqual(maxLimit);
});

it('Generates a random number inside given max limit, which is integer', () => {
	const randomInt = getRandomInt(maxLimit);

	expect(Number.isInteger(randomInt)).toBeTruthy();
});
