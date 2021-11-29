// Library imports
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
	createStyles({
		root: {
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			padding: '0 1rem',
		},
		searchFieldWrapper: {
			marginTop: '4rem',
		},
		buttonWrapper: {
			display: 'flex',
			justifyContent: 'center',
			padding: '0 8rem',
		},
		button: {
			margin: '0 1rem',
		},
		mapWrapper: {
			marginTop: '4rem',
		},
	})
);
