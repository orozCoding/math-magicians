import React from 'react';
import '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Renders Navbar', () => {
  it('renders', () => {
    const tree = renderer
      .create(
        <Router>
          <Navbar />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
