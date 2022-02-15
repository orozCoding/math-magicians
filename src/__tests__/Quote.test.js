import React from 'react';
import '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from '../pages/Quote';

describe('Renders Quote', () => {
  it('renders', () => {
    const tree = renderer
      .create(
        <Quote />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
