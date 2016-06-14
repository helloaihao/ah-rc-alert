import React from 'react';

export default class Alert extends React.Component {
    static defaultProps = {
        prefixCls: 'ah-alert'
    };

    static propTypes = {
        prefixCls: React.PropTypes.string,
        closeText: React.PropTypes.string,
        message: React.PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {closed: false};
    }

    handleClose = (e) => {
        this.setState({closed: true});
        this.props.onClose ? this.props.onClose.call(this, e) : null;
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