import React from 'react';
import { render } from 'react-dom';
import AlertGroup from './AlertGroup';
import './style/index.js';

const alertGroup = AlertGroup.newInstance({});
let count = 1;

function addAlert() {
    alertGroup.alert({
        message: `第${count++}条通知！`,
        onClose: function(e){
            console.log(e, '关闭通知');
        },
        duration: null,
        closable: true
    });
}

function addDurationAlert() {
    alertGroup.alert({
        message: `第${count++}条通知！(自动关闭)`,
        onClose: function(e){
            console.log(e, '关闭通知');
        }
    });
}

render(
    <div>
        <button onClick={addAlert}>not automatically closed</button>
        <button onClick={addDurationAlert}>duration 3000 close</button>
    </div>,
    document.getElementById('content')
);