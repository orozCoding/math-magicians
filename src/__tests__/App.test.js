import React from 'react';
import '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App', () => {
  it('renders', () => {
    const tree = renderer
      .create(
        <App />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});