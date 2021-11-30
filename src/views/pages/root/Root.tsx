// Library imports
import React, { ReactElement } from 'react';
import { Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

// File imports
import { Button, Input } from 'atoms';
import { useStyles } from './Root.styles';
import { useGlobalStyles } from 'styles';
import { combineClasses } from 'utils';
import { Map } from 'views/components';
import { map } from 'configs';
import { dispatchers } from 'store/restaurant';
import { RootState } from 'store/store.types';

const { YOUR_LOCATION } = map;

export const Root = (): ReactElement => {
	const searchedRestaurant = useSelector((state: RootState) => state.restaurant.searchResult);
	const dispatch = useDispatch();

	const { root, searchFieldWrapper, buttonWrapper, button, mapWrapper } = useStyles();
	const { textCenter, fullWidth } = useGlobalStyles();

	const handleAutoSearch = () => {
		dispatch(dispatchers.autoSearch());
	};

	const mapProps = searchedRestaurant
		? {
				center: {
					lat: searchedRestaurant.latitude,
					lng: searchedRestaurant.longitude,
				},
				markers: [
					{
						lat: searchedRestaurant.latitude,
						lng: searchedRestaurant.longitude,
					},
				],
		  }
		: {
				center: {
					lat: YOUR_LOCATION.LATITUDE,
					lng: YOUR_LOCATION.LONGITUDE,
				},
		  };

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
						<Button onClick={handleAutoSearch}>Auto Find</Button>
					</div>
				</Col>
			</Row>

			<Row justify='center'>
				<Col className={mapWrapper} xs={24} md={20}>
					<Map {...mapProps} />
				</Col>
			</Row>
		</div>
	);
};
