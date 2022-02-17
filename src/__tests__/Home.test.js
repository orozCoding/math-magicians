import React from 'react';
import '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../pages/Home';

describe('Renders Home', () => {
  it('renders', () => {
    const tree = renderer
      .create(
        <Home />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
