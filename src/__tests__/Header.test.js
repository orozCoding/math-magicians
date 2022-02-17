import React from 'react';
import '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('Renders Header', () => {
  it('renders', () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
