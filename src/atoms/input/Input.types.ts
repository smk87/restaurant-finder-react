export interface InputProps {
	id?: string;
	value?: string;
	type?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name?: string;
	className?: string;
}
