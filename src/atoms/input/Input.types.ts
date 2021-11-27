// File imports
import { Stylable } from 'atoms/atoms.types';

export interface InputProps extends Stylable {
	id?: string;
	value?: string;
	type?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name?: string;
}
