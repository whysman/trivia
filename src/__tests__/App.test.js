import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';


jest.mock('keycloak-js');


describe('User Info', () => {

    // This order is really important b/c Keycloak exports a function that returns 
    // the instance making it really hard to mock, don't do this normally.
    const Keycloak = require('keycloak-js');
    
    const mockUser = {
        given_name: 'James Holzhauer',
        email: 'Jeopardy!James@Jeopardy!.com',
        sub: 'TheId'
    };
    
    const mockKeycloak = {
        init: jest.fn(() => Promise.resolve(true)),
        loadUserInfo: jest.fn(() => Promise.resolve(mockUser)),
        logout: jest.fn()
    };

    Keycloak.mockImplementation(() => mockKeycloak);

    const App = require('../App').default;

    it('renders the user view with the user name', async () => {

        const { getByText } = render(<App />);

        const user = await waitForElement(() => getByText(/James Holzhauer/i));

        expect(user).toBeInTheDocument();

    });

    it('renders the user view with the user email', async () => {

        const { getByText } = render(<App />);

        const email = await waitForElement(() => getByText(/Jeopardy!James@Jeopardy!.com/i));

        expect(email).toBeInTheDocument();

    });

    it('renders the user view with the user id', async () => {

        const { getByText } = render(<App />);

        const id = await waitForElement(() => getByText(/TheId/i));

        expect(id).toBeInTheDocument();

    });


    it('logs out the user when logout clicked', async () => {
        const { getByText } = render(<App />);

        const logout = await waitForElement(() => getByText(/logout/i));

        fireEvent.click(logout);

        expect(mockKeycloak.logout).toHaveBeenCalled();

    });
})
