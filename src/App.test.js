import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ReactDOM from "react-dom";
import NewAppMy from "./App";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders NewApp', () => {
  const div = document.createElement('div');
  ReactDOM.render() (<NewAppMy/>,div) ;
  ReactDOM.unmountComponentAtNode(div)
});