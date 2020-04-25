import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LogScreen from './logscreen.js';

describe('LogScreen', () => {
    it('renders correctly', () => {
        const { container } = render(<LogScreen initialPage='toAuthorization'/>)
        expect(container).toMatchSnapshot()
    });
    describe('when clicked on registration link', () => {
        it('switches to registration page', () => {
            const { getByText, getByTestId } = render(<LogScreen />)
            const regLink = getByText('Зарегистрируйтесь');
            fireEvent.click(regLink)
            expect(getByTestId('regTest')).toBeInTheDocument()
        })
    })
});