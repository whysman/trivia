import React from 'react';
import { render } from '@testing-library/react';
import MainView from '../MainView';


describe('MainView', () => {

  it('renders the user view', async () => {

    const { getByText } = render(<MainView userInfo={{ roles: [] }} />);

    const header = getByText(/This is the user page/i);

    expect(header).toBeInTheDocument()
  });

  it('renders the admin view', async () => {

    const { getByText } = render(<MainView userInfo={{ roles: ["trivia-admin"] }} />);

    const header = getByText(/This is the admin page/i);

    expect(header).toBeInTheDocument()
  });
})


