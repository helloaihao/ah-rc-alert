import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './Alert';


export default class AlertGroup extends React.Component {
    static defaultProps = {
        prefixCls: 'ah-alert-group'
    };

    constructor(props) {
        super(props);
        this.state = {
            alerts: []
        };
    }

    add = (alertProps) => {
        let tmpAlert = alertProps;
        tmpAlert.key = Date.now();
        this.setState({alerts: this.state.alerts.concat(tmpAlert)});
    };

    render() {
        let { prefixCls } = this.props;

        let AlertNodes = this.state.alerts.map((alert) => {
            return <Alert {...alert} />;
        });

        return (
            <div className={`${prefixCls}`}>
                {AlertNodes}
            </div>
        );
    }
}

AlertGroup.newInstance = function newAlertGroupInstance(props) {
    props = props || {};
    const div = document.createElement('div');
    document.body.appendChild(div);
    const alertGroup = ReactDOM.render(<AlertGroup />, div);

    return {
        alert(alertProps) {
            alertGroup.add(alertProps);
        },
        component: alertGroup,
        destroy() {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        }
    };
};