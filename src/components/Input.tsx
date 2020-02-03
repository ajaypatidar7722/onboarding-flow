/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Input as AntdInput } from 'antd';

export const inputStyles = {
  background: '#e3f6f9',
  border: 0,
  height: 50,
};

const Input = (props: any) => <AntdInput style={inputStyles} {...props} />;

export default Input;
