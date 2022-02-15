import React from 'react';
import '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('Renders Header', () => {
  it('renders', () => {
    const tree = renderer
      .create(
        <Header />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
