// Library imports
import React, { ReactElement } from 'react';
import { Col, Row } from 'antd';

// File imports
import { Button, Input } from 'atoms';
import { useStyles } from './Root.styles';
import { useGlobalStyles } from 'styles';
import { combineClasses } from 'utils';

export const Root = (): ReactElement => {
	const { root, searchFieldWrapper, buttonWrapper, button } = useStyles();
	const { textCenter, fullWidth } = useGlobalStyles();

	return (
		<div className={root}>
			<Row className={fullWidth}>
				<Col flex={24}>
					<h1 className={textCenter}>Find a near restaurant</h1>
				</Col>
			</Row>

			<Row className={combineClasses(fullWidth, searchFieldWrapper)} justify='center'>
				<Col span={5}>
					<Input placeHolder='Enter a restaurant name' />
				</Col>

				<Col span={4} className={buttonWrapper}>
					<div className={button}>
						<Button>Search</Button>
					</div>

					<div className={button}>
						<Button>Auto Find</Button>
					</div>
				</Col>
			</Row>
		</div>
	);
};
