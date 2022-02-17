import React from 'react';
import { render, screen, fireEvent, queryByAttribute } from '@testing-library/react';
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

  it('User should be able to go to Calculator page', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Calculator'));
    const result = screen.getByText('Let\'s do some math!');
    expect(result.innerHTML).toBe('Let\'s do some math!');
  });

  it('User should be able to go to Calculator page and use calculator', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Calculator'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    const result = screen.getByText('10');
    expect(result).toBeDefined();
  });
});
