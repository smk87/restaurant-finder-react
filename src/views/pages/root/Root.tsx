// Library imports
import React, { ReactElement, useEffect } from 'react';
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
import { useFormFields } from 'hooks/accessories';

const { YOUR_LOCATION } = map;

export const Root = (): ReactElement => {
	const searchedRestaurants = useSelector((state: RootState) => state.restaurant.searchResult);
	const searchedText = useSelector((state: RootState) => state.restaurant.searchText);

	const dispatch = useDispatch();

	const [fields, handleFieldChange, setFields] = useFormFields({ searchText: searchedText });
	const { root, searchFieldWrapper, buttonWrapper, button, mapWrapper, pageHeadingWrapper } = useStyles();
	const { textCenter, fullWidth } = useGlobalStyles();

	useEffect(() => {
		setFields({ ...fields, searchText: searchedText });
	}, [searchedText]);

	const handleAutoSearch = () => {
		dispatch(dispatchers.autoSearch());
	};

	const handleSearch = () => {
		dispatch(dispatchers.search({ searchText: fields.searchText }));
	};

	const handleClearSearch = () => {
		dispatch(dispatchers.clearSearch());
	};

	const mapProps = searchedRestaurants
		? {
				center: {
					lat: searchedRestaurants.length === 1 ? searchedRestaurants[0].latitude : YOUR_LOCATION.LATITUDE,
					lng: searchedRestaurants.length === 1 ? searchedRestaurants[0].longitude : YOUR_LOCATION.LONGITUDE,
				},
				markers: searchedRestaurants.map((restaurant) => {
					return {
						lat: restaurant.latitude,
						lng: restaurant.longitude,
					};
				}),
		  }
		: {
				center: {
					lat: YOUR_LOCATION.LATITUDE,
					lng: YOUR_LOCATION.LONGITUDE,
				},
		  };

	return (
		<div className={root}>
			<Row className={combineClasses(fullWidth, pageHeadingWrapper)}>
				<Col flex={24}>
					<h1 className={textCenter}>Find nearby restaurants</h1>
				</Col>
			</Row>

			<Row
				className={combineClasses(fullWidth, searchFieldWrapper)}
				justify='center'
				gutter={[{ xs: 0 }, { xs: 16, sm: 16 }]}
			>
				<Col xs={24} md={10} lg={8}>
					<Input
						placeHolder='Enter a restaurant name'
						name='searchText'
						value={fields.searchText}
						onChange={handleFieldChange}
					/>
				</Col>

				<Col xs={24} md={4} className={buttonWrapper}>
					<div className={button}>
						<Button disabled={fields.searchText ? false : true} onClick={handleSearch}>
							Search
						</Button>
					</div>

					<div className={button}>
						<Button type='default' onClick={handleAutoSearch}>
							Auto Search
						</Button>
					</div>
				</Col>

				{(searchedText || searchedRestaurants) && (
					<Col xs={24} md={20}>
						<h3 className={textCenter}>
							Search Result:{' '}
							{searchedRestaurants && searchedRestaurants?.length > 0
								? searchedRestaurants?.length
								: 'No'}{' '}
							restaurant(s) found
						</h3>

						<div>
							<Button onClick={handleClearSearch}>Clear Search</Button>
						</div>
					</Col>
				)}
			</Row>

			<Row justify='center'>
				<Col className={mapWrapper} xs={24} md={20}>
					<Map {...mapProps} />
				</Col>
			</Row>
		</div>
	);
};
