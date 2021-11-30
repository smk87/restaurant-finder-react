// Library imports
import React, { ReactElement } from 'react';
import { Col, Row } from 'antd';

// File imports
import { Button, Input } from 'atoms';
import { useStyles } from './Root.styles';
import { useGlobalStyles } from 'styles';
import { combineClasses } from 'utils';
import { Map } from 'views/components';
import { map } from 'configs';

const { YOUR_LOCATION } = map;

export const Root = (): ReactElement => {
	const { root, searchFieldWrapper, buttonWrapper, button, mapWrapper } = useStyles();
	const { textCenter, fullWidth } = useGlobalStyles();

	return (
		<div className={root}>
			<Row className={fullWidth}>
				<Col flex={24}>
					<h1 className={textCenter}>Find a near restaurant</h1>
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
						<Button>Auto Find</Button>
					</div>
				</Col>
			</Row>

			<Row justify='center'>
				<Col className={mapWrapper} xs={24} md={20}>
					<Map
						center={{
							lat: YOUR_LOCATION.LATITUDE,
							lng: YOUR_LOCATION.LONGITUDE,
						}}
					/>
				</Col>
			</Row>
		</div>
	);
};
