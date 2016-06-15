import React from 'react';

export default class Alert extends React.Component {
    static defaultProps = {
        prefixCls: 'ah-alert',
        duration: 3000,
        closable: false
    };

    static propTypes = {
        prefixCls: React.PropTypes.string,
        closeText: React.PropTypes.string,
        message: React.PropTypes.string,
        duration: React.PropTypes.number
    };

    constructor(props) {
        super(props);
        this.state = {closed: false};
        this.props.duration ? setTimeout(() => {
            if( !this.state.closed) this.handleClose();
        }, this.props.duration) : null;
    }

    handleClose = (e) => {
        this.setState({closed: true});
        this.props.onClose ? this.props.onClose.call(this, e) : null;
    };

    render() {
        let { prefixCls, closeText, message, closable } = this.props;

        return this.state.closed ? null : (
            <div className={`${prefixCls}`}>
                <span className={`${prefixCls}-message`}>{message}</span>
                { closable ?
                    <a onClick={this.handleClose} className={`${prefixCls}-close-icon`}>
                        {closeText || <i className={`${prefixCls}-default-icon`}>X</i>}
                    </a> : null
                }
            </div>
        );
    }
}