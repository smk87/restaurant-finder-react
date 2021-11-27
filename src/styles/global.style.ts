/* eslint-disable @typescript-eslint/no-explicit-any */
// Library imports
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => createStyles({}));

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useGlobalStyles = (props: any = {}) => useStyles(props);
