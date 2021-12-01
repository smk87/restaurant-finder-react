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
			height: 'max(100vh,55rem)',
		},
		pageHeadingWrapper: {
			marginTop: '2rem',

			'& h1': {
				margin: 0,
			},
		},
		searchFieldWrapper: {
			marginTop: '2rem',
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
			marginTop: '2rem',
		},
	})
);
