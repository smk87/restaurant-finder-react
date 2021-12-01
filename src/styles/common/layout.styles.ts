// Library imports
import { createStyles } from '@mui/styles';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useLayoutStyles = () =>
	createStyles({
		layout: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
		},
	});
