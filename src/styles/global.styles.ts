/* eslint-disable @typescript-eslint/no-explicit-any */
// Library imports
import { createStyles, makeStyles } from '@mui/styles';
import { useLayoutStyles } from './common';
import { useHelperStyles } from './helper';

const useStyles = makeStyles(() =>
	createStyles({
		...useLayoutStyles(),
		...useHelperStyles(),
	})
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useGlobalStyles = (props: any = {}) => useStyles(props);
