import React from 'react';
import { render } from '@testing-library/react';
import Map from './map.js';

describe('Map', () => {
    it('renders correctly', () => {
        const { container } = render(<Map />)
        expect(container).toMatchSnapshot()
    });
});