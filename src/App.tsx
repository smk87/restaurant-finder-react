// Library imports
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

// File imports
import { store, persistor } from 'store';
import { Router } from 'views/components';
import { useGlobalStyles } from 'styles';

export const App = (): ReactElement => {
	const { layout } = useGlobalStyles();

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Layout className={layout}>
					<Router />
				</Layout>
			</PersistGate>
		</Provider>
	);
};
