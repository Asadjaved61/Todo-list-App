import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';


describe('Todo Container', () => {
  afterEach(cleanup);

  it('it should match snapshot', () => {
    const { asFragment } = render(<App/>);

    expect(asFragment()).toMatchSnapshot();
  })
})