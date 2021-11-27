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
		searchField: {},
		buttonWrapper: {
			display: 'flex',
			justifyContent: 'center',
			padding: '0 8rem',
		},
		button: {
			margin: '0 1rem',
		},
	})
);
