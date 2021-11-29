// Library imports
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
	createStyles({
		mapContainer: {
			width: '100%',
			height: '37.5rem',
		},
		yourLocation: {
			background: `white`,
			padding: '1rem',
		},
	})
);
