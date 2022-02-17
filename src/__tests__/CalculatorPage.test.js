import React from 'react';
import '@testing-library/react';
import renderer from 'react-test-renderer';
import CalculatorPage from '../pages/CalculatorPage';

describe('Renders CalculatorPage', () => {
  it('renders', () => {
    const tree = renderer
      .create(
        <CalculatorPage />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
