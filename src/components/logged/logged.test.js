import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Logged from './logged.js';

describe('Logged', () => {
    it('renders correctly', () => {
        const { container } = render(<Logged initialPage='toMap'/>)
        expect(container).toMatchSnapshot()
    });
    describe('when clicked on profile button', () => {
        it('switches to profile page', () => {
            const { getByText, getByTestId } = render(<Logged />)
            const profileButton = getByText('Профиль');
            fireEvent.click(profileButton)
            expect(getByTestId('profTest')).toBeInTheDocument()
        })
    })
});