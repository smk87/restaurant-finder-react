// Library imports
import React, { ReactElement } from 'react';
import { Button as ButtonComponent } from 'antd';

// File imports
import { ButtonProps } from './Button.types';

export const Button = ({
	onClick,
	type = 'primary',
	shape,
	className,
	style,
	children,
	disabled,
}: ButtonProps): ReactElement => {
	return (
		<ButtonComponent
			className={className}
			style={style}
			onClick={onClick}
			type={type}
			shape={shape}
			disabled={disabled}
		>
			{children}
		</ButtonComponent>
	);
};
