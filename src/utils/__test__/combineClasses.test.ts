// File imports
import { combineClasses } from 'utils';

const className1 = 'className1';
const className2 = 'className2';
const className3 = 'className3';

it('Combine class names with space separation', () => {
	const combinedClassNames = combineClasses(className1, className2, className3);

	expect(combinedClassNames).toBe<string>('className1 className2 className3');
});
