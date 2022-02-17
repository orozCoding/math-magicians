import React from 'react';
import '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Renders calculator', () => {
  it('renders', () => {
    const tree = renderer
      .create(
        <Calculator />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});