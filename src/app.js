import React from 'react';
import Alert from './alert';

export class App extends React.Component {

    onClose(e) {
        console.log(e,'关闭通知');
    }

    render() {
        return (
                <Alert message="你有一条新通知！" closeText="不在提醒" onClose={this.onClose}/>
        );
    }
}