import React from 'react';
import { render } from 'react-dom';
import AlertGroup from './AlertGroup';
import './style/index.js';

const alertGroup = AlertGroup.newInstance({});

function addAlert() {
    alertGroup.alert({});
}

render(
    <div>
        <button onClick={addAlert}>simple show</button>
    </div>,
    document.getElementById('content')
);