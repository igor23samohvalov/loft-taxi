import React from 'react';
import { render } from '@testing-library/react';
import Authorization from './authorization.js';

describe('authorization', () => {
    it('renders correctly', () => {
        const { container } = render(<Authorization />)
        expect(container).toMatchSnapshot()
    });
});