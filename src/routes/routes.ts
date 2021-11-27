// Library imports
import { lazy } from 'react';

// File imports
import { Route } from './routes.types';
import { urls } from './urls';

/**
 * ==========================================
 * Component page imports
 * ==========================================
 */
const Root = lazy(() => import('views/pages').then(({ Root }) => ({ default: Root })));

/**
 * Routes
 */
export const routes: Route = Object.freeze({
	ROOT_PAGE: {
		path: urls.ROOT(),
		component: Root,
	},
});
