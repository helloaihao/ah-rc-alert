import React from 'react';

export default class Alert extends React.Component {
    static defaultProps = {
        prefixCls: 'ah-alert',
        type: 'info',
        closeText: 'X'
    };

    constructor(props) {
        super(props);
        this.state = {closed: false};
    }

    handleClose(e) {
        this.setState({closed: true});
    }

    render() {
        let { prefixCls, type, closeText, message } = this.props;

        return this.state.closed ? null : (
            <div className={`${prefixCls}`}>
                <span className={`${prefixCls}-message`}>{message}</span>
                <a onClick={this.handleClose} className={`${prefixCls}-close-icon`}>
                    {closeText}
                </a>
            </div>
        );
    }
}