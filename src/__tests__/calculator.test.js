import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

  it('should return the sum of two number form UI', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('='));
    const result = screen.getByText('21');
    expect(result.innerHTML).toBe('21');
  });
});
