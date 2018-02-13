import React from 'react';
import ReactDOM from 'react-dom';
import ShowAvatar from '../components/SelectAvatar';

describe('ShowAvatar', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ShowAvatar/>, div);
    });
});