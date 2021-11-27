// Library imports
import React, { ReactElement } from 'react';

// File imports
import { Button, Input } from 'atoms';

export const Root = (): ReactElement => {
	return (
		<div>
			<h1>Root Page</h1>
			<Input />
			<Button>Submit</Button>
		</div>
	);
};
