/* eslint-disable @typescript-eslint/no-explicit-any */
// Library imports
import { createStyles, makeStyles } from '@mui/styles';
import { useLayoutStyles } from './common';

const useStyles = makeStyles(() =>
	createStyles({
		...useLayoutStyles(),
	})
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useGlobalStyles = (props: any = {}) => useStyles(props);
