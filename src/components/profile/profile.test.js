import React from 'react';
import { render } from '@testing-library/react';
import Profile from './profile.js';

describe('proofile', () => {
    it('renders correctly', () => {
        const { container } = render(<Profile />)
        expect(container).toMatchSnapshot()
    });
});