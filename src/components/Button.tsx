/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Button as AntdButton } from 'antd';

export const buttonStyles = {
  background: '#00c5ff',
  borderRadius: 25,
  border: 0,
  fontSize: 17,
  height: 'auto',
  padding: '10px 0',
  width: '100%',
};

const Button = (props: any) => <AntdButton style={buttonStyles} {...props} />;

export default Button;
