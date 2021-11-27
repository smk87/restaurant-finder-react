// Library imports
import { ButtonShape, ButtonType } from 'antd/lib/button';

// File imports
import { Stylable } from 'atoms/atoms.types';

export interface ButtonProps extends Stylable {
	onClick?: React.MouseEventHandler<HTMLElement>;
	type?: ButtonType;
	shape?: ButtonShape;
	children: string;
}
