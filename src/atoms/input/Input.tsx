// Library imports
import React, { ReactElement } from 'react';
import { Input as InputComponent } from 'antd';

// File imports
import { InputProps } from './Input.types';

export const Input = ({ id, onChange, type, value, name, className }: InputProps): ReactElement => {
	return <InputComponent className={className} id={id} name={name} type={type} value={value} onChange={onChange} />;
};
