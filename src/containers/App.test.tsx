/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const renderResult: RenderResult = render(<App />);
  expect(renderResult).not.toBe(undefined);
});
