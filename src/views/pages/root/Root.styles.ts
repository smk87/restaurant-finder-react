// Library imports
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
	createStyles({
		root: {
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		},
		searchFieldWrapper: {
			marginTop: '4rem',
		},
		buttonWrapper: {
			display: 'flex',
			justifyContent: 'center',
		},
		button: {
			margin: '0 1rem',
		},
	})
);
