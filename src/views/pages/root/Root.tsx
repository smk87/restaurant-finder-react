// Library imports
import React, { ReactElement } from 'react';
import { Col, Row } from 'antd';

// File imports
import { Button, Input } from 'atoms';
import { useStyles } from './Root.styles';
import { useGlobalStyles } from 'styles';
import { combineClasses } from 'utils';
// import { placesApi } from 'apis/places';

export const Root = (): ReactElement => {
	const { root, searchFieldWrapper, buttonWrapper, button } = useStyles();
	const { textCenter, fullWidth } = useGlobalStyles();

	// const handleAutoFind = async () => {
	// 	try {
	// 		const response = await placesApi.autoFind({
	// 			params: {
	// 				ll: '23.8103,90.4125',
	// 				radius: 3000,
	// 				categories: 13065,
	// 			},
	// 		});
	// 	} catch (error) {
	// 		//
	// 	}
	// };

	return (
		<div className={root}>
			<Row className={fullWidth}>
				<Col flex={24}>
					s<h1 className={textCenter}>Find a near restaurant</h1>
				</Col>
			</Row>

			<Row
				className={combineClasses(fullWidth, searchFieldWrapper)}
				justify='center'
				gutter={[{ xs: 0 }, { xs: 16, sm: 16 }]}
			>
				<Col xs={24} md={10} lg={8}>
					<Input placeHolder='Enter a restaurant name' />
				</Col>

				<Col xs={24} md={4} className={buttonWrapper}>
					<div className={button}>
						<Button>Search</Button>
					</div>

					<div className={button}>
						<Button
						// onClick={handleAutoFind}
						>
							Auto Find
						</Button>
					</div>
				</Col>
			</Row>
		</div>
	);
};
