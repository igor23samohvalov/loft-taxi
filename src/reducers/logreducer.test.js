import React from 'react';
import logReducer, {initialState} from './logReducer.js';

describe('logReducer', () => {
    it('LOG_IN', () => {
        const action = {
            type: 'LOG_IN'
        }

        expect(logReducer(initialState, action)).toEqual({
            isLoggedIn: true
        })
    });
});