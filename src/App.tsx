// Library imports
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'antd/dist/antd.css';

// File imports
import { store, persistor } from 'store';
import { Router } from 'views/components';

export const App = (): ReactElement => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Router />
			</PersistGate>
		</Provider>
	);
};
