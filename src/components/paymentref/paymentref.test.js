import React from 'react';
import { render } from '@testing-library/react';
import Paymentref from './paymentref.js';

describe('paymentref', () => {
    it('renders correctly', () => {
        const { container } = render(<Paymentref />)
        expect(container).toMatchSnapshot()
    });
});