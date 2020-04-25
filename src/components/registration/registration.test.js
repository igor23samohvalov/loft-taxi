import React from 'react';
import { render } from '@testing-library/react';
import Registration from './registration.js';

describe('registration', () => {
    it('renders correctly', () => {
        const { container } = render(<Registration />)
        expect(container).toMatchSnapshot()
    });
});