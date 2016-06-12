import React from 'react';

export default class Alert extends React.Component {
    static defaultProps = {
        prefixCls: 'ah-alert',
        type: 'info'
    };

    constructor(props) {
        super(props);
        this.state = {closed: false};
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(e) {
        this.setState({closed: true});
        this.props.onClose.call(this, e);
    }

    render() {
        let { prefixCls, closeText, message } = this.props;

        return this.state.closed ? null : (
            <div className={`${prefixCls}`}>
                <span className={`${prefixCls}-message`}>{message}</span>
                <a onClick={this.handleClose} className={`${prefixCls}-close-icon`}>
                    {closeText || <i className={`${prefixCls}-default-icon`}>X</i>}
                </a>
            </div>
        );
    }
}