import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Header from './header.js';


describe('Header', () => {
    it('renders correctly', () => {
        const { container } = render(<Header />)
        expect(container).toMatchSnapshot()
    });
    describe('when clicked on exit button', () => {
        it('switches to authorization page', () => {
            const { getByText, getByTestId, debug } = render(<Header />)
            const exitButton = getByText('Выйти');
            fireEvent.click(exitButton)
            expect(getByTestId('authTest')).toBeInTheDocument()
        })
    })
});